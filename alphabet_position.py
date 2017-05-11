def alphabet_position(text):
    """
    A Method to convert a string to numerical representations.
    
    Arguments: A string
    Returns: A string of numbers representing only the characters of the input
        string. Spaces and punctuation are ignored.
    """

    text = text.lower()
    print(" ".join(map(lambda x: ord(x)-96, text)))
