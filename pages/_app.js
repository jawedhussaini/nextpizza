import Layout from "../components/Layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import stor from "../redux/stor";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={stor}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  );
}

export default MyApp;
