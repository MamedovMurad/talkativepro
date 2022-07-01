import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import agent from "../../Api/agent";
import ButtonUI from "../UI/Button";
import FileUpload from "../UI/fileUpload";
import MultiSelect from "../UI/Select/multi_select";
import Router from 'next/router'
import toast from 'react-hot-toast'
import SweetAlertBody from '../UI/sweetAlert/body'
import { UserContext } from "../../pages/_app";
import Select from "react-select";
type TeacherSecondFormProps = {}

interface Imultioption {

  id: number, code: string, name: string

}


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
const TeacherSecondForm: React.FC<TeacherSecondFormProps> = () => {

  const [file, setfile] = useState<string | null>(null)
  const [options, setoptions] = useState <Imultioption[]> ([])
  const [nations, setnations] = useState<[]| {label:string, value:number}[]>([]);
  
  const [data, dispatch] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control
  } = useForm();

  const handleOnsubmit = async (data: any) => {
    console.log(data);
    
    if (!data||!file ||!data.checkbox) {
     return toast.error("Məlumatlar daxil edilməyib!");
    }
    const res = file&&data.checkbox&& await agent.Auth.registerTeacherTwo({languageIds:data.checkbox.map(Number), cvFile:file, nationalityId:data.nationalityId})
    if (res) {
     await Router.push('/login')
    return  dispatch({type:'setModalActive', payload:<SweetAlertBody/>})
    }
  }

  async function fetchOption() {
    const { data } = await agent.Common.langList()
    data&& setoptions(data)
const nation = await agent.Common.notianal()
nation.data&& setnations(nation?.data?.map(item=>({label:item.name, value:item.id})))
  }

  useEffect(() => {
    fetchOption()
  }, [])
  return (
    <form action="" onSubmit={handleSubmit(handleOnsubmit)}>
      <MultiSelect
        register={register}
        list={options.map(item=>{
          return {text:item.name, id:item.id}
        })}
      />
       <div style={{marginBottom:'25px'}}>
{/* 
          <input type="text" {...register("lang")} /> */}
              <Controller
            control={control}
            name="nationalityId"
            render={({field: { onChange }}) => (
              <Select
             
                isMulti={false}
                id="89454-"
            
                options={nations}
                {...register("nationalityId")}
                styles={customStyles}
                placeholder="Milliyəti"
                onChange={(val: any) =>{
               
                  onChange(val.value)
                }
                 

                }
              />
            )}
          />
        </div>


      <FileUpload file={setfile}/>
      <ButtonUI
        text={"Qeydiyyatı tamamla"}
        width="360px"
        height="56px"
      />
    </form>
  );
}


export default TeacherSecondForm;