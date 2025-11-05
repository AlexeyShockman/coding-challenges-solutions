https://www.codewars.com/kata/597e31b6829d0b45f2000011

# Survive The Seven Kingdoms
Ser Byron is a hedge knight traveling the length and breadth of Westeros looking for employment and tournaments.

On his travels Ser Byron has drawn up a map of towns and castles where he can find lodging and hopefully employment as well as areas for camping in between.

### His map is a simple grid:
```
[["Deepwood Motte",  "Shadow Tower",      "Castle Black",   "Eastwatch",      "Bay of Seals"],
 ["The Stony Shore",  "Torrhen's Square", "Winterfell",     "The Dreadfort",  "Karhold"],
 ["Flint's Finger",   "Barrowtown",       "Moat Cailin",    "White Harbour",  "Widow's Wat"],
 ["Pyke",             "Seagard",          "The Twins",      "Sisterton",      "The Fingers"],
 ["The Crag",         "Riverrun",         "Darry",          "The Eyrie",      "Gulltown"],
 ["Castamere",        "Acorn Hall",       "Harrenhal",      "Maidenpool",     "Dragonstone"],
 ["Lannisport",       "Stoney Sept",      "King's Landing", "Blackwater Bay", "Sharp Point"],
 ["High Garden",      "Bitterbridge",     "King's Wood",    "Storm's End",    "Evenfall"],
 ["Old Town",          "Horn Hill",       "Prince's Pass",  "Planky Town",    "Sunspear"]];
```

calculate where he might find himself after a time in the saddle given a starting position and a journey of directions and distances.

### Example:
For `("Winterfell", S5)`, the output should be `'King's Landing'`.

### Input/Output
`[input]` string currentPos
The starting position.
Will be a string inside the map array.

`[input]` string directions
The directions.
Will be a string of cardinal directions with an integer separated by spaces.

`[output]` a currentPos
The final postion.
Will be a string inside the map array.

### Errors
if the journey tries to leave Westeros the final destination can not be reached.

return if too far North `'The Wall blocks your way'`
return if too far in any other direction `'You do not have a ship to cross this sea.'`
