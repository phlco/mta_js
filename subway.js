var nLine = ["Times Square",
        "34th",
        "28th",
        "23rd",
        "Union Square",
        "8th"];

var lLine = ["8th", "6th", "Union Square", "3rd", "1st"];

var sixLine = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

var mta = {};

mta.n = nLine;
mta.l = lLine;
mta.six = sixLine;

var firstStop = "34th";
var lastStop = "33rd";
var onLine = mta['n'];
var offLine = mta['six'];


// same line
if (onLine == offLine) {
  var indexOne = nLine.indexOf(firstStop);
  var indexTwo = nLine.indexOf(lastStop);
  var diff = (indexOne - indexTwo);
  console.log(Math.abs(diff));
  } else {
  //different lines
  var entranceIndex = onLine.indexOf(firstStop);
  var unionFirstLineIndex = onLine.indexOf("Union Square");
  var firstLegLength = (entranceIndex - unionFirstLineIndex);

  var exitIndex = offLine.indexOf(lastStop);
  var unionSecondLineIndex = offLine.indexOf("Union Square");
  var secondLegLength = (exitIndex - unionSecondLineIndex);

  var diff = Math.abs(firstLegLength + secondLegLength);

  console.log(diff);
}
