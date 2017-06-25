$(document).ready(function(){

  var clear = function(ele){
    $(ele).remove();
  }

  var user = "x";
  $('.oneone').on("click", function(){
    user = appending(user, '.oneone') 
  });
  $('.onetwo').on("click", function(){
    user = appending(user, '.onetwo')
  });
  $('.onethree').on("click", function(){
    user = appending(user, '.onethree')
  });
  $('.twoone').on("click", function(){
    user = appending(user, '.twoone') 
  });
  $('.twotwo').on("click", function(){
    user = appending(user, '.twotwo')
  });
  $('.twothree').on("click", function(){
    user = appending(user, '.twothree')
  });
  $('.threeone').on("click", function(){
    user = appending(user, '.threeone') 
  });
  $('.threetwo').on("click", function(){
    user = appending(user, '.threetwo')
  });
  $('.threethree').on("click", function(){
    user = appending(user, '.threethree')
  });

  var appending = function(user, classname){
    if (isWinner()){
        alert(user + " is the winner");
      }
    if($(classname).text().trim() == ""){
      var $tpp = $('<p class="texting">'+user+'</p>')
      $tpp.appendTo(classname);
      if (isWinner()){
        alert(user + " is the winner");
      }
      if (user === "x"){
        user = "o"
      }else{
        user = "x"
      }
      return user
    }else{
      alert("someone has alredy gone there")
      return user
    };  
  }
  var allEqual = function(a, b, c){
    if (a == "" || b == "" || c == ""){
      return false
    }else{
      if (a === b){
        if (b === c){
          return true
        }
      }
    }
    
    return false
  }
  var isWinner = function(){
    var oneone = $('.oneone').text().trim()
    var onetwo = $('.onetwo').text().trim()
    var onethree = $('.onethree').text().trim()
    var twoone = $('.twoone').text().trim()
    var twotwo = $('.twotwo').text().trim()
    var twothree = $('.twothree').text().trim()
    var threeone = $('.threeone').text().trim()
    var threetwo = $('.threetwo').text().trim()
    var threethree = $('.threethree').text().trim()
    if(allEqual(oneone, twoone, threeone)) {
      return true
    }else if(allEqual(onetwo, twotwo, threetwo)){
      return true
    }else if(allEqual(onethree, twothree, threethree)){
      return true
    }else if(allEqual(oneone, onetwo, onethree)){
      return true
    }else if(allEqual(twoone, twotwo, twothree)){
      return true
    }else if(allEqual(threeone, threetwo, threethree)){
      return true
    }else if(allEqual(oneone, twotwo, threethree)){
      return true
    }else if(allEqual(onethree, twotwo, threeone)){
      return true
    }else{
      return false
    }
  }
});
