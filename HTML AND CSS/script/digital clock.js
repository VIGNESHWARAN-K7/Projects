setInterval(()=>{
    let d=new Date()
    let hour =d.getHours()
    let min =zero(d.getMinutes())
    let sec =zero(d.getSeconds())
    let msc =d.getMilliseconds()

    if(hour>12)
        hour=hour-12

    let hr =document.getElementById("hour").innerHTML=zero(hour)
    let mns=document.getElementById("min").innerHTML=min
    let secds =document.getElementById("sec").innerHTML=sec
    let milsec=document.getElementById("msc").innerHTML=msc
},1)

function zero(num){
    if(num<10)
        return "0"+num
    else
        return num
}