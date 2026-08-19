function timer2(ms = 1500) { 
    const before = new Date();
    return new Promise((resolve) => {
        setTimeout( () => resolve({before, now: new Date()}),
               ms, 
              ); 
        }); 
    }


timer2().then(console.log);