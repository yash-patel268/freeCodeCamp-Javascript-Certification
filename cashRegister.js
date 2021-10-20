function checkCashRegister(price, cash, cid) {
  var values=[1,5, 10, 25, 100, 500, 1000, 2000, 10000];
  var difference = (cash-price)*100;
  var returnArr=[];
  var totalChange=0;
  var moneyTakenOut=0;

  for(let item of cid){
    totalChange+=item[1];
  }
  totalChange*=100;

  if(difference>totalChange){
    return{status: "INSUFFICIENT_FUNDS", change: []};
  } else if(difference==totalChange){
    return{status: "CLOSED", change: cid};
  } else{
    for(var x=cid.length-1; x>=0;x--){
      moneyTakenOut=0;
      while(values[x]<=difference && cid[x][1]>0 && difference>0){
        cid[x][1]-=values[x]/100;
        difference-=values[x];
        moneyTakenOut+=values[x]/100;
      }
      if(moneyTakenOut!=0){
        returnArr.push([cid[x][0], moneyTakenOut]);
      }
    }
    console.log(returnArr);

    if(difference>0){
      return{status: "INSUFFICIENT_FUNDS", change: []};
    }

    return{status: "OPEN", change: returnArr};
  }
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);