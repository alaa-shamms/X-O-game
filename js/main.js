
Title=document.querySelector('.title')

let turn='X'






function endofGame(num1,num2,num3)
{
    items[num1].classList.add('winner')
    items[num2].classList.add('winner')
    items[num3].classList.add('winner')

     Title.innerHTML=`${items[num1].innerHTML}  winner`
     
    

    setInterval(() => {
     Title.innerHTML+='.'
    }, 1000);

    setTimeout(() => {
     location.reload()
    }, 3000);
    
    for(let i=1;i<10;i++)
    {
      document.getElementById(i).classList.add('disabedDiv')

    }
  
   
}

let items=[]

function  winnerInGame()
{

    for(let i=1;i<10;i++)
    {
         items[i]=document.getElementById(i)

    }

    if(items[1].innerHTML ==items[2].innerHTML && items[2].innerHTML == items[3].innerHTML &&items[2].innerHTML!='' )
    {
        endofGame(1,2,3)

    }
     else if(items[4].innerHTML ==items[5].innerHTML && items[5].innerHTML == items[6].innerHTML &&items[4].innerHTML!='' )
     {

        endofGame(4,5,6)
  
     }
     else if(items[7].innerHTML ==items[8].innerHTML && items[8].innerHTML == items[9].innerHTML &&items[7].innerHTML!='' )
     {

        endofGame(7,8,9)
  
     }
     else if(items[1].innerHTML ==items[4].innerHTML && items[4].innerHTML == items[7].innerHTML &&items[1].innerHTML!='' )
     {

        endofGame(1,4,7)
  
     }
     else if(items[2].innerHTML ==items[5].innerHTML && items[5].innerHTML == items[8].innerHTML &&items[2].innerHTML!='' )
     {

        endofGame(2,5,8)
  
     }  
    else if(items[3].innerHTML ==items[6].innerHTML && items[6].innerHTML == items[9].innerHTML &&items[6].innerHTML!='' )
     {

        endofGame(3,6,9)
  
     }
     else if(items[1].innerHTML ==items[5].innerHTML && items[5].innerHTML == items[9].innerHTML &&items[1].innerHTML!='' )
     {

        endofGame(1,5,9)
  
     }   
      else if(items[3].innerHTML ==items[5].innerHTML && items[5].innerHTML == items[7].innerHTML &&items[3].innerHTML!='' )
     {
        endofGame(3,5,7)
        
     }

     
}





let element;

function game(id)
{
     element=document.getElementById(id)

    if(turn==='X'&&element.innerHTML=='')
    {
        element.innerHTML='X'
        turn='O'
        Title.innerHTML='O'
    }
    else if(turn==='O'&&element.innerHTML=='')
    {
        element.innerHTML='O'
        turn='X'
        Title.innerHTML='X' 
    }
     winnerInGame()
}



let reset=document.querySelector('#reset')

reset.addEventListener('click',()=>{

    location.reload()
    
})


