'use client';

import { useState } from 'react';
import { Bell, Folder, Home, LogOut, Menu, User2 } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const { data: session } = useSession();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const onClickSignOut = () => {
    signOut()
    setShowMenu(prev => !prev)
  }

  return (
    <nav className='w-full h-12 bg-white flex items-center justify-between px-6'>
      <div className="flex items-center justify-center gap-6">
        <Link href='/'>
          <Image src='/assets/icons/bunge-logo.svg' alt='bunge-icon' width={86} height={20}/>
        </Link>
        { session?.user ? (
          <div className='flex items-center gap-4'>
            <h1 className='hidden md:flex font-alt font-normal text-lg text-blue-800'>FINCROP</h1>
            <div className="hidden md:flex items-center justify-center gap-6">
              <Link className="text-gray-600 text-base hover:text-blue-800 cursor-pointer" href='/meus-arquivos'>Meus Arquivos</Link>
            </div>
          </div>
        ) : null }
      </div>

      { session?.user ? (
        <>
          <div className='flex items-center justify-center gap-3'>
            <div className='md:hidden flex items-center justify-center relative'>
              <button onClick={() => setShowMenu(prev => !prev)}>
                <Menu className='w-6 h-6 text-blue-800'/>
              </button>
              { showMenu ? (
                <nav className='absolute animate-dropdown top-6 right-0 flex md:hidden items-start flex-col gap-6 bg-white w-60 p-4 rounded-md shadow-md'>
                  <div className='w-full flex flex-col gap-2 items-center border-b border-b-gray-100 pb-4'>
                    <h1 className='font-alt font-normal text-lg text-blue-800'>FINCROP</h1>
                    <div className="border-2 border-white outline outline-blue-800 outline-2 w-8 h-8 rounded-full">
                      { session?.user?.image 
                        ? <Image src={session.user.image} alt="avatar image" width={32} height={32} className="rounded-full"/> 
                        : <div className='w-8 h-8 flex items-center justify-center rounded-full'>
                            <User2 className='w-6 h-6 text-gray-600'/>
                          </div> 
                      }
                    </div>
                    <span className='text-xs text-gray-500'>{session.user.name}</span>
                  </div>
                  <Link className="text-gray-400 text-sm hover:text-gray-900 hover:font-semibold cursor-pointer flex items-center justify-center gap-2" 
                    href='/'
                    onClick={() => setShowMenu(prev => !prev)}
                  >
                    <Home className='w-4 h-4'/>
                    Home
                  </Link>
                  <Link className="text-gray-400 text-sm hover:text-gray-900 hover:font-semibold cursor-pointer flex items-center justify-center gap-2" 
                    href='/meus-arquivos'
                    onClick={() => setShowMenu(prev => !prev)}
                  >
                    <Folder className='w-4 h-4'/>
                    Meus Arquivos
                  </Link>
                  <button 
                    className='text-gray-400 text-sm hover:text-gray-900 hover:font-semibold cursor-pointer flex items-center justify-center gap-2'
                    onClick={onClickSignOut}
                  >
                    <LogOut className='w-4 h-4'/>
                    Sign out
                  </button>
                </nav>
              ) : null}
            </div>
            <button 
              className='hidden md:flex text-gray-400 text-sm hover:text-gray-900 hover:font-semibold cursor-pointer'
              onClick={onClickSignOut}
            >
              Sign out
            </button>
            <div className="hidden md:flex items-center gap-2">
              <Bell className='w-6 h-6 text-blue-800'/>
              <div className="border-2 border-white outline outline-blue-800 outline-2 w-8 h-8 rounded-full">
                { session?.user?.image 
                  ? <Image src={session.user.image} alt="avatar image" width={32} height={32} className="rounded-full"/> 
                  : <div className='w-8 h-8 flex items-center justify-center rounded-full'>
                      <User2 className='w-6 h-6 text-gray-600'/>
                    </div> 
                }
              </div>
            </div>
          </div>
        </>
      ) : null }
    </nav>
  )
}

export default Header