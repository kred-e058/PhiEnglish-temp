let data = JSON.parse(localStorage.getItem('data'));
let currentURL = JSON.parse(localStorage.getItem('currentURL'))
let tagName = localStorage.getItem('nameTagClicked');
let wait_response =  0;

function setStory(){
    let list_mixStory = JSON.parse(localStorage.getItem("list_mixStory")) || [];
    for (let i = 0 ; i < list_mixStory.length; i++){
      add_story(list_mixStory[i]);
    }
}
setStory();
function createStory(){
  let stringdata = String(data[0]);
    if (wait_response === 0) {
      callAPI(stringdata);
      let button_send = document.querySelector(".create-btn");
      button_send.style.backgroundColor = "rgb(35, 35, 118)";
      button_send.style.cursor = 'wait';
    }
} 

function add_story(story){
  wait_response = 0;
  let ctn_story = document.querySelector('.ctn-storys');

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
  button_send.style.backgroundColor = "rgb(37, 37, 247)";
  button_send.style.cursor = 'pointer';
}

async function callAPI(stringdata){
  //list_mixStory 
  let list_mixStory = JSON.parse(localStorage.getItem("list_mixStory"));


  wait_response = 1;
  let genre = document.getElementById('genre').value;
  let emotional_level = document.getElementById('emotional_level').value;

  let content_mess = `
    Hãy viết một truyện chêm ngắn bằng tiếng Việt, khoảng 100 từ, chỉ sử dụng nội dung truyện và không mô tả gì thêm.
    Chủ đề: ${genre}
    Danh sách từ vựng cần chèn: ${stringdata}
    Yêu cầu: chèn tất cả từ vựng vào truyện, viết theo phong cách phù hợp với chủ đề, tùy biến theo mức độ cảm xúc: ${emotional_level}
    Sau truyện, tạo thêm 3 câu hỏi liên quan đến đoạn văn vừa viết.
    Chỉ gửi truyện và 3 câu hỏi, không thêm thông tin hay lời giải thích khác.
  `.trim();


  // mấy anh ơi đây chỉ là một cái free API AI lấy từ openrouter 
  const apikey = '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'
    // Preserve the assistant message with reasoning_details
    const messages = [
      {
        role: 'user',
        content: content_mess,
      }
    ];

    // Second API call - model continues reasoning from where it left off
    const response2 = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apikey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "model": "x-ai/grok-4.1-fast:free",
        "messages": messages  // Includes preserved reasoning_details
      })
    });
    let data = await response2.json();
    console.log(genre);
    await console.log(data);
    await list_mixStory.push(String(data.choices[0].message.content))
    await localStorage.setItem('list_mixStory', JSON.stringify(list_mixStory));
    await add_story(marked.parse(data.choices[0].message.content))
}


function goBack(){
  window.location = "../indexMn.html";
}

function title(){
  document.querySelector('.title').innerText = tagName;
}
title(); 



let list = JSON.parse(localStorage.getItem('list_mixStory'));
console.log(list)


function stripHTML(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
}