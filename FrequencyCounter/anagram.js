const isAnagram = (str1, str2) => {
  const lookup = {};
  for (let i = 0; i < str1.length; i++) {
    lookup[str1[i]] = (lookup[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if(!lookup[str2[i]]) {
      return false
    }
    lookup[str2[i]] -= 1; 
  }
  return true;
}

console.log(isAnagram('anagr', 'ngara'));
