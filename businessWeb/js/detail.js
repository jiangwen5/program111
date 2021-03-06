 var big = (function(){
          return {
            init: function() {
              this.$box = document.querySelector('.box');
              this.$showImage = this.$box.querySelector('.show-image');
              this.$showBigImage = this.$box.querySelector('.show-big-image');
              this.$ulbox = this.$box.querySelector('.img-box');
              this.$liAll = this.$ulbox.children;
              this.$filter = this.$showImage.querySelector('.filter');
              for(var i = 0; i < this.$liAll.length; i++) {
                this.$liAll[i].index = i;
              }
              this.event();

            },
            event: function() {
              var _this = this;
              this.$ulbox.onclick = function(ev) {
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                console.log(target.nodeName);
                if(target.nodeName === 'IMG') {
                  _this.showImage(target.parentNode.index)
                }
              }
              this.$showImage.onmouseenter = function() {
                _this.$filter.style.display = 'block';
                _this.$showBigImage.style.display = 'block';
              }
              this.$showImage.onmouseleave = function() {
                _this.$filter.style.display = 'none';
                _this.$showBigImage.style.display = 'none';
              }
              this.$showImage.onmousemove = function(ev) {
                ev = ev || window.event;
                var x = ev.clientX - this.offsetLeft - _this.$filter.offsetWidth / 2;
                var y = ev.clientY - this.offsetTop - _this.$filter.offsetHeight / 2;
                var maxL = this.clientWidth -  _this.$filter.offsetWidth,
                maxT = this.clientHeight - _this.$filter.offsetHeight;
                if(x >= maxL) {
                  x = maxL
                } else if(x <=0 ) {
                  x = 0;
                }
                if(y >= maxT) {
                  y = maxT;
                } else if( y <= 0 ) {
                  y = 0;
                }
                _this.$filter.style.left = x + 'px';
                _this.$filter.style.top = y + 'px';

                // 移动大图片的位置， 放大三倍
                var img = _this.$showBigImage.querySelector('img'); 
                img.style.left = -3 * x + 'px';
                img.style.top = -3 * y + 'px';
              }
            },
            showImage: function(index) {
              console.log(index);
              for(var i = 0; i < this.$liAll.length; i++) {
                this.$liAll[i].className = ''
              }
              this.$liAll[index].className = 'active';
              // 修改对应的图片地址
              var src = this.$liAll[index].querySelector('img').getAttribute('src');
              this.$showImage.querySelector('img').src = src.replace('small', 'big');
              this.$showBigImage.querySelector('img').src = src.replace('small', 'largest');
              console.log(src);
            }
          }
          big.init();
        }())
 $(function(){
 	$('.car').click(function(){
	 	var shopname = $('.shopname').text();
	 	var shopprice = $('.shopprice').text();
	 	var shopurl = $('.active img').attr('src');
	 	var obj = {
	 		shopname:shopname,
	 		shopprice:shopprice,
	 		shopurl:shopurl
	 	}
	 	var jsonStr = '[' + JSON.stringify(obj) + ']';
	 	localStorage.setItem('shopcar', jsonStr);
 	})
 	
 })
 