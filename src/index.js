module.exports = function check(str, bracketsConfig) {
  // your solution
  var str1 = ''; 
for(var i = 0; i <str.length; i++ ){
  for(var j = 0; j < bracketsConfig.length; j++ ) {
	   str1 =  bracketsConfig[j][0] + bracketsConfig[j][1];
	  	   if (~str.indexOf(str1)){
	   	     str = str.replace(str1, "");
				 i = 0;
	 	   }
  }
  }
  if(str.length == 0){
 return true;
  } else {
 return false;
  }
}
