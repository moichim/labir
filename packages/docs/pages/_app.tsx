import Script from 'next/script'
import '../assets/styles.css'
 
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <>
    <Script src="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.min.js" />
  <Component {...pageProps} />
  </>
}