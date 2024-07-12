import Script from 'next/script'
import '../assets/styles.css'

import webcomponentsPjson from "../../embed/package.json";
import dynamic from 'next/dynamic';
 
// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  return <>
    <Script src={`https://cdn.jsdelivr.net/npm/@labir/embed@${webcomponentsPjson.version}/dist/embed.min.js`} />
  <Component {...pageProps} />
  </>
}


export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});