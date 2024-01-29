// this import allow you to get all graphene tokens/colors/sizes in your project
import "@elsevier/graphene/dist/style.css";

export default function RootLayout({children}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body>
      {children}
      </body>
      </html>
  );
}
