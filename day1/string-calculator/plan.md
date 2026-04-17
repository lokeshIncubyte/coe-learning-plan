STRING CALCULATOR KATA — TDD PLAN (LLM-OPTIMIZED)


# AGENT INSTRUCTIONS — READ BEFORE EXECUTING ANYTHING

## YOU MUST FOLLOW THESE RULES WITHOUT EXCEPTION

1. **Execute steps in exact order.** Do not skip, reorder, or combine steps.
2. **Do not write any code not explicitly provided.** Copy it exactly as written.
3. **Do not anticipate future steps.** Each step is complete as written.
4. **Do not refactor, optimize, or "improve" any code between steps.**
5. **Do not proceed to the next step until the current step's expected output is confirmed.**
6. **If expected output does not match, STOP and report the exact failure. Do not attempt to fix it.**
7. **Run commands exactly as written, from the exact directory specified.**
8. **Do not add comments, docstrings, or code beyond what is shown.**
9. **Commit messages must be copied exactly — do not paraphrase or summarize them.**
10. **This plan is complete. Do not infer missing steps or fill gaps with your own judgment.**

---

> If you are uncertain about anything, STOP and ask. Do not proceed on assumption.

---

## INITIAL SETUP (RUN ONCE)

### Step 0.1: Create Virtual Environment

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

```bash
cd c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator
python -m venv venv
venv\Scripts\activate
pip install pytest
```


### Step 0.2: Create Initial Files

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

**File: calculator.py**
```python
# Empty file - will fill in next
```

**File: test_calculator.py**
```python
# Empty file - will fill in next
```

### Step 0.3: First Commit

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

```bash
git add .
git commit -m "[day1/string-calculator] INIT: empty project structure"
```

---

## STEP 1: EMPTY STRING

### 1.1: WRITE TEST (RED phase)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

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

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

```bash
pytest -q
```

Expected: `1 failed in ...`

### 1.3: COMMIT RED

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

```bash
git add .
git commit -m "[day1/string-calculator] RED: empty string should return 0"
```

---

### 1.4: WRITE CODE (GREEN phase)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

**File: calculator.py** - Replace with:
```python
def add(numbers):
    """Add numbers from string. Empty string returns 0."""
    if not numbers:
        return 0
```

### 1.5: RUN TESTS (should PASS)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

```bash
pytest -q
```

Expected: `1 passed in ...`

### 1.6: COMMIT GREEN

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

```bash
git add .
git commit -m "[day1/string-calculator] GREEN: return 0 for empty string"
```

---

## STEP 2: SINGLE NUMBER

### 2.1: WRITE TEST (RED phase)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

**File: test_calculator.py** - Add this test method to the TestStringCalculator class:
```python
    def test_single_number_returns_value(self):
        """Single number string should return that number"""
        assert add("1") == 1
```

### 2.2: RUN TESTS (should FAIL)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

```bash
pytest -q
```

Expected: `1 failed, 1 passed in ...`

### 2.3: COMMIT RED

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

```bash
git add .
git commit -m "[day1/string-calculator] RED: single number should return itself"
```

---

### 2.4: WRITE CODE (GREEN phase)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

**File: calculator.py** - Replace with:
```python
def add(numbers):
    """Add numbers from string. Empty string returns 0."""
    if not numbers:
        return 0
    return int(numbers)
```

### 2.5: RUN TESTS (should PASS)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

```bash
pytest -q
```

Expected: `2 passed in ...`

### 2.6: COMMIT GREEN

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

```bash
git add .
git commit -m "[day1/string-calculator] GREEN: handle single number"
```

---

## STEP 3: TWO NUMBERS WITH COMMA

### 3.1: WRITE TEST (RED phase)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

**File: test_calculator.py** - Add this test method:
```python
    def test_two_numbers_returns_sum(self):
        """Two comma-separated numbers should return their sum"""
        assert add("1,2") == 3
```

### 3.2: RUN TESTS (should FAIL)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

```bash
pytest -q
```

Expected: `1 failed, 2 passed in ...`

### 3.3: COMMIT RED

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

```bash
git add .
git commit -m "[day1/string-calculator] RED: two numbers should return sum"
```

---

### 3.4: WRITE CODE (GREEN phase)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

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

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

```bash
pytest -q
```

Expected: `3 passed in ...`

### 3.6: COMMIT GREEN

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

```bash
git add .
git commit -m "[day1/string-calculator] GREEN: handle two numbers"
```

---

## STEP 4: MULTIPLE NUMBERS

### 4.1: WRITE TEST (RED phase)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

**File: test_calculator.py** - Add this test method:
```python
    def test_multiple_numbers_returns_sum(self):
        """Multiple comma-separated numbers should return their sum"""
        assert add("1,2,3,4") == 10
```

### 4.2: RUN TESTS (should FAIL)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

```bash
pytest -q
```

Expected: `1 failed, 3 passed in ...`

### 4.3: COMMIT RED

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

```bash
git add .
git commit -m "[day1/string-calculator] RED: support multiple numbers"
```

---

### 4.4: WRITE CODE (GREEN phase)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

