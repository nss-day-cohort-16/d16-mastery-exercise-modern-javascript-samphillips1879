"use strict";

let Robots = require("./robots.js"),
Players = require("./players.js");

const CREATE = {};

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

module.exports = CREATE;