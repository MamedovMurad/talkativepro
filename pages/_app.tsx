import "../styles/globals.css";
import React, { FC, useContext, useReducer, useState } from "react";
import { AppProps } from "next/app";
import Layout from "../layout";
import SweetAlertBody from "../components/UI/sweetAlert/body";
import { Toaster } from "react-hot-toast";
import { Router } from "next/router";
import NProgress from "nprogress";
import Head from "next/head";
import "nprogress/nprogress.css";
export const UserContext = React.createContext<any>(null);

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  interface data {
    users: {
      user_info: {
        uuid: string;
        firstName: string;
        lastName: string;
        email: string;
        avatar: string | null;
        phoneNumber: null | string;
        teacher: null | boolean;
      } | null;
    };
    modal: {
      body: any;
      show: boolean;
      width?: string;
    };
  }
  const data = {
    users: { user_info: null, load: null },
    modal: { body: <SweetAlertBody />, show: false },
  };
  const reducer = (state: data = data, action: any) => {
    switch (action.type) {
      case "setUser":
        return { ...state, users: { load: false, user_info: action.payload } };
      case "setModalActive":
        return { ...state, modal: { body: action.payload, show: true } };
      case "setModalpassive":
        return { ...state, modal: { body: <></>, show: false } };
        case 'again':
         return {...state}
      default:
        return state;
    }
  };

  
  const [contextData, dispatch] = useReducer(reducer, data);
  Router.events.on("routeChangeStart", (url) => {
    
    dispatch({type:'setModalpassive'})
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
  });
 
  return (
    <>
      <UserContext.Provider value={[contextData, dispatch]}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Toaster position="top-right" reverseOrder={false} />
      </UserContext.Provider>
    </>
  );
};

export default WrappedApp;
