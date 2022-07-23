import InputUI from '../../UI/Input';
import styles from './index.module.css'
import Select from 'react-select'
import { useContext, useState } from 'react';
import { EduTypeS } from '../../../Model/utils/aside';
import ButtonUI from '../../UI/Button';
import { useForm } from 'react-hook-form';
import agent from '../../../Api/agent';
import { UserContext } from '../../../pages/_app';
import toast from 'react-hot-toast';



const customStyles = {
    menuList: (styles:any) => ({
      ...styles,
      background: '#fff',

  }),
  option: (styles:any , {isFocused, isSelected}:any):any => ({
      ...styles,
      background: isFocused
          ? '#E6F9FC'
          : isSelected
              ? '#00C1DD'
              : undefined,
      zIndex: 1
  }),
 

    control: () => ({
      // none of react-select's styles are passed to <Control />
      border:'1px solid #ddd',
      display: "flex",
      width: '100%',
      borderRadius:'6px',
      height:'56px'
     
     
    }),

    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  


export const AddEduModal = ({callback}:any) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        getValues
    } = useForm();
    const [data, dispatch] = useContext(UserContext);
    const [edu, setEdu] = useState<{label:string, value:number}>( EduTypeS.map((item,index)=>({value:index, label:item}) )[0] );
    
    async function onSubmitHandle(data:any){
        const cleanBody:{university:string, speciality:string,educationLevel:number }={
            university:data.university,
            speciality:data.speciality,
            educationLevel:edu.value
        }
        const res = await agent.teacher.educationPost(cleanBody)
        if (res.data ) {
            
         toast.success('Əlavə edildi')
         callback()
         return  dispatch({type:'setModalpassive'})
        }
    }
   
  return (
    <section className={styles.addedu}>
                 <header>
                <div>
                    <h4>Təhsilini əlavə et</h4>
                     <Select
                     defaultValue={edu}
          options={EduTypeS.map((item,index)=>({value:index, label:item}))}
          styles={customStyles}
          onChange={(val:any)=>setEdu(val)}
        />
                </div>
            </header>
            <div>
                <form action="" onSubmit={handleSubmit(onSubmitHandle)}>
                    <InputUI name='university' id={903245} label={'Universitetin adı'} register={register} errors={errors} maxlength="150"/>
                    <InputUI name='speciality' id={900245} label={'İxtisas' } register={register} errors={errors} maxlength="200"/>

                    <div className={styles.submitform}> <ButtonUI text="Yadda saxla" width="100%" height="56px" /></div>
                </form>
            </div>
    </section>
  );
};











  


export const AddWorkModal = ({callback}:any) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        getValues
    } = useForm();
    const [data, dispatch] = useContext(UserContext);
    
    async function onSubmitHandle(data:any){
   
        const res = await agent.teacher.workPost(data)
        if (res.data ) {
            
         toast.success('Əlavə edildi')
         callback()
         return  dispatch({type:'setModalpassive'})
        }
    }
   
  return (
    <section className={styles.addedu}>
                 <header>
                <div>
                    <h4>İş yerini əlavə et</h4>
       
                </div>
            </header>
            <div>
                <form action="" onSubmit={handleSubmit(onSubmitHandle)}>
                    <InputUI name='workPlace' id={9093245} label={'Şirkətin adı'} register={register} errors={errors} maxlength="150"/>
                    <InputUI name='profession' id={9090245} label={'İxtisas' } register={register} errors={errors} maxlength="200"/>

                    <div className={styles.submitform}> <ButtonUI text="Yadda saxla" width="100%" height="56px" /></div>
                </form>
            </div>
    </section>
  );
};
