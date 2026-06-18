class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let fullProduct = 1;
        let prodsNum = []

        nums.forEach(num => fullProduct *= num);

        if(fullProduct !== 0){
            prodsNum = nums.map(num => fullProduct/num)
        } else {
            for(let i = 0 ; i < nums.length ; i++){
                fullProduct = 1;
                nums.forEach((num, index) => {if(i !== index) {fullProduct *= num}} );
                prodsNum.push(fullProduct)
            }
        }

        return prodsNum
    }
}
