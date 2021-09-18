 const numeros = 100
 for (let index = 0; index <= numeros; index ++) {
     if(index === 0) {
         console.log('numero é zero');
     } else if (index % 2 ===0){
         console.log('o numero é par' + index);
     } else{
         console.log('o numero é impar' + index);
     }
 }