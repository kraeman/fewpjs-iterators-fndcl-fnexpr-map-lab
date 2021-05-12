const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  let arrayOfAll = tutorials.map(name => {
    let y = name.split(" ").map(word => {
      let w = word.split("")
      let ul = w[0].toUpperCase()
      w.shift()
      w.unshift(ul)
      return w.join("")
    })
    return y.join(" ")
  })
  return arrayOfAll
}
