function checkPrime(number){
    let factor=0;
    
    for(let i=1;i<=number;i++){
    if(number%i==0){
    factor++;
    }
    }
    if (count ==2 ){
    return ture;
    
    }
    return false;
    }
    let answer = checkPrime(13)
    if(answer==ture){
    console.log("Prime Number")
    }else{
    console.log("Not a Prime Number")
    }