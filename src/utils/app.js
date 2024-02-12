export function truncateString (str) {
    if (str.length <= 7) {
        return str; // 如果字符串长度小于等于7，则不需要截断，直接返回原字符串
    } else {
        var firstFour = str.substring(0, 4); // 取前四位
        var lastThree = str.substring(str.length - 3); // 取后三位
        return firstFour + '...' + lastThree; // 拼接前四位、三个点和后三位
    }
}

export function daysSince (timestamp) {
    const now = Date.now(); // 获取当前时间戳（毫秒）

    // 获取当天的零点时间戳
    let startOfDay = new Date().setHours(0, 0, 0, 0);

    // 如果当前时间已经过了当天的 12 点，则将其算作第二天的开始
    if (now >= startOfDay + 12 * 60 * 60 * 1000) {
        startOfDay = startOfDay + 24 * 60 * 60 * 1000;
    }

    const difference = now - timestamp; // 计算时间差（毫秒）
    const days = difference / (1000 * 60 * 60 * 24); // 将时间差转换为天数
    return Math.ceil(days); // 返回天数并向下取整
}