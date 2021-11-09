export const dataProcessingAboutSalary = (f, s) => {
  let result;
  return result;
};

export const calculateCashback = (isCashback, sum, cb) => {
  if (isCashback) return ((sum * parseFloat(cb)) / 100).toFixed(2);
  else return 0;
};

export const getHolidaysNotifications = (f, s) => {};

export const getHolidayPrizes = (f, s, t) => {
  let dataNow = new Date();
  let dayNow = new Date(dataNow).getDate();
  let monthNow = new Date(dataNow).getMonth() + 1;
  let day = new Date(s).getDate();
  let month = new Date(s).getMonth() + 1;

  if (dayNow === day && monthNow === month)
    return `У ${f} сегодня праздник, его премия составляет 
    ${Math.ceil((day * month + t / 10) / 10) * 10} `;
};
