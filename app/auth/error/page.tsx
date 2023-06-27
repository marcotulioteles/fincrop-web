'use client';

import { ShieldQuestion, Undo2 } from 'lucide-react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

const ErrorPage = () => {
  return (
    <main className='w-full min-h-[calc(100vh-48px)] flex flex-col items-center justify-center bg-blue-800 not-found__background'>
      <h1 className='font-alt text-7xl font-normal text-white mb-10'>FINCROP</h1>

      <div className="md:w-fit max-w-[90%] flex flex-col items-center justify-center gap-6 bg-white p-10 rounded-xl">
        <ShieldQuestion className="w-24 h-24 text-red-700"/>
        <h1 className="text-gray-900 text-2xl font-semibold text-center">Não encontramos as suas credenciais...</h1>
        <p className="text-gray-500 text-center">Por favor, verifique se você está autorizado a acessar a aplicação e tente novamente.</p>
        <Link href='/' className='flex items-center justify-center gap-3 hover:scale-105 border border-gray-200 p-3 rounded-md shadow-md'>
          <Undo2 className='w-5 h-5 text-gray-900'/>
          <span className='text-gray-900 text-base'>Voltar para Sign In</span>
          <FcGoogle size={24}/>
        </Link>
      </div>
    </main>
  )
}

export default ErrorPage