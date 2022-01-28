const { object } = require("joi");

module.exports = formatErrorMessage = (data) => {
    errorArray = [];
    Object.values(data).map( x => errorArray.push(x));
    let errorMessage= "Error occured. Reason(s)- ";
    errorArray.forEach(x => 
      { 
        if(errorArray.indexOf(x) <errorArray.length-1)
            errorMessage+= x + " && ";
        else  
        errorMessage+= x;
      })
    return errorMessage;
  };