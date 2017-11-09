'use strict'

var sun_x = 60;
var sun_y = 60;
var car_x = 60;
var car_y = 360;
var bhead = 50;
var bheight = 50;
var b_x = 50;
var b_y = 50;
var createApp = function(canvas) { 
	var c = canvas.getContext("2d");
	// Create the ground
	var floor = canvas.height/2
	var grad = c.createLinearGradient(0,floor,0,canvas.height)
	grad.addColorStop(0, "green")
	grad.addColorStop(1, "black")
	c.fillStyle=grad
	c.fillRect(0, floor, canvas.width, canvas.height)

    //create sun
    var sunmove = function(){
        sun_x = (sun_x*1.2+canvas.width/12) % canvas.width;
        sun_y =  40+sun_x/5;
        c.fillStyle = "orange";
        c.beginPath();
        c.arc(sun_x,sun_y,40,0,2*Math.PI);
        c.stroke();
        c.fill();
    }
    
    //run the car
    var car_run = function(){
        car_x=(car_x+10) % canvas.width;
        //draw car
        c.fillStyle="pink";
		c.fillRect(car_x-10,canvas.height/2-120,80,40);
		c.fillStyle="red";
		c.fillRect(car_x-20,canvas.height/2-80,100,50);
        //draw wheel,single wheel car is cool
		c.fillStyle="black";
		c.beginPath()
		c.arc(car_x+30,canvas.height/2-15,15,0,2*Math.PI,false)
		c.closePath()
		c.fill()
    }
    
	// common size for windows
	var windowSpacing = 2, floorSpacing = 3
	var windowHeight = 5, windowWidth = 3

	// colors of buildings
	var blgColors = [ 'red', 'blue', 'gray', 'orange'] 
    var blginfo=[];
    var birdinfo=[];
    
    // turn on or turn off the lights
    var changelights = function(){
		blginfo.forEach(function(b){
			c.fillStyle= b.blgcolor;
			c.fillRect(b.x0, floor - b.blgheight, b.blgwidth, b.blgheight)
			var floordistance = floorSpacing + windowHeight;
			var windowdistance = windowSpacing + windowWidth;
			for (var y = floor - floorSpacing; y > floor - b.blgheight; y -= floordistance) {
				for (var x = windowSpacing; x < b.blgwidth - windowWidth; x += windowdistance) {
					if(29+31*Math.random() > 45)
						c.fillStyle = b.blgcolor;
					else
						c.fillStyle = "yellow";
					c.fillRect(b.x0 + x, y - windowHeight, windowWidth, windowHeight);
				}
			}
		})
        birdinfo.forEach(function(nest){
            c.fillStyle="black";
		    c.fillRect(nest.nest_x,nest.nest_y,15,15);
        })
    }
    
    
	//build a building
	var build = function() { 
		var x0 = Math.random()*canvas.width
		var blgWidth = (windowWidth+windowSpacing) * Math.floor(Math.random()*10)+5;
		var blgHeight = Math.random()*canvas.height/2
        var blgColor = blgColors[ Math.floor(Math.random()*blgColors.length)];
        
		c.fillStyle= blgColor;
		c.fillRect(x0, floor - blgHeight, blgWidth, blgHeight)
		c.fillStyle = "yellow"
        blginfo.push({blgheight:blgHeight,blgwidth:blgWidth,blgcolor:blgColor,x0:x0});
        /*const dx = floorSpacing + windowHeight    
		const dy = windowSpacing + windowWidth
		const floors = Math.floor(blgHeight/dx)
		const rows = Math.floor(blgWidth/dy) - 1
		const range = (n, delta, x0) => Array(n).fill(1).map((_, i) => x0 + i * delta)
		range(floors, dx, floor - blgHeight + dx).forEach(y => {
		    range(rows, dy, windowSpacing).forEach(x => {
				c.fillRect(x0 + x, y - windowHeight, windowWidth, windowHeight)
		    })
		})
		 */
	}
    var bhead;
    var bheight;
    
    var bird = function(){
        b_x = 50;
        b_y =  (Math.random()*canvas.height+50)%(0.5*canvas.height);
        
        bhead = b_x;
        bheight = b_y;
        c.fillStyle = "pink";
        c.beginPath();
        c.arc(b_x,b_y,15,0,2*Math.PI);
        c.closePath();
        c.fill();
        c.fillStyle = "red";
        c.beginPath();
        c.arc(b_x+15,b_y,10,0,2*Math.PI);
        c.closePath();
        c.fill();
        
    }
    
    var flying = function(){
        var f = true;
        var bhead1 = (bhead*1.2+canvas.width/12)%canvas.width;
        var nest_x;
        var nest_y;
      
        blginfo.forEach(function(b){
            if(b.x0-5 < bhead1 && bheight > floor - b.blgheight){
                if(f == true){
                    nest_x = b.x0;
                    nest_y = bheight;
                    f = false;
                }
                if(f == false){
                    nest_x = Math.min(b.x0,nest_x);
                    nest_y = bheight;
                }
                
            }
            
                
        })
        //draw nest
       if(f == false){
           c.fillStyle="black";
		   c.fillRect(nest_x,nest_y,15,15);
           birdinfo.push({nest_x:nest_x,nest_y:nest_y});
       }
        //draw bird
       if(f == true){
            bhead = bhead1;
            c.fillStyle = "pink";
            c.beginPath();
            c.arc(bhead,bheight,15,1,2*Math.PI);
            c.closePath();
            c.fill();
            c.fillStyle = "red";
            c.beginPath();
            c.arc(bhead+15,bheight,10,0,2*Math.PI);
            c.closePath();
            c.fill();
        }
    }
    
 
    //click building, increasing the height of this building
    canvas.addEventListener('click',function(e){
        var x = e.pageX - canvas.offsetLeft;
		var y = e.pageY - canvas.offsetTop;
		blginfo.forEach(function(building){
			if (y > floor-building.blgheight + 50 && y < floor && x > building.x0 && x < building.x0 + building.blgwidth){
				building.blgheight  = building.blgheight*1.08;
			}
		})
    })
    
    // when it change, it will erase the old and show the new obj
    c.clearRect(0,0,canvas.width,canvas.height/2);
    
	return {
		build: build,
        changelights:changelights,
        car_run:car_run,
        sunmove:sunmove,
        bird:bird,
        flying:flying
	}
}

window.onload = function() {
	var app = createApp(document.querySelector("canvas"));
    setInterval(change,250);
    function change(){
        createApp(document.querySelector("canvas")); 
        app.changelights();
        app.car_run();
        app.sunmove();
        app.flying();
        document.getElementById("build").onclick = app.build;
        document.getElementById("bird").onclick = app.bird;
    }
}