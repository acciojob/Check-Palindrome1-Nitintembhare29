// complete the given function

function palindrome(str){
// 	str.trim();
// 	str.toLowerCase();
// for(var i=0; i<str.length/2; i++){
// 	if(str.charAt(i)!=str.charAt(str.length-1-i)){
// 		return false;
// 	}
 
// 	}
// return true;

	  s = s.lower() # convert all characters to lowercase
    s = ''.join(c for c in s if c.isalnum()) # remove non-alphanumeric characters
    return s == s[::-1] # check if the string is equal to its reverse

}
module.exports = palindrome
