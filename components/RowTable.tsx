'use client';

import Link from "next/link";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/esm/locale'
import { Download } from "lucide-react";
import downloadFile from "@/utils/api";

interface RowTableProps {
  fileName: string;
  fileSize: string;
  filePath?: string;
  token: string
}

const handleDownloadFile = (fileName: string, token: string) => {
  downloadFile(fileName, token);
}

const getNowDateFormatted = () => {
  const now = format(Date.now(), 'dd MMM yyyy HH:mm', {
    locale: ptBR
  });
  return now;
}

const RowTable = ({ fileName, filePath, fileSize, token }: RowTableProps) => {
  const uploadDate = getNowDateFormatted();
  
  return (
    <div className="grid grid-cols-4 w-full p-3 border-b-2 border-gray-100">
      <span className="data-1 break-all">{fileName}</span>
      <span className="data-2 justify-self-center">{fileSize}</span>
      <span className="data-3 justify-self-center">{uploadDate}</span>
      <button onClick={() => handleDownloadFile(fileName, token)} className="data-4 justify-self-end p-1">
        <Download className="w-6 h-6 text-yellow-500"/>
      </button>
    </div>
  )
}

export default RowTable