//variable 1 the clicked nav link
//variable 2 the specified #work div

//when you click on a tag // a menu link, 
$(document).ready(function(){
	
/*	Setup variables
_______________________________________________________________________________ */
	
		var navLink;
		var divLink;
		var oldNavLink;
	
	//var navLink = $('#workList a').attr('id');//document.getElementById('a');
	
	
/*	Function to show the portfolio divs
_______________________________________________________________________________ */
	
	function showDiv(){
		
	}
	
	$('#workList a').click(function(){
		navLink = $(this).attr('id');
		
		//if this has not been previously clicked
		if ($(this).attr('id') != oldNavLink){			
			console.log('it is not' + oldNavLink)
			//if the work div is not already visible
			if ($('#work').is(':visible') != true){
				console.log('work is not visible.')
				//navLink = $(this).attr('id');

				if (navLink == 'aSnapscouts')
				{divLink = $('#Snapscouts');}
				else if (navLink == 'aBookbridge')
				{divLink = $('#Bookbridge');}


				divLink.removeClass('hidden');
				$('#work').fadeIn(200);
				oldNavLink = navLink;
			
			} //if work is visible, fade it out and throw in the new one.
			else {
				console.log('navLink is ' + navLink + ' and oldNavLink is ' + oldNavLink);
				//$('#work').fadeOut(200);
				//ISSUE WITH DELAY BETWEEN FADES
				divLink.fadeOut(200);
				divLink.addClass('hidden');
				navLink = $(this).attr('id');
				if 
					(navLink == 'aSnapscouts')
					{divLink = $('#Snapscouts');
					divLink.removeClass('hidden');
					$('#work').fadeIn(200);
					oldNavLink = navLink;}
					else if 
					(navLink == 'aBookbridge')
					{divLink = $('#Bookbridge');
					
					divLink.removeClass('hidden');
					$('#work').fadeIn(200);
					oldNavLink = navLink;}
					else{}


				
			}
		} //if it is the same as previously clicked
		else {
			//do nothing
		}
	});
		
	
			
	//write the name of the #id i clicked on
	//write the second variable
	//pass the second variable and show the div
	//if I click on another one hide the current div and show the new one.
	//if I click on the same nav, do nothing.
	//
});
