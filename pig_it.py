import string


def pig_it(text):
    """
    Method to convert a string to pig latin
        Move the first character to the end of each word
        Add "ay" to the end of each word

    Argument: string
    Return: the string converted to pig latin
    """

    return " ".join([w[1:] + w[0] + "ay" if w not in string.punctuation else w for w in text.split(" ")])
