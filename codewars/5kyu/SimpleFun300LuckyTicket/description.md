https://www.codewars.com/kata/5922965c95af7fabb300000f

## Simple Fun #300: Lucky Ticket

Task
Mr. Privalov often travels to the city by train, so he came up with a concept of lucky tickets for railways. All railways tickets consist of lowercase English letters. A ticket is called lucky, if it can be split into two non-empty parts, such that the number of occurrences of each letter in the first part is equal to number of occurrences of the same letter in the second part and vice versa (the number of occurrences of each letter in the second part is equal to number of occurrences of the same letter in the first part).

Your task is help to Mr.Privalov to find the minimum number of letters that should be removed to make the given ticket s lucky.

It is guaranteed that it is always possible to make a lucky ticket out of the given one.

Example
For s = "book", the output should be 2.

We can remove b and k, then got "oo", which can split into two parts "o" and "o".

For s = "mewmwe", the output should be 0.

Since s is already lucky(it can split into "mew" and "mwe"), so no needs to remove any letter.

For s = "bbaaaa", the output should be 2.

We can remove bb, then got "aaaa", which can split into two parts "aa" and "aa".

Input/Output
[input] string s

The ticket, a string of lowercase English letters.

2 ≤ s.length ≤ 10000.

[output] an integer

The minimum number of letters that should be removed to make the ticket lucky.

