/*
 * @Author
 * @LastEditors: mrlthf11
 * @Date: 2021-07-04 21:22:38
 * @LastEditTime: 2021-07-08 09:00:25
 * @Description: file content
 */

export const delta = 2654435769
export const k = [895824242,863319408,1952802655,808464432]


export default (str: number[]) => {
  var mx = 0;
  var e = 0;
  var p = 0;
  if (str == null || str.length == 0 || str.length % 4 != 0) {
    return null;
  }
  var datLen = str.length / 4;
  var v = new Array(datLen);
  var i = 0;
  for (i = 0; i < datLen; i++) {
    v[i] = str[i * 4 + 3] << 24 | str[i * 4 + 2] << 16 | str[i * 4 + 1] << 8 | str[i * 4];
  }
  if (k.length < 4) {
    k.length = 4;
  }
  var n = v.length - 1;
  var z = v[n - 1];
  var y = v[0];
  var delta = 2654435769;
  var q = Math.floor(6 + 52 / (n + 1));
  var sum = q * delta & 4294967295;
  while (sum != 0) {
    e = sum >>> 2 & 3;
    for (p = n; p > 0; p--) {
      z = v[p - 1];
      mx = (z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);
      y = v[p] = v[p] - mx & 4294967295;
    }
    z = v[n];
    mx = (z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);
    y = v[0] = v[0] - mx & 4294967295;
    sum = sum - delta & 4294967295;
  }
  return v;
}