
export const metadata = {
  title: 'NextJS Course App About',
  description: 'Your first NextJS app with About!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
