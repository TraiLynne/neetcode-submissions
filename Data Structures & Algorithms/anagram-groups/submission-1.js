class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length < 2) return [strs];
        let key = {};
        let solution = []

        for(let i = 0 ; i < strs.length ; i++){
            let arr = new Array(26).fill(0);

            for(let j = 0 ; j < strs[i].length ; j++){
                let charCode = strs[i][j].charCodeAt() - "a".charCodeAt()
                arr[charCode]++
            }

            key[arr] ? key[arr].push(strs[i]) : key[arr] = new Array(strs[i])
        }

        for(let k in key){
            solution.push(key[k])
        }

        return solution;
    }
}
