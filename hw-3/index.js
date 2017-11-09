var picset = [["/Users/yingguo/Desktop/COMP531/yg45/hw-3/picture/pic1.jpg",
              "/Users/yingguo/Desktop/COMP531/yg45/hw-3/picture/pic2.jpeg",
              "/Users/yingguo/Desktop/COMP531/yg45/hw-3/picture/pic3.jpg",
              "/Users/yingguo/Desktop/COMP531/yg45/hw-3/picture/pic4.jpg"],
              ["/Users/yingguo/Desktop/COMP531/yg45/hw-3/picture/pic5.jpg",
              "/Users/yingguo/Desktop/COMP531/yg45/hw-3/picture/pic6.jpg",
              "/Users/yingguo/Desktop/COMP531/yg45/hw-3/picture/pic7.jpg",
              "/Users/yingguo/Desktop/COMP531/yg45/hw-3/picture/pic8.jpg"],
              ["/Users/yingguo/Desktop/COMP531/yg45/hw-3/picture/pic9.jpg",
               "/Users/yingguo/Desktop/COMP531/yg45/hw-3/picture/pic10.jpg",
               "/Users/yingguo/Desktop/COMP531/yg45/hw-3/picture/pic11.jpg",
              "/Users/yingguo/Desktop/COMP531/yg45/hw-3/picture/pic12.jpg"],
              ["/Users/yingguo/Desktop/COMP531/yg45/hw-3/picture/pic13.jpg",
              "/Users/yingguo/Desktop/COMP531/yg45/hw-3/picture/pic14.jpg",
              "/Users/yingguo/Desktop/COMP531/yg45/hw-3/picture/pic15.jpg",
              "/Users/yingguo/Desktop/COMP531/yg45/hw-3/picture/pic16.jpg" 
              ]]
var itemprice = [500,900,1200,1000];
var itemsize = [3,5,9,7];
var score = 0;
var correct_answer;
var interval;
var game_time = 45;
var alert_info = "";
var past_time = 0;//use time as another metric to rank the player's performance 
var win_game_time = 0;//this represents the shortest time player costs to pass all question 

window.onload = function()
{document.cookie = "city=Houston";
document.cookie = "city=Dallas";

if (document.cookie.length > 1) {
   document.cookie = "state=TX";
}

window.console.log(document.cookie.city);
    document.getElementById("left_time").innerHTML = 45;//set game time = 45
    document.getElementById("info").style.display = "none";
    if(window.localStorage.length != 0){
        var highest = window.localStorage.getItem(1);
        document.getElementById("best_score").innerHTML = highest;//show the highest score
        if(window.localStorage.getItem("win_game") == 0 || window.localStorage.getItem("win_game") == null)
            document.getElementById("win_game_time").innerHTML = "No records";
        else{
            document.getElementById("win_game_time").innerHTML = window.localStorage.getItem("win_game");
        }
    }
    else{
        window.localStorage.setItem(1,0);//1 means top 1 score
        window.localStorage.setItem("win_game",0);
    }
    document.getElementById("best_score").innerHTML = window.localStorage.getItem(1);
}

function time_count(){
    var time = document.getElementById("left_time").innerHTML;
    if(time == 0){//time run out,game over
        clearInterval(interval);//stop count time
        document.getElementById("time").innerHTML = past_time;
        save_score();
        alert_info += "Game Over.Your time has run out."+"</br>";
        document.getElementById("answer").value = "";
        if(window.localStorage.length != 0){
            var highest = window.localStorage.getItem(1);
            document.getElementById("best_score").innerHTML = highest;//update the highest score
        }
        game_over();
        score = 0;
    }
    else{
        past_time++;
        document.getElementById("time").innerHTML = past_time;
        time--;
    }
    document.getElementById("left_time").innerHTML = time;//update the left time
}

function start(){
    if(document.getElementById("start").innerHTML == "Start"){
        past_time = 0;
        document.getElementById("info").style.display = "none";
        document.getElementById("time").innerHTML = past_time;
        document.getElementById("start").innerHTML = "Restart";
        cal_result();//calculate the correct answer
    }
    else{//restart the game, reset all the data
        score = 0;
        past_time = 0;
        document.getElementById("info").style.display = "none";
        document.getElementById("time").innerHTML = past_time;
        document.getElementById("answer").value = "";
        document.getElementById("current_score").innerHTML = 0;
        document.getElementById("start").innerHTML = "Start";
        cal_result();//calculate the correct answer
    }
}

