$(function(){
  var ctx = $('#cvs')[0].getContext('2d');
  var _chess= new Chess(ctx);
});

(function(window){
  function Chess(ctx){
    this.ctx=ctx
    this.drowBgc();
    // this.drowChess();
    this.drowText(this.textArr);
  }
  extend(Chess.prototype,{
    textArr:{
      red车1:['red','车',40,20],
      red马1:['red','马',80,20],
      red象1:['red','象',120,20],
      red士1:['red','士',160,20],
      red帅 :['red','帅',200,20],    
      red士2:['red','士',240,20],
      red象2:['red','象',280,20],
      red马2:['red','马',320,20],
      red车2:['red','车',360,20],
      red炮1:['red','炮',80,100],
      red炮2:['red','炮',320,100],
      red兵1:['red','兵',40,140],
      red兵2:['red','兵',120,140],
      red兵3:['red','兵',200,140],
      red兵4:['red','兵',280,140],
      red兵5:['red','兵',360,140],

      black车1:['black','車',40,380],
      black马1:['black','马',80,380],
      black象1:['black','象',120,380],
      black士1:['black','士',160,380],
      black帅 :['black','将',200,380],    
      black士2:['black','士',240,380],
      black象2:['black','象',280,380],
      black马2:['black','马',320,380],
      black车2:['black','車',360,380],
      black炮1:['black','炮',80,300],
      black炮2:['black','炮',320,300],
      black兵1:['black','卒',40,260],
      black兵2:['black','卒',120,260],
      black兵3:['black','卒',200,260],
      black兵4:['black','卒',280,260],
      black兵5:['black','卒',360,260],
    },
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
    drowChess:function(X,Y){
      this.ctx.arc(X,Y,10,0,Math.PI*2);
      this.ctx.fillStyle='#dff0d8';
      this.ctx.strokeStyle='#000';
      this.ctx.fill();
      this.ctx.stroke();
    },
    drowText:function(textArr){
      var name,i; var ctx = this.ctx;
      for(name in textArr){
        ctx.beginPath();
        this.drowChess(textArr[name][2],textArr[name][3]);
        ctx.font='  15px Simsun,arial,sans-serif'
        ctx.strokeStyle=textArr[name][0];
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        this.ctx.strokeText(textArr[name][1],textArr[name][2],textArr[name][3]);
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
