class Solution(object):
    def isPalindrome(self, x):
        # """
        # :type x: int
        # :rtype: bool
        # """
        temp = x
        reverse = 0
        while x > 0:
            reverse *= 10
            reverse += x % 10
            x //= 10
        return temp == reverse