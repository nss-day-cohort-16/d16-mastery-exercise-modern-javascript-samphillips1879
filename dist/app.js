(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const ATTACKS = {};

// ATTACKS.attack = function() {
// 	this.name = null;
// 	this.damage = null;
// 	this.sound = null;
// 	this.image = null;
// };

ATTACKS.Punch = function() {
	this.name = "Punch";
	this.damage = 10;
};

ATTACKS.Kick = function() {
	this.name = "Kick";
	this.damage = 10;
};

ATTACKS.Bite = function() {
	this.name = "Bite";
	this.damage = 17;
};

ATTACKS.Crush = function() {
	this.name = "Crush";
	this.damage = 25;
};

ATTACKS.Talons = function() {
	this.name = "Talons";
	this.damage = 13;
};

ATTACKS.Swarm = function() {
	this.name = "Swarm";
	this.damage = 10;
};


module.exports = ATTACKS;
},{}],2:[function(require,module,exports){
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
},{"./players.js":4,"./robots.js":5}],3:[function(require,module,exports){
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






},{"./charCreate.js":2,"./players.js":4,"./robots.js":5}],4:[function(require,module,exports){
"use strict";

let PC = {}, 
NPC = {};
const PLAYERS = {
	PC, NPC
};

module.exports = PLAYERS;
},{}],5:[function(require,module,exports){
"use strict";

let Attacks = require("./attacks.js");

const ROBOTS = {};

ROBOTS.Robot = function() {
	this.health = Math.floor(Math.random() * 50 + 50);//default health range from 50 to about 100
	this.maxHealth = this.health;
};
ROBOTS.Robot.prototype.getCurrentAttack = function() {
	let cAttack = this.attacks[Math.floor(Math.random() * (this.attacks.length))];
	return cAttack;
};

ROBOTS.Synth = function() {
	this.type = "humanoid";
};
ROBOTS.Synth.prototype = new ROBOTS.Robot();

ROBOTS.ManBot = function() {
	this.model = "Man Bot";
	this.strength = 7;
	this.agility = 5;
	this.health += 20;
	this.maxHealth = this.health;
	this.attacks = [new Attacks.Punch()];
};
ROBOTS.ManBot.prototype = new ROBOTS.Synth();

ROBOTS.WomanBot = function() {
	this.model = "Woman Bot";
	this.strength = 4;
	this.agility = 8;
	this.health += 15;
	this.maxHealth = this.health;
	this.attacks = [new Attacks.Kick()];
};
ROBOTS.WomanBot.prototype = new ROBOTS.Synth();



ROBOTS.Crawler = function() {
	this.type = "floor";
};
ROBOTS.Crawler.prototype = new ROBOTS.Robot();

ROBOTS.Centipede = function() {
	this.model = "Centipede";
	this.strength = 4;
	this.agility = 7;
	this.health += 5;
	this.maxHealth = this.health;
	this.attacks = [new Attacks.Bite()];
};
ROBOTS.Centipede.prototype = new ROBOTS.Crawler();

ROBOTS.Boulder = function() {
	this.model = "Boulder";
	this.strength = 10;
	this.agility = 2;
	this.health += 50;
	this.maxHealth = this.health;
	this.attacks = [new Attacks.Crush()];
};
ROBOTS.Boulder.prototype = new ROBOTS.Crawler();



ROBOTS.Flyer = function() {
	this.type = "aerial";
};
ROBOTS.Flyer.prototype = new ROBOTS.Robot();

ROBOTS.DeathEagle = function() {
	this.model = "Death Eagle";
	this.strength = 6;
	this.agility = 7;
	this.health += 10;
	this.maxHealth = this.health;
	this.attacks = [new Attacks.Talons()];
};
ROBOTS.DeathEagle.prototype = new ROBOTS.Flyer();

ROBOTS.CyberCicada = function() {
	this.model = "Cyber Cicada";
	this.strength = 3;
	this.agility = 10;
	this.health -= 5;
	this.maxHealth = this.health;
	this.attacks = [new Attacks.Swarm()];
};
ROBOTS.CyberCicada.prototype = new ROBOTS.Flyer();


module.exports = ROBOTS;
















},{"./attacks.js":1}]},{},[3]);
