/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-07-02 23:57:43
 * @LastEditTime: 2021-07-07 22:12:26
 * @Description: file content
 */

import { Buffer } from 'buffer'
import decryptChars from './decryptChars'
import encryptChars from './encryptChars'

export const delta = 2654435769
export const k = [875770417, 943142453, 875770417, 943142453]



function stringToUint8array(string) {
  return new TextEncoder().encode(string)
}

function uint8arrayToString(uint8array) {
  return new TextDecoder().decode(uint8array)
}



function decrypt(src: string) {
  const uint8array = Buffer.from(src, 'base64');
  const numArr = [...uint8array.slice(2)]

  return decryptUnit8Array(uint8array)
}








decrypt('AABk6Cafr2wgok8sYWggHtID7/v74c6I3AslT0Kfqlc0nrInsQu5J5hqWnysMf0uqVz8w7TaE8gy578nJKJTJN7Ga97mxPFgkcN0IcpCMyexbFPhCzlP/iuP6BZqLmOaf722Cquel4k2ds8l9mC0yy90yD0957NtbKHLJw2Se8sORPo3cBZEIpDi')
