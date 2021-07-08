function setSecretKey(actId:int, cgiName:String):void {
    var index:int = 0;
    var dataObj:Object = {};
    dataObj.arr1 = actId.toString().split("");
    dataObj.arr0 = cgiName.toString().split("");
    var key:String = "";
    for (var i:int = 0; i < 16; i++) {
        index = i % 2;
        if (dataObj["arr" + index].length > 0) {
            key += dataObj["arr" + index].shift();
        } else {
            index = (index + 1) % 2;
            if (dataObj["arr" + index].length > 0) {
                key += dataObj["arr" + index].shift();
            } else {
                key += "0";
            }
        }
    }
    KEY_DATA.LIBS[0] = [key];
}
