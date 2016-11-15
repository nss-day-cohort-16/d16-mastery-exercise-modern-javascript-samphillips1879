"use strict";
//variables----required modules
let Robots = require("./robots.js"),
Create = require("./charCreate.js"),
Players = require("./players.js");

//variables----html elements
const INPUT_VIEW = $("#userInputView"),
BATTLE_VIEW = $("#battleView");

//variables----players
// let PC, NPC;


//page initializer 
$(document).ready(() => {
	INPUT_VIEW.show();
});



//assign robots to player variables
$(document).on("change", ".modelSelect", function() {
	let botChoice = $(this).children(":selected")[0];
	Create.botAssign($(botChoice));
	console.log("PC", Players.PC);
	console.log("NPC", Players.NPC);
});


// $(document).on("change", ".modelSelect", function() {
// 	if (this.player === "PC") {
// 		Create.botAssign(PC);
// 	} else if (this.player === "NPC") {
// 		Create.botAssign(NPC);
// 	}
// 	console.log("PC", PC);
// 	console.log("NPC", NPC);
// });






console.log("Robots", Robots);


// let man = new Robots.ManBot();
// console.log("man", man);
// let woman = new Robots.WomanBot();
// console.log("woman", woman);
// console.log("man.maxHealth", man.maxHealth);





