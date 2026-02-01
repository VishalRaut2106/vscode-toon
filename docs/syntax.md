# TOON Syntax Reference

Complete reference for TOON (Token-Oriented Object Notation) syntax.

## Basic Types

### Primitives
```toon
name: Alice
age: 30
active: true
score: null
```

### Comments
```toon
# This is a comment
name: Alice  # Inline comment
```

## Arrays

### Inline Arrays
Simple lists of primitives:
```toon
tags[3]: javascript,typescript,react
numbers[5]: 1,2,3,4,5
flags[2]: true,false
```

### Tabular Arrays
CSV-style arrays with field headers:
```toon
users[3]{id,name,email,role}:
  1,Alice,alice@example.com,admin
  2,Bob,bob@example.com,user
  3,Charlie,charlie@example.com,guest
```

### List Arrays
YAML-style arrays:
```toon
products[2]:
  - id: 1
    name: Laptop
    price: 999.99
    specs:
      cpu: Intel i7
      ram: 16GB
  - id: 2
    name: Mouse
    price: 29.99
```

### Empty Arrays
```toon
archived[0]:
pending[0]:
```

## Objects

### Simple Objects
```toon
user:
  name: Alice
  age: 30
  active: true
```

### Nested Objects
```toon
config:
  database:
    host: localhost
    port: 5432
    credentials:
      username: admin
      password: secret
  cache:
    enabled: true
    ttl: 3600
```

## Delimiters

### Comma (Default)
```toon
data[3]: a,b,c
```

### Tab (Most Efficient)
```toon
data[3	]: a	b	c
```

### Pipe (Safe for Data with Commas)
```toon
data[3|]: "Smith, John"|"Doe, Jane"|"Brown, Bob"
```

## Array Length Validation

TOON requires explicit array lengths for validation:

```toon
# Correct - length matches items
items[2]: a,b

# Error - length mismatch
items[3]: a,b  # Only 2 items, declared 3
```

## Field Headers

Tabular arrays use field headers for structure:

```toon
# Field header defines column structure
users[2]{id,name,email}:
  1,Alice,alice@example.com
  2,Bob,bob@example.com
```

## Mixed Structures

Combine different TOON constructs:

```toon
company:
  name: Acme Corp
  founded: 2020
  employees[2]{id,name,department}:
    1,Alice,Engineering
    2,Bob,Sales
  offices[3]:
    - city: New York
      country: USA
      active: true
    - city: London
      country: UK
      active: true
    - city: Tokyo
      country: Japan
      active: false
  tags[4]: tech,startup,b2b,saas
```

## Best Practices

### Choose the Right Array Type

- **Inline**: Simple lists of primitives
- **Tabular**: Uniform objects with same fields
- **List**: Complex or varied structures

### Optimize for Tokens

1. Use tab delimiters for maximum efficiency
2. Keep field names short but meaningful
3. Avoid unnecessary nesting
4. Use tabular format for uniform data

### Maintain Readability

1. Use consistent indentation (2 spaces recommended)
2. Add comments for complex structures
3. Group related data together
4. Use meaningful names for arrays and fields