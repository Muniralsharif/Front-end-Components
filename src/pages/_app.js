import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles/globalStyle.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
