/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-07-08 08:59:39
 * @LastEditTime: 2021-07-08 09:11:37
 * @Description: file content
 */

import encryptChars from "./encryptChars"

function stringToUint8array(string) {
  return new TextEncoder().encode(string)
}

function encrypt(src: string) {
  const uint8array = stringToUint8array(src)
  const len = uint8array.length
  const numArr = splitBytes(uint8array)
  const retUint8array = new Uint8Array([0, 0, ...encryptChars([...numArr, len])])

  return Buffer.from(retUint8array).toString('base64')
}


function splitBytes(uint8array: Uint8Array) {
  const needLen = (4 - uint8array.length % 4) % 4;
  const newUint8array = new Uint8Array([...uint8array, ...new Array(needLen).fill(0)])

  const rst = []
  const len = newUint8array.length / 4
  for (let i = 0; i < len; i++) {
    let tmp = 0
    for (let j = 0; j < 4; j++) {
      tmp = newUint8array[i * 4 + j] << j * 8 | tmp
    }
    rst.push(tmp)
  }
  return rst
}


console.log(encrypt('cmd=0&unkown=@CqqEL3gwa&skey=@CqqEL3gwa&platfrom=2&encryptTime=1625703024440'))