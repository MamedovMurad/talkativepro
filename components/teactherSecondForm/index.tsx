import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import agent from "../../Api/agent";
import ButtonUI from "../UI/Button";
import FileUpload from "../UI/fileUpload";
import MultiSelect from "../UI/Select/multi_select";
import Router from 'next/router'
import toast from 'react-hot-toast'
import SweetAlertBody from '../UI/sweetAlert/body'
import { UserContext } from "../../pages/_app";

type TeacherSecondFormProps = {}

interface Imultioption {

  id: number, code: string, name: string

}
const TeacherSecondForm: React.FC<TeacherSecondFormProps> = () => {

  const [file, setfile] = useState<string | null>(null)
  const [options, setoptions] = useState <Imultioption[]> ([])
  const [data, dispatch] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleOnsubmit = async (data: any) => {
    if (!data||!file) {
     return toast.error("Məlumatlar daxil edilməyib!");
    }
    const res = file&& await agent.Auth.registerTeacherTwo({languageIds:data.checkbox.map(Number), cvFile:file})
    if (res) {
      Router.push('/login')
    return  dispatch({type:'setModalActive', payload:<SweetAlertBody/>})
    }
  }

  async function fetchOption() {
    const { data } = await agent.Common.langList()
    data&& setoptions(data)
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