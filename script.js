function firstNonRepeatedChar(str) {
	let len = str.length; //size of string

	let freq = new array(256).fill(0); //frequency array with 0 at first

	for(let i = 0; i < len i++){
		fred[s[i].charCodeAt(0)]++;
	}
	

	for(let i = 0; i < len; i++){
		if(fred[s[i].charCodeAt(0)] > 0 && fred[s[i].charCodeAt(0)] == 1){
			return str.charAt(i);
		}
		
	}

	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
