const downloadFile = async (fileName: string, token: string) => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  try {
    const response = await fetch(`${BASE_URL}/documentos/documentos/arquivos-download/${fileName}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement('a');
    
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);

  } catch (error) {
    console.error('Error downloading file: ', error);
  }
}

export default downloadFile;