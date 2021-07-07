/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-07-04 21:22:38
 * @LastEditTime: 2021-07-04 23:08:53
 * @Description: file content
 */
import bit from "./bit";
import { delta, k } from "./en";


export default (src: number[]) => {
  const datLen = src.length / 4;
  const s = [];
  let i
  for (i = 0; i < datLen; i++) {
    s[i] = bit('|',
      bit('|',
        bit('|',
          bit('<<', src[i * 4 + 3], 24),
          bit('<<', src[i * 4 + 2], 16)
        ),
        bit('<<', src[i * 4 + 1], 8)
      ),
      src[i * 4]
    )
  }


  let n = s.length - 1;
  let r = s[n - 1];
  let l = s[0];
  let count = Math.floor(6 + 52 / (n + 1));

  let sum = bit('&', count * delta, 4294967295);
  let mx, e;
  while (sum !== 0) {
    e = bit('&', bit('>>', sum, 2), 3)



    for (i = n; i > 0; i--) {
      r = s[i - 1];
      mx = bit('^', bit('>>', r, 5), bit('<<', l, 2)) + bit('^', bit('^', bit('>>', l, 3), bit('<<', r, 4)), bit('^', sum, l)) + bit('^', k[bit('^', bit('&', i, 3), e)], r)
      l = s[i] = bit('&', s[i] - mx, 4294967295);

      // console.log('D s', s, '@sum', sum, 'e', e, 'i', i, 'l', l, 'r', r)
    }


    r = s[n];
    mx = bit('^', bit('>>', r, 5), bit('<<', l, 2)) + bit('^', bit('^', bit('>>', l, 3), bit('<<', r, 4)), bit('^', sum, l)) + bit('^', k[bit('^', bit('&', i, 3), e)], r);
    l = s[0] = bit('&', s[0] - mx, 4294967295);


    // console.log('D s', s, '@sum', sum, 'e', e, 'i', i, 'l', l, 'r', r)
    sum = bit('&', sum - delta, 4294967295)


    console.log('d', s)

  }

  return s;
}