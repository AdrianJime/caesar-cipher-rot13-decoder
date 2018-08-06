function rot13(str) { // LBH QVQ VG!
  var arr = str.split("");
  var charCode;
  var newCharCode;
  var remainder;
  var newStr;
  //console.log(arr);
  //console.log(arr.length);
  for(let i=0;i<arr.length;i++){
    //console.log(arr[i]);
    if(!(arr[i]==" " || arr[i]=="!" || arr[i]=="?" || arr[i]==".")){
      charCode=arr[i].charCodeAt(0);
      newCharCode=charCode-13;
      if(newCharCode<65){
        remainder = 65 - newCharCode;
        newCharCode = 91-remainder;
      }
      arr[i]=String.fromCharCode(newCharCode);
      //console.log(i);
    }
  }
  newStr = arr.join("");
  console.log(newStr);

  return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");