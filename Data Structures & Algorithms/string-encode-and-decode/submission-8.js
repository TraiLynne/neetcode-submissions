class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let length = strs.length;
        let encoded_str = `${length}||`

        if(length === 0) return "0"

        strs.forEach((str, index) => 
            index !== length - 1 ? 
                encoded_str += `${str}#${length}#` 
                : encoded_str += str
        )
        
        return encoded_str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === "0") {
            return []
        } else {
            let decoded = str.split("||");

            return decoded[1].split(`#${decoded[0]}#`)
        }
    }
}
