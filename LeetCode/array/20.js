// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

let s = "(){}[]";

function isValid(s) {
  const stack = [];

  const bracketsMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const str of s) {
    if (str in bracketsMap) {
      stack.push(str);
    } else {
      const top = stack.pop();
      if (bracketsMap[top] !== str) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid(s));
