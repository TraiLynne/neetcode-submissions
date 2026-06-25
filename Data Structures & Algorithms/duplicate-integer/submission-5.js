class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length < 2) return false;

        let visited = {};

        for(let i = 0; i < nums.length; i++){
            if(visited[nums[i]]) return true;

            visited[nums[i]] ? visited[nums[i]] += 1 : visited[nums[i]] = 1;
        }

        return false
    }
}
