import MapUI from "../../components/UI/map";
import styles from "./index.module.css";
type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <div className={styles.about}>
      <div className="wrapper">
        <div className={styles.header}>
          <div className={styles.content}>
            <h2> Haqqımızda</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vitae placerat leo. Integer sed volutpat risus. Aenean
              pulvinar neque feugiat ante pellentesque, at ullamcorper sem
              luctus. Nullam scelerisque, nisi in tempor ultrices, turpis nulla
              rhoncus quam, sit amet aliquet tellus diam non ligula. Proin
              scelerisque arcu nec orci bibendum, at placerat libero semper. Sed
              elementum tincidunt auctor. Sed nulla enim, dictum at nibh et,
              vehicula finibus purus. In id justo egestas, varius magna in,
              aliquet odio. In hac habitasse platea dictumst.
            </p>
          </div>
            <MapUI/>
        </div>
        <div className={styles.center}>
            <div>
                <h3>Müəllim</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Vestibulum vitae placerat leo. Integer sed volutpat risus. Aenean pulvinar neque feugiat ante pellentesque, at ullamcorper sem luctus.</p>
            </div>
            <div>
                <h3>Tələbə</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Vestibulum vitae placerat leo. Integer sed volutpat risus. Aenean pulvinar neque feugiat ante pellentesque, at ullamcorper sem luctus.</p>
            </div>
        </div>
        <div className={styles.footer}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae placerat leo. Integer sed volutpat risus. 
                Aenean pulvinar neque feugiat ante pellentesque, at ullamcorper sem luctus. Nullam scelerisque, nisi in tempor ultrices,
                 turpis nulla rhoncus quam, sit amet aliquet tellus diam non ligula. Proin scelerisque arcu nec orci bibendum, at placerat libero semper.
                  Sed elementum tincidunt auctor. Sed nulla enim, dictum at nibh et, vehicula finibus purus. In id justo egestas, varius magna in, aliquet odio. 
                  In hac habitasse platea dictumst. 
                Vestibulum vel sapien vitae magna gravida ultrices. Integer tincidunt turpis ac enim viverra hendrerit. Donec ut dolor a massa euismod dignissim.
                 Mauris a ex odio.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
