https://leetcode.com/problems/two-sum/

## eng
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


Constraints:

2 <= nums.length <= 104
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
Only one valid answer exists.


Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

## ru
Дан массив целых чисел nums и целое число target, вернуть индексы двух чисел так, чтобы их сумма давала target.

Вы можете предположить, что каждый вход будет иметь ровно одно решение, и вы не можете использовать один и тот же элемент дважды.

Вы можете возвращать ответ в любом порядке.



Пример 1:

Ввод: nums = [2,7,11,15], цель = 9
Вывод: [0,1]
Объяснение: Поскольку nums[0] + nums[1] == 9, мы возвращаем [0, 1].
Пример 2:

Ввод: числа = [3,2,4], цель = 6
Вывод: [1,2]
Пример 3:

Ввод: числа = [3,3], цель = 6
Вывод: [0,1]


Ограничения:

2 <= nums.length <= 104
-109 <= nums[i] <= 10^9
-109 <= target <= 10^9
Существует только один правильный ответ.


Дополнение: Можете ли вы предложить алгоритм, сложность которого меньше O(n2) ? 
