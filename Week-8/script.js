
// ************************************************************* problem 6.1 ************************************//
// JavaScript program to find maximum
// contiguous subarray
  
// Function to find the maximum
// contiguous subarray


function maxSubArraySum(a, size)
{
    var maxint = Math.pow(2, 53)
    var max_so_far = -maxint - 1
    var max_ending_here = 0
      
    for (var i = 0; i < size; i++)
    {
        max_ending_here = max_ending_here + a[i]
        if (max_so_far < max_ending_here)
            max_so_far = max_ending_here
 
        if (max_ending_here < 0)
            max_ending_here = 0
    }
    return max_so_far
}
  

var a = [1, 2, 3, 4, -10]
var b = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 

console.log(`The subarray  ${a} has the maximum possible sum of`,maxSubArraySum(a, a.length))
console.log(`The subarray ${b} has the maximum possible sum of`,maxSubArraySum(b, b.length))


// ************************************************************* problem 6.2 ************************************//

// Function to print in spiral order
var spiralOrder = function(matrix) {
    const res = []
    while(matrix.length){
      const first = matrix.shift()
      res.push(...first)
      for(const m of matrix){
        let val = m.pop()
        if(val)
          res.push(val)
          m.reverse()   
      }
      matrix.reverse()
    }
    return res
  };
// Driver Code
let res = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] ;

console.log(spiralOrder(res))



// ************************************************************* problem 6.3 ************************************//

function sort012(a,arr_size)
{
     
    let lo = 0;
    let hi = arr_size - 1;
    let mid = 0;
    let temp = 0;
    // Iterate till all the elements
    // are sorted
    while (mid <= hi)
    {
        // If the element is 0
        if(a[mid] == 0)
        {
            temp = a[lo];
            a[lo] = a[mid];
            a[mid] = temp;
            lo++;
            mid++;
        }
        // If the element is 1
        else if(a[mid] == 1)
        {
            mid++;
        }
        // If the element is 2
        else
        {
            temp = a[mid];
            a[mid] = a[hi];
            a[hi] = temp;
            hi--;
        }
         
    }
}
 
/* Utility function to print array arr[] */
function printArray(arr,arr_size)
{

    console.log(arr)
    // let i;
    // for (i = 0; i < arr_size; i++)
    // {
    //     console.log(arr[i]);
    // }
}
 
/*Driver function to check for above functions*/

let N = 5


let arrSort = [0, 2, 1, 2, 0] 

let M = 3
let arrSort1 = [0,1,0] 
// let arr= [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ];
 
// let arr_size = arr.length;
sort012(arrSort, N);
printArray(arrSort, N);

sort012(arrSort1, M);
printArray(arrSort1, M);

// ************************************************************* problem 6.4 ************************************//

const maxProfit = (prices) => {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit
  
        max_profit = Math.max(max_profit, profit);
      } else {
        left = right;
      }
      right++;
    }
    return max_profit;
  };

  let p = [7,1,5,3,6,4] 
  let p2 = [7,6,4,3,1]

  console.log(maxProfit(p))
  console.log(maxProfit(p2))


  // ************************************************************* problem 6.5 ************************************//

  function findPair(arr, size, n) {
    // Initialize positions of two elements
    let i = 0;
    let j = 1;

    // Search for a pair
    while (i < size && j < size) {
        if (i != j && arr[j] - arr[i] == n) {
            console.log("Pair Found: (" + arr[i] + ", " +
            arr[j] + ")");
            return 1;
        }
        else if (arr[j] - arr[i] < n)
            j++;
        else
            i++;
    }

    console.log("No such pair");
    return 0;
}

// Driver program to test above function

let arrPair = [5, 10, 3, 2, 50, 80];
let size = arrPair.length;
let n = 78;

let arrPair2 = [-10, 20];
let size2 = arrPair.length;
let n2 = 30;


console.log(findPair(arrPair, size, n))
console.log(findPair(arrPair2, size2, n2))

// Time Complexity: O(n*log(n)) 
// Space Complexity: O(1)


  // ************************************************************* problem 6.6 ************************************//

  function Threesum(arr, x)
{
     
    // Sort the array
    arr.sort((a, b) => a - b);
 
    // To store the closest sum
   // not using INT_MAX to avoid
   // overflowing condition
    let closestSum = 1000000000;
 
    // Fix the smallest number among
    // the three integers
    for (let i = 0; i < arr.length - 2; i++)
    {
 
        // Two pointers initially pointing at
        // the last and the element
        // next to the fixed element
        let ptr1 = i + 1, ptr2 = arr.length - 1;
 
        // While there could be more pairs to check
        while (ptr1 < ptr2) {
 
            // Calculate the sum of the current triplet
            let sum = arr[i] + arr[ptr1] + arr[ptr2];
 
            // If the sum is more closer than
            // the current closest sum
            if (Math.abs(1*x - sum) < Math.abs(1*x - closestSum))
            {
                closestSum = sum;
            }
 
            // If sum is greater than x then decrement
            // the second pointer to get a smaller sum
            if (sum > x) {
                ptr2--;
            }
 
            // Else increment the first pointer
            // to get a larger sum
            else {
                ptr1++;
            }
        }
    }
 
    // Return the closest sum found
    return `The sum that is closest to the target is ${closestSum}`;
     
}

let arr = [ -1, 2, 1, -4 ];
let x = 1;
 
console.log(Threesum(arr, x));

// Time complexity: O(N2)
// Space Complexity: O(1) 



  // ************************************************************* END ************************************************//