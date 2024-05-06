function* generator(a) {
    let contador = 1
      while(true){
      const resultado = a*contador
      yield `${a} x ${contador} = ${resultado}`
      contador++
    }
  }
  
  const gen = generator(5);

  console.log(gen.next().value); 
  console.log(gen.next().value);
  console.log(gen.next().value);
  