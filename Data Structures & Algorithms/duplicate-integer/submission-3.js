class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = false;
        let keyCount = {};

        nums.forEach(num => keyCount[num] ? keyCount[num] ++ : keyCount[num] = 1 );

        for(let key in keyCount){
            if(keyCount[key] !== 1) {result = true}
        }

        return result;
    }
}
