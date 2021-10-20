function palindrome(str) {
    let newArr = str.toLowerCase().replace(/[^a-z0-9]/gi, '').split('');
    let holder1="";
    let holder2="";
    for(var x=0; x<newArr.length; x++){
      holder1+=newArr[x];
    }
    for(var y= newArr.length-1; y>=0; y--){
      holder2+=newArr[y];
    }
    if(holder1===holder2){
      return true;
    } if(holder1!== holder2) {
      return false;
    }
  }
  
  
  
  palindrome("eye");