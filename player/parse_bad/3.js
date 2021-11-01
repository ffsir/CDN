!function(i){i.fn.vidbacking=function(a){var s=i.extend({"video-opacity":"1",masked:!1,"mask-opacity":"1"},a);return this.each(function(){{var a=i(this),c=i(".vidbacking"),d=c.attr("poster"),t=a.prop("tagName");a.prop("id")}"BODY"==t?(c.css("background-size","100% 100% !important"),c.css("background-image","url("+d+")"),c.addClass("vidbacking-active-body-back"),c.css("opacity",s["video-opacity"]),c.removeClass("vidbacking"),1==s.masked&&(c.after('<div class="vidmask-body-back">&nbsp;</div>'),i(".vidmask-body-back").css("opacity",s["mask-opacity"])),i(window).resize(function(){var a=i(window).height(),s=i(window).width(),d=c.height(),t=c.width();a>d&&c.css("height",a),s>t&&c.css("width",s)})):(a.css("position","relative"),a.css("overflow","hidden"),c.css("background-image","url("+d+")"),c.addClass("vidbacking-active-block-back"),c.css("opacity",s["video-opacity"]),c.removeClass("vidbacking"),1==s.masked&&(a.append('<div class="vidmask-block-back">&nbsp;</div>'),a.find(".vidmask-block-back").css("opacity",s["mask-opacity"])),i(window).resize(function(){var i=a.height(),s=a.width(),d=c.height(),t=c.width();i>d&&c.css("height",i),s>t&&c.css("width",s)}))})}}(jQuery);


        var myVid = document.getElementById("video");
        myVid.volume = 0.3;
        $(function(){
            $('body').vidbacking({
                'masked': true
            });
            $('#sound-icon').click(function() {
	            var sta = myVid.muted;
	            if (sta == true) {
	        	    myVid.muted = false;
	        	    $('#sound-icon').text('静音');
            	} else {
	            	myVid.muted = true;
	            	$('#sound-icon').text('取消静音');
	            }
            });
        });
