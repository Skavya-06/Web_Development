function cal(a,b){
    function add(a,b){
        console.log(`Total sum is =${a+b}`);
    }
    function sub(a,b){
        console.log(`difference is =${a-b}`);
    }
    function mul(a,b){
        console.log(`product is =${a*b}`);
    }
    return {add,sub,mul};
}

module.exports =cal;
