// complete the given function

function palindrome(str){
for(var i=0; i<str.length/2; i++){
	if(str.charAt(i)!=str.charAt(str.length-1-i)){
		return false;
	}
 
	}
return true;
}
module.exports = palindrome
