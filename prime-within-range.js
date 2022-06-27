let pnum = prompt('Enter the number');
let flag = 1;
function primerange(num){
        for(k=2;k<=num;k++)
    {
        flag=1;
        for(i=2;i<=k/2 ;i++)
        {
        if(k%i==0)
        {
        flag=0;
        break;
        }
        }
        if(flag==1){
            console.log(k," is Prime number")
        }
        
    }
}
var result1 = primerange(pnum)
