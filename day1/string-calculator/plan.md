STRING CALCULATOR KATA — TDD PLAN (LLM-OPTIMIZED)

---

## TDD WORKFLOW

For each step, follow this exact sequence:

1. **WRITE TEST** → Add test code to test_calculator.py
2. **RUN TESTS** → `pytest -q` (should FAIL)
3. **COMMIT RED** → `git add . && git commit -m "RED: <message>"`
4. **WRITE CODE** → Add implementation to calculator.py
5. **RUN TESTS** → `pytest -q` (should PASS)
6. **COMMIT GREEN** → `git add . && git commit -m "GREEN: <message>"`
7. **REFACTOR** (if needed) → Improve code without changing behavior
8. **RUN TESTS** → `pytest -q` (should still PASS)
9. **COMMIT REFACTOR** → `git add . && git commit -m "REFACTOR: <message>"`

---

## INITIAL SETUP (RUN ONCE)

### Step 0.1: Create Virtual Environment

```bash
cd c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator
python -m venv venv
venv\Scripts\activate
pip install pytest
```


### Step 0.2: Create Initial Files

**File: calculator.py**
```python
# Empty file - will fill in next
```

**File: test_calculator.py**
```python
# Empty file - will fill in next
```

### Step 0.3: First Commit

```bash
git add .
git commit -m "INIT: empty project structure"
```

---

## STEP 1: EMPTY STRING

### 1.1: WRITE TEST (RED phase)

**File: test_calculator.py** - Add this entire content:
```python
import pytest
from calculator import add

class TestStringCalculator:
    def test_empty_string_returns_zero(self):
        """Empty string should return 0"""
        assert add("") == 0
```

### 1.2: RUN TESTS (should FAIL)

```bash
pytest -q
```

Expected: `1 failed in ...`

### 1.3: COMMIT RED

```bash
git add .
git commit -m "RED: empty string should return 0"
```

---

### 1.4: WRITE CODE (GREEN phase)

**File: calculator.py** - Replace with:
```python
def add(numbers):
    """Add numbers from string. Empty string returns 0."""
    if not numbers:
        return 0
```

### 1.5: RUN TESTS (should PASS)

```bash
pytest -q
```

Expected: `1 passed in ...`

### 1.6: COMMIT GREEN

```bash
git add .
git commit -m "GREEN: return 0 for empty string"
```

---

## STEP 2: SINGLE NUMBER

### 2.1: WRITE TEST (RED phase)

**File: test_calculator.py** - Add this test method to the TestStringCalculator class:
```python
    def test_single_number_returns_value(self):
        """Single number string should return that number"""
        assert add("1") == 1
```

### 2.2: RUN TESTS (should FAIL)

```bash
pytest -q
```

Expected: `1 failed, 1 passed in ...`

### 2.3: COMMIT RED

```bash
git add .
git commit -m "RED: single number should return itself"
```

---

### 2.4: WRITE CODE (GREEN phase)

**File: calculator.py** - Replace with:
```python
def add(numbers):
    """Add numbers from string. Empty string returns 0."""
    if not numbers:
        return 0
    return int(numbers)
```

### 2.5: RUN TESTS (should PASS)

```bash
pytest -q
```

Expected: `2 passed in ...`

### 2.6: COMMIT GREEN

```bash
git add .
git commit -m "GREEN: handle single number"
```

---

## STEP 3: TWO NUMBERS WITH COMMA

### 3.1: WRITE TEST (RED phase)

**File: test_calculator.py** - Add this test method:
```python
    def test_two_numbers_returns_sum(self):
        """Two comma-separated numbers should return their sum"""
        assert add("1,2") == 3
```

### 3.2: RUN TESTS (should FAIL)

```bash
pytest -q
```

Expected: `1 failed, 2 passed in ...`

### 3.3: COMMIT RED

```bash
git add .
git commit -m "RED: two numbers should return sum"
```

---

### 3.4: WRITE CODE (GREEN phase)

**File: calculator.py** - Replace with:
```python
def add(numbers):
    """Add numbers from string. Empty string returns 0."""
    if not numbers:
        return 0
    if "," in numbers:
        return sum(int(x) for x in numbers.split(","))
    return int(numbers)
```

### 3.5: RUN TESTS (should PASS)

```bash
pytest -q
```

Expected: `3 passed in ...`

### 3.6: COMMIT GREEN

```bash
git add .
git commit -m "GREEN: handle two numbers"
```

---

## STEP 4: MULTIPLE NUMBERS

### 4.1: WRITE TEST (RED phase)

**File: test_calculator.py** - Add this test method:
```python
    def test_multiple_numbers_returns_sum(self):
        """Multiple comma-separated numbers should return their sum"""
        assert add("1,2,3,4") == 10
```

### 4.2: RUN TESTS (should FAIL)

```bash
pytest -q
```

Expected: `1 failed, 3 passed in ...`

### 4.3: COMMIT RED

```bash
git add .
git commit -m "RED: support multiple numbers"
```

---

### 4.4: WRITE CODE (GREEN phase)

**File: calculator.py** - Replace with:
```python
def add(numbers):
    """Add numbers from string. Empty string returns 0."""
    if not numbers:
        return 0
    return sum(int(x) for x in numbers.split(","))
```

### 4.5: RUN TESTS (should PASS)

```bash
pytest -q
```

Expected: `4 passed in ...`

### 4.6: COMMIT GREEN

```bash
git add .
git commit -m "GREEN: support multiple numbers"
```

---

## STEP 5: NEWLINE DELIMITER