function display(control){//control the display of the forth item
    document.getElementById("item_pic3").style.display = control;
        document.getElementById("item_price3").style.display = control;
        document.getElementById("item_size3").style.display = control;
}

/* according to different score, the difficulty of this game will keep changing. There are 4 level.
leve 1 is the easiest and level 4 is the hardest. The increase of difficulty will give player less time to
calculate with one more item. */
function cal_result(){
    var length;
    if(score >= 30 && score < 100){
        length = 4;//it means the numbers of item
        display("block");
        if(score >= 60 && score < 80){// 60<=score<80, level 3
            game_time = 25;
        }
        else if(score >= 80 && score < 100){//score>=80, level 4 
            game_time = 15;
        }else{
            game_time = 35;//30<=score<60, level 2
        }
    }
    else if(score < 30){//score<30, level 1
        display("none");
        game_time = 45;
        length = 3;
    }
    document.getElementById("left_time").innerHTML = game_time;
    clearInterval(interval);//each time it calculate the answer, it means it begins a new round.
    interval = setInterval(time_count,1000);//time count should start again from full round time.
    var totalsize = 0;
    var itemsize1 = [];
    var itemprice1 = [];
    //initialize the itemprize and itemsize, get the value randomly
    for(var i = 0 ; i < length ;i++){
        var pic_index = Math.floor(Math.random()*4);
        itemprice1[i] = Math.floor(itemprice[i] + (2*Math.random() - 1)*(i+1)*120);
        document.getElementById("item_price"+i).innerHTML = "Price: $"+itemprice1[i];
        itemsize1[i] = Math.floor(1+Math.abs(itemsize[i] + (2*Math.random() - 1)*(i+1)*2));
        document.getElementById("item_size"+i).innerHTML = "Size: "+itemsize1[i];
        document.getElementById("item_pic"+i).src = picset[i][pic_index];
        totalsize += itemsize1[i];
    }
    //make sure the bagsize is less than the sum of all items' size
    var bagsize = Math.round(totalsize - 0.37*itemsize1[Math.floor(Math.random()*length)]);
    document.getElementById("bag_size").innerHTML = bagsize;
    /* this part algorithm is one type of dynamic programming. We use this algorithm to calculate the maximum value we can get.
    each time we consider take ith item or not by comparing the values of these two condition */
    var arr= [];                     
    for(var x=0;x<bagsize+1;x++){
      arr.push(0);
    }
    for(var i = 0; i < length ; i++){
        for(var j = bagsize; j>0;j--){
            if(j >= itemsize1[i])
                arr[j] = Math.max(arr[j],arr[j-itemsize1[i]]+itemprice1[i]);
        }
    }
    correct_answer = arr[bagsize];
}

function submit_answer(){
    var answer = document.getElementById("answer").value;
    var highest = window.localStorage.getItem(1);
    if(answer == correct_answer){
        score += 5;
        document.getElementById("current_score").innerHTML = score;//update the current score
        highest = Math.max(highest,score);//update the highest score
        document.getElementById("best_score").innerHTML = highest;
        if(score == 100){//pass all questions, the game over, player win
            clearInterval(interval);//stop counting time
             alert_info = "Good! You answer all questions!"+"</br>";
             save_score();
             game_over();
        }
        else{
            cal_result();//calculate the answer for the next round
            document.getElementById("answer").value = "";//clear the last input 
        }
    }    
    else{//answer is wrong, game over
        highest = Math.max(highest,score);//update the highest score
        document.getElementById("best_score").innerHTML =highest;
        alert_info += "Game Over.Your answer is wrong."+"</br>";
        document.getElementById("answer").value = "";
        save_score();
        game_over();
        score = 0;
        clearInterval(interval); //stop counting time
    } 
}

function save_score(){
    if(window.localStorage){
        var highest = Number(window.localStorage.getItem(1));
        if(score > highest){
            window.localStorage.setItem(1,score);//update the highest score
        }
        if(score == 100){
            win_game_time = Number(window.localStorage.getItem("win_game"));
            if(win_game_time == 0 || win_game_time > past_time){
                window.localStorage.setItem("win_game",past_time);
                document.getElementById("win_game_time").innerHTML = past_time;
            }
        }
    }else{
        alert_info += "Your browser doesn't support localStorage."//deal the exception that the browser don't support localstorage
    }
}

function game_over(){
    alert_info +="You have won "+score+" points in "+past_time+" seconds.";
    document.getElementById("alert_info").innerHTML = alert_info;
    document.getElementById("info").style.display = "block";//show the game info
    alert_info = "";//clear the alert_info for the new game
    past_time = 0;//set past_time to 0 for the next new game
}
