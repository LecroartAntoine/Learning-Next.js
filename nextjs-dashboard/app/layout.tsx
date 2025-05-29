import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import styles from '@/app/ui/home.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>{children}</body>
    </html>
  );
}
