function outputname(){
    var x,xa,xb,xc,xd,u,v,w,y,z,a,name1,name2,name3,name4,name5,mediaFinal;
    x=document.getElementById("form1");
    xa=document.getElementById("form2");
    xb=document.getElementById("form3");
    xc=document.getElementById("form4");
    xd=document.getElementById("form5");
    u=x.elements["name1"].value;
    v=xa.elements["name2"].value;
    w=xb.elements["name3"].value;
    y=xc.elements["name4"].value;
    z=xd.elements["name5"].value;
    a=Number(4);
    
    document.getElementById("demo").innerHTML="A média de "+u+" é: <br>";
    mediaFinal= document.getElementById("demo").innerHTML+=(Number(v)+Number(w)+Number(y)+Number(z))/a;
    }