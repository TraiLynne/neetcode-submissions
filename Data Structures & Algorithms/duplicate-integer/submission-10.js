class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length < 2) return false;
        
        nums.sort();

        let i = 0;
        let j = 1;

        for(i ; i < nums.length ; i++, j++){
            if(nums[i] === nums[j]) return true
        }

        return false;
    }
}
