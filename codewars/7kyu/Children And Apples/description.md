https://www.codewars.com/kata/596f1bdeda9b3b0297000018/train/javascript

# Simple Fun #344: Children And Apples

## Task
Here are some children, each with a certain number of apples. Now we have to do something to make the number of apples of each child are equal.

We need to complete the redistribution step by step. With each step, we can transfer `two apples` from one child to another (whether or not adjacent does not matter).

Given an array apples that represents the number of apples per child. Your task is to calculate the minimum step of the transition operation. If it's impossible, return `-1`.

Example
For `apples=[7,15,9,5]`, the output should be `3`.

```
     7 15 9 5
step 1: 15-2, 5+2 ---> 7 13 9 7
step 2: 13-2, 7+2 ---> 9 11 9 7
step 3: 11-2, 7+2 ---> 9  9 9 9
```

For `apples=[7,7,7,7]`, the output should be `0`.

The children's apples are equal already. No need more step.

For `apples=[7,7,7,5]`, the output should be `-1`.
