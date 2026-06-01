const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const player = {
 x:500,
 y:300,
 size:25,
 speed:5,
 level:1,
 xp:0,
 next:100,
 money:0,
 magnet:80
};

const trash = [];
const particles = [];
const keys = {};