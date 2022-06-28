// find the minimum value bteeen numbers 
function min(first, second){
    if(first < second)
        return first;
    else
        return second;

}
// even or odd of positive number  using recursion 
const isEven = (num) => {
    if(num === 0)
        return true;
    else if(num === 1)
        return false;
    else
        return isEven(num - 2);
}
const countBs  = (string) =>{
    let count = 0 ; 
    for (let i =0 ; i <string.length;i++)
        if(string[i] == "B"){
            count ++ ; 
        }
        return count ; 
} ; 
const countChar = (string, char) =>{
    let count = 0 ; 
    for (let i =0 ; i <string.length;i++)
        if(string[i] == char){
            count ++ ; 
        }
        return count ; 
}
console.log(`this is return from countBs function ${countBs("BBC")}`);
console.log(`this is return from countBs function ${countChar("kakkerlak", "k")}`);
