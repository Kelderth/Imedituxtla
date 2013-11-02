function my_kwicks(){
	$('.kwicks').kwicks({
	duration: 800,
		max: 114,
		spacing: 0,
		defaultKwick: 0,
		sticky: false,
		isVertical: true
	});
}

function my_Links(){	
	jQuery('#kwick1').click(function(){
		//$(this).hide('slow');
		//jQuery('#contenido2') = top.location.href = 'index.php?control=index';
		top.location.href = 'index.php?control=index';
	});

	jQuery('#kwick2').click(function(){
		//$('#contenido2') = top.location.href = 'index.php?control=who';
		top.location.href = ('index.php?control=servicios');
	});

	jQuery('#kwick3').click(function(){
		//jQuery('#contenido2') = top.location.href = 'index.php?control=product';
		top.location.href = 'index.php?control=who';
	});
	
	jQuery('#kwick4').click(function(){
		//jQuery('#contenido') = top.location.href = 'index.php?control=contact';
		top.location.href = 'index.php?control=galeria';
	});

	jQuery('#kwick5').click(function(){
		top.location.href = 'index.php?control=contact';
	});
	
	jQuery('#kwick6').click(function(){
		top.location.href = 'index.php?control=promociones';
	});
	
	jQuery('#kwick7').click(function(){
		top.location.href = 'index.php?control=citas';
	});
	
	same_Height();
	jQuery('#contenido2').hide().fadeIn(2000);
}

function same_Height(){
		var altura  = jQuery('#contenido').css('height');
		var altura2 = jQuery('aside').css('height');
		if(altura<altura2){
			jQuery('#contenido').css('height',altura2);			
		}
		else if (altura2<altura){
			jQuery('aside').css('height',altura);			
		}
		else{}
		//alert("Altura del div: "+ altura);
}

function googleMaps(){
	var myLatlng = new google.maps.LatLng(16.763853, -93.121464);
	var mapOptions = {
        center: myLatlng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('mapa_gps'),mapOptions);
	
	/*var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title:"Hello World!"
      )};*/
}

function googleMaps2(){
	//Creación y Configuración del Mapa.
	var map 	= new GMap2(document.getElementById('gps'));
	var imedi 	= new GLatLng(24.993758,40.561523);
	var imedi2 	= new GLatLng(23.625269,-102.540613);
	map.setCenter(imedi,5);
	map.addControl(new GSmallMapControl()); //Control de Acercamiento con movimiento.
	map.addControl(new GMapTypeControl());  //Tipo de Mapas.

	//Personalización de Icono
	var tinyIcon = new GIcon();
	//tinyIcon.image = "http://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png";
	tinyIcon.image 	= "http://labs.google.com/ridefinder/images/mm_20_green.png";
	tinyIcon2.image = "http://labs.google.com/ridefinder/images/mm_20_red.png";
	tinyIcon.shadow = "http://labs.google.com/ridefinder/images/mm_20_shadow.png";

	tinyIcon.iconSize = new GSize(18, 26);
	tinyIcon.shadowSize = new GSize(28, 26);
	tinyIcon.iconAnchor = new GPoint(6, 20);
	tinyIcon.infoWindowAnchor = new GPoint(7, 2);

	markerOptions = {icon:tinyIcon}; 

	var tuxtla = new GLatLng(16.758153,-93.123776); //Posiciona el marcador con ayuda de esta pagina: http://itouchmap.com/latlong.html
	var marker = new GMarker(tuxtla,markerOptions); //Crea el Marcador
	var loc = map.addOverlay(marker); //Permite Visualizar el Marcador
	var matriz = '<p class=infomapa><h5>Organización Cultural de Chiapas S.A. de C.V. (MATRIZ)</h5>'+'<h6>4a. Nte. Pte #1039<br/>'+'Tuxtla Gutiérrez, Chiapas; C.P. 29000<br/>'+'organizacion@culturalocc.com.mx</h6></p>';

	GEvent.addListener(marker,"click",function(){
		marker.openInfoWindowHtml(matriz);
	});
}

function listaDescriptiva(){
	var objeto = jQuery('#contenido2 #servicio ul li button');
	jQuery('#contenido2 #descripcion section').css('display','none');
	objeto.addClass('botones');
	objeto.css('width','100%');
	jQuery('#contenido2 #servicio ul li:eq(0)').click(function(){
		jQuery('#contenido2 #descripcion section').css('display','none');
		jQuery('#opcion1').fadeIn('slow');
	});
	jQuery('#contenido2 #servicio ul li:eq(1)').click(function(){
		jQuery('#contenido2 #descripcion section').css('display','none');
		jQuery('#opcion2').fadeIn('slow');
	});
}

function envioCorreo(){
	jQuery('#buzon').submit(function(){
		jQuery.ajax({
			type: 'post',
			url : jQuery(this).attr('action'),
			data: jQuery(this).serialize(),
			success: function(data){
				//Hide the Form
				jQuery('#correo').fadeOut('fast');
				//Show the Result
				jQuery('#resultado').html(data);
				jQuery('#resultado').hide().fadeIn(2000);
				//Hide the Result
				jQuery('#resultado').fadeOut('slow');
				//Show the Form again
				jQuery('#correo').animate({paddingtop:'0px',opacity:0.9},{duration:2000});
				jQuery('#correo').fadeIn(4000);
			}
		})
		return false;
	});
}

jQuery(document).ready(function(){
	same_Height();/*AUTOAJUSTA LA ALTURA DE DIVS ALINEADOS*/
	my_kwicks();
	my_Links();
	listaDescriptiva();
	envioCorreo();
	//googleMaps();
});