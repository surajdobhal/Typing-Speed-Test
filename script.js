const sentence = ["COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.",
"Web development is the building and maintenance of websites its the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience",
"the state of a country or region in terms of the production and consumption of goods and services and the supply of money."];
let btn=document.getElementById('start_btn');
let msg=document.getElementById("msg");
let result=document.getElementById('result_msg');
let type=document.getElementById('textarea');
let starttime,endtime;

const playgame=()=>{
  let text_random = Math.floor(Math.random()*sentence.length);
  msg.innerText = sentence[text_random];
  let date = new Date();
  starttime=date.getTime();
  btn.innerText = "Done";
}
const endplay=()=>{
   let date = new Date();
   endtime = date.getTime();
   let total_time=((endtime - starttime)/1000);
   let total_string=type.value;
   let word_counter = wordCounter(total_string);
   let speed=Math.round((word_counter/total_time)*60);
   let result_msg="You typed total at "+speed+" words per minutes ";
   let compare = compareWord(msg.innerText,total_string);
   result_msg+= compare;
   msg.innerText = " ";
   result.innerText = result_msg;

}
const wordCounter = (str)=>{
    let response = str.split(" ").length;
    return response;
}
const compareWord = (a,b) =>{
 let words1= a.split(" ");
 let words2 = b.split(" ");
 let cnt=0;
 words1.forEach(function (item, index)
 {
   if(item == words2[index]){
    cnt++;
   }  
 }) 
 let error_words=(words1.length-cnt);
    return( cnt+ " correct out of " +words1.length+" words and the total number of error are "+error_words+ ".");
}
btn.addEventListener('click',function(){
    if(this.innerText == 'Start'){
       type.disabled= false;
       result.innerText = " ";
       type.value = "";
       playgame();
    }
    else if(this.innerText == 'Done'){
        type.disabled= true;
        btn.innerText = "Start";
        endplay();
    }
});
