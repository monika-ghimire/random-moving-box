
 let random_x
let boxList = [];

//for new and diffrent object
for (let i = 0; i < 20; i++) {
    let random_color = getRandomColor();
     random_x = Math.floor(Math.random() * canvas.width);
    let random_y = Math.floor(Math.random() * canvas.height);
    let speed=Math.floor(Math.random() *10)
    let box = new Box(random_x, random_y, 50, 50, random_color);
    box.random_speed=speed
  

    boxList.push(box);
}


//for run function in every min-sec
setInterval(() => {
    requestAnimationFrame(gameLoop);
}, 1000 / 10);

//for make our div move
function gameLoop() {
    //clearing screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //get value form index
    for (let i = 0; i < boxList.length; i++) {
        boxList[i].move();
        
       
        if(boxList[i].X>canvas.width)
        {
            boxList[i].X =0
           
        
        }
      

        
       

    }
    

}