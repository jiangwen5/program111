$(function(){
	var shopcar = JSON.parse(localStorage.getItem('shopcar'));
        for (var i = 0; i < shopcar.length; i++) {
        	var shop = 
        	`
        		<div class="add_shop">
				<div class="tit">
					<button class="choose_btn"></button>
					<p><i class="shop_suning shop-suningyigouicon"></i>苏宁自营</p>
					<b>运费：￥0.00</b>
				</div>
				<div class="message">
					<div class="message_btn mes">
						<button class="choose_btn"></button>
					</div>
					<div class="message_pic mes">
						<img src="${shopcar[i].shopurl}" alt="" />
					</div>
					<div class="message_tit mes">
						<p>${shopcar[i].shopname}</p>
						<span><button>选购增值服务</button></span>
					</div>
					<div class="jianjie mes">
						<p>容积：【主销】2222</p>
					</div>
					<div class="price mes">
						<p>${shopcar[i].shopprice}</p>
					</div>
					<div class="mes_number mes">
						<button class="reduce">-</button>
						<input class="count" type="text" value="1">
						<button class="augment">+</button>
					</div>
					<div class="mes_priceAll mes">
						<p>￥169.00</p>
					</div>
					<div class="mes_move mes">
						<button>移入收藏</button>
						<button class='btn btn-danger del-btn'>删除</button>
					</div>
				</div>
			</div>
        	`
        	
        }
        $('.add_shop').append(shop)

})
