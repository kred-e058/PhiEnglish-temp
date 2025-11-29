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

  wait_response = 1;
  let genre = document.getElementById('genre').value;
  let emotional_level = document.getElementById('emotional_level').value;

  let content_mess = `
  Yêu cầu: với mỗi từ vựng hãy viết một câu (5-20 từ) bằng tiếng Việt chêm từ vựng tiếng Anh đó.

  Chủ đề: ${genre}
  Danh sách từ vựng cần chèn: ${stringdata}

  Yêu cầu quan trọng:
  - Ví dụ đời sống đơn giản, sử dụng những từ dễ hiểu để miêu tả từ vựng.
  - Không đưa ra chú thích gì thêm. 
  - mỗi câu dài 5-20 từ
  - Không cần ảnh minh họa
  - Có chèn vào từ vựng trong danh sách vào mỗi câu;
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
    try {
        const response2 = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apikey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "model": "openai/gpt-oss-20b:free",
             max_tokens: 800,
            "messages": messages  // Includes preserved reasoning_details
          })
        });
        let data = await response2.json();
        console.log(genre);
        await console.log(data);
        await add_story(marked.parse(data.choices[0].message.content))
        await store_story(data.choices[0].message.content);
    } catch (error) {
        console.log(error)
        wait_response = 0;
        let button_send = document.querySelector(".create-btn")
        button_send.style.backgroundColor = "rgb(37, 37, 247)";
        button_send.style.cursor = 'pointer';
        alert('Có lỗi xảy ra!')
    }
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
      let content_mess = `
      Yêu cầu: chọn ra 5 từ vựng trong danh sách hãy viết 2-3 câu bằng tiếng Việt chêm từ vựng tiếng Anh đó(truyện chêm/mixstory).
      theo Chủ đề: ${genre}
      Danh sách từ vựng cần chèn: ${stringdata}
      Yêu cầu quan trọng:
      - Không đưa ra chú thích gì thêm. 
      `.trim();
      wait_response = 1;
      let response = await fetch("http://127.0.0.1:3000/chat",
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
      await add_story(marked.parse(text.choices[0].message.content))
      await store_story(text.choices[0].message.content);
  } catch (error) {
      console.log(error)
        wait_response = 0;
        let button_send = document.querySelector(".create-btn")
        button_send.style.backgroundColor = "rgb(37, 37, 247)";
        button_send.style.cursor = 'pointer';
        alert('Có lỗi xảy ra!')
  }

}