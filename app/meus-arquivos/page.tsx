'use client';

import RowTable from "@/components/RowTable";
import { FolderOpen, Loader, Search } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const MyFiles = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [files, setFiles] = useState<{ fileName: string, fileSize: string, filePath: string }[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [filtered, setFiltered] = useState<{ query: string, list: { fileName: string, fileSize: string, filePath: string }[] }>(
    {
      query: '',
      list: []
    }
  )

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);

    const query = event.target.value

    const results = files.filter(file => {
      if (searchValue === '' ) {
        return files;
      }
      return file.fileName.toLowerCase().trim().includes(query.toLowerCase().trim());
    });

    setFiltered({
      query,
      list: searchValue === '' ? files : results
    })
  }

  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('http://localhost:8183/documentos', {
        headers: {
          'Authorization': `Bearer ${session?.user.accessToken}`
        }
      });
      const data = await response.json();

      setFiles(data);
      setFiltered({ query: '', list: data });
    }

    if (status === 'authenticated') fetchFiles();
  }, [session?.user])

  if (status === 'unauthenticated') {
    router.push('/')
  }

  if (status === 'loading' || !session?.user) {
    return (
      <main className='w-full min-h-[calc(100vh-48px)] flex items-center justify-center bg-my-files'>
        <Loader className="w-24 h-24 text-blue-800 animate-spin"/>
      </main>
    )
  }

  return (
    <main className='w-full min-h-[calc(100vh-48px)] flex justify-center bg-my-files'>
      <div className='desktop:max-w-7xl sm:max-w-[95%] max-w-[90%] w-full flex flex-col items-start gap-4 mt-6'>
        <div className="flex items-center justify-center gap-2">
          <FolderOpen className="w-6 h-6 text-gray-500"/>
          <h2 className="font-medium font-base text-gray-600 ">Arquivos RFP</h2>
        </div>
        <div className="w-full flex flex-col items-center justify-center rounded-3xl bg-white p-6 pb-20">
          <form className="w-full flex items-center justify-start gap-2 sm:flex-row-reverse flex-col">
            <input 
              className="font-normal placeholder-gray-300 text-sm text-gray-900 px-3 py-2 border border-gray-200 flex-1 w-full sm:max-w-xs rounded" 
              type="text" 
              name="pesquisar" 
              id="pesquisar" 
              placeholder="Pesquisar em Arquivos RFP"
              value={searchValue}
              onChange={handleSearch} 
            />
            {/* <button type='button' className="font-normal text-white text-xs p-3 bg-yellow-500 rounded w-full sm:w-fit">
              Pesquisar
            </button> */}
            <Search className="w-8 h-8 text-yellow-500"/>
          </form>
          <div className="hidden w-full md:grid grid-cols-4 mt-6 py-3 border-b-2 border-gray-100">
            <span className="justify-self-start font-bold text-sm text-gray-900">Nome do arquivo</span>
            <span className="justify-self-center font-bold text-sm text-gray-900">Tamanho</span>
            <span className="justify-self-center font-bold text-sm text-gray-900">Data do upload</span>
            <span className="justify-self-end font-bold text-sm text-gray-900">Ação</span>
          </div>
          { filtered.list.map((file, i) => (
            <RowTable 
              key={file.fileName + `000${i}`}
              fileName={file.fileName}
              fileSize={file.fileSize}
              filePath={file.filePath}
              token={session.user.accessToken ?? ''}
            />
          )) }
        </div>
      </div>
    </main>
  )
}

export default MyFiles