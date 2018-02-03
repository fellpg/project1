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
    this.move();
  }
  extend(Chess.prototype,{
    textArr:{
      red车1:['red','车',0,0],
      red马1:['red','马',1,0],
      red象1:['red','象',2,0],
      red士1:['red','士',3,0],
      red帅 :['red','帅',4,0],    
      red士2:['red','士',5,0],
      red象2:['red','象',6,0],
      red马2:['red','马',7,0],
      red车2:['red','车',8,0],
      red炮1:['red','炮',1,2],
      red炮2:['red','炮',7,2],
      red兵1:['red','兵',0,3],
      red兵2:['red','兵',2,3],
      red兵3:['red','兵',4,3],
      red兵4:['red','兵',6,3],
      red兵5:['red','兵',8,3],

      black车1:['black','車',0,9],
      black马1:['black','马',1,9],
      black象1:['black','象',2,9],
      black士1:['black','士',3,9],
      black帅 :['black','将',4,9],    
      black士2:['black','士',5,9],
      black象2:['black','象',6,9],
      black马2:['black','马',7,9],
      black车2:['black','車',8,9],
      black炮1:['black','炮',1,7],
      black炮2:['black','炮',7,7],
      black兵1:['black','卒',0,6],
      black兵2:['black','卒',2,6],
      black兵3:['black','卒',4,6],
      black兵4:['black','卒',6,6],
      black兵5:['black','卒',8,6],
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
        this.drowChess(toggleX(textArr[name][2]),toggleY(textArr[name][3]));
        ctx.font='  15px Simsun,arial,sans-serif'
        ctx.strokeStyle=textArr[name][0];
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        this.ctx.strokeText(textArr[name][1],toggleX(textArr[name][2]),toggleY(textArr[name][3]));
      }
    },
    move:function(){
      var aaa = this;
      this.ctx.canvas.onclick=function(e){
        var ZB = aaa.textArr;
        for(every in ZB){
          if(ZB[every][2]==Math.round((e.offsetX-40)/40)&&ZB[every][3]==Math.round((e.offsetY-20)/40)){
            // console.log(every);
            // console.log('选中棋子'+ZB[every][0]+ZB[every][1]);
            aaa.ctx.canvas.onclick=null;
            (function(every){
              aaa.ctx.canvas.onclick=function(e){
                var X=Math.round((e.offsetX-40)/40);
                var Y=Math.round((e.offsetY-20)/40);
                for(var name in ZB){
                  if(ZB[name][2]==X&&ZB[name][3]==Y){
                    if(aaa.textArr[every][0]!=aaa.textArr[name][0]){
                      delete aaa.textArr[name];
                      drow(aaa);
                    }else{
                      alert('不能杀自己人');
                      drow(aaa);
                      return null;
                    }
                  }
                }
                if((
                    ZB[every][1]=='车'||
                    ZB[every][1]=='車'||
                    ZB[every][1]=='兵'||
                    ZB[every][1]=='卒'||
                    ZB[every][1]=='炮'||
                    ZB[every][1]=='将'||
                    ZB[every][1]=='帅'
                    )&&(
                    ZB[every][2]==X||
                    ZB[every][3]==Y
                  )){
                    ZB[every][2]=X;
                    ZB[every][3]=Y;
                    drow(aaa);
                }else if(
                  ZB[every][1]=='马'&&
                  Math.abs(ZB[every][2]-X)+
                  Math.abs(ZB[every][3]-Y)==3
                  ){
                    ZB[every][2]=X;
                    ZB[every][3]=Y;
                    drow(aaa);
                }else if(
                  ZB[every][1]=='象'&&
                  Math.abs(ZB[every][2]-X)+
                  Math.abs(ZB[every][3]-X)==4
                  ){
                    ZB[every][2]=X;
                    ZB[every][3]=X;
                    drow(aaa);
                }else if(
                  ZB[every][1]=='士'&&
                  Math.abs(ZB[every][2]-X)+
                  Math.abs(ZB[every][3]-X)==2
                  ){
                    ZB[every][2]=X;
                    ZB[every][3]=X;
                    drow(aaa);
                }else{
                  drow(aaa);
                  alert('注意规则');
                }
              }
            })(every);
          }
        }
      }
    }
  });
  window.Chess = Chess;
})(window);

// 继承
function extend(obj1,obj2){
  for(var name in obj2){
    if(!obj1[name]){
      obj1[name]=obj2[name];
    }
  }
}
// 转换位置
function toggleX(num){
  return num*40+40;
}
function toggleY(num){
  return num*40+20;
}
// 绘制棋盘棋子
function drow(aaa){
  aaa.ctx.canvas.onclick=null;
  aaa.ctx.fillRect(0,0,400,400);
  aaa.drowBgc();
  aaa.drowText(aaa.textArr);
  aaa.move();
}
