//Topic: Fortune telling

//First part of the sentence
const begArray =["Your ", "The "];

//middle of the sentence
const sndArray = ["future is ", "past is ", "home will be " ]

//end of the sentence
const endArray=["not your chains", "bright", "full of good memories"]

// Determining array indexes
let lstArrInd = Math.floor(Math.random()*2);
let sndArrInd = Math.floor(Math.random()*3);
let endArrInd = Math.floor(Math.random()*3);

//Getting the pieces of the sentence
let begSent = begArray[lstArrInd];
let sndSent = sndArray[sndArrInd];
let endSent = endArray[endArrInd];

console.log(begSent + sndSent + endSent)