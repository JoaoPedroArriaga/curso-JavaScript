function fatoria(num){
    if(num > 1){
        return num * fatoria(num-1)
    }else{
        return 1
    }
}

console.log(fatoria(5))