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
} //if false => no repeats

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
} //if false => no repeats

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
} //if false => no repeats
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
} //if false => no repeats
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
} //if false => no repeats

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
} //if false => no repeats
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
} //if false => no repeats
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
} //if false => no repeats

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
} //if false => no repeats
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
} //if false => no repeats
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
} //if false => no repeats



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





/*function rowFill(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let collection = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    matrix[i].forEach(elem => {
      if (elem !== 0) { collection.splice((collection.indexOf(elem)), 1);}})
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][j] = collection.shift();
      }
    }
  }
  return matrix;
}

/*  const initial = [
    [6, 5, 1, 7, 3, 2, 4, 8, 9],
    [1, 2, 6, 4, 8, 7, 5, 3, 9],
    [8, 4, 1, 9, 2, 5, 3, 6, 7],
    [1, 9, 2, 8, 3, 4, 5, 6, 7],
    [5, 3, 1, 2, 4, 9, 6, 7, 8],
    [1, 2, 6, 3, 4, 5, 8, 7, 9],
    [1, 2, 9, 3, 4, 5, 7, 8, 6],
    [1, 2, 7, 3, 4, 6, 8, 5, 9],
    [1, 6, 5, 3, 9, 2, 4, 7, 8]
  ];*/


/*function checkRepeats(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let i = 0; i < matrix[i].length/3; i++) {
      //continue
    }
  }
}



function twist(matrix) {
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];
  let arr5 = [];
  let arr6 = [];
  let arr7 = [];
  let arr8 = [];
  let arr9 = [];
  for (let i = 0; i < 9; i++) {
    arr1.push(matrix[i][8]);
    arr1.push(matrix[i][7]);
    arr1.push(matrix[i][6]);
    arr1.push(matrix[i][5]);
    arr1.push(matrix[i][4]);
    arr1.push(matrix[i][3]);
    arr1.push(matrix[i][2]);
    arr1.push(matrix[i][1]);
    arr1.push(matrix[i][0]);
  }
}

function columnFill(matrix) {
  for (let k = 0; k < 9; k++) {
    let collection = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < matrix.length; i++) {
      if (collection.indexOf(matrix[i][k]) > -1) {
        collection.splice((collection.indexOf(matrix[i][k])), 1);
      }
    }
    for (let j = 0; j < matrix.length; j++) {
      if (collection.indexOf(matrix[j][k]) === -1) {
        matrix[j][k] = collection.shift();
      }
    }
  }
  return matrix;
}
*/
