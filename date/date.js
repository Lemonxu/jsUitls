const date = {
  //格式化时间
  format: function(fmt, date = new Date()){
    const o = {
      "M+": new Date(date).getMonth() + 1, // 月份
      "d+": new Date(date).getDate(), // 日
      "h+": new Date(date).getHours(), // 小时
      "m+": new Date(date).getMinutes(), // 分
      "s+": new Date(date).getSeconds(), // 秒
      "q+": Math.floor((new Date(date).getMonth() + 3) / 3), // 季度
      "S": new Date(date).getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt)) {fmt = fmt.replace(RegExp.$1, (new Date(date).getFullYear() + "").substr(4 - RegExp.$1.length));}
    for (const k in o) {if (new RegExp("(" + k + ")").test(fmt)) {fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));}}
    return fmt;
  },
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
  },
//  计算今天是星期几
  getWeekDay: (date) => {
    const newDate = date || new Date();
    return new Date(newDate).getDay();
  }
};

export {
  date
}
