import '../styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MantineProvider } from '@mantine/core';
import NonSSRWrapper from 'utils/nonSSRWrapper'
import Layout from 'components/layout'
import Head from 'next/head';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  return (
    <NonSSRWrapper>
      <Head>
        <meta charset="utf-8" />
        <title>ZARA PHONE</title>
        <meta property="og:title" content="ZARA PHONE" key="title" />
        <link rel="shortcut icon" href="static/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: 'light',
            fontFamily: 'monospace',
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </QueryClientProvider>
    </NonSSRWrapper>
  )
}
