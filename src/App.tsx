import { QueryClient } from '@tanstack/react-query';
import { Router } from './Router';
import ThemeWrapper from './styles/theme/themeProvider';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import 'dayjs/locale/pt-br';
import { Container } from './styles/container';
import Header from './components/modules/Header';
import Footer from './components/modules/Footer';

export default function App() {
  const persister = createSyncStoragePersister({
    storage: window.localStorage,
  });
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 30,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      <ThemeWrapper>
        <Router />
      </ThemeWrapper>
    </PersistQueryClientProvider>
  );
}
