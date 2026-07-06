class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length < 2) return false;
        
        const count = {};
        let i = 0

        for(i ; i < nums.length ; i++){
            if(count[nums[i]]) return true;

            count[nums[i]] = 1;
        }

        return false
    }
}
