let playerState = 'idel'; 
const dropdowm = document.getElementById('animations');
dropdowm.addEventListener('change',function(e){
    playerState = e.target.value;
})



const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = './shadow_dog.png';
const spriteWidth = 575;
const spriteHight = 523;
let gameFrame = 0;
let staggerFrames = 5;
const spliteAnimation = [];

const animationState = [
    {
        name :'idel',
        frames : 7,
    },
    {
        name:'jump',
        frames : 7,
    },
    {
        name:'fall',
        frames : 7,
    },
    {
        name:'run',
        frames : 9,
    },
    {
        name:'dizzy',
        frames : 11,
    },
    {
        name:'sit',
        frames : 5,
    },
    {
        name:'roll',
        frames : 7,
    },
    {
        name:'bite',
        frames : 7,
    },
    {
        name:'ko',
        frames : 12,
    },
    {
        name:'getHit',
        frames : 4,
    }
];
animationState.forEach((state, index) => {
       let frames = {
        loc : [],
       }
       for(let j=0; j<state.frames; j++){
        let positionX = j * spriteWidth;
        let positiony = index * spriteHight;
        frames.loc.push({x:positionX, y:positiony});
       } 
       spliteAnimation[state.name] = frames;
});
console.log(spliteAnimation);

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HIGHT);
    //ctx.fillRect(x,50,100,100);
    //ctx.drawImage(Image,sx,sy,sw,sh, dx,dy,dw,dh);
    
    let position = Math.floor(gameFrame/staggerFrames) % spliteAnimation[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spliteAnimation[playerState].loc[position].y;
    ctx.drawImage(playerImage,frameX,frameY,spriteWidth,spriteHight,0,0,spriteWidth,spriteHight);
    
    gameFrame++;
    requestAnimationFrame(animate);
    
}
animate();

/* 

6876px width
12 images width
6876/12 = 573;

5230px hight
10 images hight
5230/10 = 523

*/