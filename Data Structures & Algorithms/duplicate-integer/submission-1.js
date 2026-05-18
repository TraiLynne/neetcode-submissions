class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let solution = false;

        for(let i = 0; i < nums.length ; i++){
            let num = nums[i]
            if (nums.indexOf(num) !== nums.lastIndexOf(num)){
                solution = true
                return solution;
            }
        }

        return solution;
    }
}
