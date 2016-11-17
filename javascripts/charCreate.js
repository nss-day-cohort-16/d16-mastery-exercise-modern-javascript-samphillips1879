"use strict";

let Robots = require("./robots.js"),
Players = require("./players.js");

const CREATE = {};


//may want to change this so that it can be triggered, and work, when the fight button is pressed, instead of when a bot is selected. That will let the user input the names AFTER selecting bot models
CREATE.botAssign = function(choice) {
	// let $choice = $(choice);
	if (choice.attr("player") === "PC") {
		Players.PC = new Robots[choice.val()]();
		Players.PC.name = $("#PCNameInput").val();
	} else if (choice.attr("player") === "NPC") {
		Players.NPC = new Robots[choice.val()]();
		Players.NPC.name = $("#NPCNameInput").val();
	}
};


//as it currently stands, there can only be one instance per prototype per page refresh... I don't know why... For now I'm just gonna ignore it to get MVP




module.exports = CREATE;