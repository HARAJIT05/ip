var a =[10,35,27,10,55,35]
var b = a.filter((item,index)=>{
    return a.indexOf(item)==index
}
)
console.log(b)
