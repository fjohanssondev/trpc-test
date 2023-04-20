import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { api } from '../utils/trpc';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default api.withTRPC(App);
