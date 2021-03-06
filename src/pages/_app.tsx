import type { AppProps } from 'next/app'

// GLOBAL CSS
import '../../styles/global.css'

// COMPONENTS
import Navbar from '../components/Navbar'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
