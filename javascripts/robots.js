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















