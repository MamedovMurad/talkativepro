import Link from "next/link";
import { useRouter } from "next/router";
import ButtonUI from "../../components/UI/Button";
import Links from "../../components/UI/links";
import { nav } from "../../Model/utils/nav";
import { LogoSvg } from "../../svg/Logo";

import styles from "./index.module.css";
type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const route = useRouter();
  function CanditionHeader() {if (route.pathname.search("dashboard") !== -1) { return'warpperAUth'} else {return  'wrapper' }}
  return (
    <div className={styles.footer}>
      <div className={CanditionHeader()}>
        <ul>
          <li className={styles.firstLI}>
            <LogoSvg />
            <div className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecgra
              metus diam
            </div>
            <Links/>
          </li>
          <li className={styles.info}>
          <h4>Məlumat</h4>
              <ul>
                {
                  nav.map(item=>(
                <li key={item.id}><Link href="/"><a >{item['title_AZ']}</a></Link></li>
                  ))
                }
               
                
             
              </ul>
          </li>
          <li className={styles.info}>
          <h4>Dəstək</h4>
              <ul>
               
                <li>Yardım mərkəzi</li>
                <li>Bizimlə əlaqə</li>
                <li>İstifadə qaydaları</li>
                <li>məxfilik razılaşması</li>
              </ul>
          </li>
          <li className={styles.footer_content}><h4>Yenilik və kampaniyalardan xəbərdar olmaq istəyirsiniz?</h4>
          <div className={styles.subscripe}><input type="text" placeholder="Emailinizi daxil edin"/> <div><ButtonUI text="Abunə ol" height="44px"/></div></div></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
