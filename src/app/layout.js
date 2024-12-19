import { Lato } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/navigation/Sidebar";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
});

export const metadata = {
  title: "Movie Watch List",
  description: "What movie are you going to watch?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased flex`}>
        <Sidebar />
        <div className="flex-1 overflow-auto">{children}</div>
      </body>
    </html>
  );
}
