import  Router  from 'next/router'
import toast from 'react-hot-toast'
import agent, { baseImageUrl } from '../../Api/agent'
import { TrashSVG } from '../../svg/trashSVG'
import styles from './index.module.css'
interface certficate{
    edit?:boolean
    list?:any
    callback?:any
}
export function CerticateUi({edit=true,list=[{id:1,fileName:'lll'}],callback}:certficate){
    async function removeCertificate(id:number){
        const res = await agent.teacher.certificateRemove(id)
        res.data&& toast.success('Sertifikatınız silindi')
        callback()
      }

    return (
        <div className={styles.cetificatui}>
            <ul>
{
    list?.map((item:any,index:number)=>(
        <li key={item.id} >
            {
                edit&& <span onClick={()=>removeCertificate(item.id)}><TrashSVG/></span>
            }
            <img src={baseImageUrl+item.fileName} alt="" />
            </li>
    ))
}
               
            </ul>
        </div>
    )
}