/**
 * EM QuickShop
 *
 * @license commercial software
 * @copyright (c) 2012 Codespot Software JSC - EMThemes.com. (http://www.emthemes.com)
 */

// disable QuickShop:
// MST_QUICKSHOP_DISABLED = true;

jQuery.noConflict();
var PROTOTYPE = $;
jQuery(function ($) {

	//get IE version
	function ieVersion() {
		var rv = -1; // Return value assumes failure.
		if (navigator.appName == 'Microsoft Internet Explorer') {
			var ua = navigator.userAgent;
			var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
		}
		return rv;
	}

	//read href attr in a tag
	
	function readHref() {
		var result = arguments[0].replace(EM.QuickShop.BASE_URL, '');
		var patn = /catalog\/product\/view\/id\/(.*?)\//i;
		if (patn.test(result)) {
		var s = patn.exec(result);
		result = 'catalog/product/view/id/' +  s[1];
		} else {
		result = result.replace(/\//gi,"_!_");
		}
		return result;
	}

	//string trim
	function strTrim() {
		return arguments[0].replace(/^\s+|\s+$/g, "");
	}
	
	// quickshop init
	function _qsJnit() {
		var selectorObj = arguments[0];
		var listprod = $(selectorObj.itemClass);	// selector chon tat ca cac li chua san pham tren luoi
		var mypath = 'quickshop/index/view/path/';
		var baseUrl = EM.QuickShop.BASE_URL + mypath;

		var _qsHref = '<a id=\"mst_quickshop_handler\" href=\"#\" style=\"visibility:hidden;position:absolute;top:0;left:0\"><span><span><span class="fs_medium">Quick View</span></span></span></a>';
		$(document.body).append(_qsHref);
		var qsHandlerImg = $('#mst_quickshop_handler img');

		$.each(listprod, function (index, value) {
			var reloadurl = baseUrl;

			//get reload url
			var prodLinkTag = $(value).find(selectorObj.aClass);
			if (!prodLinkTag || prodLinkTag.length == 0) return;
			var prodHref = readHref(prodLinkTag.attr('href'));
			reloadurl = baseUrl + prodHref;
			
			// show quickshop handle when hover product image
			$(selectorObj.imgClass, this).bind('mouseover', function () {
				var o = $(this).offset();
				
				$('#mst_quickshop_handler').attr('href', reloadurl).show().css({
						'top': o.top+($(this).height() - EM.QuickShop.QS_BTN_HEIGHT)/2+'px',
						'left': o.left+($(this).width() - EM.QuickShop.QS_BTN_WIDTH)/2+'px',
						'visibility': 'visible',
						'z-index':	999
				});
			});
			$(value).bind('mouseout', function () {
				$('#mst_quickshop_handler').hide();
			});
		});
		//fix bug image disapper when hover
		$('#mst_quickshop_handler').bind('mouseover', function () {
			$(this).show();
		}).bind('click', function () {
			$(this).hide();
		});

		//insert quickshop popup
		/* $('#mst_quickshop_handler').fancybox({
			'width': EM.QuickShop.QS_FRM_WIDTH,
			'height': EM.QuickShop.QS_FRM_HEIGHT,
			'autoSize': false,
			'type': 'ajax',
			 helpers : {
				overlay : {
					closeClick : EM.QuickShop.QS_OVERLAY_CLOSE			
				}
			},
			afterShow : function(){
				fireEvent(window,'qs_load');
				
			},
			afterClose : function(){
				Event.stopObserving(window,'qs_load');
			}
		}); */
	
		
	}

	if (typeof MST_QUICKSHOP_DISABLED == 'undefined' || !MST_QUICKSHOP_DISABLED)
		_qsJnit({
			itemClass:  EM.QuickShop.QS_ITMST_CLASS, //selector for each items in catalog product list,use to insert quickshop image
			aClass: EM.QuickShop.QS_A_CLASS, //selector for each a tag in product items,give us href for one product
			imgClass:  EM.QuickShop.QS_IMG_CLASS //class for quickshop href
		});
});


