let selectionArray=[1,2,5,6,0,4,5,8]
for(let i=0;i<=selectionArray.length-1;i++){
    for(let j=i;j<=selectionArray.length-1;j++){
        let minIndex=i
        if(selectionArray[j]< selectionArray[minIndex]){
            minIndex=j
        }
        let temp=selectionArray[i];
        selectionArray[i]=selectionArray[minIndex];
        selectionArray[minIndex]=temp 
    }
}
console.log("selection sorted ["+selectionArray+"]")
