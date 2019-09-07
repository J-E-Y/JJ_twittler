

//  1. 이름 날짜 댓글내용 출력하기 

function printTweet(){

    for(let i=0; i<5;i++){
        
        // <ul class = "list">  element 생성해서 comments 안에 넣는다. 

        let div = document.createElement("div")
        div.setAttribute("class", "comment")
        document.querySelector("#comments").appendChild(div)

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

        let message = document.createElement("span");
        message.setAttribute("class", "message-comment");
        message.innerText = randomMessage[getRandomInt(0, randomMessage.length)];
        document.querySelectorAll(".comment")[i].appendChild(message);


    }  
}
printTweet();


// refresh 버튼을 누르면 새로고침  