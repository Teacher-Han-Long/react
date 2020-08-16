Hangman
This project is an assignment from a React bootcamp I'm taking.
The images/related css and some starter code were provided w/1 answer hard coded in.

What I added:
    1) added a unique key to each button (I used the letter name)
    2) displaying the number of incorrect guesses, 
        accessing the props nWrong. I used a shorthand trick, 
        and display nothing until there is a wrong guess.
    3) changed maxWrong from a prop to state, so it can rely on the size of 
        the img array. A temporary fix, until I know how to do it in better way.
    4) check if maxWrong has been reached, and if so, change from 
        display of buttons to a message telling user they have lost and what 
        the correct word was.
    5) randomized the answers. In the words.js file, there's an array of words
        and a randomWord function that chooses one word from the array
    6) added a reset button that appears when the game is over,
        offering user a chance to try again. This button resets all state
        and chooses a new random word.
    7) provide alt for the images
    8) (refactoring) if guessedWord() is equal to answer to determine if user has won,
        OR if user has used number of guesses allowed
        display message and reset button.
    9) placed images in own directory
