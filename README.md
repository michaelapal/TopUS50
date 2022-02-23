# TopUS50
general description of the library
#

#### Returns a list of tracks that have the specified popularity
###### @param pop {number} - the popularity rating, must be an integer between 0 and 100
###### @return selections {list} - the lsit of correspohnding songs
**` function getPopularity(pop) `**
#

#### Returns lists of tracks that are between min and max popularity
###### @param min, max {number} - popularity rating must be two integers, 
###### @param min {number} - must be an integer less than the second integer 
###### @param max {number} - must be an integer greater than the first integer
###### @return matches {list} - the list of track names that meet the condition 
**` function getNameByPop (min, max)`**
#

#### Returns the name of an artist through rank 
###### @param rank {number} - the position the artist is ranked must be an integer between 1 and 50 
###### @return options {list} - the name of the artist that matches given rank 
**` function getArtist(rank) `**
#
#### Returns list of track names by the first letter of the song 
###### @param letter {substring} - keep strings in a list that begin with a given letter
###### @return songs {list} - list of track names, each beginning with the same first letter 
**` function getSong(letter) `**
#
#### Returns the average number of popularity list 
###### @ return {number} - average number of popularity list 
**` function getAvgPopularity() `**
#
