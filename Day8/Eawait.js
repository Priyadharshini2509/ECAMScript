function print() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await print();
    console.log(result);
  }
  asyncCall();
  

  //output first print calling 
  //then await call the function and 2 second later it will print resolved

  