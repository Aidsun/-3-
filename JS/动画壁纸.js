// swiper轮播图功能
// 获取元素
var swiper_wrapper = document.querySelector('.swiper-wrapper')
var swiper_slide = document.querySelectorAll('.swiper-slide')
var swiper_action = document.querySelectorAll('.swiper-action')
// 设置定时器和当前页
var time = null
var dotIndex = 0
// 跳过第一张图片

// 封装切换函数
function changeSwiper() {
    dotIndex++
    upActios(dotIndex)
    swiper_wrapper.style.transform = `translateX(${- dotIndex * swiper_slide[0].offsetWidth}px)`
    swiper_wrapper.style.transition = `transform .3s ease-in-out `
    // 判断索引是否超出范围
    if (dotIndex >= swiper_slide.length - 1) {
        dotIndex = 0
        upActios(dotIndex)
        setTimeout(() => {
            swiper_wrapper.style.transform = `translate(0,0)`
            swiper_wrapper.style.transition = `none`
        }, 300)
    }
}
time = setInterval(changeSwiper, 5000)
// 轮播节点更新事件
function upActios(dotIndex) {
    for (let i = 0; i < swiper_action.length; i++) {
        if (i == dotIndex) {
            swiper_action[i].classList.add('active')
        }
        else {
            swiper_action[i].classList.remove('active')
        }
    }
}
// 轮播节点击事件
for (let i = 0; i < swiper_action.length; i++) {
    swiper_action[i].addEventListener('click', function () {
        clearInterval(time)
        dotIndex = i - 1
        changeSwiper()
        time = setInterval(changeSwiper, 5000)
    })
}

// 点击图片放大事件
var btnImages = document.querySelectorAll('.paper-item .paper-line')
var showBox = document.querySelector('.jumpImageBox')
var showImage = document.querySelector('.jumpImageBox img')
var jumpClose = document.querySelector('.jumpImageBox .jumpClose')
for (let i = 0; i < btnImages.length; i++) {
    btnImages[i].addEventListener('click',function(){
        let src = `../Images/wallpapers/${i+1}.png`
        showImage.setAttribute('src',src)
        showBox.style.display = 'block'
    })
}
jumpClose.addEventListener('click',function(){
    showBox.style.display = 'none'
})

// 分页器点击跳转实现
var paper_list = document.querySelectorAll('.paper-list')
var intoList = document.querySelectorAll('.paper-pagination li')
// 设置记录当前页面flg
var pageFlg = 0
// 封装跳转函数
function intoPage(index){
    for(let i =0 ;i<paper_list.length;i++){
        if(i == index){
            paper_list[i].classList.add('active')
        }
        else{
            paper_list[i].classList.remove('active')
        }
    }
}
// 遍历分页器的每个按钮
for(let i = 0;i<intoList.length;i++){
    // 遍历增添监听事件
    intoList[i].addEventListener('click',function(){
        // 判断上一页按钮
        if(i == 0){
            pageFlg--
            if(pageFlg <= 0){
                intoPage(0)
                pageFlg = 0
            }
            intoPage(pageFlg)
        }
        // 判断下一页按钮
        else if( i == intoList.length - 1){
            pageFlg++
            if(pageFlg >= paper_list.length -1){
                intoPage(paper_list.length -1)
                pageFlg = paper_list.length -1
            }
            intoPage(pageFlg)
        }
        // 判断数字页面按钮
        else{
            pageFlg = i -1
            intoPage(pageFlg)
       
        }
    })
}