// 回到顶部功能实现
var to_Top = document.getElementsByClassName('top-arrow')[0]
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        // 当页面滚动超过300像素时，显示回到顶部按钮
        to_Top.style.display = 'block';
    } else {
        // 否则隐藏回到顶部按钮
        to_Top.style.display = 'none';
    }
});
to_Top.addEventListener('click',function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
// 作战咨询切换栏功能
var news_cates = document.getElementsByClassName('news-cate')
var news_lists = document.getElementsByClassName('news-list')
for (let i = 0; i < news_cates.length; i++) {
    news_cates[i].addEventListener('click', function () {
        changeTab(i)
    })
}
// 导航栏状态切换函数
function changeTab(index) {
    for (let i = 0; i < news_cates.length; i++) {
        if (index == i) {
            news_cates[i].classList.add('active')
            news_lists[i].style.display = 'block'
        }
        else {
            news_cates[i].classList.remove('active')
            news_lists[i].style.display = 'none'
        }
    }
    counts = 0
}
// 查看更多函数实现
var moreBtn = document.getElementsByClassName('more-btn')[0]
var counts = 0
moreBtn.onclick = function(){
    counts++
    if(counts > 4){
        counts--
    }
    else{
        news_lists[counts].style.display = 'block'
    }
}
