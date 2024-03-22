class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        trusts = [0] * (n+1)
        for (a, b) in trust:
            trusts[a] -= 1
            trusts[b] += 1
            
        for i in range(1, len(trusts)):
            if trusts[i] == n-1:
                return i
        return -1
        