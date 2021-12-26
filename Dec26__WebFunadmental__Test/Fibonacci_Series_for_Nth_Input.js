/**
# **Q4.To find Fibonacci Series for Nth Input**

---

## **Approach===>**
*             initilize empty array
                input N from User
                boundary Condition if n=0 print 0
                                   if n=1 print 0,1
                else n>1
                        then:
                            loop from i=0 to n-2 because our series if length greater than 1 : will always contain x[0]=0 and x[1]=1;
                            declare temp a such that a=x[i]+x[i+1]===> gives us next element in series    
                        display the series                    

 */

let fibonacci_Series=[];
fibonacci_Series[0]=0;
fibonacci_Series[1]=1;
let n=parseInt(prompt("Enter the length of Fibonacci Series i.e(N)"))

if(parseInt(n)===0){
    console.log(0)
}else if(parseInt(n)===1){
    console.log(0,1)
}else{
    for(let i=0;i<parseInt(n-2);i++){
        let a;

        a=fibonacci_Series[i]+fibonacci_Series[i+1]

        x.push(a)
}
//     console.log(x.slice(0,x.length-2))
        console.log(fibonacci_Series);
}