import Header from '@/components/Header/main-header';
import './globals.css';
import MainHeaderBg from '@/components/Header/main-header-background';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBg />
        <Header />
        {children}
      </body>
    </html>
  );
}
