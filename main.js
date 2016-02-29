// secondGreatLow, takes array and gives second lowest and second greatest numbers from array

// var secondGreatLow = function(arr) {
// 	arr = arr.sort()
// 	var secLow = 0
// 	var secGreat = 0
// 	var x = 1
// 	var y = 2
// 	while(secLow === 0) {
// 		if(arr[x] !== arr[x - 1]){
// 			secLow = arr[x]
// 		}
// 		else {
// 			x++
// 		}
// 	}
// 	while(secGreat === 0){
// 		if(arr[arr.length - y] !== arr[arr.length - (y+1)]){
// 			secGreat = arr[arr.length - y]
// 		}
// 		else {
// 			y++
// 		}
// 	}
// 	return (secLow + " " + secGreat)
// }


// timeConvert, take a number as minutes and returns hours:minutes

// var timeConvert = function(number) {
// 	return ((Math.floor(number/60)) + ":" + (number % 60))
// }


//bracketMatcher, takes in a string, returns true if all brackets are matched properly

// var bracketMatcher = function(str){
// 	var left = 0
// 	var right = 0
// 	str = str.split("")
// 	for(var i = 0; i < str.length; i++){
// 		if(str[i] === "("){
// 			left++
// 		}
// 		else if(str[i] === ")"){
// 			right++
// 		}
// 	}
// 	if(left !== right){
// 		return false
// 	}
// 	else {
// 		return true
// 	}
// }







