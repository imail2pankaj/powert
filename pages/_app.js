import { LayoutProvider } from '../contexts/LayoutContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<LayoutProvider><Component {...pageProps} /></LayoutProvider>)
}

export default MyApp
