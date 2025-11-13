https://www.codewars.com/kata/connected-blocks

# Connected blocks
Given a 10x10 grid of 100 cells, with columns indexed 0 to 9 (left to right) and rows indexed 0 to 9 (bottom to top). 
The input of your program will be a comma-separated string of cell identifiers, identifyng the cells that are coloured black. Each cell identifier is a two digit number of the form `<column_index><row_index>`.

For example, an input of `18,00,95,40,36,26,57,48,54,65,76,87,97,47` represents the following grid:

![img.png](img.png)

When given this input, your program should output the `size` of the largest block of connected black cells, witch is outlined in red in the example above. So in this case your program would return `3`.

Note that two black cells are considered to be connected if they share an edge, but they are not connected if the share only a corner.

The input could have some cells with invalid format or repeated cells that should not be taken into account.

For example: `00,00,111,1,1a is` the same as `00`