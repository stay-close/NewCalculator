const inputScreen=document.querySelector('.inputScreen')
const outputScreen=document.querySelector('.outputScreen')
const keys=document.querySelectorAll('.key')

let input=''

keys.forEach(key=>{
  let lastInputValue=key.dataset.key;

  key.addEventListener('click',()=>{

    if(lastInputValue=='clearAll'){

      input='';
      outputScreen.innerHTML=''
      inputScreen.innerHTML=''

    }else if(lastInputValue=='backspace'){

      input=input.slice(0,-1)
      inputScreen.innerHTML=input;

    }else if(lastInputValue=='='){
      console.log(input)
      
      let result=eval(input)
     outputScreen.innerHTML=result;
     

    }else if(lastInputValue=='brackets'){

      if(
        input.indexOf('(')==-1 ||
        input.indexOf('(')!=-1 &&
        input.indexOf(')')!=-1 &&
        input.lastIndexOf('(')<input.lastIndexOf(')')

      ){
        input+='('
      }else if(
        input.indexOf('(')!=-1 &&
        input.indexOf(')')==-1 ||
        input.lastIndexOf('(')>input.lastIndexOf(')') 
      ){
        input+=')'
      }
      inputScreen.innerHTML=input;

    }else{
     if(validateInput(lastInputValue)){
      input+=lastInputValue;
      inputScreen.innerHTML=input;
     }
    }

  })
})


function validateInput(inputValue){
  let lastInput=input.slice(-1);
  const operators=['+','-','*','/'];

  if(lastInput=='.' && inputValue=='.'){
    return false;
  }else if(operators.includes(inputValue)){
    
    if(operators.includes(lastInput)){
      return false;
    }else{
      return true;
    }
  }else{
    return true;
  }

} 