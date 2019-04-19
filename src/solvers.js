/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var solution = new Board({n: n}); 
    for (var row = 0; row < n; row++) {
    for (var col = 0; col < n; col++) {
       solution.togglePiece(row, col);
      if (solution.hasAnyRooksConflicts()){  
        solution.togglePiece(row, col);
       }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = new Board({n: n});
  var solutionCount = 0;      
  var decisionTree = function (row){
    if (row === n){
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++){
      solution.togglePiece(row, i);
      if (!solution.hasAnyRooksConflicts(row, i)){
        decisionTree(row+1);
      }
      solution.togglePiece(row, i);
      }
    }
  decisionTree(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {  
   var solution = new Board ({n: n})
   var count = 0;
    if (n === 1) {
      return [[1]];
    }
    if (n < 4) {
      return [];
    }
    
  
  // for (var row = 0; row < n; row++) {
  //   for (var column = 0; column < n; column++){
        
  //   }
  // }
  var decisionTree = function (row, newSolution){
    
   if (row === n){
      
      return;
    }
    for (var i = 0; i < n; i++){
      newSolution.togglePiece(row, i);
      if (!newSolution.hasAnyQueensConflicts(row, i)){
        decisionTree(row + 1);
      }
      newSolution.togglePiece(row, i);
      }

}
   for (var row = 0; row < n; row++) {
      var newSolution = new Board ({n: n});
      decisionTree(row, newSolution);
      for (var i = 0; i < newSolution.rows().length; i++) {
         for (var j = 0; j < newSolution.rows()[i].length; j++) {
              if (newSolution.rows()[i][j] === 1){
                 count++;
              }
        }
      }
         if (count === n) {

            solution = newSolution;
}
    }
   
       

    
  
  

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();

  // if (i+1 === n){ if we get to the end of the for loop, and we haven't found a suitable queen position
      //   solution.toggle(,i) we untoggle the toggled value from row above 
      //   decisionTree(row-1, i+1); //run the function on the row above but with i incremented

  //somehow run decisionTree with (row-1, but column +1)
    //if you go back through to the row above, you want to start the loop at a value that is in front 
      //of the previously toggled value
      //how to toggle value column???
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var solution = new Board({n: n});  
  
    if (n === 1 || n === 0) {
      return 1;
    }
    if (n === 2 || n === 3) {
      return 0;
    }

  var decisionTree = function (currRow){
    if (currRow === n){
      solutionCount++;
      // if (solutionCount === 3){
      //   return "Hey" + solutionCount--;
      // }
    }
    //loop through the columns
    //debugger;
    for (var i = 0; i < n; i++){
      solution.togglePiece(currRow, i);
      if (!solution.hasAnyQueenConflictsOn(currRow, i)){
        decisionTree(currRow+1);
      }
      solution.togglePiece(currRow, i);
      }
    }
    decisionTree(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
