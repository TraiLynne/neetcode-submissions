class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        for(let i = 0; i < nums.length ; i++){
            let num = nums[i]
            if (nums.indexOf(num) !== nums.lastIndexOf(num)) return true
        }

        return false;
    }
}
