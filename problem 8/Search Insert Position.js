/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    var i = 0;
    var notFound = false; 
    while (!notFound) {
        if (nums[i] === target) {
            notFound = true;
            return i;
        }
        else {
            if (target > nums[i])
                i++
            else {
                notFound = true;
                nums.splice(i,0,target)
                return i;
            }
        }
    }
};