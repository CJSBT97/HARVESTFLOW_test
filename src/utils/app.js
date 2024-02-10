export function truncateString (str) {
    if (str.length <= 7) {
        return str; // 如果字符串长度小于等于7，则不需要截断，直接返回原字符串
    } else {
        var firstFour = str.substring(0, 4); // 取前四位
        var lastThree = str.substring(str.length - 3); // 取后三位
        return firstFour + '...' + lastThree; // 拼接前四位、三个点和后三位
    }
}