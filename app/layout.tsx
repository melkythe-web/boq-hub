import './globals.css'

export const metadata = {
  title: 'BOQ Hub',
  description: 'Modern Construction Intelligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}