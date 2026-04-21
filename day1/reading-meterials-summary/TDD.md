## Test-Driven Development (TDD) — Summary Overview

### What is TDD?
**Test-Driven Development (TDD)** is a software development approach where you **write tests before writing the actual code**.

👉 Goal: ensure code is correct, clean, and maintainable from the start.

---

### Core cycle (Red → Green → Refactor)
1. **Red** 🔴  
   Write a test that fails (feature not implemented yet)

2. **Green** 🟢  
   Write the **simplest code** to make the test pass

3. **Refactor** ♻️  
   Improve code quality without breaking tests

Repeat this cycle continuously.

---

### 3 Laws of TDD
Defined by Robert C. Martin:

1. Write no production code without a failing test  
2. Write only enough test code to fail  
3. Write only enough code to pass the test  

---

### Key principles
- Tests guide design
- Keep changes **small and incremental**
- Focus on **simplicity**
- Maintain **high test coverage**
- Refactor safely with tests as a safety net

---

### Benefits
- Fewer bugs (issues caught early)
- Cleaner, modular design
- Easier refactoring
- Better understanding of requirements
- High confidence in code changes

---

### Drawbacks / Challenges
- Slower at the beginning
- Requires discipline and practice
- Poorly written tests can slow development
- Not ideal for all scenarios (e.g., quick prototypes)

---

### Where it fits
TDD aligns closely with:
- Agile development
- Kaizen (continuous improvement)
- Software craftsmanship practices

---

### Quick example (idea)
Instead of:
> Write full feature → test later  

TDD does:
> Write small test → implement → improve → repeat  

---

### Memory hook
**“Test first, code second, improve continuously.”**

