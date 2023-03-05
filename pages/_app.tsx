import '@/styles/globals.css'
import '../styles/general.scss'
import '../styles/footer.scss'
import '../styles/acommo.scss'
import '../styles/packages.scss'
import '../styles/review.scss'
import '../styles/privancy.scss'
import '../styles/terms.scss'
import '../styles/access.scss'
import '../styles/carreer.scss'
import '../styles/sidebar.scss'
import '../styles/eventspace.scss'
import '../styles/wedding.scss'
import '../styles/proposal.scss'
import '../styles/contact.scss'
import '../styles/index.scss'
import '../styles/innerindex.scss'
import '../styles/book.scss'
import type { AppProps } from 'next/app'

import Mainlayout from '../src/components/layout/main-layout';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
       <Mainlayout>
           <Component {...pageProps} />
      </Mainlayout>
    </>
  )
}
