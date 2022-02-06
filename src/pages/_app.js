import '../styles/styles.scss';
import { useRouter } from 'next/router';
import MainLayout from '../components/layouts/MainLayout';



function MyApp({ Component, pageProps }) {
      const { asPath } = useRouter();

      return (
            
            <MainLayout>
                  <Component {...pageProps} />
            </MainLayout>

            
      )
}


export default MyApp
