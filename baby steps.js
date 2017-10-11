const arr = process.argv.slice(2)


const result = arr.reduce((sum, num) => {
  return sum + parseInt(num)
}, 0)

console.log(result)
