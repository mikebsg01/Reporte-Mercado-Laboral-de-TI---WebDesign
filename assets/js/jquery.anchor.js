jQuery.fn.anchorAnimate = function(settings) {
  settings = jQuery.extend({
    speed : 400
  }, settings); 
  
  return this.each(function(){
    var element = this;
    $(element).click(function (event) {  
      event.preventDefault();

      var locationHref = window.location.href,
          elementClick = $(element).attr("href"),
          destination = $(elementClick).offset().top;

      $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
        window.location.hash = elementClick
      });
      return false;
    });
  });
};