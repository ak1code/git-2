
let num=7;
let factor=0;

for(i=1;i<=num;i++){
if(num%i==0){
factor++
}
}
console.log((factor==2)? "Prime Number":"Not a Prime Number")