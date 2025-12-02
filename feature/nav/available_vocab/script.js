let root = JSON.parse(localStorage.getItem('root'));

function click_block(){
    let path = root.home.data;
    
    const book = JSON.parse(localStorage.getItem('book'));
    const book_ilearn10 = book.ilearn10;
    path["SGK tiếng Anh ilearn 10"] = {
        data: {},
        name: "SGK tiếng Anh ilearn 10",
        type: "folder"
    };
    for (let i = 0 ; i < 10; i ++){
        let name_child_folder = "Unit " + String(i+1);
        let unit = "unit" + String(i+1);
        console.log(unit)
        unit = book_ilearn10[unit]?book_ilearn10[unit]:undefined;
        if (unit) {
            path["SGK tiếng Anh ilearn 10"].data[name_child_folder] = {
                type: 'folder',
                name: name_child_folder,
                data:{ 
                    "Lesson 1": {
                        type: 'file',
                        name: "Lesson 1",
                        data: [unit.lesson1[0], unit.lesson1[1]]
                    },
                    "Lesson 2": {
                        type: 'file',
                        name: "Lesson 2",
                        data: [unit.lesson2[0], unit.lesson2[1]]
                    },
                    "Lesson 3": {
                        type: 'file',
                        name: "Lesson 3",
                        data: [unit.lesson3[0], unit.lesson3[1]]
                    },
                    "Lesson 1+2+3": {
                        type: 'file',
                        name: "Lesson 1+2+3",
                        data: [unit.lesson123[0], unit.lesson123[1]]
                    },

                    indexFile: 4,
                    indexFolder:0
                }
            }
        }
        console.log(unit)
    }
    localStorage.setItem("root", JSON.stringify(root));
    console.log(root);
    window.location = '../../../index.html'
} 

