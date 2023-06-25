const downloadFile = async (fileName: string, token: string) => {
  try {
    const response = await fetch(`http://localhost:8183/documentos/arquivos-download/${fileName}`, {
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