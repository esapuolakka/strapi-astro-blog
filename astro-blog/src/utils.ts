export const getImageUrl = (data: any, baseUrl: string) => {
  if (!data) return null;

  if (Array.isArray(data) && data.length > 0) {
    const item = data[0];
    return item.url ? baseUrl + item.url : null;
  }

  if (data.url) return baseUrl + data.url;

  return null;
};