


function rockOn(x){
    const comOp = Math.random();
    x= Number(x);
    let output = ''
    let op = 0;
    if (comOp >=0 && comOp <1/3){
        output= 'Rock';
         
    }
    else if (comOp>=1/3 && comOp <2/3){
        output= 'Paper';
        op= 2;

    }

    else if (comOp>=2/3 && comOp<=1){
    output= 'scissor';
    op=1;
    }

    let decision = '';
     
    if (x == op){ //both picked same
        decision = 'Tied'
    }
    else if ((x==1 && op == 2) || (x==0 && op==1) (x==2 && op==0) ){ //input scissors
        decision= 'Win'
    }
    else{ //if the conditions dont match
        decision= 'Lose'
    }

    alert(`computer picked ${ output } ${comOp}. You ${ decision }`);
    location.reload() 
}