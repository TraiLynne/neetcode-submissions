class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};
        let solution = false;

        nums.forEach(n => {
            map[n] ? map[n]++ : map[n] = 1
        })

        for(let num in map){
            if(map[num] != 1){ solution = true}
        }

        return solution;
    }
}
