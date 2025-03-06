'use client'
import {ClerkProvider} from '@clerk/nextjs'
import './globals.css'
import {Nunito} from 'next/font/google'
import {Toaster} from "sonner";

const font = Nunito({subsets: ['latin']})
export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body className={font.className}>
            <Toaster/>
            {children}
            </body>
            </html>
        </ClerkProvider>
    )
}