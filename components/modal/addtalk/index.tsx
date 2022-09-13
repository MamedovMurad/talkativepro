import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast'
import agent from '../../../Api/agent';
import { CurrentDate } from '../../../hooks/twoWeek';
import { LevelLang } from '../../../Model/utils/levelLang';
import { UserContext } from '../../../pages/_app';
import { ArrowSvg } from '../../../svg/ArrowSVG';
import ButtonUI from '../../UI/Button';
import InputUI from '../../UI/Input';
import SelectUI from '../../UI/Select';
import SweetAlertBody from '../../UI/sweetAlert/body';
import styles from './index.module.css'
import Select from 'react-select'
import useResponsivenenessAdjuster from '../../../hooks/useResponsivenenessAdjuster';
type TalkAddModalProps = {
    max?:any
}
type forsate = {
    id?: number;
    value?:string|number,
    name?: string;
    label?:string
    code: string;
}


const customStyles = {
    menuList: (styles:any) => ({
      ...styles,
      background: '#fff'
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
      border: "none",
      display: "flex",
      width: 170,
     
    }),

    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

const TalkAddModal: React.FC<TalkAddModalProps> = ({max}) => {
    const [data, dispatch] = useContext(UserContext);
    const [language, setlanguage] = useState<forsate[] | null>(null)
    const [activeLang, setactiveLang] = useState<forsate | null>(null)

     const responsive =  useResponsivenenessAdjuster(900)
    const fetchApiLang = async () => {
        const res = await agent.Common.langList();
        res && setlanguage(res.data)
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        getValues
    } = useForm();

    const handleOnSubmit = async (data: any) => {

        if (!activeLang?.value||! activeLang) {
         
            
            return toast.error("Dil seçin!");
        }
        const date = new Date(data.startDate)
        var month = date.getUTCMonth() + 1; //months from 1-12
        var day = date.getUTCDate();
        var year = date.getUTCFullYear();

        data.startDate = (day < 10 ? '0' + day : day) + "-" + (month < 10 ? '0' + month : month) + "-" + year + ' ' + data.time + ":00";
        data.languageId = activeLang?.value
        console.log(data);
        const res = await agent.teacher.addConvation(data)
        res&&   dispatch({type:'setModalActive', payload:<SweetAlertBody title="Söhbətiniz yaradıldı" text="Dərsə zamanı şəxsi kabinetdən söhbəti başlada bilərsiniz"/>})


    }
    useEffect(() => { fetchApiLang() }, [])

    
    return (
        <section className={styles.modulebody}>
            <header>
                <div>
                    <h4>Yeni söhbətin yaradılması</h4>
                    <p >Məlumatları qeyd edərək söhbət yaradın</p>
                </div>

            <div style={{marginRight:'20px'}}>
            <Select
          options={data?.users.user_info?.teacherLanguages?.map((item:any)=>({label:item.language.name, value:item.language.id}))?.filter((item:any)=>item.isApproved!==null)}
          styles={customStyles}
          placeholder={<p className={styles.paragraph}>Dil seçimi </p>}
          onChange={(val:any)=>setactiveLang(val)}
        />
            </div>
            </header>
            <main>
                <form action="" onSubmit={handleSubmit(handleOnSubmit)}>
                    <div className={styles.historyform}>
                        <div>
                            <InputUI type={'date'} label="Tarix" id={32423432} name="startDate" width="236px" register={register} errors={errors}   min={CurrentDate(1)} max={CurrentDate(14 - Number(new Date().getDay()==0?7:new Date().getDay()))} />
                        </div>
                        <InputUI type='time' label='saat' id={43543} name="time" required step={3600} width="236px" register={register}/>
                    </div>
                    <div className={styles.lblstr}>   {
                        LevelLang.map((item, i) => (
                            <InputUI key={i} label={item} id={9955500 + i} name="levelStr" width="20px" height="20px" value={item} register={register}  type="radio" />
                        ))
                    }</div>


                    <InputUI label="Mövzu" id={76767574654} name="title" width="100%" register={register} errors={errors} maxlength={77} />
                    <InputUI label="Müzakirə üçün material (link)" id={764654} name="infoVideoLink" width="100%" register={register} errors={errors}  required={false}/>
                    <div className={styles.submitform}> <ButtonUI text="Təsdiqlə" width="100%" height="56px" /></div>
                </form>
            </main>
            <footer>

            </footer>
        </section>
    );
}


export default TalkAddModal;