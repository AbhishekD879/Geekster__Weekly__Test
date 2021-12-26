/**

# **Q1.Write A program to find Nth Number in Arithmetic Progression**
   
---
## **Assumption===>**
                first_Term is given
                common_Difference is given
                Nth Position is Given
                
## **Approach====>**
                Take Input i.e(First_Term,Common_Difference,N)
                Nth term = first_Term + (N-1)*common_Difference
                print Nth term                
 */

var first_Term=parseInt(prompt("Enter The first term in Arithmetic Progression"))
var common_Difference=parseInt(prompt("Enter The Common Difference bethween two consecutive Term"))
var nth_position=parseInt(prompt("Enter the position of Nth term i.e(n) "))

var nth_term=first_Term + ((nth_position-1)*common_Difference);

console.log('====================================');
console.log("Nth Number In Arithmetic Progression is " + nth_term);
console.log('====================================');