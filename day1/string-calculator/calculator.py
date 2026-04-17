def add(numbers):
    """Add numbers from string. Empty string returns 0."""
    if not numbers:
        return 0
    if "," in numbers:
        return sum(int(x) for x in numbers.split(","))
    return int(numbers)
