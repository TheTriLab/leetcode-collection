// Challenge https://leetcode.com/problems/find-common-characters/description/
// Solution Reference https://leetcode.com/problems/find-common-characters/solutions/5260723/one-by-one-comparison-69-beats-100-easy-solution-with-explanation/

let common = words[0].split('').sort();
    for(let x of words){
        x=x.split('').sort();

        let lp= 0;
        let rp= 0;
        let len=common.length;
        let newc=[];
        while(lp<len && rp<x.length){
            if(common[lp]==x[rp]){
                newc.push(x[rp]);
                lp++;
                rp++;
            }
            else{
                if(common[lp]<x[rp])lp++;
                else rp++;
            }
        }
        common=newc;

    }
    return common;