
function setup() 
{
  createCanvas(400, 400);
  box1=new Box (200,100,50,50,2)
  box2=new Box (350,300,45,65,-10)
}

function draw() 
{
  background(220);
  box1.show()
  box1.move()
  box2.show()
  box2.move()


}

