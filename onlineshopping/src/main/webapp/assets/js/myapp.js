$(function(){
			//solve the active menu problem
		switch(menu){
			
		case 'About Us':
			$('#about').addclass('active');
			break;
		case 'Contact Us':
			$('#contact').addclass('active');
			break;
		case 'AllProducts':
			$('#listProducts').addclass('active');
		default:
			$('#listProducts').addclass('active');
			break;
		}
	})