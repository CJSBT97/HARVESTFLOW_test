export const sleep = async function (interval = 6) {
    return new Promise((resolve) => {
        setTimeout(resolve, interval * 1000); // 6秒
    });
}

/**
 * Check if string is HEX, requires a 0x in front
 *
 * @method isHexStrict
 * @param {String} hex to be checked
 * @returns {Boolean}
 */
export const isHexStrict = function (hex) {
  return ((typeof hex === 'string' || typeof hex === 'number') && /^(-)?0x[0-9a-f]*$/i.test(hex));
};

export const u8arryToHex = (buffer) => {
    return [...new Uint8Array(buffer)]
        .map(x => x.toString(16).padStart(2, '0'))
        .join('')
}

export const hexTou8array = (hex) => {
    return Uint8Array.from(hex.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)))
}

export const hexToString = (str) => {
  if (str.length % 2 !== 0){
    console.log('Not a hex');
    return ""
  }
   let val = "";
   for (let i = 0; i < str.length; i+=2) {
     const n = parseInt(str[i] + str[i+1], 16)
     val += String.fromCharCode(n);
   }
   return val;
}

export const stringToHex = (str) => {
  let val = "";
  for (let i = 0; i < str.length; i++) {
    if (val == "") {
      val = str.charCodeAt(i).toString(16);
    } else {
      val += str.charCodeAt(i).toString(16);
    }
  }
  return val;
}

export const formatAmount = function (value) {
  if (!value) return "0.00";
  let unit = ''
  let digit = 3
  const nm = Number(value)
  if(nm < 1) {
    digit = 4
  }
  if (nm < 0.0001) {
    digit = 6
  }
  if (nm < 0.000001) {
    digit = 8
  } 
  if (nm < 0.00000001) {
    return '0.00'
  }
  if (nm > 1000) {
    digit = 2
  }
  if (Number.isInteger(nm)) {
    digit = 0
    if (nm > 1000) {
      digit = 2
    }
  }
  value = Number(value)
  if (value < 1e6) {
    console.log('empty')
  }else if (value < 1e9){
    value = value / 1e6
    unit = 'M'
  }else if(value < 1e12) {
    value = value / 1e9
    unit = 'B'
  } else {
    value = value / 1e12
    unit = 'T'
  }
  const str = value.toFixed(digit).toString();
  let integer = str;
  let fraction = "";
  if (str.includes(".")) {
    integer = str.split(".")[0];
    fraction = "." + str.split(".")[1];
  }
  return integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + fraction + unit;
}

/**
 *
 * @param {*} value
 * @param {*} abb is abbreviations
 * @returns
 */
 export const formatPrice = function (value, abb=false) {
  if (!value) return "$0.00";
  let unit = ''
  if(Number(value) > 1e6) {
    abb = true
  }
  let digit = 3
  if (Number(value) > 1e3) {
    digit = 0
  }
  if(Number(value) < 1) {
    digit = 4
  }
  if (Number(value) < 0.001) {
    digit = 8
  }
  if (Number(value) < 0.00000001) {
    digit = 10
  }
  if (Number(value) < 0.0000000001) {
    return '$0.0'
  }
  if (abb) {
    value = Number(value)
    if (value < 1000) {
      console.log('empty')
    } else if (value < 1e6) {
      value = value / 1000
      unit ='K'
    }else if (value < 1e9){
      value = value / 1e6
      unit = 'M'
    }else if(value < 1e12) {
      value = value / 1e9
      unit = 'B'
    }
  }
  const str = Number(value).toFixed(digit).toString();
  let integer = str;
  let fraction = "";
  if (str.includes(".")) {
    integer = str.split(".")[0];
    fraction = "." + str.split(".")[1];
  }
  return "$" + integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + fraction + unit;
};

export function getDateString(now, timezone, extra = 0) {
  now = now || new Date();
  const offset = timezone != null ? timezone * 3600 : 0;
  now = new Date(now.getTime() + (offset + extra) * 1000);
  return now.toISOString().replace("T", " ").substring(0, 19);
}

export function formatDateString(date) {
  date = new Date(date);
  const timezone = new Date().getTimezoneOffset() / -60
  const offset = timezone != null ? timezone * 3600000 : 0;
  const now = new Date(date.getTime() + offset);
  return now.toISOString().replace("T", " ").substring(0, 16);
}

export function parseTimestamp(time) {
  if (!time) {
    return ''
  }
  let timestamp = new Date(time).getTime() / 1000
  // let _dif = new Date().getTimezoneOffset();
  // timestamp += _dif * 60

  let nowStamp = new Date().getTime() / 1000
  nowStamp = parseInt(nowStamp)
  timestamp = parseInt(timestamp)
  let diff = nowStamp - timestamp;
  if (diff < 0) {
    diff = timestamp - nowStamp
    if (diff < 10) {
      return 'Now'
    }else if(diff < 60) {
      return `${diff} seconds left`
    }else if (diff < 3600) {
      return `${Math.floor(diff / 60)} mins left`
    }else if (diff < 3600 * 24) {
      return `${Math.floor(diff / 3600)} hours left`
    }else if (diff < 3600 * 24 * 30) {
      return `${Math.floor(diff / 3600 / 24)} days left`
    }else if (diff < 3600 * 24 * 60) {
      return '1 month left'
    }else {
      return getDateString(null, null, timestamp - nowStamp)
    }
  }else {
    if (diff < 10) {
      return 'Now'
    }else if(diff < 60) {
      return `${diff} seconds ago`
    }else if (diff < 3600) {
      return `${Math.floor(diff / 60)} mins ago`
    }else if (diff < 3600 * 24) {
      return `${Math.floor(diff / 3600)} hours ago`
    }else if (diff < 3600 * 24 * 30) {
      return `${Math.floor(diff / 3600 / 24)} days ago`
    }else if (diff < 3600 * 24 * 60) {
      return '1 month ago'
    }else {
      return getDateString(null, null, timestamp - nowStamp)
    }
  }
}

/**
 *
 * @param {*} time timeinterval(second)
 */
export function parseTimestampToUppercase(time) {
  if (!time) return ''
  let timestamp = new Date().getTime() / 1000
  if (time - timestamp > 0) {
    let sec = time - timestamp;
    let days = Math.floor(sec / (24 * 3600))
    let leave1 = sec % (24 * 3600)
    let hours = Math.floor(leave1 / (3600))
    let leave2 = leave1 % 3600
    let minutes = Math.floor(leave2 / 60)
    let leave3 = leave2%60
    let seconds = Math.round(leave3)
    if (days > 0) {
      return `${days} DAY ${hours} HOURS ${minutes} MIN`
    }else {
      if (hours > 0) {
        return `${hours} HOURS ${minutes} MIN ${seconds} S`
      }else {
        return `${minutes} MIN ${seconds} S`
      }
    }
  }else {
    let monthMap = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
    let d1 = new Date(time * 1000)
    return `${d1.getUTCHours() >= 12 ? (d1.getUTCHours() - 12) + 'PM' : (d1.getUTCHours()) + 'AM'},${monthMap[d1.getUTCMonth()]} ${d1.getUTCDate()},${d1.getUTCFullYear()}(UTC)`
  }
}