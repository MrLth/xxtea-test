/*
 * @Author: mrlthf11
 * @LastEditors: mrlthf11
 * @Date: 2021-07-02 23:57:43
 * @LastEditTime: 2021-07-07 22:17:44
 * @Description: file content
 */

import { Buffer } from 'buffer'
import decryptChars from './decryptChars'




function stringToUint8array(string) {
  return new TextEncoder().encode(string)
}

function uint8arrayToString(uint8array) {
  return new TextDecoder().decode(uint8array)
}



function decrypt(src: string) {
  const uint8array = Buffer.from(src, 'base64');
  const numArr = [...uint8array.slice(2)]

  console.log(JSON.stringify(numArr))
  const retArr = decryptChars(numArr)

  console.log(JSON.stringify(retArr))
}








decrypt('AACJKELH+TXB3cDN894KL8N8V8VxDmEz6qoUJo5y72bBaSu77a6BVXJEoCLmHJ1gtVO6jTUHxdNVzlFRovp0JVM55FYL2mnP24HUHIOGOsqJSPMDMDCwGsgVHC0rBThVhAisVHwCdMiVYk4J8qYOu8IRkTGKG5kl2BeKsrn3/q8qMHd37aG2ERi2LAXa4eGFDqTRLzoYlgx9fE48Q0LCHzi00EW3/GE/Xj2jccAsdA9UxnId/TYiMgs3wjzjAseM50YwasBmCdYhevo8tet28RCGahRw0QcD9Do90WgnMzFYFB2oILoVV2DR2Xt9UyXFqFFCoy/jmXEwDYlzC4kA3J8w4+DBqLvl+lkOMnLPqoy6NyPgX9lrjSXPj+4C9HcB9hTW40x9g8Edinxoh9T1Zl70w9iCH26CHuZcMZ3oaJjtxQA6Op9K2zoCxOiMNIShIVPhYjpz+sBeY/5Iaz8VSmJ5mnrTufiorACXsspJ6TD7acpWSZM8m8ov+8xRMTYG0oOdHriwaZrGuux3DOlLaMQH+eVVhFhjX/qRSFc6eTkvS2PJkc5BCFBoX4ylXpKxrv6Hadh3u7TCKTZzhJrYD4XnrEHaCJTQiFgaSi6v4B4fxnA7AXXXzU4/djKIp9syg0sjKGlRdEEPsw==')
