function telephoneCheck(str) {
    if(str[0]=="(" && str[str.length-1]==")"){
      return false;
    }else if(str.includes("(")!=str.includes(")")){
      return false
    } else if(str.replace(/[^\d]/g, "").length>10&& str[0]!=1){
      return false;
    }
  
    var phone=str.replace(/[^\d-()\s]/g, "")
     console.log(phone)
    if(phone.length==10||phone.length==12||phone.length==13||phone[0]==1&&(phone.length==14||phone.length==16)){
      return true;
    } else{
      return false;
    }
  
  
  }
  
  telephoneCheck("1 555-555-5555");
  telephoneCheck("(555)555-5555"); 
  telephoneCheck("1(555)555-5555");
  telephoneCheck("1 555 555 5555");
  telephoneCheck("1 456 789 4444");
  telephoneCheck("(6054756961)")