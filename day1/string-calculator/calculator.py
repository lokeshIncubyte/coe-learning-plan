def add(numbers):
    """Add numbers from string. Supports comma and newline delimiters."""
    if not numbers:
        return 0
    # Normalize newlines to commas
    numbers = numbers.replace("\n", ",")
    return sum(int(x) for x in numbers.split(","))
