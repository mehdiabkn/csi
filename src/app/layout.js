export const metadata = {
  title: "Consultant SI",
  description: "Architecture & Infrastructure IT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
