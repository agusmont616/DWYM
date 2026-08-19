function timer(ms = 1500) { return new Promise((resolve) => {
    setTimeout( () => resolve(new Date()),
               ms, 
              ); 
        }); 
    }

timer().then(console.log);