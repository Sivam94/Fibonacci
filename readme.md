# Question
Write a simple application using a recursive function that accepts a value (integer) and returns the fibonacci value at that position in the series.
The application should be performant at scale to handle larger numbers without slowing down exponentially.

# How to run
- Download and open the code in VS Code
- Open integrated terminal in vs code & run the following command 
    > `npm i`
- After npm install completed, run the following command 
    > `node fibonacci.js`
- Enter an integer to get the fibonacci number at the given position
- Press `ctrl + C` to exit the program

# Implementation Description
The program takes an integer position as input and returns the corresponding Fibonacci number at that position. 

If the given position is less than 2, the program simply returns the position itself since the first two numbers in the Fibonacci sequence are 0 and 1.

It first checks if the given position already exists in the memo object, which is used to store previously calculated Fibonacci numbers. If it does, it simply returns the value stored in the memo object for that position.

If the given position is greater than or equal to 2, the program recursively calculates the Fibonacci number at the previous two positions (position-1 and position-2) by calling the fibonacci function again with those positions as arguments. It then adds those two numbers together and stores the result in the memo object. Finally, it returns the computed Fibonacci number at the given position.
