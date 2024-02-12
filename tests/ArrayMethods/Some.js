function isGreaterThan5(element, index, array) {
	return element > 5;
}
function func() {
	// Original array
	let array = [2, 5, 8, 1, 4];

	// Checking for condition in array
	let value = array.some(isGreaterThan5);
	console.log(value);

    // let array1 = [car,bike,racecar];
    // console.log(array1.indexOf(car));
}
func();
