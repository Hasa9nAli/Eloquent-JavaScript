const repeat =(n, action)=>{
  for(let i = 0 ; i < n ; i++)
    action(i)
}
repeat(3, console.log)
let lables = []; 
repeat(5, i =>{
lables.push(`unit ${i+1}`)
})
console.log(lables) // ['unit 1', 'unit 2','unit 3','unit 4','unit 5' ]
