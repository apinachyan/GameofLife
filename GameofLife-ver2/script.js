var socket = io();

weath = 'winter';
// weathobj = document.querySelector('#weather');
// weathobj.innerText = weath;


var side = 40;
 
function setup() {
    frameRate(5);
    createCanvas(14 * side + 1, 14 * side + 1);
    background('#acacac');
    socket.on('weather',function (data){
        weath = data;
        weathobj = document.querySelector('#weather');
        weathobj.innerText = weath;
   })
}
 function drawing(matrix) {
    console.log(matrix);
    fill("white")
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("white");
            }
            else if (matrix[y][x] == 1) {
                if(weath == 'winter'){
                    fill(3, 252, 244);
                }
                else if(weath == 'spring'){
                    fill("green");
                }
                else if(weath == 'summer'){
                    fill(48, 255, 79);
                }
                else{
                    fill(127, 138, 99);
                }
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("grey");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            else if (matrix[y][x] == 6) {
                fill("Pink");
            }
            else if (matrix[y][x] == 7) {
                fill(0,0,255);
            }
            rect(x * side, y * side, side, side);
        }
    }
}



setInterval(
    function () {
    socket.on('send matrix', drawing)
    },1000
)

function restart_gam(){
    socket.emit('restart');
}
function call_water(){
    socket.emit('call_water');
    console.log('Call water');
}
function call_grass_eater(){
    socket.emit('call grassEater');
}
function call_human(){
    socket.emit('call human');
}
function call_wild_an(){
    socket.emit('call animal');
}
function call_airplane(){
    socket.emit('call airplane');
}