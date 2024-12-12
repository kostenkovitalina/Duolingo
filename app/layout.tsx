'use client'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import { Nunito } from 'next/font/google'

const font = Nunito({subsets: ['latin']})
export default function RootLayout({children,}: { children: React.ReactNode}) {
  return (
      <ClerkProvider>
        <html lang="en">
        <body className={font.className}>
        {children}
        </body>
        </html>
      </ClerkProvider>
  )
}