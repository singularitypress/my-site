import Head from "next/head";
import MobileNav from "../components/mobile-nav";

import "../styles/globals.css";
import "../styles/my-styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MobileNav navItems={[
        {
          text: "Home",
          link: "/"
        },
        {
          text: "Google",
          link: "https://google.com"
        },
        {
          text: "Instagram",
          link: "https://instagram.com"
        },
        {
          text: "Our Jupio Site",
          link: "https://jupio.vercel.app"
        },
        {
          text: "Cute Doggies",
          link: "/dogs-are-the-cutest"
        }
      ]} />
      <Component {...pageProps} />
      <script
        async
        defer
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}

export default MyApp;
