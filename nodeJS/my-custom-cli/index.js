#!/usr/bin/env node

// building CLI and adding options to CLI
// const yargs = require("yargs");
// const {argv} = yargs(process.argv);

//  console.log("mv node.js");

//  const printFiveMoves = async (pokemonName) => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//     const pokemon = await response.json();
//     const moves = pokemon.moves.map(({move}) => move.name);
//     console.log(moves.slice(0, 5));
//  }

//  printFiveMoves(argv.pokemon);

// Adding interativity to CLI
const inquirer = require("inquirer");

const printFiveMoves = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokemon = await response.json();
  const moves = pokemon.moves.map(({ move }) => move.name);
  console.log(moves.slice(0, 5));
};

const prompt = inquirer.createPromptModule();
prompt([
  {
    type: "input",
    name: "pokemon",
    message: "Enter a pokemon name to view the first five moves:",
  },
]).then((answers) => {
  const pokemon = answers.pokemon;
  printFiveMoves(pokemon);
});
