 function receivesAFunction(callback) {
      return callback();
  }

  function returnsANamedFunction() {
      return function receivesAFunction(assassin) {
          console.log(assassin);
      }
  }
    
  function returnsAnAnonymousFunction() {
      return function (unknown) {
          console.log(unknown);
      }
  }

