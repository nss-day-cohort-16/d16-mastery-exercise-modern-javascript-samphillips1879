"use strict";

let Players = require("./players.js"),
$descDiv = $("#battleDescriptionDiv"),
battleDescription = null,
$resultsDivs = $(".resultsPage"),
battleResults = null,
NPCAttack = null,
PCAttack = null;

const BATTLE = {},

$PCBattleCard = $("#PCBattleCard"),
$PCImg = $("#PCImg"),
$PCHealth = $("#PCHealth"),
$PCName = $("#PCName"),
$PCModel = $("#PCBotModel"),

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
        // MKmusic.pause();
        // $("body").removeAttr("id", "battleview");
        battleResults = `${Players.PC.name} destroyed ${Players.NPC.name} with their ${PCAttack.name} attack!`;
        $resultsDivs.html(battleResults);
        $(".userView").hide();
        $("#victoryPage").show();

        // $('h1').animate({ 
        //   'font-size' : '4em'
        // },1000);

        // let loseSound = new Audio("sound/needsfood.wav");
        // loseSound.play();
    } else if (Players.PC.health <= 0) {
        // MKmusic.pause();
        // $(".card").hide();
        battleResults = `${Players.NPC.name} destroyed ${Players.PC.name} with their ${NPCAttack.name} attack!`;
        $resultsDivs.html(battleResults);
        $(".userView").hide();
        $("#defeatPage").show();

        // $("body").removeAttr("id", "battleview");
        // $('h1').animate({ 
        //   'font-size' : '4em'
        // },1000);
        // let loseSound = new Audio("sound/needsfood.wav");
        // loseSound.play();
    }
};




module.exports = BATTLE;