import "./globals.css";
import { METADATA } from "@/constants";

export const metadata = {
  title: METADATA.title,
  description: METADATA.description,
  authors: [METADATA.author],
  icons: METADATA.icons,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
