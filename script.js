const url = "https://raw.githubusercontent.com/michaelapal/TopUS50/main/Top%2050%20USA%20(1).csv"; 

const trackName = getColumn(url,2);
const artist = getColumn(url,3);
const position = getColumn(url,1);
const popularity = getColumn(url,4);

//Selects track names through popularity list 
//pop {number} - a number to depict if the value given produces a song that meets the condition. 
//if the popularity given matches an element from the list then the program returns {boolean} a list of tracks that have the specified popularity. 
function getPopularity(pop){

  var selections = [];
  for (var i in trackName){
    if (popularity[i] == pop){
      selections.push(trackName[i]);
    }
    
  }
  if(selections.length == 0) {
      selections = "No selections found. Please check your parameter."; 
    }
  return selections;
} 

//Selects track names between two integers through popularity list
// min, max {number} - two values to decide which songs, from trackName list, are within the range of provided elements from popularity list
// min {number} - must enter less than or equal to integer as first value  
// max {number} - must enter greater than or equal to than integer as second value.
//Returns {boolean} - tracks that are between min and max popularity
function getNameByPop(min, max){

var matches = [];
for (var i in trackName){
  if(popularity[i] >= min && popularity[i] <= max){
     matches.push(trackName[i]);
  }
  
}
if(matches.length == 0) {
      matches = "No matches found. Enter invalid parameter."; 
    }
 return matches;
}

//Selects an artist through popularity list 
//rank {number} - a number to decide the position of an artist 
//if the position given is between values 1 through 50 then program returns{boolean} the artist at the given rank
function getArtist(rank){

var options = []; 
for (var i in artist){
if (position[i]== rank){
  options.push(artist[i]);
}
}
if(options.length == 0) {
    options = "No matches found"; 
  }
return options;
}


//Selects songs from trackName list that begin with a given letter
// letter {substring} - keep strings in a list that begin with a given letter
//returns {boolean} - list of songs, each with the same first letter
function getSong(letter){

var songs = [];
for (var i in trackName){
  if (trackName[i].substring(0,1).toLowerCase() == letter.toLowerCase()){
songs.push(trackName[i]);
  }
}
if(songs.length == 0) {
    songs = "No matches found";
}
return songs;
}

//Finds the average value in a popularity list
//@return {number} - the average vaule in popularity list 
function getAvgPopularity(){
 var sum = 0;
 var avergae = 0;
 for (var i in popularity){
   sum += Number(popularity[i]);
 }

return sum/popularity.length;
}


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