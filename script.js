 var names = ["joe","mina","rina","Jen","tina"];
  //console.log(names);
  for(var name of names){
      //console.log(name);

      var nameFirst = name.charAt(0);
     //console.log(nameFirst);
      
     var smallj = "j";
     var capJ = "J";
     if(nameFirst === smallj || nameFirst === capJ){
         console.log("goodbye "+ name);
     }
     else{
         console.log("Hello " + name);
     }
  }