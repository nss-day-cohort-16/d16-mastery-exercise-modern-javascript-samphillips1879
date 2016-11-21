"use strict";

let Attacks = require("./attacks.js");

const ROBOTS = {};


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
	this.health += 20;
	this.maxHealth = this.health;
	this.attacks = [new Attacks.Punch(), new Attacks.Kick()];
	this.image = "images/manBot.png";
};
ROBOTS.ManBot.prototype = new ROBOTS.Synth();

ROBOTS.WomanBot = function() {
	this.model = "Woman Bot";
	this.strength = 0.4;
	this.agility = 15;
	this.health += 15;
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
	this.health += 5;
	this.maxHealth = this.health;
	this.attacks = [new Attacks.Bite(), new Attacks.Sting()];
	this.image = "images/cyberCentipede.jpg";
};
ROBOTS.Centipede.prototype = new ROBOTS.Crawler();

ROBOTS.Boulder = function() {
	this.model = "Boulder";
	this.strength = 1;
	this.agility = 1;
	this.health += 50;
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
	this.health += 10;
	this.maxHealth = this.health;
	this.attacks = [new Attacks.Talons(), new Attacks.Peck()];
	this.image = "images/eagle.jpg";
};
ROBOTS.DeathEagle.prototype = new ROBOTS.Flyer();

ROBOTS.CyberCicada = function() {
	this.model = "Cyber Cicada";
	this.strength = 0.3;
	this.agility = 20;
	this.health -= 5;
	this.maxHealth = this.health;
	this.attacks = [new Attacks.Swarm(), new Attacks.Nibble()];
	this.image = "images/cicada.jpg";
};
ROBOTS.CyberCicada.prototype = new ROBOTS.Flyer();


module.exports = ROBOTS;