import { Inter } from "next/font/google";

import { Footer } from "../components/builder/layouts/Footer/footer";
import { Navbar } from "../components/builder/layouts/Navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
