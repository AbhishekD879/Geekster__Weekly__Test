/**

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
 */
var first_Term=parseInt(prompt("Enter The first term in Geometric Progression"))
var common_Ratio=parseInt(prompt("Enter The Common Ratio bethween two consecutive Term"))
var nth_position=parseInt(prompt("Enter the position of Nth term i.e(n) "))

var nth_term=first_Term * (common_Ratio**(nth_position-1));

console.log('====================================');
console.log("Nth Number In Geometric Progression is " + nth_term);
console.log('====================================');