import ButtonUI from "../../../../components/UI/Button";
import InputUI from "../../../../components/UI/Input";

type PrivateInfoEditProps = {}
 
const PrivateInfoEdit:React.FC<PrivateInfoEditProps> = () => {
    return (
        <div>
            <form action="">
                <InputUI name="test" label={'Ad/ Soyad'} id={43234567}/>
                <InputUI name="test" label={'Məkan'} id={63234567}/>
                <InputUI name="test" type={'textarea'} label={'Mesajınız'} id={40123}/>
               <div style={{marginTop:'15px'}}>
               <ButtonUI text="Yadda saxla" width="148px" height="44px"/>
               </div>

            </form>
        </div>
    );
}
 
 
export default PrivateInfoEdit;