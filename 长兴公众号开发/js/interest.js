var geolocation = new BMap.Geolocation();
var gc = new BMap.Geocoder();

geolocation.getCurrentPosition(function(r) { //定位结果对象会传递给r变量  

	if(this.getStatus() == BMAP_STATUS_SUCCESS) { //通过Geolocation类的getStatus()可以判断是否成功定位。  
		var pt = r.point;
		gc.getLocation(pt, function(rs) {
			var addComp = rs.addressComponents;
			var address = (addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber);
			document.getElementById("dz").innerHTML = address
			document.getElementById("city").innerHTML = addComp.city
			document.getElementById("COUNTY").innerHTML = addComp.district
			document.getElementById("street").innerHTML = addComp.street
			document.getElementById("cityname").value = addComp.city
			document.getElementById("contyname").value = addComp.district
			document.getElementById("townname").value = addComp.street
		});
	} else {
		//关于状态码    
		//BMAP_STATUS_SUCCESS   检索成功。对应数值“0”。    
		//BMAP_STATUS_CITY_LIST 城市列表。对应数值“1”。    
		//BMAP_STATUS_UNKNOWN_LOCATION  位置结果未知。对应数值“2”。    
		//BMAP_STATUS_UNKNOWN_ROUTE 导航结果未知。对应数值“3”。    
		//BMAP_STATUS_INVALID_KEY   非法密钥。对应数值“4”。    
		//BMAP_STATUS_INVALID_REQUEST   非法请求。对应数值“5”。    
		//BMAP_STATUS_PERMISSION_DENIED 没有权限。对应数值“6”。(自 1.1 新增)    
		//BMAP_STATUS_SERVICE_UNAVAILABLE   服务不可用。对应数值“7”。(自 1.1 新增)    
		//BMAP_STATUS_TIMEOUT   超时。对应数值“8”。(自 1.1 新增)    
		switch(this.getStatus()) {
			case 2:
				alert('位置结果未知 获取位置失败.');
				break;
			case 3:
				alert('导航结果未知 获取位置失败..');
				break;
			case 4:
				alert('非法密钥 获取位置失败.');
				break;
			case 5:
				alert('对不起,非法请求位置  获取位置失败.');
				break;
			case 6:
				alert('对不起,当前 没有权限 获取位置失败.');
				break;
			case 7:
				alert('对不起,服务不可用 获取位置失败.');
				break;
			case 8:
				alert('对不起,请求超时 获取位置失败.');
				break;

		}
	}

}, {
	enableHighAccuracy: true
})

//正則驗證
$(function() {
	var tmpl = '<li class="weui-uploader__file" style="background-image:url(#url#)"></li>',
		$uploaderInput = $("#uploaderInput"),
		$uploaderFiles = $("#uploaderFiles");

	$uploaderInput.on("change", function(e) {
		var src, url = window.URL || window.webkitURL || window.mozURL,
			files = e.target.files;
		for(var i = 0, len = files.length; i < len; ++i) {
			var file = files[i];

			if(url) {
				src = url.createObjectURL(file);
				$uploaderFiles.append($(tmpl.replace('#url#', src)));
			} else {
				//					src = e.target.result;
				var album = e.target.result;
				$uploaderFiles.append($(tmpl.replace('#url#', album)));
			}

		}
	});
	$uploaderFiles.on("click", "li", function() {
		$galleryImg.attr("style", this.getAttribute("style"));
		$gallery.fadeIn(100);
	});
});

function checkmc() {
	var zjh = document.getElementById("mc");

	var ab = /^[\u4e00-\u9fa5]{2,4}$/;
	if(ab.test(zjh.value) == false) {
		alert("请正确填写名称");
		return false;
	}
	return true;
}

function checklxdh() {
	var dh = document.getElementById("lxdh");

	var ab = /^[+]{0,1}(\d){1,3}[ ]?([-]?(\d){1,12})+$/;
	if(ab.test(dh.value) == false) {
		alert("请正确填写电话");
		return false;
	}
	return true;
}

function checkdz() {
	var yx = document.getElementById("dz");

	var ab = /^(?=.*?[\u4E00-\u9FA5])[\d\u4E00-\u9FA5]+/;
	if(ab.test(yx.value) == false) {
		alert("请正确填写地址!");
		return false;

	}
	return true;
}

function checkwz() {
	var yx = document.getElementById("wz");

	var ab = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
	if(ab.test(yx.value) == false) {
		alert("请正确网站!");
		return false;

	}
	return true;
}