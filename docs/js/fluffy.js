<!--
(function (){  //即時関数で囲んでグローバル変数を消すため、この行はこのままで

var N = 5;     //★原本80。マウス画像表示数。マウス画像指定はHTMLですること
var opa=0.7;    //★画像透過度。0 で完全透明なので、0 は指定しない
var S = 500;    //★原本500。画像がマウスに引き寄せられる。大きいほど速い
var Zx=-1;      //★文章の上にマウス画像が流れるか？　上に流れる：1   下に隠れる：-1。マイナス指定にしないとリンクが押せない


//指定ここまで-----------------------------------------------------------------------------------
var W = xm = ym = 0;
var O,nx,ny,tp;//■追加
function spAn(X,Y,O){
	this.obj = document.createElement("img");
	this.obj.src = document.getElementById("doot").src;
	this.obj.style.position = "fixed";//■原本absolute修正
	this.obj.style.left = X+"px";
	this.obj.style.top = Y+"px";
	this.obj.style.zIndex =Zx;//追加
	this.obj.style.opacity =opa;//追加
	document.body.appendChild(this.obj);
	this.O   = O;
	this.x   = X + W;
	this.y   = Y + W;
	this.dx  = 0;
	this.dy  = 0;
	this.dt  = 0;
	this.dt2 = 0;
	this.zx  = 1 - 2 * Math.random();
	this.zy  = -4 * Math.random();
	this.SCR = function(){
		with(this){
                        tp=window.pageYOffset;//■追加
			if(y<-W)y=tp+ny+W; else if(y>tp+ny+W)y=-W;//■tp+追加
			if(x<-W)x=nx+W; else if(x>nx+W)x=-W;
			dx  = x - xm;
			dy  = y - ym;
			dt  = Math.sqrt(dx * dx + dy * dy);
			dt2 = dt / (dt + S/dt);
			x   = xm + dx * dt2 + zx;
			y   = ym + dy * dt2 + zy;
			obj.style.left = x - W+"px";
			obj.style.top  =-tp+ y - W+"px";//■-tp+追加。-tpしないとスクロール後にマウスに集合しない
			if(O)O.SCR();
		}
	}
}
document.onmousemove = function(e){xm=e.pageX;ym=e.pageY;}
function GeFe() {
        tp=window.pageYOffset;//■追加
	nx =window.innerWidth-18;
	ny =window.innerHeight-18;
	W  = document.getElementById("doot").width * 0.5;
	xm = nx/2;
	ym =tp+ ny/2;//■tp+追加
	for(var i=0;i<N;i++){
		var a=Math.random()*Math.PI*2;
		O = new spAn(-W+xm+Math.cos(a)*ym,-W+ym+Math.sin(a)*ym,O);
	}
	setInterval( function(){O.SCR();},16 );
}
GeFe();
}());//即時関数終了
// -->