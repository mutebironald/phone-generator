var generator = function(){
    var randomize = Math.random();
    var randomizeString = randomize.toString();
    return number = randomizeString.split('.')[1];
  }
  
  var count = 0;
  var randomizer = function (numbers){
    var phoneBook = [];
    while(count < numbers){
      generator();
      if(number.length < 9){
          var newNumber = number.split('')[1]
          number = newNumber + randomizeString.split('.')[1];
          number = number.split('').slice(0 , 9).join('');
      } else if (number.length > 9){
          number = number.split('').slice(0 , 9).join(''); 
      }
  
    if(phoneBook.includes(number)){
        generator();
        var newNumber = number.split('')[1]
        number = newNumber + randomizeString.split('.')[1];
        number = number.split('').slice(0 , 9).join('');
    }
      phoneBook.push(parseInt(number))
      count++;
  }
    return phoneBook;
  
  }; 
    
  var result = randomizer(6);
  

  
  