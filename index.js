

var list1=[];
var list2=[];
var list3=[];
var list4=[];

var n=1;
var x=0;
function AddRow(){
    var addrown=document.getElementById("show");
    var newrow=addrown.insertRow(n);

    list1[x]=document.getElementById("name").value;
    list2[x]=document.getElementById("weight").value;
    list3[x]=document.getElementById("height").value;
    
    height = document.getElementById("height").value;
    weight = document.getElementById("weight").value;

    var result = parseFloat(weight) /(parseFloat((height*0.3048)*(height*0.3048)));
    list4[x]=result;

    var cel1=newrow.insertCell(0);
    var cel2=newrow.insertCell(1);
    var cel3=newrow.insertCell(2);
    var cel4=newrow.insertCell(3);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];

    n++;
    x++;




}

