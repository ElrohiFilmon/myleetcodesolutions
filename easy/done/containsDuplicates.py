class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        new = set(nums)
        return len(new) != len(nums)

