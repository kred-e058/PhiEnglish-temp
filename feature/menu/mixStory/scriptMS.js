let data = JSON.parse(localStorage.getItem('data'));
let currentURL = JSON.parse(localStorage.getItem('currentURL'))
let tagName = localStorage.getItem('nameTagClicked');
let wait_response =  0;
let root = JSON.parse(localStorage.getItem('root'))
let path = get_current_urlObject(root);

function setStory(){
    let list_mixStory = path[tagName].storys || [];
    for (let i = 0 ; i < list_mixStory.length; i++){
      add_story(list_mixStory[i]);
    }
    console.log(list_mixStory)
}
setStory();
function createStory(){
  let stringdata = String(data[0]);
    if (wait_response === 0) {
      // callAPI(stringdata);
      callAPI2(stringdata);
      let button_send = document.querySelector(".create-btn");
      button_send.style.background = "linear-gradient(135deg, #354669ff, #018dffff)"
      button_send.style.color = "#c4bedec4";
      button_send.style.cursor = 'wait';
    }
} 

function add_story(story){
  wait_response = 0;
  let ctn_story = document.querySelector('.ctn-storys');
  story = stripHTML(story);
  //ctn-story
  let story_box = document.createElement('div');
  story_box.classList.add('story-box')
  ctn_story.appendChild(story_box)

  //button-show-story 
  let btn_show_story = document.createElement('button');
  btn_show_story.textContent = "Story 1: " + story.slice(0, 25) + " ...";

  //box-story
  let text_vanban = document.createElement('span');
  btn_show_story.onclick = () => {
    if (text_vanban.innerHTML.length >= 10){
      text_vanban.innerHTML = '';
    }
    else {
      text_vanban.innerHTML = story;    
    }
  }
  story_box.appendChild(btn_show_story);
  story_box.appendChild(text_vanban);

  //make create-button be normal
  let button_send = document.querySelector(".create-btn")
  button_send.style.background="linear-gradient(135deg, #5b43ff, #8b5cf6)"
  button_send.style.cursor = 'pointer';
  button_send.style.color = 'white';

}


function store_story(story){
    path[tagName].storys.push(story);
    console.log(root);
    localStorage.setItem('root', JSON.stringify(root));
}

function goBack(){
  window.location = "../indexMn.html";
}

function title(){
  document.querySelector('.title').innerText = tagName;
}
title(); 


function stripHTML(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
}

function get_current_urlObject(root){
    let list_url = currentURL.urlsBar;
    let path = root;

    for (let i = 0; i < list_url.length; i++){
        path = path[list_url[i]].data;
    }
    return path;
}

async function callAPI2(stringdata){
  try {
      let number_vocabs = document.querySelector('#emotional_level').value;
      let content_mess = `
      Yêu cầu: chọn ra 5 từ vựng trong danh sách hãy viết 2-3 câu bằng tiếng Việt chêm từ vựng tiếng Anh đó(truyện chêm/mixstory).
      Danh sách từ vựng cần chèn: ${stringdata}
      Số lượng từ vựng cần chèn: ${number_vocabs}
      Yêu cầu quan trọng:
      - Không đưa ra chú thích gì thêm. 
      `.trim();
      wait_response = 1;
      let response = await fetch("https://backend-api-trolyaodoan.onrender.com/chat",
        {
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              message: content_mess
            })

        }) 

      let text = await response.json(); 
       console.log(text);
      let content = await text?.choices[0]?.message?.content
      await add_story(marked.parse(content))
      await store_story(content);
  } catch (error) {
      console.log(error)
        wait_response = 0;
        let button_send = document.querySelector(".create-btn")
        button_send.style.backgroundColor = "rgb(37, 37, 247)";
        button_send.style.cursor = 'pointer';
        alert('Có lỗi xảy ra!')
  }

}