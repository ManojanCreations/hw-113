function preload() 
{

}
 function setup()
 {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide(); 

    tint_color = "";
 }

 function draw() 
 {
     image(video, 0, 0, 640, 480);
     tint(tint_color);

     background(220);
  rect(70, 10, 270, 25);
  fill(204, 101, 192);
  stroke(204, 101, 192);
  
  rect(70, 350, 270, 25);
  fill(204, 101, 192);
  stroke(204, 101, 192);
  
  rect(350, 50, 25, 290);
  fill(204, 101, 192);
  stroke(204, 101, 192);
  
  rect(30, 50, 25, 290);
  fill(128, 0, 0);
  stroke(128, 0, 0);
  
  circle(42, 25, 65, 290);
  fill(128, 0, 0);
  stroke(128, 0, 0);
  
  circle(362, 25, 65, 290);
  fill(128, 0, 0);
  stroke(128, 0, 0);
  
  circle(362, 362, 65, 290);
  fill(128, 0, 0);
  stroke(128, 0, 0);
  
  circle(40, 362, 65, 290);
  fill(204, 101, 192);
  stroke(204, 101, 192);
 }

 function take_snapshot()
 {
    save('image.png');
 }

 function filter_tint()
 {
     tint_color = document.getElementById("color_name").value;
 }