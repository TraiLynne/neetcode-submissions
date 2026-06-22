class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length < 2) return false;
        
        let result = false;
        let keyCount = {};

        nums.forEach(num => keyCount[num] ? keyCount[num] ++ : keyCount[num] = 1 );

        for(let key in keyCount){
            if(keyCount[key] !== 1) {result = true}
        }

        return result;
    }
}
