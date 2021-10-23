import Head from 'next/head'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '~/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>
        Nextjs App with TypeScript, ESlint, Jest, Emotion, Tailwind and Twin
      </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
