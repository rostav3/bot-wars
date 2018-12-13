class proxy{
    constructor(){
    }

    static getFixedBoard(board, moves){
        for (let i=0; i< moves.length; i++){
            switch (moves[i].type) {
                case "set":
                    board[moves[i].x][moves[i].y]+=moves[i].num;
                    break;
                case "move":
                    board[moves[i].x][moves[i].y]+=moves[i].num;
                    board[moves[i].past_x][moves[i].past_y]-=moves[i].num;
                    break;
            }
        }
        return board;
    }
}

module.exports = proxy;
