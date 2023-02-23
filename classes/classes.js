class person  {
   
        name='faiz'
    
    printname=() =>{
        console.log(this.name)
    }
}
class human extends person{
    
       
        age='26'
    
    printage=()=>{
        console.log(this.age)
    }
}


const p1 = new human()
p1.printname()
p1.printage()