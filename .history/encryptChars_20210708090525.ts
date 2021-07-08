/*
 * @Author
 * @LastEditors: mrlthf11
 * @Date: 2021-07-04 21:23:54
 * @LastEditTime: 2021-07-08 09:02:02
 * @Description: file content
 */
export const delta = 2654435769
export const k = [895824242, 863319408, 1952802655, 808464432]

export default (str: number[]) => {
  var mx = 0;
  var e = 0;
  var p = 0;
  if (str == null || str.length == 0) {
    return null;
  }
  var v = new Array(str.length);
  var i = 0;
  for (i = 0; i < str.length; i++) {
    v[i] = str[i];
  }
  if (k.length < 4) {
    k.length = 4;
  }
  var n = v.length - 1;
  var z = v[n];
  var y = v[0];
  var delta = 2654435769;
  var q = Math.floor(6 + 52 / (n + 1));
  var sum = 0;
  while (0 < q--) {
    sum = sum + delta & 4294967295;
    e = sum >>> 2 & 3;
    for (p = 0; p < n; p++) {
      y = v[p + 1];
      mx = (z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);
      z = v[p] = v[p] + mx & 4294967295;
    }
    y = v[0];
    mx = (z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);
    z = v[n] = v[n] + mx & 4294967295;
  }
  var datLen = v.length;
  var ret = new Array(datLen * 4);
  var datVal = 0;
  i = 0;
  while (i < datLen) {
    datVal = v[i];
    ret[i * 4 + 3] = datVal >> 24 & 255;
    ret[i * 4 + 2] = datVal >> 16 & 255;
    ret[i * 4 + 1] = datVal >> 8 & 255;
    ret[i * 4] = datVal & 255;
    i++;
  }
  return ret;
}