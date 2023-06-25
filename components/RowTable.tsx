'use client';

import Image from "next/image";
import downloadFile from "@/utils/api";
import Link from "next/link";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/esm/locale'
import { Download } from "lucide-react";

interface RowTableProps {
  fileName: string;
  fileSize: number;
  filePath?: string;
}

const getNowDateFormatted = () => {
  const now = format(Date.now(), 'dd MMM yyyy HH:mm', {
    locale: ptBR
  });
  return now;
}

const RowTable = ({ fileName = 'arquivo.jpg', filePath = '', fileSize=5407 }: RowTableProps) => {
  const uploadDate = getNowDateFormatted();
  
  return (
    <div className="md:reset-template-areas row-table-mobile w-full grid grid-cols-4 p-3 border-b-2 border-gray-100">
      <span className="data-1 justify-self-start break-all">{fileName}</span>
      <span className="data-2 md:justify-self-center">{fileSize}</span>
      <span className="data-3 md:justify-self-center">{uploadDate}</span>
      <Link href={filePath} className="data-4 justify-self-end w-fit h-fit p-1">
        <Download className="w-6 h-6 text-yellow-500"/>
      </Link>
    </div>
  )
}

export default RowTable