function displayTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var sessions = document.getElementById("session");
    if(h >=12 ){
        session.innerHTML = "PM";
    }else{
        session.iinerHtml = "AM";
    }
    if (h > 12){
        h = h-12;
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;



    document.getElementById("hours").innerHTML= h;
    document.getElementById("minutes").innerHTML= m;
    document.getElementById("seconds").innerHTML= s;

}
setInterval(displayTime, 10)