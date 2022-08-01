// Q1
const words = ['cat', 'baby', 'dog', 'bird', 'car', 'ax'];
const string1 = 'tcabnihjs';
const string3 = 'baykkjl';
const string4 = 'bbabylkkj';
const string5 = 'ccc';
const string6 = 'breadmaking';

const findEmbededWord = (words, str) => {
  const dictionary = {};
  for (let i = 0; i < str.length; i++) {
    dictionary[str[i]] = (dictionary[str[i]] || 0) + 1;
  }

  for(let word of words) {
    const wordDic = {};
    for (let i = 0; i < word.length; i++) {
      wordDic[word[i]] = (wordDic[word[i]] || 0) + 1;
    }

    let match = true;
    for(let letter in wordDic) {
     if((dictionary[letter] || 0) < wordDic[letter]) {
        match = false
        break;
     }
    }
    if(match) {
      console.log(word);
    }
  }
};

findEmbededWord(words, string1);

