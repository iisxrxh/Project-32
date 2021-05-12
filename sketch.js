const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

var hour = 0;w



function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }

    
    if(hour>=12){ 
        text("Time : "+ hour%12 + " PM", 50,100); }
        else if(hour==0){ 
            text("Time : 12 AM",100,100); }
            else{
                 text("Time : "+ hour%12 + " AM", 50,100); }
    

    Engine.update(engine);

    
   

}

async function getBackgroundImg(){

   
        var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
        var responseType = await response.json()
        var datetime = responseType.datetime
        hour = datetime.slice(11, 13)
        
    if (hour>= 04 && hour<= 06){
        bg = "sunrise2.png"
    }
    else if(hour> 06 && hour<= 08){
        bg = "sunrise3.png"
    }
    else if(hour> 08 && hour<= 12){
        bg = "sunrise4.png"
    }
    else if(hour>12 && hour<= 15){
        bg = "sunrise5.png"
    }
    else if(hour>15 && hour<=17){
        bg = "sunrise6.png"
    }
    else if(hour> 17 && hour<=18){
        bg = "sunset7.png"
    }
    else if(hour> 18 && hour<= 19){
        bg = "sunset8.png"
    }
    else if(hour> 19 && hour<= 21){
        bg = "sunset10.png"
    }
    else if(hour> 21 && hour<= 03){
        bg = "sunset12.png"
    }
    else if(hour> 03 && hour<= 04){
        bg = "sunset11.png"
    }
        backgroundImg = loadImage(bg)
        
    }
    

