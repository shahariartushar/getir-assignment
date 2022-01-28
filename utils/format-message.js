const { object } = require("joi");

module.exports = formatErrorMessage = (data) => {
  var errorString = JSON.stringify(data);
  var errorMessage =
    "Error occured. Reason(s)- " +
    errorString
      .replaceAll("{", "")
      .replaceAll("}", "")
      .replaceAll(",", " && ")
      .replaceAll(":", " : ")
      .replaceAll('"', "");


  return errorMessage;
};
  // module.exports = formatErrorMessage = (data) => {
  //   console.log(data);
  //   let str = "&&";
  //   var size = Object.keys(data).length;
  //   var errorString = Object.values(data).map((x => (size > 1) ? (x+=str):""));
  //   const errorMessage= "Error occured. Reason(s)- " + errorString;
  //   console.log("inside");
  
  //   return errorMessage;
  // };