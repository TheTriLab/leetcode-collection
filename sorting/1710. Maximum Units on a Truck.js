// Challenge https://leetcode.com/problems/maximum-units-on-a-truck/description/

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    // Sorting the box type with the highest units first
    boxTypes.sort((a, b) => b[1] - a[1])
    let boxCount = 0
    let unitCount = 0
    let i = 0
    // Take up in order the boxes from the highest units box type to the lowest until it reaches the truckSize
    while (i < boxTypes.length && boxCount <= truckSize) {
        const boxTaken = Math.min(boxTypes[i][0], truckSize - boxCount)

        unitCount += (boxTaken * boxTypes[i][1])
        boxCount += boxTaken

        i++
    }

    return unitCount
};