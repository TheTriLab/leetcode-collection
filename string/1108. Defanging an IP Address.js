// Challenge https://leetcode.com/problems/defanging-an-ip-address/description/

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.split('.').join('[.]');
 };