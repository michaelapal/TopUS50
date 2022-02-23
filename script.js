const url = "https://raw.githubusercontent.com/michaelapal/TopUS50/main/Top%2050%20USA%20(1).csv"; 

const trackName = getColumn(url,2);
const artist = getColumn(url,3);
const position = getColumn(url,1);
const popularity = getColumn(url,4);
//const popularity = [2, 4, 7, 878, 43];
//Returns a list of tracks that have the specified popularity
function getPopularity(pop){

  var selections = [];
  for (var i in trackName){
    if (popularity[i] == pop){
      selections.push(trackName[i]);
    }
  }
  return selections;
}
console.log(getPopularity(83));

//Returns tracks that are between min and max popularity
function getNameByPop(min, max){

var matches = [];
for (var i in trackName){
  if(popularity[i] > min && popularity[i] < max){
     matches.push(trackName[i]);
  }
}
 return matches;
}
console.log(getNameByPop(89, 91));

//Returns the artist at the given rank
function getArtist(rank){

var options = []; 
for (var i in artist){
if (position[i]== rank){
  options.push(artist[i]);
}
}
return options;
}
console.log(getArtist(3));

//Keep strings in a list that begin with a given letter
//User inputs letter and names of songs, in the list, will appear that begin with that letter. 
function getSong(letter){

var songs = [];
for (var i in trackName){
  if (trackName[i].substring(0,1) == letter){
songs.push(trackName[i]);
  }
}
return songs;
}
console.log(getSong("C"))

//Find the average value in a list
//User 
function getAvgPopularity(){
 var sum = 0;
 var avergae = 0;
 for (var i in popularity){
   sum += Number(popularity[i]);
 }
 console.log(sum);

return sum/popularity.length;
}
console.log(getAvgPopularity());








function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }
