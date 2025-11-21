let SPM = localStorage.getItem('SPM');
let fromPage = (SPM === 'menu')?'menu': 'input';
let path_main = path;
function onclickSetting(bigest_ctn, pre_path){
    let ctn = document.querySelector(bigest_ctn)
    let popup_ctn = document.querySelector('.popup-ctn');
    popup_ctn.style.display = 'flex';
    if (pre_path) path_main = pre_path;
}

function setpopup(){
    let popup_ctn = document.querySelector('.popup-ctn');
    //close popup 
    let close_btn = document.createElement('img');
    close_btn.src = '../../goback_but.png';
    close_btn.classList.add('close-popup');
    close_btn.onclick = () => {
        popup_ctn.innerHTML = '';
        setpopup();
        document.querySelector('.popup-ctn').style.display = 'none';
    }
    popup_ctn.appendChild(close_btn);

    //popup container button 
    let ctn_btns = document.createElement('div');
    ctn_btns.classList.add('popup-ctn-button');
    popup_ctn.appendChild(ctn_btns);

    //rename 
    let btn_rename = document.createElement('button');
    btn_rename.classList.add('pu-rename');
    btn_rename.innerText = 'Đổi tên';
    if (path !== path_main) btn_rename.innerText = 'Đổi tên folder hiện tại'
    btn_rename.onclick = (e) =>{
        rename(e.target);
    }
    ctn_btns.appendChild(btn_rename);

    //Edit feature
    if (fromPage === 'menu'){
        ctn_btns.appendChild(document.createElement('br'));
        let btn_edit = document.createElement('button');
        btn_edit.innerText = 'Chỉnh sửa danh sách từ vựng';
        btn_edit.classList.add('pu-rename');
        btn_edit.classList.add('pu-edit');
        btn_edit.onclick = () => {
            window.location = "../input/indexIP.html";
        }
        ctn_btns.appendChild(btn_edit);
    }

    //Remove tag
    ctn_btns.appendChild(document.createElement('br'))
    let remove_tag = document.createElement('button');
    remove_tag.classList.add("rm-tag");
    remove_tag.innerText = 'Xóa thẻ học';
    remove_tag.onclick = () =>{
        set_popup_rm();
    }
    ctn_btns.appendChild(remove_tag);

}
setpopup();

function rename(e){
    e.style.display = 'none';
    let nametitle = localStorage.getItem('nameTagClicked');
    let container = document.querySelector('.popup-ctn-button')
    
    //Warninga
    let popup_ctn = document.querySelector('.popup-ctn-button');
    let warning = document.createElement('span');
    warning.innerText = "Tên đã bị trùng! Xin hãy nhập tên khác"
    warning.classList.add('warning');
    warning.classList.add('hide');
    popup_ctn.prepend(warning);

    //textarea 
    let textarea = document.createElement('textarea');
    textarea.classList.add('input-rename');
    textarea.value = nametitle;

    //button submit 
    let btn_submit = document.createElement('button');
    btn_submit.innerText = "Lưu";
    btn_submit.classList.add('btn_save_nnam');
    btn_submit.onclick = () =>{
        submitRename()
    }
    container.prepend(btn_submit);
    container.prepend(document.createElement('br'))
    container.prepend(textarea)
}
function submitRename(){
    tagName = localStorage.getItem('nameTagClicked');
    let new_name = document.querySelector('.input-rename').value.trim();
    let old_name = tagName.trim();
    
    let entriesPath = Object.entries(path_main);
    for (let e of entriesPath){
        if (e[0] === new_name) {
            let warning = document.querySelector('.warning');
            warning.classList.remove('hide');
            console.log("warning animation")
            return 0;
        }
    }
    entriesPath.forEach( e =>{  
            e[0] = e[0]===old_name?new_name : e[0]; 
            e[1].name = e[0];
        })
    for (let e in path_main){
        delete path_main[e];
    }
    path_main = Object.assign(path_main, Object.fromEntries(entriesPath));
    localStorage.setItem("root", JSON.stringify(root));
    tagName = localStorage.setItem('nameTagClicked', new_name);
    window.location.reload();
    
}

function set_popup_rm(){
    let ctn_btns = document.querySelector('.popup-ctn-button')
    // Ask user to ensure remove this tag 
    let isRemove = document.createElement('div');
    isRemove.classList.add('ctn-rm-tag');

    // notification
    let note = document.createElement('p');
    note.textContent = "Bạn muốn xóa vĩnh viễn thẻ học này?";
    note.classList.add('notif-rm');
    isRemove.appendChild(note);
    // alternative button
    //Deny
    const deny_btn = document.createElement('button');
    deny_btn.textContent = "Hủy";
    deny_btn.classList.add('deny-btn')
    deny_btn.onclick = () => {
        isRemove.remove();
    }
    isRemove.appendChild(deny_btn);
    //agree
    const agree_btn = document.createElement('button');
    agree_btn.textContent = "Đồng ý";
    agree_btn.classList.add('agree-btn');
    agree_btn.onclick = () => {
        delete path[tagName];
        localStorage.setItem('root', JSON.stringify(root))
        window.location = '../../index.html'
    }
    isRemove.appendChild(agree_btn);
    ctn_btns.appendChild(isRemove);
}

