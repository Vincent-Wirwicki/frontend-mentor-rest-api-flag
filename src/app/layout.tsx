import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/nav/MainNav";
import { ThemeProvider } from "@/components/themeProvider/theme-provider";

const font = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Country Rest Api",
  description:
    "Country rest api, is a challenge from Frontend Mentor challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}  antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainNav />
          <main className="main">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
