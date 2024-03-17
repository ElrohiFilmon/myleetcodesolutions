/**
 * @param {string} s 
 * @return {number} 
 */
function romanToInt(s) {
    const romanToIntegerMap = new Map([
      ["I", 1],
      ["V", 5],
      ["X", 10],
      ["L", 50],
      ["C", 100],
      ["D", 500],
      ["M", 1000],
    ]);
    const specialCasesMap = new Map([
      ["IV", 4],
      ["IX", 9],
      ["XL", 40],
      ["XC", 90],
      ["CD", 400],
      ["CM", 900],
    ]);
  
    let result = 0;
    let i = 0;
  
    while (i < s.length) {
      const twoChar = s.substring(i, i + 2);
      if (specialCasesMap.has(twoChar)) {
        result += specialCasesMap.get(twoChar);
        i += 2;
      } else {
        
        const charValue = romanToIntegerMap.get(s.charAt(i));
        if (charValue === undefined) {
          return -1;
        }
        result += charValue;
        i++;
      }
    }
  
    return result;
}
