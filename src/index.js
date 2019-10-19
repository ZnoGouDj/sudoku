module.exports = function solveSudoku(matrix) {
  const matrixCopy = matrix;
  rowFill(matrix);
  if (!checkRow(matrix) && !checkColumn(matrix) &&
    !check1Field(matrix) && !check2Field(matrix) &&
    !check3Field(matrix) && !check4Field(matrix) &&
    !check5Field(matrix) && !check6Field(matrix) &&
    !check7Field(matrix) && !check8Field(matrix) &&
    !check9Field(matrix)) {
    return matrix;
  } else {
    matrix = matrixCopy;
    rowFill(matrix);
  }
}


function checkRow(array) {
  return (new Set(array)).size !== array.length;
} 

function checkColumn(array) {
  for (let n = 0; n < 9; n++) {
    let tempArr = [];
    for (let i = 0; i < array.length; i++) {
      tempArr.push(array[i][n]);
    }
    if ((new Set(tempArr)).size !== tempArr.length) {
      return true;
    } else {
      tempArr.length = 0;
    }
  }
  return false;
} 

function check1Field(array) {
  for (let n = 0; n < 3; n++) {
    let tempArr = [];
    for (let i = 0; i < 3; i++) {
      tempArr.push(array[i][n]);
    }
    if ((new Set(tempArr)).size !== tempArr.length) {
      return true;
    } else {
      tempArr.length = 0;
    }
  }
  return false;
} 
function check2Field(array) {
  for (let n = 3; n < 6; n++) {
    let tempArr = [];
    for (let i = 0; i < 3; i++) {
      tempArr.push(array[i][n]);
    }
    if ((new Set(tempArr)).size !== tempArr.length) {
      return true;
    } else {
      tempArr.length = 0;
    }
  }
  return false;
} 
function check3Field(array) {
  for (let n = 6; n < 9; n++) {
    let tempArr = [];
    for (let i = 0; i < 3; i++) {
      tempArr.push(array[i][n]);
    }
    if ((new Set(tempArr)).size !== tempArr.length) {
      return true;
    } else {
      tempArr.length = 0;
    }
  }
  return false;
} 

function check4Field(array) {
  for (let n = 0; n < 3; n++) {
    let tempArr = [];
    for (let i = 3; i < 6; i++) {
      tempArr.push(array[i][n]);
    }
    if ((new Set(tempArr)).size !== tempArr.length) {
      return true;
    } else {
      tempArr.length = 0;
    }
  }
  return false;
} 
function check5Field(array) {
  for (let n = 3; n < 6; n++) {
    let tempArr = [];
    for (let i = 3; i < 6; i++) {
      tempArr.push(array[i][n]);
    }
    if ((new Set(tempArr)).size !== tempArr.length) {
      return true;
    } else {
      tempArr.length = 0;
    }
  }
  return false;
} 
function check6Field(array) {
  for (let n = 6; n < 9; n++) {
    let tempArr = [];
    for (let i = 3; i < 6; i++) {
      tempArr.push(array[i][n]);
    }
    if ((new Set(tempArr)).size !== tempArr.length) {
      return true;
    } else {
      tempArr.length = 0;
    }
  }
  return false;
} 

function check7Field(array) {
  for (let n = 0; n < 3; n++) {
    let tempArr = [];
    for (let i = 6; i < 9; i++) {
      tempArr.push(array[i][n]);
    }
    if ((new Set(tempArr)).size !== tempArr.length) {
      return true;
    } else {
      tempArr.length = 0;
    }
  }
  return false;
} 
function check8Field(array) {
  for (let n = 3; n < 6; n++) {
    let tempArr = [];
    for (let i = 6; i < 9; i++) {
      tempArr.push(array[i][n]);
    }
    if ((new Set(tempArr)).size !== tempArr.length) {
      return true;
    } else {
      tempArr.length = 0;
    }
  }
  return false;
} 
function check9Field(array) {
  for (let n = 6; n < 9; n++) {
    let tempArr = [];
    for (let i = 6; i < 9; i++) {
      tempArr.push(array[i][n]);
    }
    if ((new Set(tempArr)).size !== tempArr.length) {
      return true;
    } else {
      tempArr.length = 0;
    }
  }
  return false;
} 



function rowFill(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let collection = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    matrix[i].forEach(elem => {
      if (elem !== 0) { collection.splice((collection.indexOf(elem)), 1);}})
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][j] = collection.splice(Math.floor(Math.random(collection.length * 10)), 1);
      }
    }
  }
  return matrix;
}