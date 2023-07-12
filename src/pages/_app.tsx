import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import BaseTheme from '@/themes/Base.theme';
import CatuLayout from '@/layouts/Catu.layout';
import { CacheProvider } from '@emotion/react';
import '@/assets/scss/main.scss';
import { createEmotionCache } from '@/utils/styles/emotionCache';
import { SnackbarProvider } from 'notistack';

const clientSideEmotionCache = createEmotionCache();

interface RootProps extends AppProps {
  emotionCache?: ReturnType<typeof createEmotionCache>;
}

const Root = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}: RootProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={BaseTheme}>
        <SnackbarProvider>
          <CssBaseline />
          <CatuLayout>
            <Component {...pageProps} />
          </CatuLayout>
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Root;
