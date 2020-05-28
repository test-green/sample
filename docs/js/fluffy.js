<!--
(function (){  //�����֐��ň͂��ŃO���[�o���ϐ����������߁A���̍s�͂��̂܂܂�

var N = 5;     //�����{80�B�}�E�X�摜�\�����B�}�E�X�摜�w����HTML�ł��邱��
var opa=0.7;    //���摜���ߓx�B0 �Ŋ��S�����Ȃ̂ŁA0 �͎w�肵�Ȃ�
var S = 500;    //�����{500�B�摜���}�E�X�Ɉ����񂹂������B�傫���قǑ���
var Zx=-1;      //�����͂̏��Ƀ}�E�X�摜�������邩�H�@���ɗ������F1   ���ɉB�����F-1�B�}�C�i�X�w���ɂ��Ȃ��ƃ����N�������Ȃ�


//�w�肱���܂�-----------------------------------------------------------------------------------
var W = xm = ym = 0;
var O,nx,ny,tp;//���ǉ�
function spAn(X,Y,O){
	this.obj = document.createElement("img");
	this.obj.src = document.getElementById("doot").src;
	this.obj.style.position = "fixed";//�����{absolute�C��
	this.obj.style.left = X+"px";
	this.obj.style.top = Y+"px";
	this.obj.style.zIndex =Zx;//�ǉ�
	this.obj.style.opacity =opa;//�ǉ�
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
                        tp=window.pageYOffset;//���ǉ�
			if(y<-W)y=tp+ny+W; else if(y>tp+ny+W)y=-W;//��tp+�ǉ�
			if(x<-W)x=nx+W; else if(x>nx+W)x=-W;
			dx  = x - xm;
			dy  = y - ym;
			dt  = Math.sqrt(dx * dx + dy * dy);
			dt2 = dt / (dt + S/dt);
			x   = xm + dx * dt2 + zx;
			y   = ym + dy * dt2 + zy;
			obj.style.left = x - W+"px";
			obj.style.top  =-tp+ y - W+"px";//��-tp+�ǉ��B-tp���Ȃ��ƃX�N���[�����Ƀ}�E�X�ɏW�����Ȃ�
			if(O)O.SCR();
		}
	}
}
document.onmousemove = function(e){xm=e.pageX;ym=e.pageY;}
function GeFe() {
        tp=window.pageYOffset;//���ǉ�
	nx =window.innerWidth-18;
	ny =window.innerHeight-18;
	W  = document.getElementById("doot").width * 0.5;
	xm = nx/2;
	ym =tp+ ny/2;//��tp+�ǉ�
	for(var i=0;i<N;i++){
		var a=Math.random()*Math.PI*2;
		O = new spAn(-W+xm+Math.cos(a)*ym,-W+ym+Math.sin(a)*ym,O);
	}
	setInterval( function(){O.SCR();},16 );
}
GeFe();
}());//�����֐��I��
// -->
