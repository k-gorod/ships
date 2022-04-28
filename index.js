const newRow = 100;
const newCol = 100;
const newArr = generateArrOfShips(newRow,newCol);

// here is solution in one line
const getHitProbability = (row, col, grid) => grid.reduce((acc, gridCol)=>acc + gridCol.reduce((acc, num)=>acc + num, 0), 0) / (row * col)

// here is more correct solution
const getHitProbability2 = (row, col, grid) => {
  if([row, col, ...grid.flat()].some((el)=>typeof el !== "number")){
    return "Wrong data. Arguments can be only numbers"
  }else {
    let numOfShips = 0;

    for(let i = 0; i < row; i++){
      for (let j = 0; j < col; j++) {
        numOfShips+=grid[i][j];
      }
    }

    return numOfShips/(row * col)
  }
}

//here is generating new random grid
function generateArrOfShips (row, col) {
  const arr = []
  for(let i = 0; i < row; i++){
    arr.push([])
    for (let j = 0; j < col; j++) {
      arr[i].push(Number(Math.floor(Math.random()*2)))
    }
  }
  return arr;
}



const before = new Date().getTime();
console.log(getHitProbability(newRow, newCol, newArr))
console.log(new Date().getTime() - before, "ms")

const before2 = new Date().getTime();
console.log(getHitProbability2(newRow, newCol, newArr))
console.log(new Date().getTime() - before2, "ms")
