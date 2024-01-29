const inputScreen=document.querySelector('.inputScreen')
const outputScreen=document.querySelector('.outputScreen')
const keys=document.querySelectorAll('.key')

let input=''

keys.forEach(key=>{
  let value=key.dataset.key;

  key.addEventListener('click',()=>{

    if(value=='clearAll'){

      input='';
      outputScreen.innerHTML=''
      inputScreen.innerHTML=''

    }else if(value=='backspace'){

      input=input.slice(0,-1)
      inputScreen.innerHTML=input;

    }else if(value=='='){
      console.log(input)
      
      let result=eval(input)
     outputScreen.innerHTML=result;
     

    }else{
      input+=value;
      inputScreen.innerHTML=input;
    }

  })
})