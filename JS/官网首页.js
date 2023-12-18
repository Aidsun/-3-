//点击缩小视频弹出PV和适龄提示框
let pv_video_btn = document.getElementsByClassName('pv-video-btn')[0]
let v__modal_overlay = document.getElementsByClassName('v--modal-overlay')[0];
let video = document.querySelector('.v--modal-overlay .v--modal-background-click .video-modal-content video')
let video_close = document.getElementsByClassName('video-close')[0]
let ageTipsBtn = document.getElementsByClassName('age-info-content')[0]
let ageTips = document.getElementsByClassName('ageTips')[0]
pv_video_btn.onclick = function () {
	v__modal_overlay.style.display = 'block'
	ageTips.style.display = "none"
	video.style.display = 'block'
	video.play()
}
ageTipsBtn.onclick = function(){
	v__modal_overlay.style.display = 'block'
	video.style.display = "none"
	ageTips.style.display ='block'
}
video_close.onclick = () => {
	v__modal_overlay.style.display = 'none'
	video.pause()
	video.currentTime = 0
}

// News轮播图部分
// 获取元素
let swiper_items = document.querySelectorAll('#swiper-container .swiper-wrapper .swipwe-item');
let swiper_wrapper = document.querySelector('#swiper-container .swiper-wrapper');
let swiper_dots = document.querySelectorAll('#swiper-container .swiper-dots .swiper-dot')

// 设置初始值
let time = null;
let _index = 0;
// 封装向右运动
function _next() {
	_index++;
	swiper_wrapper.style.transform = `translateX(${- _index * swiper_items[0].offsetWidth}px)`;
	swiper_wrapper.style.transition = '.5s';
	Addots(_index)
	if (_index >= swiper_items.length - 1) {
		_index = 0;
		Addots(_index)
		setTimeout(() => {
			swiper_wrapper.style.transform = `translate(0,0)`;
			swiper_wrapper.style.transition = 'none';
		}, 500)
	}
}
// 轮播节点更新事件
function Addots(index) {
	for (let i = 0; i < 5; i++) {
		if (i == index) {
			swiper_dots[i].style.backgroundImage = 'url(../Images/轮播图索引选中.png)'
			swiper_dots[i].style.opacity = '1'
		}
		else {
			swiper_dots[i].style.backgroundImage = 'url(../Images/轮播图索引.png)'
			swiper_dots[i].style.opacity = '0.3'
		}
	}
}
time = setInterval(_next, 3000)
// 最新动态行情页
let news_lists = document.querySelectorAll('.home-news-list .cates .cate')
let news_contents = document.getElementsByClassName('home-news-content')
for (let i = 0; i < news_lists.length; i++) {
	news_lists[i].addEventListener('click', function () {
		ChangesNewlist(i)
	})
}
function ChangesNewlist(index) {
	for (let i = 0; i < news_lists.length; i++) {
		if (i == index) {
			news_lists[i].classList.add('active')
			news_contents[i].style.display = 'block'
		}
		else {
			news_lists[i].classList.remove('active')
			news_contents[i].style.display = 'none'
		}
	}
}
// 角色介绍部分

// 大图地址列表
let bigImageList = ['../Images/格蕾修.png', '../Images/德丽沙·阿波卡利斯.png', '../Images/西琳.png']
// 角色pv地址
let weaponVideoList = ['../Vedio/格蕾修pv.mp4', '../Vedio/德丽沙·阿波卡利斯pv.mp4', '../Vedio/西琳pv.mp4']

// 获取角色选项卡
let role_action__btns = document.getElementsByClassName('base-role-btn')
// 获取角色大图
let big_imgs = document.querySelectorAll('.big-img')
// 获取角色信息
let role_infos = document.getElementsByClassName('role-info')
// 角色介绍点击视频
let weapon_video_btns = document.getElementsByClassName('weapon-video-btn');
// 用监听事件完成总体切换角色方法
for (let i = 0; i < role_action__btns.length; i++) {
	role_action__btns[i].addEventListener('click', function () {
		roleChange(i)
	})
}
function roleChange(index) {
	for (let i = 0; i < role_action__btns.length; i++) {
		if (i == index) {
			role_action__btns[i].classList.add('active')
			big_imgs[i].classList.add('active')
			// role_infos[i].style.display = 'flex'
			role_infos[i].classList.add('show')
			weapon_video_btns[i].onclick = function () {
				v__modal_overlay.style.display = 'block'
				video.setAttribute('src', weaponVideoList[i])
				video.play()
			}
		}
		else {
			role_action__btns[i].classList.remove('active')
			// role_infos[i].style.display = 'none'
			role_infos[i].classList.remove('show')
			big_imgs[i].classList.remove('active')
		}
	}
}