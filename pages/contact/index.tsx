import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast'
import agent from '../../Api/agent';
import ButtonUI from '../../components/UI/Button';
import InputUI from '../../components/UI/Input';
import Links from '../../components/UI/links';
import { IContact } from '../../Model/DTO';
import { MailSvg } from '../../svg/mail';
import { TelSvg } from '../../svg/tel';
import styles from './index.module.css'
type ContactProps = {
    data:IContact
}


const Contact:React.FC<ContactProps> = ({data}) => {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();


      async function handleSubmitForm(params:any) {

    const res = await agent.contact.post(params)

    console.log(res);
    reset()
    toast.success('İsmarıcınız qeydə alındı')
    }
    return (
        <div className={styles.contact}>
            <div className="wrapper">
            <h3>Bizimlə əlaqə</h3>
            <div className={styles.content}>
                <div className={styles.info}>
                   <div>
                   <h3>Sual və ya təkliflərinizibizə yaza bilərsiniz</h3>
                   <div className={styles.mail}>
                       <span><MailSvg/></span>
                       <span>{data?.email}</span>
                   </div>
                   <div className={styles.tel}>
                       <span><TelSvg/></span>
                       <span>{data?.phoneNumber}</span>
                   </div >
                    <div className={styles.linksarea}><Links fb={data.fbLink} insta={data.instagramLink} youtube={data.youtubeLink}/></div>
                   </div>
                </div>
                <div className={styles.form}>
                    <form action="" onSubmit={handleSubmit(handleSubmitForm)}>
                        <InputUI id={1875679098765432} label="Ad/ Soyad" name="fullName" register={register} required={true} errors={errors}/>
                        <InputUI id={298765435678} label="Email" name="email" type="email" register={register} errors={errors}/>
                        <InputUI id={399005533222} label="Mövzu" name="subject" register={register} errors={errors}/>
                        <InputUI id={553322221} label="Mesajınız" height="112px" name="body" type="textarea" register={register} errors={errors}/>
                        <div className={styles.buttonArea}><ButtonUI text="Göndər" height="44px"/></div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
}
 
export async function getServerSideProps(context:any){
    /* const data = await agent.contact.single(); https://api.talkative.az/api/v1/public/setting */
    const data = await (fetch('  http://194.147.58.56:8090/api/v1/public/setting')
    .then(response => response.json()))
    
  console.log(data,'data');
  
  
    return {
        props: {
            data:data.data
        },
    };
  
  }
 
export default Contact;