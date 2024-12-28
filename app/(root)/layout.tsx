import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import '../globals.css'
import TopBar from '@/components/shared/TopBar'
import LeftSideBar from '@/components/shared/LeftSideBar'
import RightSideBar from '@/components/shared/RightSideBar'
import BottomBar from '@/components/shared/BottomBar'
import { Metadata } from 'next'

export const metada: Metadata = {
  title: 'Threads',
  description: 'A Next.js meta Threads'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <TopBar />
        
  <main className='flex flex-row'>
    <LeftSideBar />
    <section className='main-container'>
      <div className='w-full max-w-4xl'>
      {children}
      </div>

    </section>

    <RightSideBar />
</main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  )
}