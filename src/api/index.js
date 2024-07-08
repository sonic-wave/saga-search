export const searchSkills = async (search) => {
    const params = new URLSearchParams({ q: search });
  
    const response = await fetch(`https://saga-search-back.onrender.com?${params}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  };
  