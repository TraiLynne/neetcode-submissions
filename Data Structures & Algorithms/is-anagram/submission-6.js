class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;

        let key = new Array(26).fill(0);
        let rootIndex = "a".charCodeAt(0);

        for(let i = 0 ; i < s.length ; i++){
            let sIndex = s.charCodeAt(i) - rootIndex;
            let tIndex = t.charCodeAt(i) - rootIndex;

            key[sIndex]++
            key[tIndex]--
        }

        for(let i = 0 ; i < key.length ; i++){
            if(key[i] !== 0) return false
        }

        return true
    }
}
