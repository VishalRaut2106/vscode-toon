/**
 * Flatten nested JSON objects to reduce TOON token usage
 */

export interface FlattenOptions {
  separator?: string
  maxDepth?: number
}

/**
 * Flatten a nested object into a flat structure with dot notation keys
 * 
 * Example:
 * { user: { name: "Alice", age: 30 } }
 * becomes
 * { "user.name": "Alice", "user.age": 30 }
 */
export function flattenObject(
  obj: any,
  options: FlattenOptions = {}
): Record<string, any> {
  const separator = options.separator ?? '.'
  const maxDepth = options.maxDepth ?? Infinity
  const result: Record<string, any> = {}

  function flatten(current: any, prefix: string = '', depth: number = 0): void {
    // Stop if max depth reached
    if (depth >= maxDepth) {
      result[prefix] = current
      return
    }

    // Handle null/undefined
    if (current === null || current === undefined) {
      result[prefix] = current
      return
    }

    // Handle arrays - keep as is (don't flatten)
    if (Array.isArray(current)) {
      result[prefix] = current
      return
    }

    // Handle objects
    if (typeof current === 'object' && current !== null) {
      const keys = Object.keys(current)
      
      // Empty object
      if (keys.length === 0) {
        result[prefix] = {}
        return
      }

      // Flatten each property
      for (const key of keys) {
        const newPrefix = prefix ? `${prefix}${separator}${key}` : key
        flatten(current[key], newPrefix, depth + 1)
      }
    }
    else {
      // Primitive value
      result[prefix] = current
    }
  }

  flatten(obj)
  return result
}

/**
 * Unflatten a flat object back to nested structure
 * 
 * Example:
 * { "user.name": "Alice", "user.age": 30 }
 * becomes
 * { user: { name: "Alice", age: 30 } }
 */
export function unflattenObject(
  obj: Record<string, any>,
  options: FlattenOptions = {}
): any {
  const separator = options.separator ?? '.'
  const result: any = {}

  for (const [flatKey, value] of Object.entries(obj)) {
    const keys = flatKey.split(separator)
    let current = result

    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i]!
      if (!(key in current)) {
        current[key] = {}
      }
      current = current[key]
    }

    const lastKey = keys[keys.length - 1]!
    current[lastKey] = value
  }

  return result
}

/**
 * Check if an object has nested objects (excluding arrays)
 */
export function hasNestedObjects(obj: any): boolean {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return false
  }

  for (const value of Object.values(obj)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      return true
    }
  }

  return false
}

/**
 * Estimate token savings from flattening
 */
export function estimateTokenSavings(obj: any): { nested: number, flat: number, savings: number } {
  // Simple estimation based on string length
  const nestedStr = JSON.stringify(obj)
  const flatObj = flattenObject(obj)
  const flatStr = JSON.stringify(flatObj)

  const nested = nestedStr.length
  const flat = flatStr.length
  const savings = nested - flat

  return { nested, flat, savings }
}
