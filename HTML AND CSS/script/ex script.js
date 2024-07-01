let name ="vicky"
let lastname ="vignesh"
let city ="coimbatore"
console.log(name,lastname,"lives in ",city)
// backtick
let msg =`${name} ${lastname} "lives in"${city}`
console.log(msg)

let m = `happy
birthday`
console.log(m)
let s =`your have 5 items in your cast.
                your cost is $ 95`
console.log(s)
// string
let regname = ["ajay noob","athikash","bala","bhuvana"]
console.log(regname)
console.log(regname[0])
// matrix
let matrix=[[7,5,1,2],[3,4,5,6],[7,8,9,1]]
console.log(matrix[2])
console.log(matrix[0][1])
let array = ["a","b","c","d","e"]
array.push("f")
console.log(array)
array.pop("f")
console.log(array)
// splice metheod
array.splice(1,2)
console.log(array)
array.splice(1,0,"b","c")
console.log(array)
// slice methood to take values
let array1=["a","b","c","d","e"]
array1.slice((1,3))
console.log(array.slice(1,3))
// join...to chane array into string
// split...to change string into array
let array2 = "a,b,c,d,e"
let array3 = array2.split(",")
console.log(array3)
// join
let join = array3.join()
console.log(join)
// concat joint array
let fstarray = [1,2,3,4]
let secarray = [5,6,7,8]
let concat = fstarray.concat (secarray)
console.log(concat)
//normal
let vicky7 =['a','b','c','d','e']
console.log(vicky7.shift())
console.log(vicky7)
console.log(vicky7.unshift('a'))
console.log(vicky7)
