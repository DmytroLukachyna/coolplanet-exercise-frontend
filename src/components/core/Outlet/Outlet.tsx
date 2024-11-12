"use client";

import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "@/components/core/ErrorBoundary";
import { Header } from "@/components/core/Header";
import { PageContainer } from "@/components/core/PageContainer";
import { RootLayoutProps } from "@/app/layout";
import { errorHandlerQuery } from "@/utils/errorHandlerFns";
import { StyledEngineProvider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Outlet = ({ children }: Readonly<RootLayoutProps>) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
    queryCache: new QueryCache({
      onError: errorHandlerQuery,
    }),
  });

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "inherit",
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <Header />
            <PageContainer>{children}</PageContainer>
          </ErrorBoundary>
        </ThemeProvider>
      </StyledEngineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Outlet;
