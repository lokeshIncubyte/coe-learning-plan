# String Calculator (Day 1)

Implementation of the String Calculator kata using Python and pytest.

## Prerequisites

- Python 3.11+
- A virtual environment (recommended)

## Setup

Run these commands from `day1/string-calculator`:

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
```

If you are using Command Prompt instead of PowerShell:

```bat
.\venv\Scripts\activate.bat
```

## Run the Calculator

This kata currently exposes a function `add(numbers)` in `calculator.py`.

Quick one-liner examples from `day1/string-calculator`:

```powershell
python -c "from calculator import add; print(add(''))"
python -c "from calculator import add; print(add('1,2,3'))"
python -c "from calculator import add; print(add('//;\n1;2'))"
```

## Run Tests

From `day1/string-calculator`:

```powershell
pytest -q
```

## Example Runs

```text
Input: ""
Output: 0
```

```text
Input: "1,2,3"
Output: 6
```

```text
Input: "1\n2,3"
Output: 6
```

```text
Input: "//;\n1;2"
Output: 3
```

```text
Input: "2,1001,3"
Output: 5
```

```text
Input: "1,-2,3"
Output: ValueError: negative numbers not allowed: [-2]
```
