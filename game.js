$(document).ready(function() {

	//alert("Bienvenido al Juego");

	
    var canvas = $("#canvas")[0];
  //  var popup = $("#myPopup");
    
    imagenes=[
    	{
    		id:1,
    		url:"VACA.png",
            linea:null,
            
    	}, 
    	{	
    		id:2,
    		url:"GALLINA.png",
            linea:null,
    	},
    	{
    		id:3,
    		url:"BORREGO.png",
            linea:null,
    	},
    	{
    		id:4,
    		url:"BORREGO.png",
            linea:null,
    	},
    	{
    		id:5,
    		url:"BORREGO.png",
            linea:null,
    	},
    	{
    		id:6,
    		url:"BORREGO.png",
            linea:null,
    	},
    	{
    		id:7,
    		url:"BORREGO.png",
            linea:null,
    	}    	
    	];

    lineas = [];    
    
    juego = new MatchGame (canvas, imagenes, lineas);
//    alerta = new resgisterEvents (popup);
    juego.init ();

});

	