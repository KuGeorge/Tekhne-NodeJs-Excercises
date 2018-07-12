function union(a,b){  
  return Array.from(new Set([...a, ...b])); 
}

  const conif = require('node-console-input'); 
  let array1 = conif.getConsoleInput("Enter a array: ", false);
  const conif2 = require('node-console-input'); 
  let array2 = conif2.getConsoleInput("Enter other array: ", false);
  console.log("La union es : " + union(array1,array2));
  
