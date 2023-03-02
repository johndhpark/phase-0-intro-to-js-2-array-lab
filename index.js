// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
	cats.push(name);
	return;
}

function destructivelyPrependCat(name) {
	cats.unshift(name);
	return;
}

function destructivelyRemoveLastCat() {
	cats.pop();
	return;
}

function destructivelyRemoveFirstCat() {
	cats.shift();
	return;
}

function appendCat(name) {
	return [...cats, name];
}

function prependCat(name) {
	return [name, ...cats];
}

function removeLastCat() {
	const removeLast = [...cats];

	removeLast.pop();

	return removeLast;
}

function removeFirstCat() {
	const removeFirst = [...cats];

	removeFirst.shift();

	return removeFirst;
}
