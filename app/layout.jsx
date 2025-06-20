import '../styles/globals.css';

export const metadata = {
  title: 'Mary Rithika Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

