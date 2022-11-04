import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { asPath } = useRouter();
  return (
    <>
      <Navbar />
      {children}
       {asPath !== '/admin' && <Footer/>}
    </>
  );
};

export default Layout;
