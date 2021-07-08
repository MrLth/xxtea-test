/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-07-08 08:59:39
 * @LastEditTime: 2021-07-08 09:05:28
 * @Description: file content
 */

import encryptChars from "./encryptChars"

function stringToUint8array(string) {
  return new TextEncoder().encode(string)
}

function encrypt(src: string) {
  const uint8array = stringToUint8array(src)
  const numArr = encryptChars([...uint8array])
  const len = numArr.length



  const rst = Buffer.from(numArr).toString('base64')
  console.log(rst)
  return rst
}

encrypt('cmd=0&unkown=@CqqEL3gwa&skey=@CqqEL3gwa&platfrom=2&encryptTime=1625703024440')