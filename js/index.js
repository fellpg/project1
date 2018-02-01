$(function(){
  var ctx = $('#cvs')[0].getContext('2d');
  var _chess= new Chess(ctx);
});

(function(window){
  function Chess(ctx){
    this.ctx=ctx
    this.drowBgc();
    this.drowChess();
  }
  extend(Chess.prototype,{
    drowBgc:function(){
      var ctx = this.ctx;
      var X=40;
      var Y=20;
      for(var i=0;X<=360;i++){
        ctx.moveTo(X,Y);
        ctx.lineTo(X,400-Y);
        X+=40;
      }
      ctx.stroke();
      ctx.beginPath();
      X=40;Y=20;
      for(var i=0;Y<=380;i++){
        ctx.moveTo(X,Y);
        ctx.lineTo(400-X,Y);
        Y+=40;
      }
      ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle='#dff0d8';
      ctx.fillRect(41,181,318,38);
      ctx.fill();
    },
    drowChess:function(){
      var ctx = this.ctx;
      ctx.moveTo(20,20);
      // ctx.fillStyle='red';
      ctx.arc(40,20,10,0,Math.PI*2);
      ctx.stroke();
      // ctx.fill();                
      ctx.font='   15px Simsun,arial,sans-serif'
      ctx.fillStyle='#000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.strokeText('车',40,20);
    }
    drowText:function(textArr){
      var name,i;
      for(name in textArr){
        this.ctx.strokeText(textArr[name][0],textArr[name][1],textArr[name][2]);
      }
    }
  });

  window.Chess = Chess;
})(window);

function extend(obj1,obj2){
  for(var name in obj2){
    if(!obj1[name]){
      obj1[name]=obj2[name];
    }
  }
}
