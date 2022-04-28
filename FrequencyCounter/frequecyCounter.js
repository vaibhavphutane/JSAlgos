const countFrequency = (num1, num2) => {
  const str1 = String(num1);
  const str2 = String(num2);

  if (str1.length !== str2.length) {
    return false;
  }
  const countMap = {};
  for (let i = 0; i < str1.length; i++) {
    countMap[str1[i]] = (countMap[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str1.length; i++) {
      if(countMap[str2[i]]) {
        countMap[str2[i]] = countMap[str2[i]] - 1;
      } else {
        return false;
      }
  }
  return true;
}
