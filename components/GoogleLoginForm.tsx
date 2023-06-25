'use client';

import { signIn, useSession } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc'

const GoogleLoginForm = () => {
  const { data: session, status } = useSession();

  if (session?.user || status === 'loading') {
    return null;
  }

  return (
    <div className='sm:max-w-sm max-w-[90%] flex items-center justify-center p-10 bg-white rounded-xl flex-col w-full mx-4 box-border shadow-lg'>
      <div className='w-full flex flex-col items-center gap-3 mb-3'>
        <h1 className='text-xl text-blue-800 font-semibold'>Bem-vindo(a)</h1>
        <span>Sign in</span>
      </div>
      <button 
        onClick={() => signIn('google')} 
        className='flex items-center justify-center gap-3 hover:scale-105 ease-in-out font-semibold text-base p-3 bg-white border border-gray-500 rounded-lg shadow-md'
      >
        <FcGoogle size={24}/>
        <span className='text-gray-500 font-semibold'>Continuar com o Google</span>
      </button>
    </div>
  )
}

export default GoogleLoginForm