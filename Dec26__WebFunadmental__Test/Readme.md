# **Q1.Write A program to find Nth Number in Arithmetic Progression**
   
---

## **Assumption===>**
*                first_Term is given
                common_Difference is given
                Nth Position is Given
                
## **Approach====>**
*                Take Input i.e(First_Term,Common_Difference,N)
                Nth term = first_Term + (N-1)*common_Difference
                print Nth term 

----

# **Q2.Write A program to find Nth Number in Geometric Progression**
       
---

## **Assumption===>**
*                   first_Term is given
                    common_Ratio is given
                    Nth Position is Given
                    
## **Approach====>**
*                  Take Input i.e(First_Term,Common_Ratio,N)
                    Nth term = first_Term*(Common_Ratio**(N-1))
                    print Nth term 

----

# ** Q3.Write a program to take an input from the user (num) and check whether it is a prime number or not.**

---

 ## **Approach====>**
 *                  input n 
                    loop form i=2 to sqrt(n)
                            check n%i===0
                                print(n+" is not prime number")
                                    break;
                    print(n+ " is prime number"

----            

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

----

