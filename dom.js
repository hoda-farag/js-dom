                        //creat elemnts
let header=document.createElement("header");
let div1 = document.createElement("div");
let myUL = document.createElement("ul");
let myArr=["Home" ," ", "contact" ," ", "About" ," ", "Services"];

                        //append text
let myHeaderText = document.createTextNode("Elzero");

 
                    //append child
header.appendChild(myUL);
header.appendChild(div1);
div1.appendChild( myHeaderText);
for(let i=0 ; i<myArr.length ;i++){
    let myLI=document.createElement("li");
    let myLIText =document.createTextNode(myArr[i]);
   
     myUL.appendChild(myLI);
     myLI.appendChild(myLIText);
};
document.body.appendChild(header);
                        //header style
div1.style.cssText="display:flex; padding:10px; font-size:30px; ";
header.style.cssText ="background-color: green;height: 50px; color:white; padding:0px ";
myUL.style.cssText =" float: right; margin:10px; display: inline-flex;  padding-right: 20px; list-style: none;  font-size:20px;";

                        //section1
let mySec =document.createElement("div");
for(let i=0; i<15 ;i++){
    let myDiv2=document.createElement("div");
    let myHeading=document.createElement("h3");
    let myPara=document.createElement("p");

    let myHeadingText=document.createTextNode(`${i+1}`);
    let myparaText=document.createTextNode("prpduct");

    mySec.appendChild(myDiv2);
    myDiv2.appendChild(myHeading);
    myDiv2.appendChild(myPara);

    myPara.appendChild( myparaText);
    myHeading.appendChild(myHeadingText);
    for (let j = 0; j <15; j++) {
        let part1=document.getElementsByClassName("myDiv2");
        let part2=document.getElementsByClassName("myHeading");
        let part3=document.getElementsByClassName("myPara");
         mySec.style.marginTop="20px"
         myDiv2.classList.add("div2");
         myHeading.classList.add("myHeading");
         myPara.classList.add("myPara");
       myDiv2.style.backgroundColor="white";
       myDiv2.style.width="30%";
       myDiv2.style.textAlign="center";
       myDiv2.style.position="relative";
       myDiv2.style.margin="20px";
       myDiv2.style.display="inline-block"
       myDiv2.style.borderRadius="10px";
       
         
    }
    
}
mySec.style.backgroundColor="rgb(240 240 240)";
mySec.style.position="relative";

document.body.appendChild(mySec);
                            //footer
let myFooter=document.createElement("footer");
let myEnd=document.createElement("h4");
myEndText=document.createTextNode("copyright 2022");
myFooter.appendChild(myEnd);
myEnd.appendChild(myEndText);
myFooter.style.cssText=" background-color:green;  text-align: center;  padding-top:1px; color:white; margin-top:0px;height: 30px;";
document.body.appendChild(myFooter);





