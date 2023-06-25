const downloadFile = async (filePath: string, fileName: string) => {
  const bodyRequest= {
    filePath,
    fileName
  }

  try {
    const response = await fetch(`/api/download-file?filePath=${encodeURIComponent(filePath)}&fileName=${fileName}`, {
      method: 'POST',
      body: JSON.stringify(bodyRequest)
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      window.location.href = url;
    } else {
      console.error('Error downloading file: ', response.status);
    }
  } catch (error) {
    console.error('Error downloading file: ', error);
  }
}

export default downloadFile;