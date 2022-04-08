// code your solution here
function saturdayFun (string=`roller-skate`){
   return `This Saturday, I want to ${string}!`;
}
console.log(saturdayFun());
console.log(saturdayFun(`I want to bathe my dog`));
function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`;
}
console.log(mondayWork("work from home"));

let wrapAdjective=function(style="*"){
    return function(adjective="special"){
    return `You are ${style}${adjective}${style}!`;
    }
}
wrapAdjective();
console.log(wrapAdjective());