import { useContext, useEffect, useState } from "react";
import agent from "../Api/agent";
import SweetAlertSuccess from "../components/UI/sweetAlert";
import Footer from "../container/footer";
import Header from "../container/header";
import { UserContext } from "../pages/_app";
import { getCookie } from "react-use-cookie";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import TalkVIewModalBody from "../components/modal/talkView";
import FaqItem from "../components/faq_item";
import Head from "next/head";
import useResponsivenenessAdjuster from "../hooks/useResponsivenenessAdjuster";
import StarRating from "../container/starRating";
export default function Layout({ children }: { children: JSX.Element }) {
  const [data, dispatch] = useContext(UserContext);
  const [doPrice, setdoPrice] = useState(false)
  const route = useRouter();
  function CanditionHeader() {
    if (route.pathname.search("dashboard") !== -1) {
      return <></>;
    } else {
      return <Header />;
    }
  }
  const fetchApi = async () => {
     
      if (localStorage.getItem('teacher')) {
        const data = await agent.Auth.teacherMe()
        dispatch({ type: "setUser", payload: data.data });
      return  
      }else{
       
        const  data = await agent.Auth.getMe();
          dispatch({ type: "setUser", payload: data.data });
        const assestment= await agent.talk.notassestments()
        assestment.data?.id&&  dispatch({type:'setModalActive', payload:<StarRating id={assestment.data.id} text={assestment.data.title}/>})
        return
      }
  
  };

/*   const responsive = useResponsivenenessAdjuster(1060)
  const mobile = useResponsivenenessAdjuster(880) */
  useEffect(() => {
    if (getCookie("agent") && !data.users.user_info) {
      fetchApi();
    }
  }, []);
  if(route.pathname.search("video-call")!==-1){
    return children
  }

  return (
    <>

      <CanditionHeader />
      <main>{children}</main>
      <Footer />
      <SweetAlertSuccess item={data.modal} cb={dispatch} />
    </>
  );
}
