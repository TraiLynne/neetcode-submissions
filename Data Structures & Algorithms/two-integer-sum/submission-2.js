class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(nums.length === 2) return [0,1];

        let solution = []

        for(let i = 0 ; i < nums.length ; i++){
            for(let j = i + 1 ; j < nums.length ; j++){
                if(i !== j && nums[i] + nums[j] == target) {solution.push(i, j)}
            }
        }

        return solution;
    }
}
