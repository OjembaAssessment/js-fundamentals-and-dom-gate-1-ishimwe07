const parag = document.querySelector("#myParagraph");
let str = parag.textContent;

const num = 6;
const findMostFrequent = (str = '', num = 1) => {
   const strArr = str.split(' ');
   const map = {};
   strArr.forEach(word => {
      if(map.hasOwnProperty(word)){
         map[word]++;
      }else{
         map[word] = 1;
      }
   });
   const frequencyArr = Object.keys(map).map(key => [key, map[key]]);
   frequencyArr.sort((a, b) => b[1] - a[1]);
   return frequencyArr.slice(0, num).map(el => el[0]);
};

let ArrOfRepeated = findMostFrequent(str, 6);

let word1 = str.replaceAll(ArrOfRepeated[1], ('<span style="color: brown;">' + ArrOfRepeated[1] + '</span>'));
let word2 = word1.replaceAll(ArrOfRepeated[2], ('<span style="color: brown;">' + ArrOfRepeated[2] + '</span>'));
let word3 = word2.replaceAll(ArrOfRepeated[3], ('<span style="color: brown;">' + ArrOfRepeated[3] + '</span>'));
let word4 = word3.replaceAll(ArrOfRepeated[4], ('<span style="color: brown;">' + ArrOfRepeated[4] + '</span>'));
let word5 = word4.replaceAll(ArrOfRepeated[5], ('<span style="color: brown;">' + ArrOfRepeated[5] + '</span>'));

parag.innerHTML = word5;
