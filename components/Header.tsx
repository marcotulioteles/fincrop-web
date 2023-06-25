'use client';

import { Bell } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const { data: session } = useSession();

  const onClickSignOut = () => {
    signOut()
  }

  return (
    <nav className='w-full h-12 bg-white flex items-center justify-between px-6'>
      <div className="flex items-center justify-center gap-6">
        <Link href='/'>
          <Image src='/assets/icons/bunge-logo.svg' alt='bunge-icon' width={86} height={20}/>
        </Link>
        { session?.user ? (
          <div className='flex items-center gap-4'>
            <h1 className='font-alt font-normal text-lg text-blue-800'>FINCROP</h1>
            <div className="hidden sm:flex items-center justify-center gap-6">
              <Link className="text-gray-600 text-base hover:text-blue-800 cursor-pointer" href='/meus-arquivos'>Meus Arquivos</Link>
            </div>
          </div>
        ) : null }
      </div>

      { session?.user ? (
        <div className='flex items-center justify-center gap-3'>
          <button 
            className='text-gray-400 text-sm hover:text-gray-900 hover:font-semibold cursor-pointer'
            onClick={onClickSignOut}
          >
            Sign out
          </button>
          <div className="flex items-center gap-2">
            <Bell className='w-6 h-6 text-blue-800'/>
            <div className="border-2 border-white outline outline-blue-800 outline-2 outline-offset-2 w-8 h-8 rounded-full">
              { session?.user?.image ? <Image src={session.user.image} alt="avatar image" width={32} height={32} className="rounded-full"/> : null }
            </div>
          </div>
        </div>
      ) : null }
    </nav>
  )
}

export default Header