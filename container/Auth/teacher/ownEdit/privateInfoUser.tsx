import { useState } from 'react';
import { useForm } from 'react-hook-form';
import agent, { baseImageUrl } from '../../../../Api/agent';
import ButtonUI from '../../../../components/UI/Button';
import InputUI from '../../../../components/UI/Input';
import styles from './index.module.css'
type OwnEditTeacherProps = {}
const UserInfoEdit:React.FC<OwnEditTeacherProps> = () => {
    const [imgageUrl, setimgageUrl] = useState<string | null>(null)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        control,
        setValue,
        reset,
      } = useForm();


      const fileUpadfunction = async (data: any) => {
        var formData = new FormData();
        formData.append("file", data.files[0]);
        const item = await agent.fileUpload_v(formData)
        item && setimgageUrl(item.data)
      }

      async function handleSubmitData(params:any) {
        console.log(params);
        
      }


    return (
        <div >
  <form action="" onSubmit={handleSubmit(handleSubmitData)} className={styles.user_private_form}>
        <div>
          {
            imgageUrl ? <div onClick={() => setimgageUrl(null)} className={styles.imageUrl}><img src={baseImageUrl+imgageUrl} alt="" /> </div> : <label htmlFor="changableformimage">
              <div className={styles.photoedit}>
                <input onChange={(e) => fileUpadfunction(e.target)} type="file" style={{ display: 'none' }} name="" id="changableformimage" /></div>
            </label>
          }
        </div>
        <InputUI name="fullName" label={"Ad/ Soyad"} id={776655} register={register} required={true}/>
      
      
       

        <div style={{ marginTop: "15px" }}>
          <ButtonUI text="Yadda saxla" width="148px" height="44px" />
        </div>
      </form>
        </div>
    );
}
 
 
export default UserInfoEdit;