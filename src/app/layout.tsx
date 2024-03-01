import type { Metadata } from "next";
import { ShopProvider } from "@/services/providers/ShopContext";
import { darkTheme } from "@/services/providers/MaterialTheme";
import { ThemeProvider } from '@mui/material/styles';

import Header from "@/components/feature/navigation/ResponsiveAppBar";
import LoginModal from "@/components/feature/authentication/LoginModal";
import PersistLogin from "@/components/feature/authentication/PersitstLogin";
import MaterialDrawer from '@/components/feature/navigation/MaterialDrawer'
import ProductCart from "@/components/feature/product/ProductCart";
import AppFooter from "@/components/feature/footer/AppFooter";

import "../style/globals.scss"

export const metadata: Metadata = {
  title: "ALBI Horgászbolt",
  description: "ALBIHORGÁSZBOLT e-kereskedelmi webáruház",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body
        suppressHydrationWarning={true}>
        <ThemeProvider theme={darkTheme}>
          <ShopProvider>
            <Header />
            <LoginModal />
            <PersistLogin>
              {children}
              <MaterialDrawer>
                <ProductCart anchor={"right"} />
              </MaterialDrawer>
            </PersistLogin>
            <AppFooter />
          </ShopProvider>
        </ThemeProvider>
      </body>
    </html >
  );
}
