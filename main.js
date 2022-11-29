//Criar uma referência para tela
var canvas=document.getElementById("mycanvas");
var contexto=canvas.getContext("2d");
//Dê altura e largura específicas para a imagem do carro
var largura=85;
var altura=100;
backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.
var x=5;
var y=225;
var novofundo,novocarro;
function add() {
	//carregar carro e imagens de fundo na tela.
	novofundo=new Image();
	novofundo.onload=uploadBackground;
	novofundo.src=backgroundImage;
	novocarro=new Image();
	novocarro.onload=uploadGreenCar;
	novocarro.src=greencarImage;
	
}

function uploadBackground() {
	//Defina a função ‘uploadBackground’
    contexto.drawImage(novofundo,0,0,canvas.width,canvas.height);
    
	

}

function uploadGreenCar() {
	//Defina a função ‘uploadGreenCar’.
    contexto.drawImage(novocarro,x,y,largura,altura);
	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Definir função para mover o carro para cima
	if(y>=0){
		y=y-10;
		uploadBackground();
        uploadGreenCar();
	}
}

function down()
{
	//Definir função para mover o carro para baixo
	if(y<=350){
		y=y+10;
		uploadBackground();
        uploadGreenCar();
	}
}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
	if(x>=0){
		x=x-10;
		uploadBackground();
        uploadGreenCar();
	}
}

function right()
{
	//Definir função para mover o lado direito do carro
    if(x<=750){
		x=x+10;
		uploadBackground();
        uploadGreenCar();
	}
}
