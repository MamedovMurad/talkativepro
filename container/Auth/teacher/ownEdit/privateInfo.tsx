import { useEffect, useState } from "react";
import Select from "react-select";
import agent, { baseImageUrl } from "../../../../Api/agent";
import ButtonUI from "../../../../components/UI/Button";
import InputUI from "../../../../components/UI/Input";
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
   multiValueLabel: (styles:any, { data }:any) => ({
    ...styles,
    background: '#E6F9FC',
    color:'#00C1DD'
  }),
  multiValueRemove :(styles:any, { data }:any) => ({
    ...styles,
    background: '#E6F9FC',
    color:'#00C1DD'
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    borderRadius:'4px',
    display: "flex",
    width: 355,
    border:'1px solid #f6f6f6',
    height: '56px',
    aliginItems:'center'
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};
const PrivateInfoEdit: React.FC<PrivateInfoEditProps> = () => {
  const [imgageUrl, setimgageUrl] = useState<string|null>(null)
    const [otherPai, setotherPai] = useState<any>(null)
    async function fetchLangapi() {
        const res = await agent.Common.langList()
        res&& setotherPai(res.data)
    }

    const fileUpadfunction  = async(data:any)=>{
      var formData = new FormData();
      formData.append("file", data.files[0]);
      const item  = await agent.fileUpload_v(formData)
     item&& setimgageUrl(baseImageUrl+item.data)
    }

    
    useEffect(() => {fetchLangapi() }, [])
    


  return (
    <div>
      <form action="">
          <div>
            {
              imgageUrl? <div onClick={()=>setimgageUrl(null)} className={styles.imageUrl}><img src={imgageUrl} alt="" /> </div>: <label htmlFor="changableformimage">
              <div className={styles.photoedit}>
              <input onChange={(e)=>fileUpadfunction(e.target)} type="file" style={{display:'none'}}  name="" id="changableformimage" /></div>
              </label> 
            }
             </div>
        <InputUI name="test" label={"Ad/ Soyad"} id={43234567} />
        <InputUI name="test" label={"Məkan"} id={63234567} />
        <InputUI name="test" type={"textarea"} label={"Mesajınız"} id={40123} />
        <div className={styles.react_select}>
          <Select
          isMulti={true}
            id="34567890-"
            options={otherPai?.map((item: any) => ({
              label: item.name,
              value: item.id,
            }))}
            styles={customStyles}
            placeholder="Söhbət səviyyəsi"
            onChange={(val: any) =>
              console.log('')
              
            }
          />
        </div>
        <div style={{ marginTop: "15px" }}>
          <ButtonUI text="Yadda saxla" width="148px" height="44px" />
        </div>
      </form>
    </div>
  );
};

export default PrivateInfoEdit;
