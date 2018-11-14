/**
 * @file capitalize
 * @author yuhui06
 * @date 2018/11/14
 */

/**
 * 字符串首字母大写
 *
 * @param {string} str 要处理的字符串（英文）
 * @return {string} 处理后的字符串
 * @example
 *    capitalize('hello') => Hello
 */
function capitalize(str) {
    if (str == null) {
        return '';
    }

    str = '' + str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = capitalize;
