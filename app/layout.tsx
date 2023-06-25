import Provider from '@/components/Provider'
import './globals.css'
import { Inter, Jura } from 'next/font/google'
import Header from '@/components/Header'
import { getSession } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jura = Jura({ subsets: ['latin'], variable: '--font-jura' });

export const metadata = {
  title: 'Bunge - FinCrop',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession();

  console.log(session)

  return (
    <html lang="en">
      <body className={`${inter.variable} ${jura.variable} font-base`}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
