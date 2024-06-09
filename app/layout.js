import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { connectDB } from "@/service/mongoo";
import AuthProvider from "./provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nature Recipe",
  description: "A Project by DevAshik",
};

export default async function RootLayout({ children }) {
  await connectDB();
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main>
            <section className='container'>{children}</section>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
