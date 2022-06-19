import GrammerItem from "../../../../components/grammer";
import ButtonUI from "../../../../components/UI/Button";
import { GenericListDto, IDocument } from "../../../../Model/DTO";
import { StarSVG } from "../../../../svg/starSVG";
import styles from "./index.module.css";
type FollowingContainer = {
  width?: string;
  /*  data:GenericListDto<IDocument[]>|null */
};

const FollowingContainer: React.FC<FollowingContainer> = ({
  width = "79%",
}) => {
  return (
      <div className={styles.following}>
    <ul >
      <li>
        <div className={styles.cardItem}>
          <label htmlFor="" className="avatar">A B</label>
          <div className={styles.content}>
            <h5>Cavidan Məmmədəliyev</h5>
            <div className={styles.group}>
              <span className={styles.number}>5</span>
              <span>
                <StarSVG />
              </span>
              <span>İngilis dili</span>
            </div>
          </div>
        </div>
        <div><ButtonUI text="İzlənir" width="95px" height="44px"/></div>
      </li>
      <li>
        <div className={styles.cardItem}>
          <label htmlFor="" className="avatar">A B</label>
          <div className={styles.content}>
            <h5>Cavidan Məmmədəliyev</h5>
            <div className={styles.group}>
              <span className={styles.number}>5</span>
              <span>
                <StarSVG />
              </span>
              <span>İngilis dili</span>
            </div>
          </div>
        </div>
        <div><ButtonUI text="İzlənir" width="95px" height="44px"/></div>
      </li>
      <li>
        <div className={styles.cardItem}>
          <label htmlFor="" className="avatar">A B</label>
          <div className={styles.content}>
            <h5>Cavidan Məmmədəliyev</h5>
            <div className={styles.group}>
              <span className={styles.number}>5</span>
              <span>
                <StarSVG />
              </span>
              <span>İngilis dili</span>
            </div>
          </div>
        </div>
        <div><ButtonUI text="İzlənir" width="95px" height="44px"/></div>
      </li>
      <li>
        <div className={styles.cardItem}>
          <label htmlFor="" className="avatar">A B</label>
          <div className={styles.content}>
            <h5>Cavidan Məmmədəliyev</h5>
            <div className={styles.group}>
              <span className={styles.number}>5</span>
              <span>
                <StarSVG />
              </span>
              <span>İngilis dili</span>
            </div>
          </div>
        </div>
        <div><ButtonUI text="İzlənir" width="95px" height="44px"/></div>
      </li>
      <li>
        <div className={styles.cardItem}>
          <label htmlFor="" className="avatar">A B</label>
          <div className={styles.content}>
            <h5>Cavidan Məmmədəliyev</h5>
            <div className={styles.group}>
              <span className={styles.number}>5</span>
              <span>
                <StarSVG />
              </span>
              <span>İngilis dili</span>
            </div>
          </div>
        </div>
        <div><ButtonUI text="İzlənir" width="95px" height="44px"/></div>
      </li>
      <li>
        <div className={styles.cardItem}>
          <label htmlFor="" className="avatar">A B</label>
          <div className={styles.content}>
            <h5>Cavidan Məmmədəliyev</h5>
            <div className={styles.group}>
              <span className={styles.number}>5</span>
              <span>
                <StarSVG />
              </span>
              <span>İngilis dili</span>
            </div>
          </div>
        </div>
        <div><ButtonUI text="İzlənir" width="95px" height="44px"/></div>
      </li>
      <li>
        <div className={styles.cardItem}>
          <label htmlFor="" className="avatar">A B</label>
          <div className={styles.content}>
            <h5>Cavidan Məmmədəliyev</h5>
            <div className={styles.group}>
              <span className={styles.number}>5</span>
              <span>
                <StarSVG />
              </span>
              <span>İngilis dili</span>
            </div>
          </div>
        </div>
        <div><ButtonUI text="İzlənir" width="95px" height="44px"/></div>
      </li>
    </ul>
      </div>

  );
};

export default FollowingContainer;
