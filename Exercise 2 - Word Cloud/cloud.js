const parag = document.querySelector("#myParagraph");
let str = parag.textContent;
let myCloud = document.querySelector("#myWordCloud");
/* Source of function used to extract more repeated words "https://www.tutorialspoint.com/finding-n-most-frequent-words-from-a-sentence-in-javascript" */
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

let ArrOfRepeated = findMostFrequent(str, 13);
var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
function creatingACloud(){
    let myCloudDiv = document.createElement("div");
    myCloudDiv.style.cssText ="display:grid; background-color: beige; padding:20px; grid-template-columns: auto auto auto; grid-template-rows: auto auto;"
    myCloud.appendChild(myCloudDiv);
    let fSize = 64;
    let margin = 40;
    for (let i = 1; i<ArrOfRepeated.length; i++){
        let child = document.createElement("div");
        child.textContent = ArrOfRepeated[i];
        child.style.fontSize= fSize.toString() + "px";
        child.style.marginLeft = margin.toString() + "px";
        child.style.color = colorArray[i];
        fSize = fSize-4 ;
        margin = margin - 5;
        myCloudDiv.appendChild(child);
    }
}
creatingACloud();