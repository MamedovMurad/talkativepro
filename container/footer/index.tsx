import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import agent from "../../Api/agent";
import ButtonUI from "../../components/UI/Button";
import Links from "../../components/UI/links";
import { IContact } from "../../Model/DTO";
import { nav } from "../../Model/utils/nav";
import { LogoSvg } from "../../svg/Logo";

import styles from "./index.module.css";
type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const [data, setdata] = useState<IContact>({
    instagramLink: null,
    fbLink: null,
    youtubeLink: null,
    phoneNumber: null,
    email: null,
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  async function fetchApi() {
    const res = await agent.contact.single();
    res.data && setdata(res.data);
  }

  const route = useRouter();
  function CanditionHeader() {
    if (route.pathname.search("dashboard") !== -1) {
      return "warpperAUth";
    } else {
      return "wrapper";
    }
  }
  async function onSubmitHandle(data: any) {
    const res = await agent.Subscription.post(data);
 
    res.data && toast.success("Abone olundu");
    reset();
  }

  useEffect(() => {
    fetchApi();
  }, []);

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
            <Links
              insta={data.instagramLink}
              fb={data.fbLink}
              youtube={data.youtubeLink}
            />
          </li>
          <li className={styles.info}>
            <h4>Məlumat</h4>
            <ul>
              {nav.map((item) => (
                <li key={item.id}>
                  <Link href={item.path}>
                    <a>{item["title_AZ"]}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className={styles.info}>
            <h4>Dəstək</h4>
            <ul>
              <li>Yardım mərkəzi</li>
              <li onClick={() => route.push("/contact")}>Bizimlə əlaqə</li>
              <li onClick={() => route.push("/rules")}>İstifadə qaydaları</li>
              <li onClick={() => route.push("/privacy")}>Məxfilik razılaşması</li>
            </ul>
          </li>
          <li className={styles.footer_content}>
            <h4>Yenilik və kampaniyalardan xəbərdar olmaq istəyirsiniz?</h4>
            <div className={styles.subscripe}>
              <form action="" onSubmit={handleSubmit(onSubmitHandle)}>
                <input type="text" placeholder="Emailinizi daxil edin" alt={errors.email?'Email düzgün deyildir':''} className={errors.email?styles.errorinput:''}  {...register('email', {   pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address"
      }})}/> 
                <div>
                  <ButtonUI text="Abunə ol" height="44px" />
                </div>
              </form>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
