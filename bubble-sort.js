let bubbleArray=[10,-2,70,4,-9,30,70,18]
console.log("before sorting ["+bubbleArray+"]")
for(let i=0;i<=bubbleArray.length-1;i++){
    for(let j=0;j<=bubbleArray.length-1;j++){
        //**CONDITON WILL CHANGE DEPEDING ON ORDER */
        if(bubbleArray[j] < bubbleArray[j+1]){
            let temp=bubbleArray[j+1]
            bubbleArray[j+1]=bubbleArray[j]
            bubbleArray[j]=temp
        }
    }
}
console.log("bubble sorted ["+bubbleArray+"]")
