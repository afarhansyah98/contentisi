//<![CDATA[
(function($){jQuery.fn.zoomable=function(options){$(this).each(function(){options=initOptions(options,$(this));$('<img/>').src=options.fullsize;var img=createImgComponent(options);var container=createContainerComponent(options,img);var original_overflow=$('html, body').css('overflow');$(this).click(function(){container.appendTo('body').fadeIn(options.speed,options.onshow)});var dismissContainer=function(){container.fadeOut(options.speed,options.onhide)};container.click(dismissContainer);$(document).keydown(function(e){if(e.keyCode==27){dismissContainer()}})})};function initOptions(options,parent){options=$.extend({},$.fn.zoomable.defaults,options);if(parent.attr('fullsize')){options.fullsize=parent.attr('fullsize')}else{options.fullsize=parent.attr('src')}
return options}
function createImgComponent(options){var img=$('<img />',{'src':options.fullsize})
img.css({'max-height':'100%','max-width':'100%','position':'relative','top':'50%','transform':'translateY(-50%)'});return img}
function createContainerComponent(options,img){var container=$('<div />',{'class':'zoomable-container','html':img});container.css({'background':options.bgcolor,'padding':options.padding,'text-align':'center','position':'fixed','top':'0','left':'0','z-index':'9999999','height':'100%','width':'100%','display':'none'});container.css({'background':container.css('background').replace('rgb','rgba').replace(')','')+','+options.opacity+')'});return container}
function disableBodyScroll(){$('html, body').css({'overflow':'hidden'})}
function enableBodyScroll(setting){$('html, body').css({'overflow':setting})}
$.fn.zoomable.defaults={padding:'15px',bgcolor:'#21252D',opacity:'0.5',speed:300,onshow:function(){},onhide:function(){}}})(jQuery)
//]]>
