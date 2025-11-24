let root = JSON.parse(localStorage.getItem('root'));

function click_block(){
    let data = root.home.data;
    data["SGK tiếng Anh ilearn 10"] = {
        data : [
            ["chore", "clean", "dust", "put away", "sweep", "tidy"],
            ["Việc nhà", "lau chùi", "phủi bụi", "cất đi, dọn đi", "quét", "dọn dẹp"]
        ], 
        type:'file',
        name: "GK tiếng Anh ilearn 10"
    }
    localStorage.setItem('root', JSON.stringify(root));
    window.location = '../../../index.html';
}

