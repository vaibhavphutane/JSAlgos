const includes = (str, pattern) => {
  for(let i = 0; i <= (str.length - pattern.length); i++) {
    let j = 0;
    while(str[i + j] === pattern[j] && j < pattern.length) {
      j++;
    }
    if(j === (pattern.length))
    return true;
  }
  return false;
}

const contains = includes('lorie loled', 'ler');
console.log(contains);