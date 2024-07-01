



            
    setInterval(()=>{
        let d=new Date()
        let hour1 =d.getHours()
        let min1 =d.getMinutes()
        let sec1 =d.getSeconds()
        
        hourrot=30*hour1+min1/2;
        minrot=6*min1;
        secrot=6*sec1;


        let hr =document.getElementById("hour").sec.style.transform='rotate(${hourrot}deg)';
        let mns=document.getElementById("min").sec.style.transform='rotate(${minrot}deg)';
        let secds =document.getElementById("sec").sec.style.transform='rotate(${secrot}deg)';
    },1000)

 
    