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
    <div className="w-full p-3 border-b-2 border-gray-100 grid grid-areas-row_mobile grid-cols-row_mobile grid-rows-row_mobile md:grid-areas-row_desktop md:grid-cols-row_desktop md:grid-rows-row_desktop">
      <span className="grid-in-data1 break-all">{fileName}</span>
      <span className="grid-in-data2 justify-self-start text-xs md:justify-self-center md:text-base">{fileSize}</span>
      <span className="grid-in-data3 justify-self-start text-xs md:justify-self-center md:text-base">{uploadDate}</span>
      <button 
        onClick={() => handleDownloadFile(fileName, token)} 
        className="grid-in-data4 justify-self-end p-2 hover:animate-bounce hover:bg-gray-50 ease-in-out rounded-full"
      >
        <Download className="w-6 h-6 text-yellow-500"/>
      </button>
    </div>
  )
}

export default RowTable