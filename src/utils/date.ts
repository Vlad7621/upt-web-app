export const formatDate = (timestamp: number): string => {
   const date = new Date(timestamp);
   const day = `${date.getDate()}`.padStart(2, '0');
   const month = `${date.getMonth() + 1}`.padStart(2, '0');
   const year = date.getFullYear();
   const hours = `${date.getHours()}`.padStart(2, '0');
   const minutes = `${date.getMinutes()}`.padStart(2, '0');
   return `${day}-${month}-${year} ${hours}:${minutes} `;
}