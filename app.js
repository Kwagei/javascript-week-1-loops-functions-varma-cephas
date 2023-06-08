// write a function named areEvenNumbers that iterates from 1-100 and prints an array containing only the even numbers
function areEvenNumbers()
{
	let a = 1;
	const a_arr = []
	while(a <=100)
	{
		if(a%2 === 0)
		{
	//	console.log(a)
		a ++;
		}
		else{
	//	console.log("not a even number")
		a ++;
		a_arr.push(a);
		}
	}
	console.log("The even numbers are", a_arr)
}

areEvenNumbers()

console.log("")
// a list of numbers 1 - 10 is given, write a number that reverses that list

const list_of_nums = [1, 2,3,4,5,6,7,8,9,10]
for(b of list_of_nums.reverse()){
	console.log(b)
}


// a function that prints that highest number in the array and prints the average of the numbers.

console.log("   ")
let arr = [1,5,30,56,3,48,67,44,7,32];
function compareNum(a, b){
	return a -b;
}

function highestNumber(){
	sort_nums = arr.sort(compareNum)
	get_highest_num = sort_nums[sort_nums.length -1 ]
	console.log(`${get_highest_num} is the highest number`)
	let f = 0

	for(e of sort_nums){
        	f = f + e
}
		let lenghtOfArr = sort_nums.length
//		console.log(lenghtOfArr)
		const arr_average = f / lenghtOfArr
		console.log(`The average of the ${arr_average}`)
}

highestNumber()


// word is given write a function to tell if the word is a Palindrome
let word = "call"
let get_word = []
function check_palindrome(){
	for(x of word){
	get_word.push(x)
}
	reverse_word = get_word.reverse()
	reverse_word = reverse_word.join("")
//	console.log(reverse_word)
	if(word === reverse_word){
	console.log(`The word ${word} is a palindrome`)
} 
	else{
	console.log(`The word ${word} is not a palindrome`)
}
}
check_palindrome()



// Two numbers are given write a function that prints the gratest common divisor of those numbers

let r = 24
let v = 48

function gcd(){
	if(r%12 === 0 && v%12 === 0){
		console.log("12 is the GCD of both number")
	}
	else{
		console.log("12 is not a GCD of both numbers")
	    }
}

gcd()
