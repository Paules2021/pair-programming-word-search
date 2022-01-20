const wordSearch = (letters, word) => {
    
    if (typeof word !== 'string') {
      return undefined
    }
      
    const horizontalJoin = letters.map(ls => ls.join(''))
    console.log(horizontalJoin)
    
    for (l of horizontalJoin) {
      if (l.includes(word)) {
        return true; 
      }
    }
    const verticalJoin = [];
    if (letters.length > 0) {
      for (let i = 0; i < letters[0].length; i++) {
        let string = '';
        for (const ls of letters) {
          string += ls[i];
        }
        verticalJoin.push(string);
      }
    }
  
    for (l of verticalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    return false
  }
  
 /* const testArray = [
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ];
  
  console.log(wordSearch(testArray,"LARRY"))
  */
  
  

module.exports = wordSearch