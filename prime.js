function checkPrime(num){
let count=0;

for(let i=1;i<=num;i++){
if(num%i==0){
count++;
}
}
if (count ==2 ){
return ture;

}
return false;
}
let ans = checkPrime(13)
if(ans==ture){
console.log("Prime")
}else{
console.log("Not Prime")
}


