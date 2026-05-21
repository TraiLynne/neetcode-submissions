class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 1) return [strs];

        let solution = [];
        let skip = [];
        let sortedArray = strs.map((str) => str.split("").sort().join(""));


        for (let i = 0; i < sortedArray.length; i++) {
            let result = [strs[i]];
            if (!skip.includes(i)) {
                for (let j = i + 1; j < sortedArray.length; j++) {
                    if (sortedArray[i] === sortedArray[j] && !skip.includes(j)) {
                        result.push(strs[j]);
                        skip.push(j);
                    }
                }
                solution.push(result);
            }
        }

        return solution
    }
}
