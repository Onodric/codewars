def group_check(s):
    """
    Method to verify correct pairing and usage of brackets

    Argument: a string
    returns: a boolean verifying correct usage of brackets.
        True for correct.
    """

    brackets = dict()
    count = 0
    keys = []

    for c in s:
        if c == '(' or c == '{' or c == '[':
            count += 1
            brackets[count] = c
        keys = list(brackets.keys())
        keys.sort()
        if c == ')':
            if len(keys) == 0:
                return False
            elif brackets[keys[-1]] == '(':
                del brackets[keys[-1]]
        if c == '}':
            if len(keys) == 0:
                return False
            elif brackets[keys[-1]] == '{':
                del brackets[keys[-1]]
        if c == ']':
            if len(keys) == 0:
                return False
            elif brackets[keys[-1]] == '[':
                del brackets[keys[-1]]
    if len(brackets.keys()) > 0:
        print("return false not closed, {0}, {1}".format(keys, brackets))
        return False
    return True
