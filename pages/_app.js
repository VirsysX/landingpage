import "../styles/globals.css";
import { Navbar } from "./index";
import { content } from "../assets/content copy";

function MyApp({ Component, pageProps }) {
  return (
    <div className="col justify-start items-center bg-black py-4 min-w-full min-h-screen overflow-y-auto">
      <Navbar data={content.util.navbar} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
