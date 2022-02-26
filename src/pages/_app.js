import '../styles/styles.scss';
import { useRouter } from 'next/router';
import MainLayout from '../components/layouts/MainLayout';
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/apollo-client";
import { SubContextProvider } from '../contexts/SubContext';


function MyApp({ Component, pageProps }) {
      const { asPath } = useRouter();

      return ( 
            <ApolloProvider client={client}>
           {/*  <SubContextProvider>  */}
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
           {/*  </SubContextProvider>  */}
          </ApolloProvider>

            
      )
}


export default MyApp
