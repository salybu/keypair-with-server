export const getDate = (date: Date): string => {
  let [year, month, day, hour, minutes] = [
    getDateFormat(date.getFullYear()),
    getDateFormat(date.getMonth() + 1),
    getDateFormat(date.getDate()),
    getDateFormat(date.getHours()),
    getDateFormat(date.getMinutes()),
  ];
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes;
};

export const getDateFormat = (date: number): number | string => {
  return date >= 10 ? date : '0' + date;
};
