# SOLID Principles — Knowledge-Back Summary (Quick Revision)

## What SOLID Means
SOLID is a set of 5 design principles that guide how to structure code so it is:
- easy to understand
- easy to modify
- easy to extend
- less prone to breaking

The core idea: **write code that adapts to change without becoming messy or fragile.**

---

## 1. Single Responsibility Principle (SRP)

**Understanding:**
A class or module should focus on doing one thing well.  
If it has multiple responsibilities, changes in one area can affect others, making the system fragile.

**What this means in practice:**
- Separate concerns (business logic, data handling, UI, etc.)
- Keep classes small and focused
- Avoid “do-it-all” classes

**Key takeaway:**
> One unit → one responsibility → one reason to change

---

## 2. Open/Closed Principle (OCP)

**Understanding:**
Code should allow new behavior to be added without modifying existing, stable code.

**What this means in practice:**
- Design systems so new features are added via extension (not modification)
- Use abstraction (interfaces, inheritance, composition)
- Avoid modifying core logic every time requirements change

**Key takeaway:**
> Extend behavior without rewriting existing code

---

## 3. Liskov Substitution Principle (LSP)

**Understanding:**
Any subclass should behave in a way that does not break expectations set by its parent class.

**What this means in practice:**
- Subclasses must honor the contract of the base class
- Avoid inheritance where behavior fundamentally differs
- Ensure substitutability without side effects

**Key takeaway:**
> If it’s a subtype, it should act like the original type

---

## 4. Interface Segregation Principle (ISP)

**Understanding:**
Clients should not be forced to depend on methods they do not use.

**What this means in practice:**
- Prefer smaller, focused interfaces
- Split large interfaces into role-specific ones
- Let classes implement only what they actually need

**Key takeaway:**
> Many small, specific interfaces > one large, general interface

---

## 5. Dependency Inversion Principle (DIP)

**Understanding:**
High-level logic should not depend on low-level implementation details.  
Both should depend on abstractions.

**What this means in practice:**
- Use interfaces or abstract classes
- Inject dependencies instead of creating them directly
- Decouple business logic from implementation details

**Key takeaway:**
> Depend on abstractions, not concrete implementations

---

## Overall Understanding of SOLID

After studying SOLID, the main idea is:

- Structure code around **clear responsibilities**
- Design systems that are **flexible to change**
- Reduce tight coupling between components
- Use abstraction to manage complexity

SOLID is not about adding complexity — it is about **controlling complexity as systems grow**.

---

## Mental Model

- Break things into **focused parts** (SRP)
- Make systems **extendable without rewriting** (OCP)
- Ensure components behave **predictably** (LSP)
- Keep contracts **minimal and relevant** (ISP)
- Build against **abstractions, not details** (DIP)

---

## Final Summary

SOLID helps transform code from:
- rigid → flexible  
- tightly coupled → loosely coupled  
- hard to change → easy to evolve  

At its core, SOLID is about writing code that **remains clean and manageable as it scales**.