### 5.1: WRITE TEST (RED phase)

**File: test_calculator.py** - Add this test method:
```python
    def test_newline_and_comma_delimiters(self):
        """Numbers can be separated by newline or comma"""
        assert add("1\n2,3") == 6
```

### 5.2: RUN TESTS (should FAIL)

```bash
pytest -q
```

Expected: `1 failed, 4 passed in ...`

### 5.3: COMMIT RED

```bash
git add .
git commit -m "RED: support newline as delimiter"
```

---

### 5.4: WRITE CODE (GREEN phase)

**File: calculator.py** - Replace with:
```python
def add(numbers):
    """Add numbers from string. Supports comma and newline delimiters."""
    if not numbers:
        return 0
    # Normalize newlines to commas
    numbers = numbers.replace("\n", ",")
    return sum(int(x) for x in numbers.split(","))
```

### 5.5: RUN TESTS (should PASS)

```bash
pytest -q
```

Expected: `5 passed in ...`

### 5.6: COMMIT GREEN

```bash
git add .
git commit -m "GREEN: support newline delimiter"
```

---

## STEP 6: CUSTOM DELIMITER

### 6.1: WRITE TEST (RED phase)

**File: test_calculator.py** - Add this test method:
```python
    def test_custom_delimiter(self):
        """Custom delimiter can be specified with //delimiter\\n prefix"""
        assert add("//;\n1;2") == 3
```

### 6.2: RUN TESTS (should FAIL)

```bash
pytest -q
```

Expected: `1 failed, 5 passed in ...`

### 6.3: COMMIT RED

```bash
git add .
git commit -m "RED: support custom delimiter"
```

---

### 6.4: WRITE CODE (GREEN phase)

**File: calculator.py** - Replace with:
```python
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
```

### 6.5: RUN TESTS (should PASS)

```bash
pytest -q
```

Expected: `6 passed in ...`

### 6.6: COMMIT GREEN

```bash
git add .
git commit -m "GREEN: support custom delimiter"
```

---

## STEP 7: NEGATIVE NUMBERS THROW ERROR

### 7.1: WRITE TEST (RED phase)

**File: test_calculator.py** - Add this test method:
```python
    def test_negative_numbers_throw_exception(self):
        """Negative numbers should raise an exception"""
        with pytest.raises(ValueError) as excinfo:
            add("1,-2,3")
        assert "negative" in str(excinfo.value).lower()
```

### 7.2: RUN TESTS (should FAIL)

```bash
pytest -q
```

Expected: `1 failed, 6 passed in ...`

### 7.3: COMMIT RED

```bash
git add .
git commit -m "RED: negative numbers should throw error"
```

---

### 7.4: WRITE CODE (GREEN phase)

**File: calculator.py** - Replace with:
```python
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
```

### 7.5: RUN TESTS (should PASS)

```bash
pytest -q
```

Expected: `7 passed in ...`

### 7.6: COMMIT GREEN

```bash
git add .
git commit -m "GREEN: throw error for negative numbers"
```

---

## STEP 8: IGNORE NUMBERS > 1000

### 8.1: WRITE TEST (RED phase)

**File: test_calculator.py** - Add this test method:
```python
    def test_ignore_numbers_greater_than_1000(self):
        """Numbers greater than 1000 should be ignored"""
        assert add("2,1001,3") == 5
        assert add("1000,2,3") == 1005
```

### 8.2: RUN TESTS (should FAIL)

```bash
pytest -q
```

Expected: `1 failed, 7 passed in ...`

### 8.3: COMMIT RED

```bash
git add .
git commit -m "RED: ignore numbers greater than 1000"
```

---

### 8.4: WRITE CODE (GREEN phase)

**File: calculator.py** - Replace with:
```python
def add(numbers):
    """Add numbers from string. Ignores numbers > 1000. Negative numbers raise ValueError."""
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
    
    # Filter numbers > 1000
    num_list = [x for x in num_list if x <= 1000]
    
    return sum(num_list)
```

### 8.5: RUN TESTS (should PASS)

```bash
pytest -q
```

Expected: `8 passed in ...`

### 8.6: COMMIT GREEN

```bash
git add .
git commit -m "GREEN: ignore numbers greater than 1000"
```

---

## FINAL VERIFICATION

### 9.1: Run Full Test Suite

```bash
pytest -v
```

Expected output should show all 8 tests passing.

### 9.2: View Git Log

```bash
git log --oneline
```

Expected: Should show commits for INIT, then RED/GREEN pairs for each step.

### 9.3: Final Status Check

```bash
pytest -q
git status
```

Both should be clean (all tests pass, no uncommitted changes).

---

## OPTIONAL: PUSH TO GITHUB

If you want to save to GitHub:

```bash
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

Replace `<your-repo-url>` with your actual GitHub repo URL.

---

## DEBUGGING CHECKLIST

If tests fail unexpectedly:

1. **Check test file syntax**: `python -m py_compile test_calculator.py`
2. **Check calculator file syntax**: `python -m py_compile calculator.py`
3. **Run specific test**: `pytest -v test_calculator.py::TestStringCalculator::test_name`
4. **Print calculation step**: Add `print()` statements in calculator.py
5. **Verify imports**: Make sure both files are in the same directory

---

## SUCCESS CRITERIA

✓ All 8 tests pass  
✓ Git history shows alternating RED/GREEN commits  
✓ Code handles edge cases (newlines, custom delimiters, negatives, large numbers)  
✓ Each step is minimal and builds on previous work  
✓ No "big jumps" in logic between commits
* You build strong coding discipline
