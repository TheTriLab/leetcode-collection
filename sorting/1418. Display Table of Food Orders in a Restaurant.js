// Challenge https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/4628089/js-solution-by-bharadwaj/
// Solution Reference https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/description/

/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
    let tabs = {}, items = {};
    for (order of orders) {
        food = order[2];
        items[food] = undefined;
    }
    let itemsArr = ['Table', ...Object.keys(items).sort()];
    for (order of orders) {
        let tabsNum = order[1], food = order[2], row = tabs[tabsNum];
        let idx = itemsArr.findIndex((el) => el === food);
        if (row) {
            tabs[tabsNum][idx] = (parseInt(tabs[tabsNum][idx]) + 1).toString();
        } else {
            let arr = new Array(itemsArr.length - 1).fill('0');
            tabs[tabsNum] = [tabsNum, ...arr];
            tabs[tabsNum][idx] = '1';
        }
    }
    return [itemsArr, ...Object.values(tabs)];
};