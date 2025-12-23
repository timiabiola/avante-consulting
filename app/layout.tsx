import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Avante Leadership Consulting | Developing Tomorrow\'s Leaders Today',
  description: 'Transform your leadership potential with Avante Leadership Consulting. Discover your natural leadership style, develop latent potential, and implement your influence blueprint with Maxwell Leadership certified coaches.',
  keywords: ['leadership consulting', 'executive coaching', 'leadership development', 'Maxwell Leadership', 'leadership training'],
  authors: [{ name: 'Avante Leadership Consulting Ltd.' }],
  openGraph: {
    title: 'Avante Leadership Consulting',
    description: 'Developing Tomorrow\'s Leaders Today',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white antialiased">
        {children}
      </body>
    </html>
  )
}
