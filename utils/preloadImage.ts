export const preloadImages = (urls: string | string[]) => {
    const preloadSingleImage = (url: string) => {
      return new Promise<string>((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          resolve(url);
        };
      });
    };
  
    if (typeof urls === 'string') {
      return preloadSingleImage(urls);
    } else if (Array.isArray(urls)) {
      const preloadPromises = urls.map((url) => preloadSingleImage(url));
      return Promise.all(preloadPromises);
    } else {
      throw new Error('El parámetro debe ser una URL o un array de URLs');
    }
};