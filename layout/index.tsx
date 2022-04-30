import Footer from "../container/footer";
import Header from "../container/header";

export default function Layout({ children}:{children:JSX.Element},) {
    return (
      <>
       <Header/>
        <main >{children}</main>
       <Footer/>
      </>
    )
  }