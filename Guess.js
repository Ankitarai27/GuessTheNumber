let rd=Math.floor(Math.random()*100)+1;
let num, attempt=1;
do{
    num=prompt("Enter the number b/w 1 and 100");
    num = parseInt(num);
    if(num>rd){
        alert("Please enter smaller number");
    }
    else if(num<rd){
        alert("Please enter larger  number");
    }
    else{
        alert("Congratualation!!! you entered correct number.")
        alert('Number of attempt'+attempt);
        
    }
    attempt++;
}while(num!==rd)