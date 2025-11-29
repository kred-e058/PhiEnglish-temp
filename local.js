
//  localStorage.getItem('nameTagClicked');
function set_root_local(){
    if (JSON.parse(localStorage.getItem("root")) === null){
        let root = new Object; 
        root.home = {
            data: {
                indexFile:0,
                indexFolder:0
            }
        };
        localStorage.setItem("root", JSON.stringify(root))
        console.log(root);
    }
    if (localStorage.getItem('currentURL') === null){
        localStorage.setItem('currentURL', '');
    }
    if (localStorage.getItem('nameTagClicked') === null){
        localStorage.setItem('nameTagClicked', '');
    }
    if (localStorage.getItem('id_ques') === null){
        localStorage.setItem('id_ques', "0")
    }
    if (localStorage.getItem('rdData') === null){
        localStorage.setItem('rdData', '');
    }
    if (localStorage.getItem('data') === null){
        localStorage.setItem('data', '');
    }
    if (localStorage.getItem('LA') === null){
        let LA = new Object
        LA = {
            MC: 0, 
            WaL: 0
        }
        console.log(LA);
        localStorage.setItem('LA', JSON.stringify(LA));
    }
    if (localStorage.getItem('listName') === null){
        let listName = new Object
        listName = {
            thisisdraftno3onecansetthisnameomgm2m1m194 : 1
        };
        localStorage.setItem('listName', JSON.stringify(listName));
    }
    if (localStorage.getItem('list_mixStory') === null){
        localStorage.setItem('list_mixStory', JSON.stringify([]));
    }
}
set_root_local();



function clearlocal(){
    let root = JSON.parse(localStorage.getItem("root"))
    localStorage.removeItem("root");
    window.localStorage.clear();
    window.location.reload();
    set_root_local();
}

function showRootLocal(){
    let root = JSON.parse(localStorage.getItem("root"));
    console.log(root);
}

function set_avaiable_vocabs(){

    const book = {
        ilearn10: {
            unit1: {
                lesson1: [
                    //english
                    [
                        "Charity",
                        "Craft",
                        "Donate",
                        "Goods",
                        "Provide",
                        "Raise",
                        "Support",
                        "Temporary",
                        "Volunteer"
                    ],
                    //vietnamese
                    [
                        "Từ thiện, tổ chức từ thiện",
                        "Hội chợ hàng thủ công",
                        "Tặng, cho, biếu, quyên góp",
                        "Hàng hóa",
                        "Cung cấp",
                        "Gây quỹ",
                        "Ủng hộ",
                        "Tạm thời",
                        "Tình nguyện"
                    ]
                ],
                lesson2: [
                    //english
                    [
                        "Aim",
                        "Awareness",
                        "Conservation",
                        "Educational",
                        "Homeless",
                        "Organize",
                        "Set up"
                    ],
                    //vietnamese
                    [
                        "Mục tiêu",
                        "Sự nhận thức",
                        "Sự giữ gìn, sự bảo tồn",
                        "Thuộc giáo dục",
                        "Vô gia cư",
                        "Tổ chức",
                        "Thành lập"
                    ]
                ],
                lesson3: [
                    //english
                    [
                        "Fundraising",
                        "Inspire",
                        "Marathon"
                    ],
                    //vietnamese
                    [
                        "Việc gây quỹ",
                        "Truyền cảm hứng",
                        "Chạy ma-ra-tông"
                    ]
                ],
                lesson123: [
                    //english
                    [
                        "Charity",
                        "Craft",
                        "Donate",
                        "Goods",
                        "Provide",
                        "Raise",
                        "Support",
                        "Temporary",
                        "Volunteer",
                        "Aim",
                        "Awareness",
                        "Conservation",
                        "Educational",
                        "Homeless",
                        "Organize",
                        "Set up",
                        "Fundraising",
                        "Inspire",
                        "Marathon"
                    ],
                    //vietnamese
                    [
                        "Từ thiện, tổ chức từ thiện",
                        "Hội chợ hàng thủ công",
                        "Tặng, cho, biếu, quyên góp",
                        "Hàng hóa",
                        "Cung cấp",
                        "Gây quỹ",
                        "Ủng hộ",
                        "Tạm thời",
                        "Tình nguyện",
                        "Mục tiêu",
                        "Sự nhận thức",
                        "Sự giữ gìn, sự bảo tồn",
                        "Thuộc giáo dục",
                        "Vô gia cư",
                        "Tổ chức",
                        "Thành lập",
                        "Việc gây quỹ",
                        "Truyền cảm hứng",
                        "Chạy ma-ra-tông"
                    ]
                ]
            }
        }   
    }
    localStorage.setItem('book', JSON.stringify(book));
}
set_avaiable_vocabs();

//SPM 
    // menu
    // MC 
    // finish
    // none
    // input
    // folder