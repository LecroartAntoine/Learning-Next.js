import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import styles from '@/app/ui/home.module.css';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
