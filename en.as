function encrypt_CharArray(str:Array, key:Array):Array {
    var mx:int = 0;
    var e:int = 0;
    var p:int = 0;
    if (str == null || str.length == 0) {
        return null;
    }
    var v:Array = new Array(str.length);
    var i:int = 0;
    for (i = 0; i < str.length; i++) {
        v[i] = str[i];
    }
    var k:Array = new Array(key.length);
    for (i = 0; i < key.length; i++) {
        k[i] = key[i];
    }
    if (k.length < 4) {
        k.length = 4;
    }
    var n:int = v.length - 1;
    var z:int = v[n];
    var y:int = v[0];
    var delta:int = 2654435769;
    var q:int = Math.floor(6 + 52 / (n + 1));
    var sum:int = 0;
    while (0 < q--) {
        sum = sum + delta & 4294967295;
        e = sum >>> 2 & 3;
        for (p = 0; p < n; p++) {
            y = v[p + 1];
            mx = (z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);
            z = v[p] = v[p] + mx & 4294967295;
        }
        y = v[0];
        mx = (z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);
        z = v[n] = v[n] + mx & 4294967295;
    }
    var datLen:int = v.length;
    var ret:Array = new Array(datLen * 4);
    var datVal:uint = 0;
    i = 0;
    while (i < datLen) {
        datVal = v[i];
        ret[i * 4 + 3] = datVal >> 24 & 255;
        ret[i * 4 + 2] = datVal >> 16 & 255;
        ret[i * 4 + 1] = datVal >> 8 & 255;
        ret[i * 4] = datVal & 255;
        i++;
    }
    return ret;
}
