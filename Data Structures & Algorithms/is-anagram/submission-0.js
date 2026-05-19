class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        
        if (s.length != t.length) return false;

        const sMap = {}
        const tMap = {}

        for(let i = 0 ; i < s.length ; i++){
            sMap[s[i]] ? sMap[s[i]] ++ : sMap[s[i]] = 1
            tMap[t[i]] ? tMap[t[i]] ++ : tMap[t[i]] = 1
        }
        
        for(let k in sMap){
            
            if(sMap[k] != tMap[k]) return false;

        }

        return true

    }
}
