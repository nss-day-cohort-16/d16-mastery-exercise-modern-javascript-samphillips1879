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


//for next Round functionality
CREATE.generateBot = function(calledChar) {

    var random = Math.round(Math.random() * (Robots.botArray.length - 1));





    var randomBot = Robots.botArray[random];
	// calledChar = new ROBOTS[randomBot]();
	Players.NPC = new Robots[randomBot]();
	Players.NPC.name = $("#NPCNameInput").val();
    // calledChar = new Gauntlet.Combatants[randomCharacter]();
    // return calledChar;

  };



module.exports = CREATE;