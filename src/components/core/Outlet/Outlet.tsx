"use client";

import { ErrorBoundary } from "@/components/core/ErrorBoundary";
import { Header } from "@/components/core/Header";
import { PageContainer } from "@/components/core/PageContainer";
import { RootLayoutProps } from "@/app/layout";
import { StyledEngineProvider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Outlet = ({ children }: Readonly<RootLayoutProps>) => {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "inherit",
      },
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <Header />
          <PageContainer>{children}</PageContainer>
        </ErrorBoundary>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Outlet;
