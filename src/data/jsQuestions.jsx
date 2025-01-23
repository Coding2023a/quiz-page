const jsQuestions = [
    {
        question: "How do you create an array containing the numbers 1 through 5?",
        options: [
            "let numbers = [1, 2, 3, 4, 5];",
            "let numbers = new Array(1, 2, 3, 4, 5);",
            "let numbers = Array(1, 2, 3, 4, 5);",
            "let numbers = [1; 2; 3; 4; 5];"
        ],
        answer: "let numbers = [1, 2, 3, 4, 5];"
    },
    {
        question: "How do you find the length of an array named 'items'?",
        options: [
            "items.length;",
            "items.size;",
            "items.count;",
            "length(items);"
        ],
        answer: "items.length;"
    },
    {
        question: "How do you add a new item 'apple' to the beginning of an array called 'fruits'?",
        options: [
            "fruits.unshift('apple');",
            "fruits.push('apple');",
            "fruits.add('apple');",
            "fruits.insert(0, 'apple');"
        ],
        answer: "fruits.unshift('apple');"
    },
    {
        question: "How do you remove the last item from an array called 'colors'?",
        options: [
            "colors.pop();",
            "colors.shift();",
            "colors.remove();",
            "colors.delete();"
        ],
        answer: "colors.pop();"
    },
    {
        question: "How do you create a function that returns the square of a number?",
        options: [
            "function square(num) { return num * num; }",
            "function square(num) { num * num; }",
            "const square = num => num * num;",
            "function square(num) { return num ^ 2; }"
        ],
        answer: "function square(num) { return num * num; }"
    },
    {
        question: "How do you check if a variable 'value' is a string?",
        options: [
            "typeof value === 'string';",
            "value instanceof String;",
            "value.isString();",
            "value.type === 'string';"
        ],
        answer: "typeof value === 'string';"
    },
    {
        question: "How do you iterate over an array 'numbers' and print each value?",
        options: [
            "for (let i = 0; i < numbers.length; i++) { console.log(numbers[i]); }",
            "numbers.forEach(num => console.log(num));",
            "for (let num in numbers) { console.log(num); }",
            "numbers.map(num => console.log(num));"
        ],
        answer: "for (let i = 0; i < numbers.length; i++) { console.log(numbers[i]); }"
    },
    {
        question: "How do you find the index of the value '5' in an array 'numbers'?",
        options: [
            "numbers.indexOf(5);",
            "numbers.findIndex(5);",
            "numbers.getIndex(5);",
            "numbers.positionOf(5);"
        ],
        answer: "numbers.indexOf(5);"
    },
    {
        question: "How do you merge two arrays, 'array1' and 'array2', into a single array?",
        options: [
            "let merged = array1.concat(array2);",
            "let merged = array1 + array2;",
            "let merged = [...array1, ...array2];",
            "let merged = array1.merge(array2);"
        ],
        answer: "let merged = array1.concat(array2);"
    },
    {
        question: "How do you define an object with properties 'name' and 'age'?",
        options: [
            "let person = { name: 'John', age: 30 };",
            "let person = new Object({ name: 'John', age: 30 });",
            "let person = Object.create({ name: 'John', age: 30 });",
            "let person = { 'name': 'John', 'age': 30 };"
        ],
        answer: "let person = { name: 'John', age: 30 };"
    }
  ];

  export default jsQuestions