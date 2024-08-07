// Challenge https://leetcode.com/problems/reformat-date/description/
// Solution Reference https://leetcode.com/problems/reformat-date/solutions/2745172/crisp-n-clear-o-1-javascript-memory-94-72-meaningful-vars/

/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(str) {
    const monthsMapping = {
        Jan: '01',
        Feb: '02',
        Mar: '03',
        Apr: '04',
        May: '05',
        Jun: '06',
        Jul: '07',
        Aug: '08',
        Sep: '09',
        Oct: '10',
        Nov: '11',
        Dec: '12'
    };
    const [date, month, year] = str.split(' ');
    const updatedDate = (function () {
        let store = '';
        for (let index = 0; index < date.length; index++) {
            if (date[index] > 'a') {
                break;
            }
            store += date[index];
        }
        if (store.length === 1) {
            store = `0${store}`;
        }
        return store;
    })();
    return `${year}-${monthsMapping[month]}-${updatedDate}`;
};