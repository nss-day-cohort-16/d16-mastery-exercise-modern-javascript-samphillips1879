"use strict";
//variables----required modules
let Robots = require("./robots.js"),
Create = require("./charCreate.js"),
Players = require("./players.js"),
Battle = require("./battleground.js");

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
	// console.log("PC", Players.PC);
	// console.log("NPC", Players.NPC);
});


//changes view to battleView
$(document).on("click", "#fightBtn", () => {
	$(".userView").hide();
	$("#battleView").show();
	// console.log("this", this);
	// if (this.id === "attackBtn") {
	// 	Players.PC.attackState = "attack";
	// } else if (this.id === "dodgeBtn") {
	// 	Players.PC.attackState = "dodge";
	// }
	Battle.populatePage();

});

$(document).on("click", ".battleBtn", () => {
	let battleBtnClicked = event.target;
	//does the computer attack or dodge?
	if (Math.random() >= 0.5) {
		Players.NPC.attackState = "attack";
	} else {
		Players.NPC.attackState = "dodge";
	}

	//does the user attack or dodge?
	if (battleBtnClicked.id === "attackBtn") {
		Players.PC.attackState = "attack";
	} else if (battleBtnClicked.id === "dodgeBtn") {
		Players.PC.attackState = "dodge";
	}
	Battle.combat();
	Battle.determineVictor();
	Battle.populatePage();
});




