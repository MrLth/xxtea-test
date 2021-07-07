/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-07-02 23:57:43
 * @LastEditTime: 2021-07-05 00:35:54
 * @Description: file content
 */

import { Buffer } from 'buffer'
import bit from './bit'
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

function encrypt(src: string) {
  const uint8array = stringToUint8array(src)
  const encryptedData = encryptData(uint8array)
  const rst = Buffer.from(encryptedData).toString('base64')
  console.log(rst)
  return rst
}

function encryptData(uint8array: Uint8Array) {
  return new Uint8Array([0, 0, ...encryptUnit8Array(uint8array)])
}


function encryptUnit8Array(uint8array: Uint8Array) {
  const len = uint8array.length
  const arr = splitBytes(uint8array)
  arr.push(len)
  const dataArr = encryptChars(arr)
  // console.log(dataArr)
  return new Uint8Array(dataArr)
}


function decrypt(src: string) {
  const buffer = Buffer.from(src, 'base64');

  return decryptUnit8Array(buffer)
}

function decryptUnit8Array(uint8array: Uint8Array) {

  const arr = [...uint8array.slice(2)]


  console.log(Buffer.from(uint8array.slice(2)).toString('base64'))

  // const dataArr = decryptChars(arr)

  // console.log(dataArr)

  // dataArr.pop()
  // const unit8array = splitArray(dataArr)
  // console.log(uint8arrayToString(unit8array))
}




function splitBytes(uint8array: Uint8Array) {
  const needLen = (4 - uint8array.length % 4) % 4;
  const newUint8array = new Uint8Array([...uint8array, ...new Array(needLen).fill(0)])

  const rst = []
  const len = newUint8array.length / 4
  for (let i = 0; i < len; i++) {
    let tmp = 0
    for (let j = 0; j < 4; j++) {
      tmp = bit('|', bit('<<', newUint8array[i * 4 + j], j * 8), tmp)
    }
    rst.push(tmp)
  }
  return rst
}



function splitArray(arr: number[]) {
  const rst = []
  for (const item of arr) {
    rst.push(bit('&', item, 255))
    rst.push(bit('&', bit('>>', item, 8), 255))
    rst.push(bit('&', bit('>>', item, 16), 255))
    rst.push(bit('&', bit('>>', item, 24), 255))
  }
  return new Uint8Array(rst)
}

decrypt('AABk6Cafr2wgok8sYWggHtID7/v74c6I3AslT0Kfqlc0nrInsQu5J5hqWnysMf0uqVz8w7TaE8gy578nJKJTJN7Ga97mxPFgkcN0IcpCMyexbFPhCzlP/iuP6BZqLmOaf722Cquel4k2ds8l9mC0yy90yD0957NtbKHLJw2Se8sORPo3cBZEIpDi')
// encrypt('test')
// decrypt('AACslH6GlmozOPTAKlOI810dkZGe+pIMi59nLXd3p6X2r6QmNJWEeDp7mat95gzCn0fKx0vdvxztXksa9QPIsXCVwMxLt0TtYiJvxDAqpA4T2gdLRRJjzEi+qRzZUtL8xbJ5d9XjRpPeAy/jh1F77ZLgoBRAa+pHURldrmYWdBviWmVvlY11TTMU7KaFAyQciPFbEdMd')
