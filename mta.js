
var lineN = ["Time Square", "34th", "28thN", "23rdN", "Union Square", "8th"];
var lineL = ["8thAve", "6th", "Union Square", "3rd", "1st"];
var lineSix = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

// var start = "Time Square";
// var end = "Union Square";
var start_index = -1;
var end_index = -1;
var start_line;
var end_lines = [];
var first_leg = 0;
var second_leg = 0;



function isInLine(stop, line) {
  for ( var i = 0; i < line.length; i++ ) {
    if (line[i] === stop) {
      return true;
    }
  }
  return false;
}

function findStops(start, end, start_line) {
  for ( var i = 0; i < start_line.length; i++ ) {
    if (start_line[i] === start) {
      start_index = i;
    }
    if (start_line[i] === end) {
      end_index = i;
    }
  }

  if ( end_index === -1 ) {
    for ( i = 0; i < start_line.length; i++ ) {
      if (start_line[i] === "Union Square") {
        end_index = i;
        first_leg = Math.abs(end_index - start_index);

        if (isInLine(end, lineL)) {
          findStops("Union Square", end, lineL);
        } else {
          findStops("Union Square", end, lineN);
        }
      }
    }
  } else {
    second_leg = Math.abs(end_index - start_index);
  }
}


findStops("Grand Central", "1st", lineSix);

console.log(first_leg + second_leg);
