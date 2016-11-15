"use strict";

let Robots = require("./robots.js"),
Players = require("./players.js");

const CREATE = {};

CREATE.botAssign = function(choice) {
	// let $choice = $(choice);
	if (choice.attr("player") === "PC") {
		Players.PC = new Robots[choice.val()]();
	} else if (choice.attr("player") === "NPC") {
		Players.NPC = new Robots[choice.val()]();
	}
};







module.exports = CREATE;