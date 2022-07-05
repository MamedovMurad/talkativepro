import React from "react";
import ButtonUI from "../../components/UI/Button";
import styles from './index.module.css'
interface IformDash{
    CB:any;
    children:any
    file?:string|null|any
}
const FormDash = ({CB,children, file}:IformDash) => {
  return <div className={styles.formdash}>
<form action="" onSubmit={(CB)}>
{
    children
}
{file}
<div className={styles.buttonarea}><ButtonUI text="Əlavə et" onclick={()=>file('fsdfdkkk')}/></div>
</form>
  </div>;
};

export default FormDash;
