(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const ATTACKS = {};

ATTACKS.Punch = function() {
	this.name = "Punch";
	this.damage = 12;
};

ATTACKS.Kick = function() {
	this.name = "Kick";
	this.damage = 15;
};

ATTACKS.Bite = function() {
	this.name = "Bite";
	this.damage = 15;
};

ATTACKS.Sting = function() {
	this.name = "Sting";
	this.damage = 35;
};

ATTACKS.Crush = function() {
	this.name = "Crush";
	this.damage = 25;
};

ATTACKS.Bump = function() {
	this.name = "Bump";
	this.damage = 1;
};

ATTACKS.Talons = function() {
	this.name = "Talons";
	this.damage = 25;
};

ATTACKS.Peck = function() {
	this.name = "Peck";
	this.damage = 14;
};

ATTACKS.Swarm = function() {
	this.name = "Swarm";
	this.damage = 35;
};

ATTACKS.Nibble = function() {
	this.name = "Nibble";
	this.damage = 5;
};


module.exports = ATTACKS;
},{}],2:[function(require,module,exports){
"use strict";

let Players = require("./players.js"),
$descDiv = $("#battleDescriptionDiv"),
battleDescription = null,
$resultsDivs = $(".resultsPage"),
battleResults = null,
NPCAttack = null,
PCAttack = null;

const BATTLE = {},
//PC
$PCBattleCard = $("#PCBattleCard"),
$PCImg = $("#PCImg"),
$PCHealth = $("#PCHealth"),
$PCName = $("#PCName"),
$PCModel = $("#PCBotModel"),
//NPC
$NPCBattleCard = $("#NPCBattleCard"),
$NPCImg = $("#NPCImg"),
$NPCHealth = $("#NPCHealth"),
$NPCName = $("#NPCName"),
$NPCModel = $("#NPCBotModel");

BATTLE.populatePage = () => {
	// PC
	$PCImg.attr("src", `${Players.PC.image}`);
	$PCHealth.html(`Health: ${Players.PC.health}`);
	$PCName.html(`${Players.PC.name}`);
	$PCModel.html(`Bot Model: ${Players.PC.model}`);
	// NPC
	$NPCImg.attr("src", `${Players.NPC.image}`);
	$NPCHealth.html(`Health: ${Players.NPC.health}`);
	$NPCName.html(`${Players.NPC.name}`);
	$NPCModel.html(`Bot Model: ${Players.NPC.model}`);
	//battle description/results
	$descDiv.html(battleDescription);
	$resultsDivs.html(battleResults);
};

BATTLE.combat = () => {
	NPCAttack = Players.NPC.getCurrentAttack();
	PCAttack = Players.PC.getCurrentAttack();
		//player attack logic
	if (Players.PC.attackState === "attack") {
			//PC attack vs NPC attack logic
		if (Players.NPC.attackState === "attack") {
			Players.PC.health -= Math.ceil(((Math.random() * (1 - 0.5) + 0.5 ) * Players.NPC.strength) * NPCAttack.damage);
			Players.NPC.health -= Math.ceil(((Math.random() * (1 - 0.5) + 0.5 ) * Players.PC.strength) * PCAttack.damage);
			battleDescription = `${Players.PC.name} attacked using ${PCAttack.name} and ${Players.NPC.name} attacked using ${NPCAttack.name}`;
			//PC attack vs NPC dodge logic
		} else if (Players.NPC.attackState === "dodge") {
			Players.NPC.health -= Math.ceil(((Math.random() * Players.PC.strength) * PCAttack.damage) / (Math.ceil(Math.random() * Players.NPC.agility)));
			battleDescription = `${Players.NPC.name} dodged some of ${Players.PC.name}'s ${PCAttack.name} damage`;
		}
		//player dodge logic
	} else if (Players.PC.attackState === "dodge") {
			//PC defend vs NPC attack logic
		if (Players.NPC.attackState === "attack") {
			Players.PC.health -= Math.ceil(((Math.random() * Players.NPC.strength) * NPCAttack.damage) / (Math.ceil(Math.random() * Players.PC.agility)));
			battleDescription = `${Players.PC.name} dodged some of ${Players.NPC.name}'s ${NPCAttack.name} damage`;
			//Nobody attacks anybody logic
		} else if (Players.NPC.attackState === "dodge") {
			battleDescription = `Both combatants dodged each other's non-existent attacks, and it looked quite silly`;
		}
	}
};


BATTLE.determineVictor = () => {
	if (Players.NPC.health <= 0) {
        battleResults = `${Players.PC.name} destroyed ${Players.NPC.name} with their ${PCAttack.name} attack!`;
        $resultsDivs.html(battleResults);
        $(".userView").hide();
        $("#victoryPage").show();
    } else if (Players.PC.health <= 0) {
        battleResults = `${Players.NPC.name} destroyed ${Players.PC.name} with their ${NPCAttack.name} attack!`;
        $resultsDivs.html(battleResults);
        $(".userView").hide();
        $("#defeatPage").show();
    }
};


module.exports = BATTLE;
},{"./players.js":5}],3:[function(require,module,exports){
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
},{"./players.js":5,"./robots.js":6}],4:[function(require,module,exports){
"use strict";
//variables----required modules
let Robots = require("./robots.js"),
Create = require("./charCreate.js"),
Players = require("./players.js"),
Battle = require("./battleground.js");

//variables----html elements
const INPUT_VIEW = $("#userInputView"),
USER_VIEWS = $(".userView"),
BATTLE_VIEW = $("#battleView");

//page initializer 
$(document).ready(() => {
	INPUT_VIEW.show();
});



//assign robots to player variables
$(document).on("change", ".modelSelect", function() {
	let botChoice = $(this).children(":selected")[0];
	Create.botAssign($(botChoice));
});


//changes view to battleView
$(document).on("click", "#fightBtn", () => {
	$(".userView").hide();
	$("#battleView").show();
	Battle.populatePage();
});

//combat function initializer
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


$(document).on("click", "#nextRound", () => {
	Create.generateBot();
	Players.PC.health = Players.PC.maxHealth;
	Battle.populatePage();
	USER_VIEWS.hide();
	BATTLE_VIEW.show();
});

$(document).on("click", "#newBot", () => {
	USER_VIEWS.hide();
	$("#userInputView").show();
	$(".modelSelect").prop('selectedIndex',0);
});





},{"./battleground.js":2,"./charCreate.js":3,"./players.js":5,"./robots.js":6}],5:[function(require,module,exports){
"use strict";

let PC = {}, 
NPC = {};
const PLAYERS = {
	PC, NPC
};

module.exports = PLAYERS;
},{}],6:[function(require,module,exports){
"use strict";

let Attacks = require("./attacks.js");

const ROBOTS = {};


ROBOTS.botArray = ["ManBot", "WomanBot", "Centipede", "Boulder", "DeathEagle", "CyberCicada"];


//////BASE ROBOT PROTOTYPE FUNCTION
ROBOTS.Robot = function() {
	this.health = Math.floor(Math.random() * 50 + 50);
	this.maxHealth = this.health;
	this.attackState = null;
};
ROBOTS.Robot.prototype.getCurrentAttack = function() {
	let cAttack = this.attacks[Math.floor(Math.random() * (this.attacks.length))];
	return cAttack;
};


/////////SYNTH TYPE
ROBOTS.Synth = function() {
	this.type = "humanoid";
};
ROBOTS.Synth.prototype = new ROBOTS.Robot();

ROBOTS.ManBot = function() {
	this.model = "Man Bot";
	this.strength = 0.7;
	this.agility = 8;
	this.health += 22;
	this.maxHealth = this.health;
	this.attacks = [new Attacks.Punch(), new Attacks.Kick()];
	this.image = "images/manBot.png";
};
ROBOTS.ManBot.prototype = new ROBOTS.Synth();

ROBOTS.WomanBot = function() {
	this.model = "Woman Bot";
	this.strength = 0.4;
	this.agility = 15;
	this.health += 18;
	this.maxHealth = this.health;
	this.attacks = [new Attacks.Kick(), new Attacks.Punch()];
	this.image = "images/womanBot.png";
};
ROBOTS.WomanBot.prototype = new ROBOTS.Synth();


/////////CRAWLER TYPE
ROBOTS.Crawler = function() {
	this.type = "floor";
};
ROBOTS.Crawler.prototype = new ROBOTS.Robot();

ROBOTS.Centipede = function() {
	this.model = "Centipede";
	this.strength = 0.4;
	this.agility = 11;
	this.health += 10;
	this.maxHealth = this.health;
	this.attacks = [new Attacks.Bite(), new Attacks.Sting()];
	this.image = "images/cyberCentipede.jpg";
};
ROBOTS.Centipede.prototype = new ROBOTS.Crawler();

ROBOTS.Boulder = function() {
	this.model = "Boulder";
	this.strength = 1;
	this.agility = 1;
	this.health += 40;
	this.maxHealth = this.health;
	this.attacks = [new Attacks.Crush(), new Attacks.Bump()];
	this.image = "images/boulder.png";
};
ROBOTS.Boulder.prototype = new ROBOTS.Crawler();


/////////FLYER TYPE
ROBOTS.Flyer = function() {
	this.type = "aerial";
};
ROBOTS.Flyer.prototype = new ROBOTS.Robot();

ROBOTS.DeathEagle = function() {
	this.model = "Death Eagle";
	this.strength = 0.6;
	this.agility = 17;
	this.health += 15;
	this.maxHealth = this.health;
	this.attacks = [new Attacks.Talons(), new Attacks.Peck()];
	this.image = "images/eagle.jpg";
};
ROBOTS.DeathEagle.prototype = new ROBOTS.Flyer();

ROBOTS.CyberCicada = function() {
	this.model = "Cyber Cicada";
	this.strength = 0.3;
	this.agility = 20;
	this.health -= 10;
	this.maxHealth = this.health;
	this.attacks = [new Attacks.Swarm(), new Attacks.Nibble()];
	this.image = "images/cicada.jpg";
};
ROBOTS.CyberCicada.prototype = new ROBOTS.Flyer();


module.exports = ROBOTS;
},{"./attacks.js":1}]},{},[4]);
