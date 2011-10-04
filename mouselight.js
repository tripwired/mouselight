jQuery.fn.mouselight = function(oArgs) {
  
  if(oArgs === undefined) {
      oArgs = {};
  }
  
  this.ele = this;
  this.xpos = parseInt(this.css("left")) + (parseInt(this.css("width")) / 2);
  this.ypos = parseInt(this.css("top")) + (parseInt(this.css("height")) / 2);
  this.max = oArgs.max || 100;
  
  $("body").bind("mousemove", function(e){ 
    var distance = Math.sqrt(Math.pow(this.xpos - e.pageX, 2) + Math.pow(this.ypos - e.pageY, 2));
    this.ele.css("box-shadow", ((this.xpos - e.pageX)/5) + "px " + ((this.ypos - e.pageY)/5) + "px " + (distance * 0.05) + "px hsl(0, 0%, "+ ((distance / this.max)*10) +"%)");
  }.bind(this));
  
};