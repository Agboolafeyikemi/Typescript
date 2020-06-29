// var x : number = 0;
// while (x < 10) {
// 	console.log(x);
// 	x++;
// }
var players = [3, 10, 4, 5, 1];
// for in
console.log("For/In");
for (var player in players) {
    console.log(player);
}
// for of
console.log("For/Of");
for (var _i = 0; _i < players.length; _i++) {
    var player = players[_i];
    console.log(player);
}
