import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps , children}) {
  return (
    <Layout children={children}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
