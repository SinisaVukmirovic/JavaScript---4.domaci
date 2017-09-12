		//prvi zadatak
		//vrednost  jednog argumenata u nizu zameniti drugom
var niz = [7, 4, 52, 10, 4, 5, 12, 1, 3, 6];
var trazenaVrednost = 4;
var vrednostZaZamenu = 25;

var noviNiz = [];

for (i = 0; i <= niz.length - 1; i++) {
	if (niz[i] === trazenaVrednost) {
		noviNiz.push(vrednostZaZamenu);
	}
	else {
		noviNiz.push(niz[i]);
	}
}

console.log(niz);
console.log(noviNiz);
console.log("---------------------");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

		//drugi zadatak
		//da li u nizu posteje 2 ista elementa

function foo(niz) {
	for (i = 0; i <= niz.length; i++) {
		for (j = i + 1; j <= niz.length; j++) {
			if (niz[i] === niz[j]) {
				return ([niz] + " - Ima duplikata");
			}
		}
	}
	return ([niz] + " - Nema duplikata");
}
console.log(foo([3, 5, 7, 3]));
console.log(foo([3, 5, 7, 9]));
console.log(foo([3, 5, 5, 7]));
console.log(foo([1, 5, 7, 3]));
console.log("---------------------")
		


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

		//treci zadatak
		//koliku tezinu mozemo da ponesemo
function tezine(weight1, weight2, maxWeight) {
	var weight1;
	var weight2;
	var maxWeight;
	if (weight1 + weight2 <= maxWeight) {
		console.log("Nosimo oba!");
	}
	else if (weight1 > maxWeight && weight2 > maxWeight) {
		console.log("Ne mozemo ni jedan da ponesemo!");
	}
	else if (weight1 > maxWeight && weight2 <= maxWeight) {
		console.log("Nosimo drugi!");
	}
	else if (weight1 < maxWeight && weight2 > maxWeight) {
		console.log("Nosimo prvi!");
	}
	else {
		console.log("Mozemo da biramo, ali nemozemo oba!");
	}
}
tezine(57, 52, 55);
tezine(52, 57, 55);
tezine(55, 52, 57);
tezine(52, 55, 57);
tezine(7, 2, 55);
