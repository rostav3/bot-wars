const BOARD_SIZE = 10;
const BLOCKS_NUM = 6;


class board {

    constructor() {
        this.boardMath = [];
        let blocks = this.randBlocks();
        for (let i = 0; i < BOARD_SIZE; i++) {
            let row = [];
            this.boardMath.push(row);
            for (let j = 0; j < BOARD_SIZE; j++) {
                let block = {};
                block.x = i;
                block.y = j;

                if (this.isBlockExists(block, blocks)) {
                    row.push(NaN);
                } else {
                    row.push(0);
                }
            }
        }
        this.boardMath[0][BOARD_SIZE-1] = -5;
        this.boardMath[BOARD_SIZE-1][0] = 5;

        console.log(JSON.stringify(board));

    }

    randBlocks() {
        let blocks = [];
        for (let i = 0; i < BLOCKS_NUM; i++) {
            blocks.push(this.getNewBlock(blocks));
        }
        return blocks;
    }

    getNewBlock(blocks) {
        let block = {};
        block.x = Math.floor(Math.random() * 8) + 1;
        block.y = Math.floor(Math.random() * 8) + 1;
        if (this.isBlockExists(block, blocks)) {
            return this.getNewBlock(blocks);
        }
        return block;

    }

    isBlockExists(block, blocks) {
        for (let i = 0; i < blocks.length; i++) {
            if ((blocks[i].x === block.x) && (blocks[i].y === block.y)) {
                return true;
            }
        }
        return false;
    }

    numPosCells(){
        let num = 0;
        for (let i = 0; i < BOARD_SIZE; i++) {
            for (let j = 0; j < BOARD_SIZE; j++) {
                if (this.boardMath[i][j]>0){
                    num++;
                }
            }
        }
        return num;
    }

    updateBoardSign() {
        for (let i=0; i<BOARD_SIZE;i++){
            for (let j=0; j<BOARD_SIZE;j++) {
                if (!isNaN(this.boardMath[i][j]) && (this.boardMath[i][j]!== 0))
                    this.boardMath[i][j] = -this.boardMath[i][j];
            }
        }
    }
}

module.exports = board;
