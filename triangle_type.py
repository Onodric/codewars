import math


def triangle_type(a, b, c):
    """
    Method to return the type or validity of a triangle with given sides

    Arguments: the length of three line segments
    Returns: An integer representing the type of triangle the segments make:
        0 : if triangle cannot be made with given sides
        1 : acute triangle
        2 : right triangle
        3 : obtuse triangle
    """

    if a + b <= c or b + c <= a or c + a <= b:
        return 0
    if (math.sqrt(a ** 2 + b ** 2) == c
            or math.sqrt(c ** 2 + b ** 2) == a
            or math.sqrt(a ** 2 + c ** 2) == b):
        return 2
    if (math.acos((a ** 2 - b ** 2 - c ** 2) / (-2 * c * b)) > math.pi / 2
            or math.acos((c ** 2 - b ** 2 - a ** 2) / (-2 * a * b)) > math.pi / 2
            or math.acos((b ** 2 - a ** 2 - c ** 2) / (-2 * a * c)) > math.pi / 2):
        return 3
    return 1
