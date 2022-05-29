import { useEffect, useState } from "react";
import agent from "../../Api/agent";
import MapUI from "../../components/UI/map";
import styles from "./index.module.css";
type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  const [data, setdata] = useState<{
    teacherText: string;
    aboutBottom: string;
    studentText: string;
    aboutTop: string;
  } | null>(null);
  const fetchApi = async () => {
    const data = await agent.about();
    setdata(data.data);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className={styles.about}>
      <div className="wrapper">
        <div className={styles.header}>
          <div className={styles.content}>
            <h2> Haqqımızda</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: data?.aboutTop ? data?.aboutTop : "",
              }}
            ></p>
          </div>
          <MapUI />
        </div>
        <div className={styles.center}>
          <div>
            <h3>Müəllim</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: data?.teacherText ? data?.teacherText : "",
              }}
            ></p>
          </div>
          <div>
            <h3>Tələbə</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: data?.studentText ? data?.studentText : "",
              }}
            ></p>
          </div>
        </div>
        <div
          className={styles.footer}
          dangerouslySetInnerHTML={{
            __html: data?.aboutBottom ? data?.aboutBottom : "",
          }}
        ></div>
      </div>
    </div>
  );
};

export default About;
