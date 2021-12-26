/**
 # **Q3.Write a program to take an input from the user (num) and check whether it is a prime number or not.**

 ## **Approach====>**
 *                  input n 
                    loop form i=2 to sqrt(n)
                            check n%i===0
                                print(n+" is not prime number")
                                    break;
                    print(n+ " is prime number")
                                          
 */
let n=parseInt(prompt("Enter a number to check wheather it is prime or not"))
let primeFlage=true;
for(i=2;i<Math.sqrt(n);i++){
    if(n%i===0){
        
        
        primeFlage=false
        break;
    }
}

if(primeFlage){
    console.log(n+" is  prime number");
}else{
    console.log(n+" is not prime number");
}