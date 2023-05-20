
const sum = require(`./file2`)
test("return the sum of two numbers", ()=>{
  expect(sum(2,3)).toBe(5)
})