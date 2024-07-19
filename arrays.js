//                      //ARRAY MAPPING//
let numbers=[2,3,4,5,6]
let result=numbers.map((x) => x*2)
document.write("Mapping the given array *2: ",result,"<br>")

let colors=['green','blue','yellow']
let value=colors.map((colors) => colors.toUpperCase())
document.write("Converting the array to uppercase characters: ",value,"<br>")


                      //ARRAY DESTRUCTING//

let colors1=["yellow","blue","pink"]
let [a,b]=colors1
document.write("<br>","Value of a in colors is:",a,"<br>","Value of b in colors is:",b,"<br>","<br>")


//                       //ARRAY SEACRHING
// //find() method
let colors2=["blue","pink","yellow"]
let res2=colors.find(colors2 => colors2.startsWith('p'))
document.write("Finding an element starting wiht p is:",res2,"<br>")


// //includes() method
let birds=["sparrow","peacock","parrot"]
let res1=birds.includes("parrot");
document.write("Is parrot included in the given array of birds:",res1,"<br>",)

// //indexOf() method
let fruits=["mango","apple","papaya"]
document.write("The index value of apple in given fruits is:",fruits.indexOf("apple"),"<br>","<br>")


//                         //MERGING ARRAYS
let arr1=["Hey","How","Are","You"]
let arr2=["Hi","I","Am","Fine"]
document.write("Merging arrays we get: ",arr1.concat(arr2),"<br>","<br>") 

                          //FLATTENING ARRAYS
let arr=[1,2,[3,4],[5,[6,7]],8]
let res=arr.flat(2)
document.write("Flattening all arrays we get: ",res,"<br>","<br>")

                           //ARRAY SPREADING
let msg1=["Hey","Whats","up"]
let msg2=["Hi","Nothing","much"]
let res3=[...msg1,...msg2]
document.write("Using Spread Operator we get:",res3,"<br>","<br>");
     
                //CREATING NEW ARRAY WITH GIVEN LENGTH
let length=5;
let array=new Array(length).fill(0);
document.write(array)