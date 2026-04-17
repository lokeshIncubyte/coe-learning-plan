import pytest
from calculator import add

class TestStringCalculator:
    def test_empty_string_returns_zero(self):
        """Empty string should return 0"""
        assert add("") == 0

    def test_single_number_returns_value(self):
        """Single number string should return that number"""
        assert add("1") == 1
