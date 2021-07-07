/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-07-04 21:23:54
 * @LastEditTime: 2021-07-04 23:08:46
 * @Description: file content
 */
import bit from "./bit";
import { delta, k } from "./decarpt";

export default (src: number[]) => {
  const s = src.slice()


  const n = s.length - 1
  let r = s[n]
  let l = s[0]
  let count = Math.floor(6 + 52 / (n + 1))

  let sum = 0;
  let e = 0
  let mx = 0
  let i

  while (count--) {
    console.log('e', s)
    sum = bit('&', sum + delta, 4294967295)
    e = bit('&', bit('>>', sum, 2), 3)
    for (i = 0; i < n; i++) {
      l = s[i + 1]
      mx = bit('^', bit('>>', r, 5), bit('<<', l, 2)) + bit('^', bit('^', bit('>>', l, 3), bit('<<', r, 4)), bit('^', sum, l)) + bit('^', k[bit('^', bit('&', i, 3), e)], r)
      r = s[i] = bit('&', s[i] + mx, 4294967295)

      // console.log('E s', s, '@sum', sum, 'e', e, 'i', i, 'l', l, 'r', r)
    }
    l = s[0]
    mx = bit('^', bit('>>', r, 5), bit('<<', l, 2)) + bit('^', bit('^', bit('>>', l, 3), bit('<<', r, 4)), bit('^', sum, l)) + bit('^', k[bit('^', bit('&', i, 3), e)], r)
    r = s[n] = bit('&', s[n] + mx, 4294967295)

  }

  const rst = []
  let v = 0
  for (i = 0; i < s.length; i++) {
    v = s[i];
    rst[i * 4 + 3] = bit('&', bit('>>', v, 24), 255);
    rst[i * 4 + 2] = bit('&', bit('>>', v, 16), 255);
    rst[i * 4 + 1] = bit('&', bit('>>', v, 8), 255);
    rst[i * 4] = bit('&', v, 255);
  }

  return rst
}