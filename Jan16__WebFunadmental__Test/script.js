/**
 * Whole Logic is implemented by me after brainStorming for 4hours, please forgive if you encounter any bugs. If u have douts i can explain each line of code
 */

let isCircleturn=false;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let counter=0
let cells=document.querySelectorAll(".cell");
let messege=document.getElementById("messege")

let XhasWonCheck=()=>{
    let temp=[]
    let boolWin;
    cells.forEach((cell,index)=>{
        if(cell.textContent==="❌"){
            temp.push(index)
        }
    })

    for(let i=0;i<winningConditions.length;i++){
        boolWin=temp.join(",").includes(winningConditions[i].join(","))
        if(boolWin){
            return true
        }
    }
  
    // winningConditions.forEach((winC)=>{
    //     console.log(temp.join(","),winC.join(","));
    //     boolWin=temp.join(",").includes(winC.join(","))
    //     if(boolWin){
    //         console.log(boolWin);
    //         return true;
    //     }
    // });
    
}

let OhasWonCheck=()=>{
    let temp=[]
    let boolWin;
    cells.forEach((cell,index)=>{
        if(cell.textContent==="⭕"){
            temp.push(index)
        }
    })
    
    for(let i=0;i<winningConditions.length;i++){
        boolWin=temp.join(",").includes(winningConditions[i].join(","))
        if(boolWin){
            return true
        }
    }

    // winningConditions.forEach((winC)=>{
    //     boolWin=temp.join(",").includes(winC.join(","))
    //     if(boolWin){
    //         console.log(boolWin);
    //         return true;
    //     }
    // });
    
    
}



cells.forEach((cell,index)=>{
    cell.addEventListener('click',()=>{
        counter++
        if(cell.textContent===""){
            if(isCircleturn===false){
                cell.textContent="❌"
                isCircleturn=true;
               
                if(XhasWonCheck()){
                   messege.textContent="Player 1 has Won"
                   counter=0;
                   cells.forEach((cell)=>{
                       
                        cell.style.pointerEvents="none"
                       
                   })
                }
               
            }else{
                cell.textContent="⭕"
                isCircleturn=false;
                
                if(OhasWonCheck()){
                    messege.textContent="Player 2 has Won";
                    counter=0;
                    cells.forEach((cell)=>{
                        
                           cell.style.pointerEvents="none"
                        
                    })
                }
               
            }
           
            if(counter===9){
                messege.textContent="Its A Tie"
                counter=0;
                
            }
        }
    });
});




let reset=document.getElementsByClassName('reset')[0];

reset.addEventListener('click',()=>{
    cells.forEach((cell)=>{
        cell.textContent=""
        isCircleturn=false;
        cell.style.pointerEvents="auto"
    });

    messege.textContent="Tic Tac Toe"
});

