function rot13(str) {
    var regularAlphabet =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  
    var shiftedAlphabet=["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"];
  
    var decode=[];
    for(var x=0; x<str.length; x++){
      for(var y=0; y<regularAlphabet.length; y++){
       if(str[x]===regularAlphabet[y]){
          decode.push(shiftedAlphabet[y]);
        } 
      }
      if(str[x]===" "||str[x]==="-"||str[x]==="_"||str[x]==="."||str[x]==="&"||str[x]==="?"||str[x]==="!"||str[x]==="@"||str[x]==="#"||str[x]==="/"){
            decode.push(str[x]);
      }
    }
  
    return decode.join("");
  }
  
  console.log(rot13("SERR PBQR PNZC"));