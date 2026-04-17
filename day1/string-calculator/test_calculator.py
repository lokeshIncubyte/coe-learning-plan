import pytest
from calculator import add

class TestStringCalculator:
    def test_empty_string_returns_zero(self):
        """Empty string should return 0"""
        assert add("") == 0

    def test_single_number_returns_value(self):
        """Single number string should return that number"""
        assert add("1") == 1

    def test_two_numbers_returns_sum(self):
        """Two comma-separated numbers should return their sum"""
        assert add("1,2") == 3

    def test_multiple_numbers_returns_sum(self):
        """Multiple comma-separated numbers should return their sum"""
        assert add("1,2,3,4") == 10

    def test_newline_and_comma_delimiters(self):
        """Numbers can be separated by newline or comma"""
        assert add("1\n2,3") == 6
