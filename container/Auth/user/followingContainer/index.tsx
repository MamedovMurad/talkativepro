import Image from "next/image";
import { baseImageUrl } from "../../../../Api/agent";
import GrammerItem from "../../../../components/grammer";
import ButtonUI from "../../../../components/UI/Button";
import { GenericListDto, IDocument } from "../../../../Model/DTO";
import { StarSVG } from "../../../../svg/starSVG";
import styles from "./index.module.css";
type FollowingContainer = {
  width?: string;
  list?: {
    fullname: string;
    avatar: string;
    star: string | number;
    shortname: string;
    langs: null | string[];
  }[];
  /*  data:GenericListDto<IDocument[]>|null */
};

const FollowingContainer: React.FC<FollowingContainer> = ({
  width = "79%",
  list,
}) => {
  console.log(list,'list');
  
  return (
    <div className={styles.following}>
      <ul>
        {list?.map((item, i) => (
          <li key={i}>
            <div className={styles.cardItem}>
              {
                item.avatar?   <Image 
                alt="Next.js logo"
                src={baseImageUrl+item.avatar}
                width={60}
                height={60}
                style={{borderRadius:'50%'}}
              /> :  <label htmlFor="" className="avatar">
              {item.shortname}
            </label>
              }
             
              <div className={styles.content}>
                <h5>{item.fullname}</h5>
                <div className={styles.group}>
                  <span className={styles.number}>{item.star}</span>
                  <span>
                    <StarSVG />
                  </span>
                  <div className={styles.groupClass}>
                    {item.langs?.map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ButtonUI text="İzlənir" width="95px" height="44px" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowingContainer;
