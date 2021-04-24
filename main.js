const fieldWidth = 100;
const fieldHight = 60;

const initGameField = () =>{
    const arr = Array(fieldHight).fill().map(() => Array(fieldWidth));
    arr.forEach(line => line.fill(0));
    arr[0].fill(-1);
    arr[fieldHight-1].fill(-1);
    arr.forEach((line) => {line[0]=-1;
        line[fieldWidth-1]=-1});
    return arr;
};

class GameField{
    constructor(){
        this.field=initGameField();
    }
}

const gameField = new GameField();

const renderField = () => {
    let gameFieldElement = document.querySelector('#game-field');
    const field = gameField.field;
    for(let y=0 ; y< field.length; y++){
        const line = document.createElement('div');
        line.classList.add('row');
        gameFieldElement.appendChild(line);
        for(let x=0;x<field[y].length;x++){
            const point = document.createElement('canvas');
            if(field[y][x]===-1){
                point.classList.add('wall-point');
            }else if(field[y][x]===0){
                point.classList.add('empty-point');
            }
            line.appendChild(point);
        }
    }
}
renderField();
