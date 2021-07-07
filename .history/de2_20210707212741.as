function decrypt_CharArray(str:Array, key:Array):Array {
    var mx:int = 0;
    var e:int = 0;
    var p:* = 0;
    if (str == null || str.length == 0 || str.length % 4 != 0) {
        return null;
    }
    var datLen:int = str.length / 4;
    var v:Array = new Array(datLen);
    var datVal:uint = 0;
    var i:int = 0;
    i = 0;
    while (i < datLen) {
        v[i] = str[i * 4 + 3] << 24 | str[i * 4 + 2] << 16 | str[i * 4 + 1] << 8 | str[i * 4];
        i++;
    }
    var k:Array = new Array(key.length);
    i = 0;
    while (i < key.length) {
        k[i] = key[i];
        i++;
    }
    if (k.length < 4) {
        k.length = 4;
    }
    var n:int = v.length - 1;
    var z:int = v[n - 1];
    var y:int = v[0];
    var delta:int = -1640531527;
    var q:int = Math.floor(6 + 52 / (n + 1));
    var sum:int = q * delta & -1;
    while (sum != 0) {
        e = sum >>> 2 & 3;
        p = n;
        while (p > 0) {
            z = v[p - 1];
            mx = (z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);
            y = v[p] = v[p] - mx & -1;
            p--;
        }
        z = v[n];
        mx = (z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);
        y = v[0] = v[0] - mx & -1;
        sum = sum - delta & -1;
    }
    return v;
}
