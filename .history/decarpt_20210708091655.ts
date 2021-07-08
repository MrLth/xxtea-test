/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-07-02 23:57:43
 * @LastEditTime: 2021-07-08 09:14:35
 * @Description: file content
 */

import { Buffer } from 'buffer'
import decryptChars from './decryptChars'



function uint8arrayToString(uint8array) {
  return new TextDecoder().decode(uint8array)
}



export function decrypt(src: string) {
  let buffer = Buffer.from(src, 'base64');
  const retArr = decryptChars([...buffer.slice(2)])
  const uint8array = splitArray(retArr.slice(0, -1))
  return uint8arrayToString(uint8array)
}


function splitArray(arr: number[]) {
  const rst = []
  for (const item of arr) {
    rst.push(item & 255)
    rst.push(item >> 8 & 255)
    rst.push(item >> 16 & 255)
    rst.push(item >> 24 & 255)
  }
  return new Uint8Array(rst)
}


