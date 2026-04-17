def add(numbers):
    """Add numbers from string. Negative numbers raise ValueError."""
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
    
    # Parse and validate numbers
    num_list = [int(x) for x in numbers.split(delimiter)]
    
    # Check for negatives
    negatives = [x for x in num_list if x < 0]
    if negatives:
        raise ValueError(f"negative numbers not allowed: {negatives}")
    
    return sum(num_list)
