class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let tracker = {};
        let solution = []

        nums.forEach((num) => (tracker[num] ? tracker[num]++ : (tracker[num] = 1)));

        let frequencyCounts = Object.values(tracker).sort((a,b) => b-a).slice(0, k)


        for(let i = 0 ; i < frequencyCounts.length ; i++){
            for(let key in tracker){
                let intVal = parseInt(key)
                if(tracker[key] === frequencyCounts[i] && !solution.includes(intVal)){
                    solution.push(intVal) 
                }
            }
        }

        return solution
    }
}
