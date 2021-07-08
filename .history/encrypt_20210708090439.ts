/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-07-08 08:59:39
 * @LastEditTime: 2021-07-08 08:59:39
 * @Description: file content
 */

function stringToUint8array(string) {
  return new TextEncoder().encode(string)
}

function encrypt(src: string) {
  const uint8array = stringToUint8array(src)
  const encryptedData = encryptData(uint8array)
  const rst = Buffer.from(encryptedData).toString('base64')
  console.log(rst)
  return rst
}