class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prodsNum = []
        
        for(let i = 0 ; i < nums.length ; i++){
            let fullProduct = 1;
            nums.forEach((num, index) => {if(i !== index) {fullProduct *= num}} );
            prodsNum.push(fullProduct)
        }

        return prodsNum
    }
}
