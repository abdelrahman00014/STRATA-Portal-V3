import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>StrataSphere - Strata Management Portal</title>
        <meta name="description" content="Strata management portal for building owners" />
      </head>
      <body>
        <nav className="bg-blue-800 text-white p-4">
          <div className="container mx-auto">
            <ul className="flex space-x-6 justify-center">
              <li><a href="/" className="hover:text-blue-200">Home</a></li>
              <li><a href="/committee" className="hover:text-blue-200">Committee</a></li>
              <li><a href="/financial" className="hover:text-blue-200">Financial</a></li>
              <li><a href="/maintenance" className="hover:text-blue-200">Maintenance</a></li>
              <li><a href="/documents" className="hover:text-blue-200">Documents</a></li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
