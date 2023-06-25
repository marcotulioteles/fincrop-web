'use client';

import { Loader, Pointer, Wheat } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const Welcome = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <Loader className="w-24 h-24 text-white animate-spin"/>
  }

  if (!session?.user) {
    return null;
  }

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div>
        <Image className='rounded-full' src={session.user.image ?? ''} alt='user photo' width={96} height={96} />
      </div>
      <h2 className='text-white text-center text-4xl'><span className='text-2xl'></span>👋 {session.user.name}</h2>
      <p className='text-white text-center text-xl'>Seja muito bem vindo!</p>
      <p className='text-white text-center flex items-center gap-2'>
        <Link className='flex items-center justify-center hover:scale-105 hover:bg-blue-900 ease-in-out gap-2 text-white bg-blue-800 p-3 border border-blue-400 rounded-md' href='/meus-arquivos'>
          <Pointer className='w-5 h-5'/>
          <span>clique aqui</span>
        </Link> 
        {' '} para começar.
      </p>
    </div>
  )
}

export default Welcome