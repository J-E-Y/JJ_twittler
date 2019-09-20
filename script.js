
//  1. 이름 날짜 댓글내용 출력하기 
// printTweet()함수는 댓글 목록을 기존데이터에서 가져와서 화면에 보여준다. 



function printTweet(){

    for(let i=0; i<5;i++){
        
        // <ul class = "list">  element 생성해서 comments 안에 넣는다. 

        let divCommnets = document.createElement("div")
            divCommnets.setAttribute("class", "comment")
            document.querySelector("#comments").appendChild(divCommnets)

        // <li class = "user-comment"> element 생성해서 ul 안에 얺는다

        let id = document.createElement("span");
            id.setAttribute("class","user-comment");
            id.innerText = randomUser[getRandomInt(0, randomUser.length)];
            document.querySelectorAll(".comment")[i].appendChild(id);

        // <li class = "time-comment"> element 생성해서 ul 안에 얺는다
        
        let time = document.createElement("span");
            time.setAttribute("class","time-comment");
            time.innerText = new Date().format();
            document.querySelectorAll(".comment")[i].appendChild(time);

        // <li class = "message-comment"> element 생성해서 ul 안에 얺는다

        let message = document.createElement("div");
            message.setAttribute("class", "message-comment");
            message.innerText = randomMessage[getRandomInt(0, randomMessage.length)];
            document.querySelectorAll(".comment")[i].appendChild(message);


    }  
}
printTweet();








// 2. refresh 버튼을 누르면 랜덤트윗 추가
// randomList() 함수는  추가할 내용을 가져온다
 


//output 변수를 만들어서 버튼을 눌렀을 때 내용들이 어디다 보여줄건지 지정한다. 
let comments = document.querySelector("#comments");  
function randomList() {
    let randomDateArr = []; // 빈배열을 만들어 push할 준비를 한다. 
    let generateObj = generateNewTweet(); // 기존에 data 를 변수에 담아서 쓴다. 


    // 만들었던 새로운 배열에 기존에 가져온 데이터를 push해서 넣는다. 

    randomDateArr.push("<div class='comment'>" 
          + "<span class ='user-comment'>"+ generateObj.user       +"</span>"
          +"<span class = 'time-comment'>" + generateObj.created_at +"</span>"
          +"<div class = 'message-comment'>" + generateObj.message    +"</div>" 
          +"</div>"    
    );
    // 어디다 보여줄것인지 지정한 곳에 innerHTML사용해서 글을 쓴다 배열을 대입하면 출력된다. 
    comments.innerHTML = randomDateArr + comments.innerHTML;
}

// randomTweet() 함수는  버튼을 누르면 추가할 내용을 출력한다


// 버튼의 ID 를 가져온다. 
let refreshButton = document.querySelector("#refresh-btn");

// randomTweet()함수는 
// 버튼을 누르면 기존에 만들어놓았던 randomList() 를 불러온다. 

function randomTweet(){
    refreshButton.onclick = function(){
        randomList();
    }
}
randomTweet();





// 3. 새로운글 화면에 출력하기
// addingTweet() 함수는 사용자가 입력한 새로운 댓글을 추가시킨다. 


function addingTweet(){

// 등록버튼을 불러온다
let addingBtn = document.querySelector("#adding-btn");
// 입력받은 이름을 불러온다. 
let addName = document.querySelector("#adding-name");
// 입력받은 메시지를 불러온다.
let addText = document.querySelector("#adding-text");

// 등록버튼이 눌렀을때 
addingBtn.onclick = function(){
 let makingTweet = []; //  새로운배열을 만들고 
 let generateObj = generateNewTweet(); // date 를 불러온것을 
 // push를 통해 집어넣는다.what?
 // 1.addName 에서 받은 값을 value 
 // 2.time
 // 3.addText 에서 받은 값을 value
    makingTweet.push(
            "<div class ='comment'>"
            + "<span class ='user-comment'>" + addName.value + "</span>" 
            + "<span class ='time-comment'>" + generateObj.created_at + "</span>"
            + "<div class ='message-comment'>" + addText.value + "</div>" 
            + "</div>");

    // 집어넣을 장소 output 안에 입력받은 1,2,3 (makingTweet 배열을 ) 대입한다.  
    comments.innerHTML = makingTweet + comments.innerHTML;

    }
}

addingTweet();



// 4. user 이름 눌렀을때 flitering 하기

let fliterName = function(event) {
    if(event.target.className === 'user-comment') {
        for(var i=0; i< comments.children.length; i++) {
            if(event.target.innerHTML !== comments.children[i].children[0].innerHTML) {
                comments.children[i].style.display = 'none';
            } else {
                comments.children[i].style.display = 'block';
                refreshButton.innerHTML = 'Return & Clear';
                refreshButton.onclick = function() {

                // 이전에 내용들 출력하기 
                    refreshButton.innerHTML = 'New Tweet';
                    printTweet();
                    randomTweet();

                }
            }
        }
    }
}

comments.addEventListener('click', fliterName);












