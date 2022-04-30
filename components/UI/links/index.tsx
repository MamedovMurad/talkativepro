import Link from "next/link";
import { LogoFaceSvg } from "../../../svg/logoFace";
import { LogoInstaSvg } from "../../../svg/logoInsta";
import { LogoYoutubeSvg } from "../../../svg/logoYoutube";
import styles from "./index.module.css";
type LinksProps = {}
 
const Links:React.FC<LinksProps> = () => {
    return (
      
            <ul className={styles.links}>
              <li>
                <Link href="/">
                  <a>
                    <LogoInstaSvg />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <LogoFaceSvg />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <LogoYoutubeSvg />
                  </a>
                </Link>
              </li>
            </ul>
        
    );
}
 
 
export default Links;