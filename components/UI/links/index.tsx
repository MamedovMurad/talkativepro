import Link from "next/link";
import { LogoFaceSvg } from "../../../svg/logoFace";
import { LogoInstaSvg } from "../../../svg/logoInsta";
import { LogoYoutubeSvg } from "../../../svg/logoYoutube";
import styles from "./index.module.css";
type LinksProps = {
  fb:string|null,
  youtube:string|null;
  insta:string|null
}
 
const Links:React.FC<LinksProps> = ({fb, insta, youtube}) => {
    return (
      
            <ul className={styles.links}>
              <li>
                <Link href={insta?insta:'#'}>
                  <a>
                    <LogoInstaSvg />
                  </a>
                </Link>
              </li>
              <li>
                <Link  href={fb?fb:'#'}>
                  <a>
                    <LogoFaceSvg />
                  </a>
                </Link>
              </li>
              <li>
                <Link  href={youtube?youtube:'#'}>
                  <a>
                    <LogoYoutubeSvg />
                  </a>
                </Link>
              </li>
            </ul>
        
    );
}
 
 
export default Links;