import Script from 'next/script'
import '../assets/styles.css'

import webcomponentsPjson from "../../embed/package.json";
 
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <>
    <Script src={`https://cdn.jsdelivr.net/npm/@labir/embed@${webcomponentsPjson.version}/dist/embed.min.js`} />
  <Component {...pageProps} />
  </>
}