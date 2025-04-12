// src/app/layout.tsx
import './globals.css'
import { Providers } from '@/lib/providers'
import WalletButton from '@/components/WalletButton'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
