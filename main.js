/**
 * Đầu tiên thi cứ lập document để lấy element ra và gán vào các biến. 
 * Sau đó ta dùng forEach lặp qua từng tab ở trong tabs để lấy dữ liệu rồi dùng onclick, 
 * khi click vào 1 tab nào đó thì tab đó sẽ nhận được class active đồng nghĩa với việc là hiển thị lên màn hình. 
 * Nếu đã có active thì tự động loại bỏ active đó.
 */
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");

// gán cho nó class css để ta css js
const line = $(".tabs .line");

// SonDN fixed - Active size wrong size on first load.
// Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340

// css js: Xét đường line cho mỗi thằng: xét thằng bên trái và chiều ngang (điều kiện là left và width bên css phải = 0 nha)
requestIdleCallback(function () {
  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";
});

tabs.forEach((tab, index) => {
    // gán cho nó index để ta sử dụng khi onclick để lấy được nó
    const pane = panes[index];

    tab.onclick = function () {
        // trước khi thêm vào ta sẽ xóa đi class active đã có sẵn
        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");

        // đưa 2 dòng vào đây để khi ta onclick nó sẽ trượt sang khi ta onclick
        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        // thêm class active vào từng class
        this.classList.add("active");
        pane.classList.add("active");
    };
});
