/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let defangedIpAddr = "";
    for(let i = 0; i < address.length; i++) {
        if(address[i] !== ".")
           defangedIpAddr =  defangedIpAddr.concat(address[i]);                        
        else
            defangedIpAddr = defangedIpAddr.concat("[.]");
    }
    return defangedIpAddr;
};
