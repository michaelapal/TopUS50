# TopUS50
general description of the library
#

#### Returns a list of tracks that have the specified popularity
##### @param pop {number} - the popularity rating, must be an integer between 0 and 100
##### return selections {list} - the lsit of correspohnding songs
**` function getPopularity(pop) `**
#

##### Returns tracks that are between min and max popularity
###### @param min, max {number} - popularity rating must be two integers 
###### returns matches {list} - the list of track names 
**` function getNameByPop (min, max)`**
#

###### Returns the artist at the given rank
###### @param rank {number} - the position the artist is ranked must be an integer between 0 and 50 
###### returns options {list} - the name of the artisit from that rank 
**` function getArtist(rank) `**
#
### Returns names of songs from a given letter 
#### @param letter {substring} - the first letter of the song name must be capitalized 
#### returns songs {list} - the name of the songs that begin with that letter 
**` function getSong(letter) `**
#
## Returns the average number of popularity list 
**` function getAvgPopularity() `**
#
