def add(numbers):
    """Add numbers from string. Supports comma, newline, and custom delimiters."""
    if not numbers:
        return 0
    
    delimiter = ","
    
    # Check for custom delimiter
    if numbers.startswith("//"):
        delimiter_end = numbers.find("\n")
        delimiter = numbers[2:delimiter_end]
        numbers = numbers[delimiter_end + 1:]
    
    # Normalize newlines to delimiter
    numbers = numbers.replace("\n", delimiter)
    
    return sum(int(x) for x in numbers.split(delimiter))
