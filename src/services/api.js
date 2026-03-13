export async function uploadCSV(file) {

    const response = await fetch("/api/upload", {
      method: "POST",
      body: file
    });
  
    return response.json();
  
  }