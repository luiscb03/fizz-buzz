var vec = []
for (var index = 1; index <= 100; index++) {
    vec.push(index)
    if(index %3 == 0 && index %5 == 0){
        console.log('fizz buzz')
    }else if(index %5 == 0){
        console.log('buzz')
    }else if(index %3 == 0){
        console.log('fizz')
    }else{
        console.log(index)
    }
}






