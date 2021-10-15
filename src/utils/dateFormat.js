export function formatDate(format) {
  const o = {
    "M+": this.getMonth() + 1, //month
    "d+": this.getDate(), //day
    "h+": this.getHours(), //hour
    "m+": this.getMinutes(), //minute
    "s+": this.getSeconds(), //second
    "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
    "S": this.getMilliseconds() //millisecond
  }

  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  for (const k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
}

export function simbleFormat(time) {
  let date = new Date(time);
  let y = date.getFullYear();
  let m = (date.getMonth() + 1 + '').padStart(2, '0');
  let d = (date.getDate() + '').padStart(2, '0');
  let hh = (date.getHours() + '').padStart(2, '0');
  let mm = (date.getMinutes() + '').padStart(2, '0');
  let ss = (date.getSeconds() + '').padStart(2, '0');

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}
