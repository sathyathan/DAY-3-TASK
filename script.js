//TASK 1
let obj1={name:"person1",age:5};
let obj2={age:5,name:"person2"};
let str1=JSON.stringify(obj1,Object.keys(obj1).sort());
console.log(str1);
let str2=JSON.stringify(obj2,Object.keys(obj2).sort());
console.log(str2);
if(str1===str2)
{
    console.log("The JSON objects are equal");

}
else{
    console .log("The JSON objects are not equal");
}


   
   //TASK 2:
   var  request=new XMLHttpRequest;
   request.open("GET","https://restcountries.com",true)
   request.send();
   request.onload=function(){
        var data = request.response;
        var result= JSON.parse(data)
        for(var i=0;i<result.length;i++)
        {
      console.log("flags:"+" "+result[i].flags.svg);
    }
}

   

//TASK 3:
var  request1=new XMLHttpRequest;
request1.open("GET","https://restcountries.com",true)
request1.send();
request1.onload=function(){
     var data1 = request1.response1;
     var result1= JSON.parse(data1)
     for(var i=0;i<result1.length;i++)
     {
   console.log("countryname:"+" "+result1[i].name.common,"region:"+" "+result1[i].name.region,"subregion:"+" "+result1[i].name.subregion,"population:"+" "+result1[i].name.population);
 }
}
