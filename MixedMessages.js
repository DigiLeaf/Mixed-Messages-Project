//Topic: Fortune telling

//First part of the sentence
const begArray =["Your ", "The "];

//middle of the sentence
const sndArray = ["future is ", "past is ", "home will be " ]

//end of the sentence
const endArray=["not your chains", "bright", "full of good memories"]

// Determining array indexes
let lstArrInd = Math.floor(math.random()*1);
let sndArrInd = Math.floor(math.random()*2);
let endArrInd = Math.floor(math.random()*2);

//Getting the pieces of the sentence
let begSent = begArray[lstArrInd];
let sndSent = sndArray[sndArrInd];
let endSent = endArray[endArrInd];