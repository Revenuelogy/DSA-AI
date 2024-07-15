export const data = [
  {
    "problemId": "1",
    "title": "Two Sum",
    "difficulty": "Easy",
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    "examples": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[0,1]",
        "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        "input": "nums = [3,2,4], target = 6",
        "output": "[1,2]"
      },
      {
        "input": "nums = [3,3], target = 6",
        "output": "[0,1]"
      }
    ],
    "constraints": [
      "2 ≤ nums.length ≤ 10^4",
      "-10^9 ≤ nums[i] ≤ 10^9",
      "-10^9 ≤ target ≤ 10^9",
      "Only one valid answer exists."
    ]
},
{
  "problemId": "9",
  "title": "Palindrome Number",
  "difficulty": "Easy",
  "description": "Given an integer x, return true if x is a palindrome, and false otherwise.",
  "examples": [
    {
      "input": "x = 121",
      "output": "true",
      "explanation": "121 reads as 121 from left to right and from right to left."
    },
    {
      "input": "x = -121",
      "output": "false",
      "explanation": "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome."
    },
    {
      "input": "x = 10",
      "output": "false",
      "explanation": "Reads 01 from right to left. Therefore it is not a palindrome."
    }
  ],
  "constraints": [
    "-2^31 <= x <= 2^31 - 1"
  ]
},
{
  "problemId": "15",
  "title": "3Sum",
  "difficulty": "Medium",
  "description": "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.",
  "examples": [
    {
      "input": "nums = [-1,0,1,2,-1,-4]",
      "output": "[[-1,-1,2],[-1,0,1]]",
      "explanation": "nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0. nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0. nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0. The distinct triplets are [-1,0,1] and [-1,-1,2]. Notice that the order of the output and the order of the triplets does not matter."
    },
    {
      "input": "nums = [0,1,1]",
      "output": "[]",
      "explanation": "The only possible triplet does not sum up to 0."
    },
    {
      "input": "nums = [0,0,0]",
      "output": "[[0,0,0]]",
      "explanation": "The only possible triplet sums up to 0."
    }
  ],
  "constraints": [
    "3 <= nums.length <= 3000",
    "-10^5 <= nums[i] <= 10^5"
  ]
},
{
  "problemId": "7",
  "title": "Reverse Integer",
  "difficulty": "Medium",
  "description": "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0. Assume the environment does not allow you to store 64-bit integers (signed or unsigned).",
  "examples": [
    {
      "input": "x = 123",
      "output": "321",
      "explanation": "Reversing the digits of 123 results in 321, which is within the 32-bit signed integer range."
    },
    {
      "input": "x = -123",
      "output": "-321",
      "explanation": "Reversing the digits of -123 results in -321, which is within the 32-bit signed integer range."
    },
    {
      "input": "x = 120",
      "output": "21",
      "explanation": "Reversing the digits of 120 results in 21 (ignoring the leading zero)."
    }
  ],
  "constraints": [
    "-2^31 <= x <= 2^31 - 1"
  ]
},
{
  "problemId": "41",
  "title": "First Missing Positive",
  "difficulty": "Hard",
  "description": "Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums. You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.",
  "examples": [
    {
      "input": "nums = [1,2,0]",
      "output": "3",
      "explanation": "The numbers in the range [1,2] are all in the array."
    },
    {
      "input": "nums = [3,4,-1,1]",
      "output": "2",
      "explanation": "1 is in the array but 2 is missing."
    },
    {
      "input": "nums = [7,8,9,11,12]",
      "output": "1",
      "explanation": "The smallest positive integer 1 is missing."
    }
  ],
  "constraints": [
    "1 <= nums.length <= 100000",
    "-2^31 <= nums[i] <= 2^31 - 1"
  ]
},
{
  "problemId": "53",
  "title": "Maximum Subarray",
  "difficulty": "Medium",
  "description": "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
  "examples": [
    {
      "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
      "output": "6",
      "explanation": "The subarray [4,-1,2,1] has the largest sum 6."
    },
    {
      "input": "nums = [1]",
      "output": "1",
      "explanation": "The subarray [1] has the largest sum 1."
    },
    {
      "input": "nums = [5,4,-1,7,8]",
      "output": "23",
      "explanation": "The subarray [5,4,-1,7,8] has the largest sum 23."
    }
  ],
  "constraints": [
    "1 <= nums.length <= 100000",
    "-10000 <= nums[i] <= 10000"
  ]
},
{
  "problemId": "35",
  "title": "Search Insert Position",
  "difficulty": "Easy",
  "description": "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must write an algorithm with O(log n) runtime complexity.",
  "examples": [
    {
      "input": "nums = [1,3,5,6], target = 5",
      "output": "2",
      "explanation": "The target 5 is found at index 2."
    },
    {
      "input": "nums = [1,3,5,6], target = 2",
      "output": "1",
      "explanation": "Target 2 would be inserted at index 1 to maintain sorted order."
    },
    {
      "input": "nums = [1,3,5,6], target = 7",
      "output": "4",
      "explanation": "Target 7 would be inserted at index 4, which is the end of the array."
    }
  ],
  "constraints": [
    "1 <= nums.length <= 10000",
    "-10000 <= nums[i] <= 10000",
    "nums contains distinct values sorted in ascending order.",
    "-10000 <= target <= 10000"
  ]
},
{
  "problemId": "46",
  "title": "Permutations",
  "difficulty": "Medium",
  "description": "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
  "examples": [
    {
      "input": "nums = [1,2,3]",
      "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
      "explanation": "All permutations of the array [1,2,3] are listed."
    },
    {
      "input": "nums = [0,1]",
      "output": "[[0,1],[1,0]]",
      "explanation": "All permutations of the array [0,1] are listed."
    },
    {
      "input": "nums = [1]",
      "output": "[[1]]",
      "explanation": "The only permutation of the array [1] is listed."
    }
  ],
  "constraints": [
    "1 <= nums.length <= 6",
    "-10 <= nums[i] <= 10",
    "All the integers of nums are unique."
  ]
},
{
  "problemId": "139",
  "title": "Word Break",
  "difficulty": "Medium",
  "description": "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words. Note that the same word in the dictionary may be reused multiple times in the segmentation.",
  "examples": [
    {
      "input": {
        "s": "leetcode",
        "wordDict": ["leet", "code"]
      },
      "output": "true",
      "explanation": "Return true because \"leetcode\" can be segmented as \"leet code\"."
    },
    {
      "input": {
        "s": "applepenapple",
        "wordDict": ["apple", "pen"]
      },
      "output": "true",
      "explanation": "Return true because \"applepenapple\" can be segmented as \"apple pen apple\". Note that you are allowed to reuse a dictionary word."
    },
    {
      "input": {
        "s": "catsandog",
        "wordDict": ["cats", "dog", "sand", "and", "cat"]
      },
      "output": "false",
      "explanation": "Return false as \"catsandog\" cannot be segmented into a sequence of dictionary words."
    }
  ],
  "constraints": [
    "1 <= s.length <= 300",
    "1 <= wordDict.length <= 1000",
    "1 <= wordDict[i].length <= 20",
    "s and wordDict[i] consist of only lowercase English letters.",
    "All the strings of wordDict are unique."
  ]
},
{
  "problemId": "136",
  "title": "Single Number",
  "difficulty": "Easy",
  "description": "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.",
  "examples": [
    {
      "input": "nums = [2,2,1]",
      "output": "1",
      "explanation": "All elements except 1 appear twice, and 1 appears only once."
    },
    {
      "input": "nums = [4,1,2,1,2]",
      "output": "4",
      "explanation": "All elements except 4 appear twice, and 4 appears only once."
    },
    {
      "input": "nums = [1]",
      "output": "1",
      "explanation": "Only one element is present, which appears once."
    }
  ],
  "constraints": [
    "1 <= nums.length <= 30000",
    "-30000 <= nums[i] <= 30000",
    "Each element in the array appears twice except for one element which appears only once."
  ]
},
{
  "problemId": "135",
  "title": "Candy",
  "difficulty": "Hard",
  "description": "There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings. You are giving candies to these children subjected to the following requirements: Each child must have at least one candy. Children with a higher rating get more candies than their neighbors. Return the minimum number of candies you need to have to distribute the candies to the children.",
  "examples": [
    {
      "input": "ratings = [1,0,2]",
      "output": "5",
      "explanation": "You can allocate to the first, second and third child with 2, 1, 2 candies respectively."
    },
    {
      "input": "ratings = [1,2,2]",
      "output": "4",
      "explanation": "You can allocate to the first, second and third child with 1, 2, 1 candies respectively. The third child gets 1 candy because it satisfies the above two conditions."
    }
  ],
  "constraints": [
    "n == ratings.length",
    "1 <= n <= 20000",
    "0 <= ratings[i] <= 20000"
  ]
},
{
  "problemId": "121",
  "title": "Best Time to Buy and Sell Stock",
  "difficulty": "Easy",
  "description": "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
  "examples": [
    {
      "input": "prices = [7,1,5,3,6,4]",
      "output": "5",
      "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell."
    },
    {
      "input": "prices = [7,6,4,3,1]",
      "output": "0",
      "explanation": "In this case, no transactions are done and the max profit = 0."
    }
  ],
  "constraints": [
    "1 <= prices.length <= 100000",
    "0 <= prices[i] <= 10000"
  ]
},
{
  "problemId": "93",
  "title": "Restore IP Addresses",
  "difficulty": "Medium",
  "description": "A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros. Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.",
  "examples": [
    {
      "input": "s = '25525511135'",
      "output": "['255.255.11.135', '255.255.111.35']",
      "explanation": "Inserting dots into the string '25525511135' can form the valid IP addresses '255.255.11.135' and '255.255.111.35'."
    },
    {
      "input": "s = '0000'",
      "output": "['0.0.0.0']",
      "explanation": "Inserting dots into the string '0000' forms the valid IP address '0.0.0.0'."
    },
    {
      "input": "s = '101023'",
      "output": "['1.0.10.23', '1.0.102.3', '10.1.0.23', '10.10.2.3', '101.0.2.3']",
      "explanation": "Various combinations of dots can be inserted into '101023' to form valid IP addresses."
    }
  ],
  "constraints": [
    "1 <= s.length <= 20",
    "s consists of digits only."
  ]
},
{
  "problemId": "89",
  "title": "Gray Code",
  "difficulty": "Medium",
  "description": "An n-bit gray code sequence is a sequence of 2^n integers where: Every integer is in the inclusive range [0, 2^n - 1], the first integer is 0, an integer appears no more than once in the sequence, the binary representation of every pair of adjacent integers differs by exactly one bit, and the binary representation of the first and last integers differs by exactly one bit. Given an integer n, return any valid n-bit gray code sequence.",
  "examples": [
    {
      "input": "n = 2",
      "output": "[0,1,3,2]",
      "explanation": "The binary representation of [0,1,3,2] is [00,01,11,10]. - 00 and 01 differ by one bit - 01 and 11 differ by one bit - 11 and 10 differ by one bit - 10 and 00 differ by one bit. [0,2,3,1] is also a valid gray code sequence, whose binary representation is [00,10,11,01]. - 00 and 10 differ by one bit - 10 and 11 differ by one bit - 11 and 01 differ by one bit - 01 and 00 differ by one bit."
    },
    {
      "input": "n = 1",
      "output": "[0,1]",
      "explanation": "For n = 1, the gray code sequence can be [0, 1]."
    }
  ],
  "constraints": [
    "1 <= n <= 16"
  ]
},
{
  "problemId": "88",
  "title": "Merge Sorted Array",
  "difficulty": "Easy",
  "description": "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order. The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.",
  "examples": [
    {
      "input": `"nums1": [1,2,3,0,0,0], 
        "m": 3, 
        "nums2": [2,5,6], 
        "n": 3 `, 
        
      
      "output": [1,2,2,3,5,6],
      "explanation": "The arrays we are merging are [1,2,3] and [2,5,6]. The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1."
    },
    {
      "input": `"nums1": [1],
        "m": 1,
        "nums2": [],
        "n": 0`
        
      ,
      "output": [1],
      "explanation": "The arrays we are merging are [1] and []. The result of the merge is [1]."
    },
    {
      "input": ` "nums1": [0],
        "m": 0,
        "nums2": [1],
        "n": 1`
       
      ,
      "output": [1],
      "explanation": "The arrays we are merging are [] and [1]. The result of the merge is [1]. Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1."
    }
  ],
  "constraints": [
    "nums1.length == m + n",
    "nums2.length == n",
    "0 <= m, n <= 200",
    "1 <= m + n <= 200",
    "-1e9 <= nums1[i], nums2[j] <= 1e9"
  ]
},
{
  "problemId": "77",
  "title": "Combinations",
  "difficulty": "Medium",
  "description": "Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n]. You may return the answer in any order.",
  "examples": [
    {
      "input": `
        "n": 4,
        "k": 2
      `,
      "output": "[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]",
      "explanation": "There are 4 choose 2 = 6 total combinations. Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination."
    },
    {
      "input": `
        "n": 1,
        "k": 1
      `,
      "output": "[[1]]",
      "explanation": "There is 1 choose 1 = 1 total combination."
    }
  ],
  "constraints": [
    "1 <= n <= 20",
    "1 <= k <= n"
  ]
},
{
  "problemId": "75",
  "title": "Sort Colors",
  "difficulty": "Medium",
  "description": "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively. You must solve this problem without using the library's sort function.",
  "examples": [
    {
      "input": "nums = [2,0,2,1,1,0]",
      "output": "[0,0,1,1,2,2]",
      "explanation": "The input array represents the colors as integers where 2 is blue, 0 is red, and 1 is white. Sorting them in-place results in the colors being in the required order of red, white, and blue."
    },
    {
      "input": "nums = [2,0,1]",
      "output": "[0,1,2]",
      "explanation": "The input array represents the colors as integers and sorting them in-place results in the colors being in the required order."
    }
  ],
  "constraints": [
    "n == nums.length",
    "1 <= n <= 300",
    "nums[i] is either 0, 1, or 2."
  ]
},
{
  "problemId": "72",
  "title": "Edit Distance",
  "difficulty": "Medium",
  "description": "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You have the following three operations permitted on a word: Insert a character, Delete a character, Replace a character.",
  "examples": [
    {
      "input": {
        "word1": "horse",
        "word2": "ros"
      },
      "output": "3",
      "explanation": "horse -> rorse (replace 'h' with 'r'), rorse -> rose (remove 'r'), rose -> ros (remove 'e')."
    },
    {
      "input": {
        "word1": "intention",
        "word2": "execution"
      },
      "output": "5",
      "explanation": "intention -> inention (remove 't'), inention -> enention (replace 'i' with 'e'), enention -> exention (replace 'n' with 'x'), exention -> exection (replace 'n' with 'c'), exection -> execution (insert 'u')."
    }
  ],
  "constraints": [
    "0 <= word1.length, word2.length <= 500",
    "word1 and word2 consist of lowercase English letters."
  ]
},
{
  "problemId": "69",
  "title": "Sqrt(x)",
  "difficulty": "Easy",
  "description": "Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well. You must not use any built-in exponent function or operator, such as pow(x, 0.5) in C++ or x ** 0.5 in Python.",
  "examples": [
    {
      "input": "x = 4",
      "output": "2",
      "explanation": "The square root of 4 is 2, so we return 2."
    },
    {
      "input": "x = 8",
      "output": "2",
      "explanation": "The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned."
    }
  ],
  "constraints": [
    "0 <= x <= 2^31 - 1"
  ]
},
{
  "problemId": "65",
  "title": "Valid Number",
  "difficulty": "Hard",
  "description": "Given a string s, return whether s is a valid number. For example, all the following are valid numbers: '2', '0089', '-0.1', '+3.14', '4.', '-.9', '2e10', '-90E3', '3e+7', '+6e-1', '53.5e93', '-123.456e789', while the following are not valid numbers: 'abc', '1a', '1e', 'e3', '99e2.5', '--6', '-+3', '95a54e53'. Formally, a valid number can be an integer or a decimal, possibly with an exponent, defined with specific rules regarding the placement of signs, digits, and decimal points.",
  "examples": [
    {
      "input": "s = '0'",
      "output": "true",
      "explanation": "The string '0' is clearly a valid number."
    },
    {
      "input": "s = 'e'",
      "output": "false",
      "explanation": "'e' alone cannot be a valid number as it lacks an initial number before the exponent."
    },
    {
      "input": "s = '.'",
      "output": "false",
      "explanation": "A single dot without any digits is not a valid number."
    }
  ],
  "constraints": [
    "1 <= s.length <= 20",
    "s consists of only English letters (both uppercase and lowercase), digits (0-9), plus '+', minus '-', or dot '.'."
  ]
}


]
  