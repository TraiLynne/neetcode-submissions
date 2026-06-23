class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let sKey = {};
        let tKey = {};

        for(let i = 0 ; i < s.length ; i++){
            sKey[s[i]] ? sKey[s[i]] ++ : sKey[s[i]] = 1;
            tKey[t[i]] ? tKey[t[i]] ++ : tKey[t[i]] = 1;
        }

        for(let key in sKey){
            if(!tKey[key]) return false;

            if(sKey[key] !== tKey[key]) return false
        }

        return true
    }
}
