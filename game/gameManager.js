const Board = require('../game/board.js');
const Proxy = require('../game/proxy.js');

class gameManager{
    constructor(){
        this.currentUser = 0;
        if (this.currUsers === undefined) {
            this.currUsers = [];
        }
    }

    addUser(userName) {
        if (this.currUsers.length >= 2){
            return -1;
        }
        this.currUsers.push(userName);
        if (this.currUsers.length === 2){
            this.board = new Board();
        }
        return this.currUsers.length;
    }
    updateBoard(moves){
        Proxy.getFixedBoard(this.board.boardMath, moves);
        if (this.currentUser === 0){
            this.currentUser = 1;
            this.board.updateBoardSign();
        }else{
            this.currentUser = 0;
            this.board.updateBoardSign();
        }
    }

    isRightUser(user) {
        if (user === this.currUsers[this.currentUser])
            return true;
        return false;
    }
}

module.exports = gameManager;
