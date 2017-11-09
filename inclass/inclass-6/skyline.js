'use strict'

var sun_x = 60;
var sun_y = 60;
var car_x = 60;
var car_y = 360;

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
    }
    
    
	//build a building
	var build = function() { 
		var x0 = Math.random()*canvas.width
		var blgWidth = (windowWidth+windowSpacing) * Math.floor(Math.random()*10)
		var blgHeight = Math.random()*canvas.height/2
        var blgColor = blgColors[ Math.floor(Math.random()*blgColors.length)];
        
		c.fillStyle= blgColor;
		c.fillRect(x0, floor - blgHeight, blgWidth, blgHeight)
		c.fillStyle = "yellow"
        blginfo.push({blgheight:blgHeight,blgwidth:blgWidth,blgcolor:blgColor,x0:x0});
        const dx = floorSpacing + windowHeight    
		const dy = windowSpacing + windowWidth
		const floors = Math.floor(blgHeight/dx)
		const rows = Math.floor(blgWidth/dy) - 1
		const range = (n, delta, x0) => Array(n).fill(1).map((_, i) => x0 + i * delta)
		range(floors, dx, floor - blgHeight + dx).forEach(y => {
		    range(rows, dy, windowSpacing).forEach(x => {
				c.fillRect(x0 + x, y - windowHeight, windowWidth, windowHeight)
		    })
		})
		 
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
        sunmove:sunmove
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
        document.getElementById("build").onclick = app.build;
    }
}