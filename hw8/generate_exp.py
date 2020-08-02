"""
Get equations for the experiment for n-key calculator.
"""
from operator import add, sub, mul, truediv
from random import randint, uniform


EQ_MAPS = {'+': add, '-': sub, '*': mul, '/': truediv}
EQS = list(EQ_MAPS)


def get_rand_eq() -> str:
    """Get random equator."""
    return EQS[randint(0, len(EQS)-1)]


def get_rand() -> int:
    """Get 6-digit random number."""
    return int(uniform(100000, 1000000))


def main():
    """Main function."""
    eq_len = 2
    for i in range(15):
        nums = [get_rand() for _ in range(eq_len)]
        eqs = [get_rand_eq() for _ in range(eq_len)]

        result = get_rand()
        print(f'{i+1:02d}: {result}', end='')
        for num, equator in zip(nums, eqs):
            print('', equator, num, end='')
            result = EQ_MAPS[equator](result, num)
        print(' =', result)


if __name__ == '__main__':
    main()
