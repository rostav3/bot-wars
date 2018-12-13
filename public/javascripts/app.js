let users;
window.onload = function () {
        handleConnection();

};

function handleConnection() {
    let socket = io.connect('http://localhost:7000');
    socket.on('users',function (user) {
        users = user;
        socket.on('turn-' + user[0], function (data) {
            clearBoard();
            buildBoard(data.board,1);
            console.log(data);
        });
        socket.on('turn-' + user[1], function (data) {
            clearBoard();
            buildBoard(data.board,-1);
            console.log(data);
        });

        // socket.on('turn-' + user[1], function (data) {
        //     buildBoard(data);
        //     console.log(data);
        // });
    });
}

function clearBoard() {
    document.getElementById("table-container").innerHTML = "";
}
function buildBoard(bordMath, sign) {
    let x = document.createElement("TABLE");
    x.setAttribute("id", "war-table");
    document.getElementById("table-container").appendChild(x);

    for (let i = 0; i < bordMath.length; i++){
        let y = document.createElement("TR");
        y.setAttribute("id", "tr" + i);
        x.appendChild(y);

        for (let j=0; j < bordMath.length; j++){
            let z = document.createElement("TD");
            let currCell = bordMath[i][j];
            if (currCell === null){
                z.style.backgroundColor = "grey";
            } else if (currCell*sign < 0){
                z.style.backgroundColor = "pink";
            } else if (currCell*sign > 0){
              z.style.backgroundColor = "cornflowerblue";
            }
            if ((currCell != null) && (currCell!== 0)){
                let t = document.createTextNode(Math.abs(currCell) + "");
                z.appendChild(t);
            }

            z.setAttribute("id", "td" + i + "_" + j);
            z.setAttribute("class", "board_cell");
            y.appendChild(z);
        }
    }
}
    // let x = document.createElement("TABLE");


