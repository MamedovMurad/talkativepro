import Link from 'next/link';
import { useEffect, useState } from 'react';
import useResponsivenenessAdjuster from '../../hooks/useResponsivenenessAdjuster';
import { LogoSvg } from '../../svg/Logo';
import Nav from '../nav';
import styles from './index.module.css'
import { nav } from "../../Model/utils/nav";
import ReactSelect from '../../components/UI/Select/react-select';
import agent from '../../Api/agent';
import ButtonUI from '../../components/UI/Button';
import { ImeModel, ITeacher } from '../../Model/DTO';
type HeaderProps = {
  user:ImeModel|ITeacher|null
}
type forsate = {
    id?: number;
    value?: string | number;
    name?: string;
    label?: string;
    code: string;
  };
const Header:React.FC<HeaderProps> = ({user}) => {
    const [toggle, settoggle] = useState(false)
    const [color, setcolor] = useState('');
    const [language, setlanguage] = useState<forsate[]| null>(null);
    const [activeLang, setactiveLang] = useState({label:'AZ', value:'az'})
    const responsive =  useResponsivenenessAdjuster(920)
    console.log(color,'ttttt');
    
    const changeBackground = () => {
        if (window.scrollY >= 26) {
            setcolor('active')
        } else {
            setcolor('')
        }
      }

      const fetchApiLang = async () => {
        const res = await agent.Common.langList();
        res && setlanguage(res.data);
      };
    
      function setActiveLangf(val:{label:string, value:string}){
        console.log(val,'vall');
        
        localStorage.setItem('lang',val.value)
        setactiveLang(val)
      }
      useEffect(() => {
        setactiveLang(localStorage?.getItem('lang')=='en'? {label:'EN', value:'en'}  :{label:'AZ', value:'az'})
        responsive&&fetchApiLang();
      }, [responsive]);



      useEffect(() => {
        window.addEventListener("scroll", changeBackground)
      })
    return (
        <div className={`${styles.header} ${styles['header'+color]}`}>
            <div className={`wrapper ${styles.wrapper}`}>
               <Link href="/">
                   <a ><LogoSvg/></a>
               </Link>
              <Nav settoggle={settoggle}/>
               {
                     useResponsivenenessAdjuster(920)&& <div className={styles.BGSearch}>
                        <ReactSelect activeEl={activeLang} setactiveEl={setActiveLangf}  options={
                            language?.map((item: any) => ({
                                label: item.code.toUpperCase(),
                                value: item.code,
                            
                              }))
                        }/>
                     </div>
               }
            </div>

            <div className={`${styles.responsiveMenu}  ${toggle?styles.responsiceActive: styles.responsiveDeActive}`}>
                <ul>
                    {
                        nav.map(item=>(
                            <li key={item.id}><Link href={item.path}>
                            <a> {item["title_AZ"]}</a>
                          </Link></li>
                        ))
                    }
                   
           
                </ul>
                <div className={styles.navAuth}>
                  <Link href={user?"/dashboard":"/login"}>
                  <a ><ButtonUI text={user? user.firstName+' '+user.lastName:"Giriş"} width="100%" height="35px"/></a>
                  </Link>
                </div>
            </div>
        </div>
    );
}
 
 
export default Header;