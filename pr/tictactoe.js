/**
 * Created by Ann Marie on 6/23/2014.
 */

//create a program to determine if there is a winner in Tic Tac Toe. There is no user input. The array is pre-set.
//In function, need to write conditions to check rows and columns. **Row check= 0,1,2/ 3,4,5/ 6,7,8.** Col. check= 0,3,6/1,4,7/2,5,8**Diagonal check= 0,4,8/ 2,4,6

//6/25/14 Revision
// I am going to refine this program to remove function duplications. Will use two separate conditions to check for diagonal wins and
// two nested for loops to check rows and cols.

var grid = ['x', 'x','o', 'o', 'x','x', 'o', 'x','o'];

//9 element array containing X's, O's, and empty spaces. Loops used for checking rows and cols, not diagonals.
//FUNCTION DEFINITIONS---------------------------------
var checkGrid;
checkGrid = function (grid) {
    var win = false;                                        //default win value at false
    //BEGIN CHECK DIAGONALS
    var D = 2;                                               //starting index value for diagonal check
    if (grid[2 * D - 2 * D] === grid[2 * D] && grid[2 * D] === grid[4 * D]) //diagonal check for grid elements 0,4,8 (top left to bottom right)
    {
        win = "A diagonal win";                                                                         //if diagonal equality found, then win set to true
        console.log(win);                                                                   //send confirmation to user
    }
    if (grid[D] === grid[2 * D] && grid[2 * D] === grid[3 * D] && grid[D] === grid[3 * D])   //diagonal check for grid elements 2,4,6 (top right to bottom left)
    {
        win = "A diagonal win";                                                                         //if diagonal equality equality found, then win set to true
        console.log(win);                                                                   //send confirmation to user
    }
    else {
        win = false;                                                                        //redundant, perhaps?
    }

    //BEGIN CHECK ROWS AND COLS
    for (var R = 0; R < 7; R + 3)                              //Setting boundaries for Rows where there are 3 rows and will loop through 3 times.
    {
        for (var C = 0; C < 3; C++)                         //Setting boundaries for Columns where there are 3 columns and will loop through 3 times.
        {
            if (grid[C] === grid[C + 3] && grid[C + 3] === grid[C + 6] && grid[C] === grid[C + 6]) {
                win = "A column win";                                                                         //if Row equality found, then win set to true
                console.log(win);                                                                   //send confirmation to user
            }
            else {
                win = false;
            }
        }//end for loop check columns

        if (grid[R] === grid[R + 1] && grid[R + 1] === grid[R + 2] && grid[R] === grid[R + 2])                //Initial value R=0; check Row elements 0,1,2 for equality

        {
            win = "A row win";                                                                         //if Column equality found, then win set to true
            console.log(win);                                                                   //send confirmation to user
        }
        else {
            win = false;
        }
    }//end for loop check rows
/*
    if (win === false) {
        win = "No one won!";
    }*/
};//END FUNCTION DEFINITION checkGrid


checkGrid(grid);                                        //call function to check the grid for any matches
