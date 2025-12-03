
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
            unit1:{
                lesson1: [
                    //english
                    [
                        "Chore (n)",
                        "Clean (v)",
                        "Dust (v)",
                        "Mop (v)",
                        "Put Away (v)",
                        "Sweep (v)",
                        "Tidy (v)",
                        "Vacuum (v)",
                        "Wash (v)"
                    ],
                    //vietnamese
                    [
                        "Việc nhà",
                        "Sạch sẽ, lau dọn", 
                        "Phủi bụi",
                        "Lau",
                        "Cất đi, dọn đi",
                        "Quét nhà",
                        "Dọn phòng",
                        "Hút bụi",
                        "Rửa"
                    ]
                ],
                lesson2: [
                    //english
                    [
                        "Easygoing (adj)",
                        "Helpful (adj)",
                        "Intelligent (adj)",
                        "Kind (adj)",
                        "Lazy (adj)",
                        "Personality (n)",
                        "Selfish (adj)",
                        "Suburb (n)",
                        "Unreliable (adj)",
                        "Untidy (adj)"
                    ],
                    //vietnamese
                    [
                        "Dễ tính",
                        "Có ích",
                        "Thông minh",
                        "Tốt bụng",
                        "Lười biếng",
                        "Nhân cách",
                        "Ích kỷ",
                        "Ngoại ô",
                        "Không đáng tin cậy",
                        "Không gọn gàng"
                    ]
                ],
                lesson3: [
                    //english
                    [
                        "Exclamation Point (n)",
                        "Punctuation (n)"
                    ],
                    //vietnamese
                    [
                        "Dấu chấm than",
                        "Dấu chấm câu"
                    ]
                ],
                lesson123: [
                    //english
                    [
                        "Chore (n)",
                        "Clean (v)",
                        "Dust (v)",
                        "Mop (v)",
                        "Put Away (v)",
                        "Sweep (v)",
                        "Tidy (v)",
                        "Vacuum (v)",
                        "Wash (v)",
                        "Easygoing (adj)",
                        "Helpful (adj)",
                        "Intelligent (adj)",
                        "Kind (adj)",
                        "Lazy (adj)",
                        "Personality (n)",
                        "Selfish (adj)",
                        "Suburb (n)",
                        "Unreliable (adj)",
                        "Untidy (adj)",
                        "Exclamation Point (n)",
                        "Punctuation (n)"
                    ],
                    //vietnamese
                    [
                        "Việc nhà",
                        "Sạch sẽ, lau dọn",
                        "Phủi bụi",
                        "Lau",
                        "Cất đi, dọn đi",
                        "Quét nhà",
                        "Dọn phòng",
                        "Hút bụi",
                        "Rửa",
                        "Dễ tính",
                        "Có ích",
                        "Thông minh",
                        "Tốt bụng",
                        "Lười biếng",
                        "Nhân cách",
                        "Ích kỷ",
                        "Ngoại ô",
                        "Không đáng tin cậy",
                        "Không gọn gàng",
                        "Dấu chấm than",
                        "Dấu chấm câu"
                    ]
                ]
            },
            unit2:{
                lesson1: [
                    //english
                    [
                        "Aerobics (n)",
                        "Bike (v)",
                        "Canoeing (v)",
                        "Clue (n)",
                        "Crossword Puzzle (n)",
                        "Hang Out (v)",
                        "Karaoke (v)",
                        "Karate (n)",
                        "Leisure (n)",
                        "Role-Playing Game (n)",
                        "Running (v)"
                    ],
                    //vietnamese
                    [
                        "Thể dục nhịp điệu",
                        "Lái xe đạp",
                        "Chèo xuồng",
                        "Manh mối",
                        "Trò chơi ô chữ",
                        "Ra ngoài",
                        "Hát karaoke",
                        "Võ Karate",
                        "Thời gian rảnh rỗi",
                        "Trò chơi nhập vai",
                        "Chạy bộ"
                    ]
                ],
                lesson2: [
                    //english
                    [
                        "Agree (v)",
                        "Arrange (v)",
                        "Decide (v)",
                        "Offer (v)",
                        "Promise (v)",
                        "Refuse (v)",
                        "Temple (n)"
                    ],
                    //vietnamese
                    [
                        "Đồng ý",
                        "Sắp xếp",
                        "Quyết định",
                        "Đề nghị",
                        "Hứa",
                        "Từ chối",
                        "Đền"
                    ]
                ],
                lesson3: [
                    //english
                    [
                        "Detect (v)",
                        "Ride (v)",
                        "Metal Detector (n)",
                        "Treasure (n)",
                    ],
                    //vietnamese
                    [
                        "Dò ra",
                        "Lái xe",
                        "Máy dò kim loại",
                        "Châu báu"
                    ]
                ],
                lesson123: [
                    //english
                    [
                        "Aerobics (n)",
                        "Bike (v)",
                        "Canoeing (v)",
                        "Clue (n)",
                        "Crossword Puzzle (n)",
                        "Hang Out (v)",
                        "Karaoke (v)",
                        "Karate (n)",
                        "Leisure (n)",
                        "Role-Playing Game (n)",
                        "Running (v)",
                        "Agree (v)",
                        "Arrange (v)",
                        "Decide (v)",
                        "Offer (v)",
                        "Promise (v)",
                        "Refuse (v)",
                        "Temple (n)",
                        "Detect (v)",
                        "Ride (v)",
                        "Metal Detector (n)",
                        "Treasure (n)"
                    ],
                    //vietnamese
                    [
                        "Thể dục nhịp điệu",
                        "Lái xe đạp",
                        "Chèo xuồng",
                        "Manh mối",
                        "Trò chơi ô chữ",
                        "Ra ngoài",
                        "Hát karaoke",
                        "Võ Karate",
                        "Thời gian rảnh rỗi",
                        "Trò chơi nhập vai",
                        "Chạy bộ",
                        "Đồng ý",
                        "Sắp xếp",
                        "Quyết định",
                        "Đề nghị",
                        "Hứa",
                        "Từ chối",
                        "Đền",
                        "Dò ra",
                        "Lái xe",
                        "Máy dò kim loại",
                        "Châu báu"
                    ]
                ]
            },
            unit3:{
                lesson1: [
                    //english
                    [
                        "Brand (n)",
                        "Budget (n)",
                        "Customer Service (n)",
                        "Habit (n)",
                        "On Sale (adj)",
                        "Pay Attention (v)",
                        "Quality (n)",
                        "Thrift Store (n)"
                    ],
                    //vietnamese
                    [
                        "Nhãn hiệu",
                        "Ngân sách",
                        "Bộ phận chăm sóc khách hàng",
                        "Thói quen",
                        "Đang giảm giá",
                        "Chú ý",
                        "Chất lượng",
                        "Cửa hàng đồ cũ"
                    ]
                ],
                lesson2: [
                    //english
                    [
                        "Approve (v)",
                        "Calculator (n)",
                        "Crash (v)",
                        "Disconnect (v)",
                        "Manager (n)",
                        "Overheat (v)",
                        "Receipt (n)",
                        "Repair (v)",
                        "Restart (v)",
                        "Warranty (n)"
                    ],
                    //vietnamese
                    [
                        "Phê duyệt",
                        "Máy tính",
                        "Gặp sự cố",
                        "Mất kết nối",
                        "Người quản lý",
                        "Quá nóng",
                        "Hóa đơn",
                        "Sửa chữa",
                        "Khởi động lại",
                        "Bảo hành"
                    ]
                ],
                lesson3: [
                    //english
                    [
                        "Shipper (n)",
                        "Hotline (n)"
                    ],
                    //vietnamese
                    [
                        "Nhân viên giao hàng",
                        "Đường dây nóng"
                    ]
                ],
                lesson123: [
                    //english
                    [
                        "Brand (n)",
                        "Budget (n)",
                        "Customer Service (n)",
                        "Habit (n)",
                        "On Sale (adj)",
                        "Pay Attention (v)",
                        "Quality (n)",
                        "Thrift Store (n)",
                        "Approve (v)",
                        "Calculator (n)", 
                        "Crash (v)",
                        "Disconnect (v)",
                        "Manager (n)",
                        "Overheat (v)",
                        "Receipt (n)",
                        "Repair (v)",
                        "Restart (v)",
                        "Warranty (n)",
                        "Shipper (n)",
                        "Hotline (n)",
                    ],
                    //vietnamese
                    [
                        "Nhãn hiệu",
                        "Ngân sách",
                        "Bộ phận chăm sóc khách hàng",
                        "Thói quen",
                        "Đang giảm giá",
                        "Chú ý",
                        "Chất lượng",
                        "Cửa hàng đồ cũ",
                        "Phê duyệt",
                        "Máy tính",
                        "Gặp sự cố",
                        "Mất kết nối",
                        "Người quản lý",
                        "Quá nóng",
                        "Hóa đơn",
                        "Sửa chữa",
                        "Khởi động lại",
                        "Bảo hành",
                        "Nhân viên giao hàng",
                        "Đường dây nóng"
                    ]
                ]
            },
            unit4: {
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
            },
            unit5:{
                lesson1: [
                    //english
                    [
                        "Allow (v)",
                        "Campaign (v)",
                        "Causative Verb (n)",
                        "Committee (n)",
                        "Election (n)",
                        "Equality (n)",
                        "Gender (n)",
                        "Property (n)",
                        "Right (n)",
                        "Vote (v)"
                    ],
                    //vietnamese
                    [
                        "Cho phép",
                        "Tham gia, tổ chức chiến dịch vận động",
                        "Động từ nguyên nhân, động từ khởi phát",
                        "Ủy ban",
                        "Sự bầu cử, cuộc bầu cử",
                        "Sự bình đẳng",
                        "Giới tính",
                        "Tài sản",
                        "Quyền",
                        "Bỏ phiếu, bầu cử"
                    ]
                ],
                lesson2: [
                    //english
                    [
                        "Delighted (adj)",
                        "Determined (adj)",
                        "Exhausted (adj)",
                        "Grateful (adj)",
                        "Passionate (adj)",
                        "Proud (adj)",
                        "Support (n)"
                    ],
                    //vietnamese
                    [
                        "Hài lòng, vui mừng",
                        "Cương quyết, quyết tâm",
                        "Kiệt sức",
                        "Biết ơn",
                        "Nồng nhiệt, say mê",
                        "Tự hào",
                        "Sự ủng hộ"
                    ]
                ],
                lesson3: [
                    //english
                    [
                        "Achievement (n)",
                        "Record (n)",
                        "Stuntwoman (n)"
                    ],
                    //vietnamese
                    [
                        "Thành tựu",
                        "Kỉ lục",
                        "Diễn viên nữ đóng thế"
                    ]
                ],
                lesson123: [
                    //english
                    [
                        "Allow (v)",
                        "Campaign (v)",
                        "Causative Verb (n)",
                        "Committee (n)",
                        "Election (n)",
                        "Equality (n)",
                        "Gender (n)",
                        "Property (n)",
                        "Right (n)",
                        "Vote (v)",
                        "Delighted (adj)",
                        "Determined (adj)",
                        "Exhausted (adj)",
                        "Grateful (adj)",
                        "Passionate (adj)",
                        "Proud (adj)",
                        "Support (n)",
                        "Achievement (n)",
                        "Record (n)",
                        "Stuntwoman (n)"
                    ],
                    //vietnamese
                    [
                        "Cho phép",
                        "Tham gia, tổ chức chiến dịch vận động",
                        "Động từ nguyên nhân, động từ khởi phát",
                        "Ủy ban",
                        "Sự bầu cử, cuộc bầu cử",
                        "Sự bình đẳng",
                        "Giới tính",
                        "Tài sản",
                        "Quyền",
                        "Bỏ phiếu, bầu cử",
                        "Hài lòng, vui mừng",
                        "Cương quyết, quyết tâm",
                        "Kiệt sức",
                        "Biết ơn",
                        "Nồng nhiệt, say mê",
                        "Tự hào",
                        "Sự ủng hộ",
                        "Thành tựu",
                        "Kỉ lục",
                        "Diễn viên nữ đóng thế"
                    ]
                ]
            },
            unit6:{
                lesson1: [
                    //english
                    [
                        "Advanced (adj)",
                        "Change (v)",
                        "Decrease (v)",
                        "Increase (v)",
                        "Move away (v)",
                        "Rebuild (v)",
                        "Develop (v)"
                    ],
                    //vietnamese
                    [
                        "Tân tiến",
                        "Thay đổi",
                        "Giảm đi",
                        "Tăng lên",
                        "Chuyển đi",
                        "Xây dựng lại",
                        "Phát triển"
                    ]
                ],
                lesson2: [
                    //english
                    [
                        "Agent (n)",
                        "Book (v)",
                        "Equipment (n)",
                        "Keep (v)",
                        "Locker (n)",
                        "Member (n)",
                        "Racket (n)",
                        "Registration (n)",
                        "Remind (v)",
                        "Rent (v)",
                        "Return (v)"
                    ],
                    //vietnamese
                    [
                        "Tác nhân",
                        "Đặt vé trước, đặt chỗ trước",
                        "Trang thiết bị",
                        "Giữ, giữ lại",
                        "Ngăn tủ cá nhân có khóa",
                        "Thành viên",
                        "Cái vợt",
                        "Sự đăng ký",
                        "Nhắc nhở",
                        "Cho thuê",
                        "Trả lại",
                    ]
                ],
                lesson3: [
                    //english
                    [
                        "Shelter (n)",
                        "Youth (n)",
                    ],
                    //vietnamese
                    [
                        "Nơi ẩn nấp",
                        "Thanh niên, tuổi trẻ"
                    ]
                ],
                lesson123: [
                    //english
                    [
                        "Advanced (adj)",
                        "Change (v)",
                        "Decrease (v)",
                        "Increase (v)",
                        "Move away (v)",
                        "Rebuild (v)",
                        "Develop (v)",
                        "Agent (n)",
                        "Book (v)",
                        "Equipment (n)",
                        "Keep (v)",
                        "Locker (n)",
                        "Member (n)",
                        "Racket (n)",
                        "Registration (n)",
                        "Remind (v)",
                        "Rent (v)",
                        "Return (v)",
                        "Shelter (n)",
                        "Youth (n)",
                    ],
                    //vietnamese
                    [
                         "Tân tiến",
                        "Thay đổi",
                        "Giảm đi",
                        "Tăng lên",
                        "Chuyển đi",
                        "Xây dựng lại",
                        "Phát triển",
                        "Tác nhân",
                        "Đặt vé trước, đặt chỗ trước",
                        "Trang thiết bị",
                        "Giữ, giữ lại",
                        "Ngăn tủ cá nhân có khóa",
                        "Thành viên",
                        "Cái vợt",
                        "Sự đăng ký",
                        "Nhắc nhở",
                        "Cho thuê",
                        "Trả lại",

                        "Nơi ẩn nấp",
                        "Thanh niên, tuổi trẻ",
                    ]
                ]
            },
            unit7:{
                lesson1: [
                    //english
                    [
                         "Ballpoint pen (n)",
                        "Band-aid (n)",
                        "Ink (n)",
                        "Measure (v)",
                        "Mercury (n)",
                        "Microscope (n)",
                        "Rocket (n)",
                        "Scale (n)",
                        "Telescope (n)",
                        "Thermometer (n)"
                    ],
                    //vietnamese
                    [
                        "Bút bi",
                        "Băng cá nhân",
                        "Mực viết",
                        "Đo lường",
                        "Thủy ngân",
                        "Kính hiển vi",
                        "Tên lửa",
                        "Hệ thống chia độ",
                        "Kính viễn vọng",
                        "Nhiệt kế",
                    ]
                ],
                lesson2: [
                    //english
                    [
                        "Attach (v)",
                        "Automatically (adv)",
                        "Cable (n)",
                        "Fashionable (adj)",
                        "Fasten (v)",
                        "Mode (n)",
                        "Portable (adj)",
                        "Private (adj)",
                        "Strap (v)"
                    ],
                    //vietnamese
                    [
                        "Gắn vào, dán vào",
                        "Một cách tự động",
                        "Dây cáp",
                        "Hợp thời trang",
                        "Buộc chặt, trói chặt",
                        "Cách thức",
                        "Có thể mang theo, xách tay",
                        "Riêng tư",
                        "Buộc bằng dây, đai"
                    ]
                ],
                lesson3: [
                    //english
                    [
                        "Globe (n)",
                        "Instantly (adv)",
                        "Lecture (n)",
                        "Login (n)",
                        "Network (n)",
                        "Software (n)",
                    ],
                    //vietnamese
                    [
                        "Thế giới, Trái Đất",
                        "Ngay lập tức",
                        "Bài giảng",
                        "Sự đăng nhập",
                        "Mạng lưới, mạng",
                        "Phần mềm",  
                    ]
                ],
                lesson123: [
                    //english
                    [
                        "Ballpoint pen (n)",
                        "Band-aid (n)",
                        "Ink (n)",
                        "Measure (v)",
                        "Mercury (n)",
                        "Microscope (n)",
                        "Rocket (n)",
                        "Scale (n)",
                        "Telescope (n)",
                        "Thermometer (n)",
                        "Attach (v)",
                        "Automatically (adv)",
                        "Cable (n)",
                        "Fashionable (adj)",
                        "Fasten (v)",
                        "Mode (n)",
                        "Portable (adj)",
                        "Private (adj)",
                        "Strap (v)",
                        "Globe (n)",
                        "Instantly (adv)",
                        "Lecture (n)",
                        "Login (n)",
                        "Network (n)",
                        "Software (n)",
                    ],
                    //vietnamese
                    [
                        "Bút bi",
                        "Băng cá nhân",
                        "Mực viết",
                        "Đo lường",
                        "Thủy ngân",
                        "Kính hiển vi",
                        "Tên lửa",
                        "Hệ thống chia độ",
                        "Kính viễn vọng",
                        "Nhiệt kế",

                        "Gắn vào, dán vào",
                        "Một cách tự động",
                        "Dây cáp",
                        "Hợp thời trang",
                        "Buộc chặt, trói chặt",
                        "Cách thức",
                        "Có thể mang theo, xách tay",
                        "Riêng tư",
                        "Buộc bằng dây, đai",

                        "Thế giới, Trái Đất",
                        "Ngay lập tức",
                        "Bài giảng",
                        "Sự đăng nhập",
                        "Mạng lưới, mạng",
                        "Phần mềm"
                    ]
                ]
            },
            unit8:{
                lesson1: [
                    //english
                    [
                        "Ban (v)",
                        "Damage (v)",
                        "Pollute (v)",
                        "Product (n)",
                        "Protect (v)",
                        "Recycle (v)",
                        "Reduce (v)",
                        "Reuse (v)"
                    ],
                    //vietnamese
                    [
                        "Cấm",
                        "Làm hại",
                        "Làm ô nhiễm",
                        "Sản phẩm",
                        "Bảo vệ",
                        "Tái chế",
                        "Giảm",
                        "Tái sử dụng"
                    ]
                ],
                lesson2: [
                    //english
                    [
                        "Compost (v)",
                        "Deforestation (n)",
                        "Greenhouse gas (n)",
                        "Impact (n)",
                        "Landfill (n)",
                        "Livestock (n)",
                        "Material (n)",
                        "Mixture (n)",
                        "Obvious (adj)",
                        "Packaging (n)",
                        "Solution (n)"
                    ],
                    //vietnamese
                    [
                        "Ủ phân",
                        "Sự phá rừng",
                        "Khí nhà kính",
                        "Sự ảnh hưởng",
                        "Bãi rác",
                        "Gia súc, gia cầm",
                        "Nguyên vật liệu",
                        "Hỗn hợp",
                        "Rõ ràng",
                        "Bao bì",
                        "Giải pháp"
                    ]
                ],
                lesson3: [
                    //english
                    [
                        "Cattle (n)",
                        "Deadly (adj)",
                        "Global (adj)",
                        "Release (v)",
                        "Single-use (adj)"
                    ],
                    //vietnamese
                    [
                        "Gia súc",
                        "Chết người",
                        "Toàn cầu",
                        "Thả, phóng thích",
                        "Sử dụng một lần"
                    ]
                ],
                lesson123: [
                    //english
                    [
                        "Ban (v)",
                        "Damage (v)",
                        "Pollute (v)",
                        "Product (n)",
                        "Protect (v)",
                        "Recycle (v)",
                        "Reduce (v)",
                        "Reuse (v)",
                        "Compost (v)",
                        "Deforestation (n)",
                        "Greenhouse gas (n)",
                        "Impact (n)",
                        "Landfill (n)",
                        "Livestock (n)",
                        "Material (n)",
                        "Mixture (n)",
                        "Obvious (adj)",
                        "Packaging (n)",
                        "Solution (n)",

                        "Cattle (n)",
                        "Deadly (adj)",
                        "Global (adj)",
                        "Release (v)",
                        "Single-use (adj)",
                    ],
                    //vietnamese
                    [
                        "Cấm",
                        "Làm hại",
                        "Làm ô nhiễm",
                        "Sản phẩm",
                        "Bảo vệ",
                        "Tái chế",
                        "Giảm",
                        "Tái sử dụng",
                        "Ủ phân",
                        "Sự phá rừng",
                        "Khí nhà kính",
                        "Sự ảnh hưởng",
                        "Bãi rác",
                        "Gia súc, gia cầm",
                        "Nguyên vật liệu",
                        "Hỗn hợp",
                        "Rõ ràng",
                        "Bao bì",
                        "Giải pháp",

                        "Gia súc",
                        "Chết người",
                        "Toàn cầu",
                        "Thả, phóng thích",
                        "Sử dụng một lần"
                    ]
                ]
            },
            unit9:{
                lesson1: [
                    //english
                    [
                        "Castle (n)",
                        "Heritage (n)",
                        "National park (n)",
                        "Sightseeing (n)",
                        "Snorkeling (n)",
                        "Tower (n)",
                        "View (n)",
                        "World Heritage Site (n)"
                    ],
                    //vietnamese
                    [
                        "Lâu đài",
                        "Di sản",
                        "Vườn quốc gia",
                        "Việc tham quan",
                        "Việc lặn với ống thở",
                        "Tòa tháp",
                        "Tầm nhìn, quang cảnh",
                        "Di sản thế giới"
                    ]
                ],
                lesson2: [
                    //english
                    [
                        "Break down (v)",
                        "Delay (v)",
                        "Dolphin (n)",
                        "Fire alarm (n)",
                        "Food poisoning (n)",
                        "Safari (n)",
                        "Steal (v)"
                    ],
                    //vietnamese
                    [
                        "Bị hư, bị hỏng",
                        "Làm chậm trễ, hoãn",
                        "Cá heo",
                        "Chuông báo cháy",
                        "Ngộ độc thực phẩm",
                        "Cuộc đi săn hoặc quan sát thú",
                        "Ăn cắp, ăn trộm"
                    ]
                ],
                lesson3: [
                    //english
                    [
                        "Bungalow (n)",
                        "Resort (n)"
                    ],
                    //vietnamese
                    [
                        "Nhà một tầng",
                        "Khu nghỉ dưỡng"
                    ]
                ],
                lesson123: [
                    //english
                    [
                        "Castle (n)",
                        "Heritage (n)",
                        "National park (n)",
                        "Sightseeing (n)",
                        "Snorkeling (n)",
                        "Tower (n)",
                        "View (n)",
                        "World Heritage Site (n)",

                        "Break down (v)",
                        "Delay (v)",
                        "Dolphin (n)",
                        "Fire alarm (n)",
                        "Food poisoning (n)",
                        "Safari (n)",
                        "Steal (v)",

                        "Bungalow (n)",
                        "Resort (n)"
                    ],
                    //vietnamese
                    [
                        "Lâu đài",
                        "Di sản",
                        "Vườn quốc gia",
                        "Việc tham quan",
                        "Việc lặn với ống thở",
                        "Tòa tháp",
                        "Tầm nhìn, quang cảnh",
                        "Di sản thế giới",

                        "Bị hư, bị hỏng",
                        "Làm chậm trễ, hoãn",
                        "Cá heo",
                        "Chuông báo cháy",
                        "Ngộ độc thực phẩm",
                        "Cuộc đi săn hoặc quan sát thú",
                        "Ăn cắp, ăn trộm",

                        "Nhà một tầng",
                        "Khu nghỉ dưỡng"
                    ]
                ]
            },
            unit10:{
                lesson1: [
                    //english
                    [
                        "Actual (adj)",
                        "App (n)",
                        "Artificial intelligence (n)",
                        "E-learning (n)",
                        "Interactive whiteboard (n)",
                        "Prediction (n)",
                        "Reasonable (adj)",
                        "Robot (n)",
                        "Virtual classroom (n)"
                    ],
                    //vietnamese
                    [
                        "Thực sự",
                        "Ứng dụng",
                        "Trí tuệ nhân tạo",
                        "Việc học trực tuyến",
                        "Bảng tương tác thông minh",
                        "Sự dự đoán",
                        "Hợp lý",
                        "Rô-bốt",
                        "Lớp học ảo"
                    ]
                ],
                lesson2: [
                    //english
                    [
                        "Communication (n)",
                        "Complex (adj)",
                        "Creativity (n)",
                        "Flexible (adj)",
                        "Interactive (adj)",
                        "Problem-solving (n)",
                        "Teamwork (n)"
                    ],
                    //vietnamese
                    [
                        "Sự giao tiếp",
                        "Phức tạp",
                        "Tính sáng tạo",
                        "Linh hoạt",
                        "Mang tính tương tác",
                        "Giải quyết vấn đề",
                        "Làm việc nhóm"
                    ]
                ],
                lesson3: [
                    //english
                    [
                        "Account (n)",
                        "Fluent (adj)"
                    ],
                    //vietnamese
                    [
                        "Tài khoản",
                        "Lưu loát"
                    ]
                ],
                lesson123: [
                    //english
                    [
                        "Actual (adj)",
                        "App (n)",
                        "Artificial intelligence (n)",
                        "E-learning (n)",
                        "Interactive whiteboard (n)",
                        "Prediction (n)",
                        "Reasonable (adj)",
                        "Robot (n)",
                        "Virtual classroom (n)",

                        "Communication (n)",
                        "Complex (adj)",
                        "Creativity (n)",
                        "Flexible (adj)",
                        "Interactive (adj)",
                        "Problem-solving (n)",
                        "Teamwork (n)",

                        "Account (n)",
                        "Fluent (adj)"
                    ],
                    //vietnamese
                    [
                        "Thực sự",
                        "Ứng dụng",
                        "Trí tuệ nhân tạo",
                        "Việc học trực tuyến",
                        "Bảng tương tác thông minh",
                        "Sự dự đoán",
                        "Hợp lý",
                        "Rô-bốt",
                        "Lớp học ảo",

                        "Sự giao tiếp",
                        "Phức tạp",
                        "Tính sáng tạo",
                        "Linh hoạt",
                        "Mang tính tương tác",
                        "Giải quyết vấn đề",
                        "Làm việc nhóm",

                        "Tài khoản",
                        "Lưu loát"
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