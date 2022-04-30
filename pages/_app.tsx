import '../styles/globals.css'
/*  import 'tailwindcss/tailwind.css'  */
import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from "../redux/store/store";
import Layout from '../layout';



const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
   <Layout >
       
       <Component {...pageProps} />
          
      
   </Layout>

);

export default wrapper.withRedux(WrappedApp);