**File: calculator.py** - Replace with:
```python
def add(numbers):
    """Add numbers from string. Empty string returns 0."""
    if not numbers:
        return 0
    return sum(int(x) for x in numbers.split(","))
```

### 4.5: RUN TESTS (should PASS)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

```bash
pytest -q
```

Expected: `4 passed in ...`

### 4.6: COMMIT GREEN

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

```bash
git add .
git commit -m "[day1/string-calculator] GREEN: support multiple numbers"
```

---

## STEP 5: NEWLINE DELIMITER

### 5.1: WRITE TEST (RED phase)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

**File: test_calculator.py** - Add this test method:
```python
    def test_newline_and_comma_delimiters(self):
        """Numbers can be separated by newline or comma"""
        assert add("1\n2,3") == 6
```

### 5.2: RUN TESTS (should FAIL)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

```bash
pytest -q
```

Expected: `1 failed, 4 passed in ...`

### 5.3: COMMIT RED

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

```bash
git add .
git commit -m "[day1/string-calculator] RED: support newline as delimiter"
```

---

### 5.4: WRITE CODE (GREEN phase)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

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

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

```bash
pytest -q
```

Expected: `5 passed in ...`

### 5.6: COMMIT GREEN

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

```bash
git add .
git commit -m "[day1/string-calculator] GREEN: support newline delimiter"
```

---

## STEP 6: CUSTOM DELIMITER

### 6.1: WRITE TEST (RED phase)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

**File: test_calculator.py** - Add this test method:
```python
    def test_custom_delimiter(self):
        """Custom delimiter can be specified with //delimiter\\n prefix"""
        assert add("//;\n1;2") == 3
```

### 6.2: RUN TESTS (should FAIL)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

```bash
pytest -q
```

Expected: `1 failed, 5 passed in ...`

### 6.3: COMMIT RED

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

```bash
git add .
git commit -m "[day1/string-calculator] RED: support custom delimiter"
```

---

### 6.4: WRITE CODE (GREEN phase)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

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

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

```bash
pytest -q
```

Expected: `6 passed in ...`

### 6.6: COMMIT GREEN

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

```bash
git add .
git commit -m "[day1/string-calculator] GREEN: support custom delimiter"
```

---

## STEP 7: NEGATIVE NUMBERS THROW ERROR

### 7.1: WRITE TEST (RED phase)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

**File: test_calculator.py** - Add this test method:
```python
    def test_negative_numbers_throw_exception(self):
        """Negative numbers should raise an exception"""
        with pytest.raises(ValueError) as excinfo:
            add("1,-2,3")
        assert "negative" in str(excinfo.value).lower()
```

### 7.2: RUN TESTS (should FAIL)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

```bash
pytest -q
```

Expected: `1 failed, 6 passed in ...`

### 7.3: COMMIT RED

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

```bash
git add .
git commit -m "[day1/string-calculator] RED: negative numbers should throw error"
```

---

### 7.4: WRITE CODE (GREEN phase)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

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

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

```bash
pytest -q
```

Expected: `7 passed in ...`

### 7.6: COMMIT GREEN

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

```bash
git add .
git commit -m "[day1/string-calculator] GREEN: throw error for negative numbers"
```

---

## STEP 8: IGNORE NUMBERS > 1000

### 8.1: WRITE TEST (RED phase)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

**File: test_calculator.py** - Add this test method:
```python
    def test_ignore_numbers_greater_than_1000(self):
        """Numbers greater than 1000 should be ignored"""
        assert add("2,1001,3") == 5
        assert add("1000,2,3") == 1005
```

### 8.2: RUN TESTS (should FAIL)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

```bash
pytest -q
```

Expected: `1 failed, 7 passed in ...`

### 8.3: COMMIT RED

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

```bash
git add .
git commit -m "[day1/string-calculator] RED: ignore numbers greater than 1000"
```

---

### 8.4: WRITE CODE (GREEN phase)

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

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

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

```bash
pytest -q
```

Expected: `8 passed in ...`

### 8.6: COMMIT GREEN

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

```bash
git add .
git commit -m "[day1/string-calculator] GREEN: ignore numbers greater than 1000"
```

---

## FINAL VERIFICATION

### 9.1: Run Full Test Suite

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

```bash
pytest -v
```

Expected output should show all 8 tests passing.

### 9.2: View Git Log

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

```bash
git log --oneline
```

Expected: Should show commits for INIT, then RED/GREEN pairs for each step.

### 9.3: Final Status Check

**Run pytest at:** `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`

**Run git status at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

```bash
pytest -q
git status
```

Both should be clean (all tests pass, no uncommitted changes).

---

## OPTIONAL: PUSH TO GITHUB

**Run at:** `c:\Users\DELL\Documents\coe-learning-plan` (project root)

If you want to save to GitHub:

```bash
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

Replace `<your-repo-url>` with your actual GitHub repo URL.

---

## DEBUGGING CHECKLIST

If tests fail unexpectedly (run at `c:\Users\DELL\Documents\coe-learning-plan\day1\string-calculator`):

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
