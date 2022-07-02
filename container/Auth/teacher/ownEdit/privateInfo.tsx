import  Router  from "next/router";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import toast from "react-hot-toast";
import Select from "react-select";
import agent, { baseImageUrl } from "../../../../Api/agent";
import ButtonUI from "../../../../components/UI/Button";
import InputUI from "../../../../components/UI/Input";
import { UserContext } from "../../../../pages/_app";
import styles from './index.module.css'
type PrivateInfoEditProps = {};

const customStyles = {
  menuList: (styles: any) => ({
    ...styles,
    background: "#fff",
  }),
  option: (styles: any, { isFocused, isSelected }: any): any => ({
    ...styles,
    background: isFocused ? "#E6F9FC" : isSelected ? "#00C1DD" : undefined,
    zIndex: 1,
  }),
  multiValueLabel: (styles: any, { data }: any) => ({
    ...styles,
    background: '#E6F9FC',
    color: '#00C1DD'
  }),
  multiValueRemove: (styles: any, { data }: any) => ({
    ...styles,
    background: '#E6F9FC',
    color: '#00C1DD'
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    borderRadius: '4px',
    display: "flex",
    width: 355,
    border: '1px solid #f6f6f6',
    height: '56px',
    aliginItems: 'center'
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

const PrivateInfoEdit: React.FC<PrivateInfoEditProps> = () => {
  const [imgageUrl, setimgageUrl] = useState<string | null>(null)
  const [otherPai, setotherPai] = useState<any>(null)
  const [user, dispatch] = useContext(UserContext);
  const [blocksetvalue, setblocksetvalue] = useState(false)
  const [natioans, setnatioans] = useState<any>(null);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    setValue,
    reset,
  } = useForm();
  const desc = useWatch({
    control,
    name: "lang",
  });
  console.log(desc,'desc');
  
  async function fetchLangapi() {
    const res = await agent.Common.langList()
    res && setotherPai(res.data)
    const nation = await agent.Common.notianal()
    nation&& setnatioans(nation?.data)

    console.log(nation,'lll');
    
  }

  const fileUpadfunction = async (data: any) => {
    var formData = new FormData();
    formData.append("file", data.files[0]);
    const item = await agent.fileUpload_v(formData)
    item && setimgageUrl(item.data)
  }

  async function handleSubmitData(data: any) {
    console.log(data,'dd');
    
    console.log(data,'daat');
    setblocksetvalue(true)
    if (data.fullName?.split(' ').length<=1) {
      return toast.error('Soyad əlavə edilməyib')
  
    }
    else if(imgageUrl==null){
      return toast.error('Avatar yükləyin')
    }
    else if(!data.lang|| data.lang?.length<1){
      return toast.error('Dil əlavə edin')
    }
    else if(!data.nationality){
      return toast.error('Milliyət əlavə edin')
    }
    else{
      data.firstName= data.fullName.split(' ')[0]
      data.lastName= data.fullName.split(' ')[1]
    }
    data.teacherLanguages=   [...data.lang]?.map(item=>{
      const language = {id:item.value}
      return {language, introduction :data['desc'+item.value]}
    })||null

    const cleanData ={
      teacherLanguages:data.teacherLanguages,
      avatar:imgageUrl,
      firstName:data.fullName.split(' ')[0],
      lastName:data.fullName.split(' ')[1],
      address:data.address,
      nationalityId:data.nationality.value
    }
    
const res = await agent.teacher.postPrivateForm(cleanData)
res.data&& toast.success('Profiliniz yeniləndi')
  }
  useEffect(() => { fetchLangapi();
    setimgageUrl(user.users.user_info?.avatar)
    
     reset({fullName:user.users.user_info?.firstName+ ' '+user.users.user_info?.lastName,
      address:user.users.user_info?.address, 
      lang:user.users.user_info?.teacherLanguages?.map((item:any)=>{
        item.language.value=item?.language?.id
        item.language.label = item?.language?.name

        return item?.language
      }),
      nationality:{label:user.users.user_info?.nationality?.name, value:user.users.user_info?.nationality?.id}
    })
    

    }, [user])
 
    console.log(Object.values(errors).every((x:any)=>x==null||x==undefined||x==''),'erros');
    

desc&&!blocksetvalue&&   Object.values(errors).every((x:any)=>x==null||x==undefined||x=='') && desc?.map((item:any,index:number)=>{
  
  setValue('desc'+item.value, user.users.user_info?.teacherLanguages?.find((i:any,indexx:number)=>indexx==index)?.introduction)
})
  

  return (
    <div>
      <form action="" onSubmit={handleSubmit(handleSubmitData)} >
        <div>
          {
            imgageUrl ? <div onClick={() => setimgageUrl(null)} className={styles.imageUrl}><img src={baseImageUrl+imgageUrl} alt="" /> </div> : <label htmlFor="changableformimage">
              <div className={styles.photoedit}>
                <input onChange={(e) => fileUpadfunction(e.target)} type="file" style={{ display: 'none' }} name="" id="changableformimage" /></div>
            </label>
          }
        </div>
        <InputUI name="fullName" label={"Ad/ Soyad"} id={43234567} register={register} required={true}/>
        <InputUI name="address" label={"Məkan"} id={63234567} maxlength={310} register={register}  required={true} errors={errors}/>
        <div className={styles.react_select}>
{/* 
          <input type="text" {...register("lang")} /> */}
              <Controller
            control={control}
            name="nationality"
            render={({field: { onChange, value }}) => (
              <Select
             
                isMulti={false}
                id="8945-"
                value={value}
                options={natioans?.map((item: any) => ({
                  label: item.name,
                  value: item.id,
                  
                   }))}
                {...register("nationality")}
                styles={customStyles}
                placeholder="Milliyəti"
                onChange={(val: any) =>{
                  setValue('nationality', val); 
                  onChange(val)
                }
                 

                }
              />
            )}
          />
        </div>



        <div className={styles.react_select}>
          <Controller
            control={control}
            name="lang"
            render={({field: { onChange, value }}) => (
              <Select
             
                isMulti={true}
                id="34567890-"
                value={value}
                options={otherPai?.map((item: any) => ({
                  label: item.name,
                  value: item.id,
                  code:item?.code
                   }))}
                {...register("lang")}
                styles={customStyles}
                placeholder="Söhbət səviyyəsi"
                onChange={(val: any) =>{
                  setValue('lang', val); 
                  onChange(val)
                }
                 

                }
              />
            )}
          />
        </div>
              {
                desc?.map((item:any,index:number)=>(
                  <InputUI key={index} name={`desc${item.value}`} type={"textarea"} label={`Mesajınız(${item.code})`} id={40123+index} register={register} required={true} errors={errors}/>
                ))
              }
       

        <div style={{ marginTop: "15px" }}>
          <ButtonUI text="Yadda saxla" width="148px" height="44px" />
        </div>
      </form>
    </div>
  );
};

export default PrivateInfoEdit;
