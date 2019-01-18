const date = {
  // 获取当前月多少天
  getMonthDays: (year, month) => {
    return new Date(year, month, 0).getDate();
  },
  // 计算多少天前
  getDaysAgo: (date, days) => {
    const newDate = date || new Date();
    const t = new Date(newDate).getTime() + days * 24000*3600; //获取n天的时间，time
    return new Date().setTime(t);
  },
  // 计算几个月前 （当前日期，月）
  getMonthsAgo: (date, months) => {
    const newDate = date || new Date();
    const t = new Date(newDate).setMonth(months);
    return t;
  }
};

export {
  date
}