import { GeistSans } from "geist/font/sans";

import "./globals.css";

export const metadata = {
  title: "Polyglot Lingo",
  description: "Polyglot Lingo App for students",
};

export default function RootLayout({ children }) {
  return (
    <html className={GeistSans.className} lang="en">
      <body>{children}</body>
    </html>
  );
}
