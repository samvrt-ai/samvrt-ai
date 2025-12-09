import './globals.css'

export const metadata = {
  title: 'SAMVRT AI',
  description: 'SAMVRT AI — AI product engineering',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  )
}
