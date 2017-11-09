/* use picset1 store 4 sets of different pictures for each post.*/
var picset1 = [["http://www.gbs.cn/Upload/User/caipu197/201362816843775.jpg","http://img.daimg.com/uploads/allimg/150501/3-1505011AG50-L.jpg","http://img5.imgtn.bdimg.com/it/u=3271673815,1903287626&fm=27&gp=0.jpg","http://img.daimg.com/uploads/allimg/160809/3-160P9192932.jpg"],
["http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=e25d57cf7c094b36cf9f13aecba516ac/adaf2edda3cc7cd95ee09dc93301213fb90e91d5.jpg","http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=e3409d2bc295d143ce7bec601b99e877/ac4bd11373f08202fb48e01741fbfbedab641b3b.jpg","http://images.quanjing.com/chineseview110/high/192-5507.jpg","http://photocdn.sohu.com/20090803/Img265683661.jpg"],
["https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1985688863,4208119605&fm=11&gp=0.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504902860315&di=e5b0be9a52ff9c898a51a4da94bf9b07&imgtype=0&src=http%3A%2F%2Fpic38.nipic.com%2F20140222%2F2656254_095504906000_2.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504902860315&di=e98c271075367d4083d38aa1a5fdb2d1&imgtype=0&src=http%3A%2F%2Fs2.lvjs.com.cn%2Fuploads%2Fpc%2Fplace2%2F2015-11-20%2F824ff408-a72c-4e9c-a678-5a9881a3b363.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504902916381&di=7e919b83aa4f1b74d5627ea07cf2c51c&imgtype=jpg&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fd788d43f8794a4c2674c7f1804f41bd5ad6e3991.jpg"],
["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504903017181&di=9c4b7db73cd9d9b8d50a366c5e81d35b&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D4662973d03f79052fb124f7d649abdbf%2F9922720e0cf3d7ca1d0ddb58f81fbe096b63a921.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504902966346&di=2771dd87a4b31224707a244bd757c59d&imgtype=0&src=http%3A%2F%2Fimgstore.cdn.sogou.com%2Fapp%2Fa%2F100540002%2F455377.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504903017178&di=d125cb6f8d0ba18c20f3d9ba98098066&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D9cd27adf71cb0a46912f837a030a9c51%2Ff31fbe096b63f624fb41a1268d44ebf81a4ca3f3.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504903017177&di=1ccec3b679a6997c0c1ae45f29f61e8e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F12%2F39%2F03V58PICydp_1024.jpg"]]

var index = [0,0,0,0];//use index[] providing next pictures' index in sets 
var interval = [setInterval(function(){changePicture(1)},getRandomTime()),
                setInterval(function(){changePicture(2)},getRandomTime()),
                setInterval(function(){changePicture(3)},getRandomTime()),
                setInterval(function(){changePicture(4)},getRandomTime())]

function getRandomTime(){
    var val = Math.round(5 * Math.random());
    if(val == 0)
        val++;
    return 1000*val;//get random time from 1s to 5s
}

function changePicture(num){//periodical change pictures
    index[num-1]++;
    if(index[num-1] == picset1[num-1].length)//if it reaches the last pic in this set
        index[num-1] = 0;//turn to first pic in this set
    document.getElementById("pic"+num).src = picset1[num-1][index[num-1]];
}

function stop(id){
    var i = id.charAt(id.length-1);
    var btn = document.getElementById(id);
    if(btn.innerHTML == "Stop"){
        clearInterval(interval[i-1]);//stop changing pictures 
        btn.innerHTML = "Start";
    }
    else{
        interval[i-1] = setInterval(function(){changePicture(i)},getRandomTime());//restart
        btn.innerHTML = "Stop";
    }
}

function redirect(){
    window.location = "profile.html";//link to profile page
}
