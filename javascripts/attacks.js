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