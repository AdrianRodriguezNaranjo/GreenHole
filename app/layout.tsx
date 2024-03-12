import { Poppins, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const defaultUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Greenhole",
  description: "holy moly it's a website",
};

const poppins_sans = Poppins({ subsets: ["latin"], weight: "400" });
const source_sans = Source_Sans_3({ subsets: ["latin"], weight: "400" });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins_sans.className}>
      <body className="bg-background text-foreground">
        <main>
          <Toaster visibleToasts={1} />
          {children}
        </main>
      </body>
    </html>
  );
}
