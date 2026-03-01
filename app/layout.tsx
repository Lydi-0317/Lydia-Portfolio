import type { Metadata, Viewport } from "next";
import { Inter} from "next/font/google";
import "./globals.css";

const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lydia | Portfolio",
  description:
    "AI & Machine Learning Engineer building predictive models, recommendation systems and data-driven applications using Python and ML frameworks.",
  icons: {
    icon: "app/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
