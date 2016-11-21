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