#!/usr/bin/python3
def solve(ques):
    unknown, operator, a, assign, b = ques.split()
    a,b = int(a), int(b)
    unknown = b-a
    return "x = " + str(unknown)

print(solve("x + 6 = 10"))
