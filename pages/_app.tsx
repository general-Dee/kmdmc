// import { Provider } from 'next-auth/client';
import '../styles/globals.css'
import Router, { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
// import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../firebase"
import { RecoilRoot } from 'recoil';

// function MyApp({ Component, pageProps }: AppProps) {
function MyApp({ Component, pageProps }: AppProps) {
  // const [user, loading, error] = useAuthState(auth);

 
  return (
    // <Provider session={pageProps.session}> 
    // <Provider store={store}> 
    //   <Component {...pageProps} />
    // </Provider>
    <AnimatePresence exitBeforeEnter>
      <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </AnimatePresence>


  );
}

export default MyApp
