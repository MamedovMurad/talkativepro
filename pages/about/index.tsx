import axios from "axios";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import agent from "../../Api/agent";
import MapUI from "../../components/UI/map";
import { GenericDTO } from "../../Model/DTO";
import styles from "./index.module.css";
type AboutProps = {
  data:GenericDTO<{
    teacherText: string;
    aboutBottom: string;
    studentText: string;
    aboutTop: string;
  }|undefined>
};

const About: React.FC<AboutProps> = ({data}) => {
  return (
    <div className={styles.about}>
      <div className="wrapper">
        <div className={styles.header}>
          <div className={styles.content}>
            <h2> Haqqımızda</h2>
            <div className={styles.content_paragraph}
              dangerouslySetInnerHTML={{
                __html: data?.data?.aboutTop ? data?.data?.aboutTop : "",
              }}
            ></div>
          </div>
          <MapUI />
        </div>
        <div className={styles.center}>
          <div>
            <h3>Müəllim</h3>
            <div
              className={styles.center_paragraph}
              dangerouslySetInnerHTML={{
                __html: data?.data?.teacherText ? data?.data?.teacherText : "",
              }}
            ></div>
          </div>
          <div>
            <h3>Tələbə</h3>
            <div
            className={styles.center_paragraph}
              dangerouslySetInnerHTML={{
                __html: data?.data?.studentText ? data?.data?.studentText : "",
              }}
            ></div>
          </div>
        </div>
        <section
          className={styles.footer}
          dangerouslySetInnerHTML={{
            __html: data?.data?.aboutBottom ? data?.data?.aboutBottom : '<p>yuklenir</p>',
          }}
        ></section>
      </div>
    </div>
  );
};


export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await (fetch('http://194.147.58.56:8090/api/v1/public/common/about')
  .then(response => response.json()))
  
console.log(data,'data');


  return {
      props: {
          data:data
      },
  };
}
export default About;
