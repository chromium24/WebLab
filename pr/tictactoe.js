/**
 * Created by Ann Marie on 6/23/2014.
 */

//create a program to determine if there is a winner in Tic Tac Toe. There is no user input. The array is pre-set.
//In function, need to write conditions to check rows and columns. **Row check= 0,1,2/ 3,4,5/ 6,7,8.** Col. check= 0,3,6/1,4,7/2,5,8**Diagonal check= 0,4,8/ 2,4,6


var grid = ['x', 'x','o', 'x', 'o','x', 'o', 'x','o']; //9 element array containing X's, O's, and empty spaces.
//FUNCTION DEFINITIONS---------------------------------
var checkGrid= function(grid)
{
    var win = false;                                   //default win value at false
    if(grid[0]===grid[1] && grid[1]===grid[2] && grid[0]===grid[2])                     //check row 1
    {
        win = true;
        coosole.log(win);
    }
    else if(grid[3]===grid[4] && grid[4]===grid[5] && grid[3]===grid[5])                     //check row 2
    {
        win = true;
        console.log(win);
    }
    else if(grid[6]===grid[7] && grid[7]===grid[8] && grid[6]===grid[8])                     //check row 3
    {
        win = true;
        console.log(win);
    }
    else if(grid[0]===grid[3] && grid[3]===grid[6] && grid[0]===grid[6])                //check col 1
    {
        win = true;
        console.log(win);
    }
    else if(grid[1]===grid[4] && grid[4]===grid[7] && grid[1]===grid[7])                //check col 2
    {
        win = true;
        console.log(win);
    }
    else if(grid[2]===grid[5] && grid[5]===grid[8] && grid[2]===grid[8])                //check col 3
    {
        win = true;
        console.log(win);
    }
    else if(grid[0]===grid[4] && grid[4]===grid[8] && grid[0]===grid[8])                //check diagonal top left to bottom right
    {
        win = true;
        console.log(win);
    }
    else if(grid[2]===grid[4] && grid[4]===grid[6] && grid[2]===grid[6])                //check diagonal bottom left to top right
    {
        win = true;
        console.log(win);
    }
    else                                                //no matches are made thus no wins at this point
    {
        return false;
    }
};//end function checkGrid

checkGrid(grid);                                        //call function to check the grid for any matches
