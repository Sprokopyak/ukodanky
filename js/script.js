//active tabs and active menu	
$('document').ready(function(a){
   openMenu(event, 'menu1');
   $("#menu-tab-1").click(function(){
        openMenu(event, 'menu1');		    
        $("#defaultOpen").addClass("active");  
        $("#tab2").removeClass("active");
        $("#tab3").removeClass("active");
        $("#menu-11").removeClass("active");     
        $("#menu-22").removeClass("active"); 
    });
		$("#menu-tab-2").click(function(){
        openMenu(event, 'menu2');
        $("#tab2").addClass("active");
        $("#defaultOpen").removeClass("active");
        $("#tab3").removeClass("active");
        $("#menu-11").removeClass("active");     
        $("#menu-22").removeClass("active"); 
    });
		$("#menu-tab-3").click(function(){
        openMenu(event, 'menu3');
        $("#tab3").addClass("active");
        $("#defaultOpen").removeClass("active");
        $("#tab2").removeClass("active");
        $("#menu-11").removeClass("active");     
        $("#menu-22").removeClass("active"); 
    });
    
     $("#logo").click(function(){      
        $("#menu-11").removeClass("active");
        $("#menu-22").removeClass("active");  
        $("#menu-tab-1").removeClass("active");
        $("#menu-tab-2").removeClass("active");
        $("#menu-tab-3").removeClass("active");
    });
    
     $("#menu-11").click(function(){      
        $("#menu-11").addClass("active");
        $("#menu-tab-3").removeClass("active");
        $("#menu-22").removeClass("active");
        $("#menu-tab-2").removeClass("active");   
        $("#menu-tab-1").removeClass("active");
    });
    
     $("#menu-22").click(function(){        
        $("#menu-22").addClass("active");
        $("#menu-tab-3").removeClass("active");
        $("#menu-11").removeClass("active");
        $("#menu-tab-2").removeClass("active");   
        $("#menu-tab-1").removeClass("active");
    });

    $("#defaultOpen").click(function(){    
        openMenu(event, 'menu1');    
        $("#menu-tab-1").addClass("active");
        $("#menu-11").removeClass("active");
        $("#menu-22").removeClass("active");
        $("#tab2").removeClass("active");   
        $("#tab3").removeClass("active");
    });
		
    $(" #tab2").click(function(){
		  openMenu(event, 'menu2');
		  $("#menu-tab-2").addClass("active");
		  $("#defaultOpen").removeClass("active");
		  $("#tab3").removeClass("active");
          $("#menu-11").removeClass("active");     
          $("#menu-22").removeClass("active");
    });
    
    $(" #tab3").click(function(){
		  openMenu(event, 'menu3');
		  $("#menu-tab-3").addClass("active");
		  $("#defaultOpen").removeClass("active");
		  $("#tab2").removeClass("active");
          $("#menu-11").removeClass("active");     
          $("#menu-22").removeClass("active"); 
    });
    
      $(window).scroll(function(){
    if($(this).scrollTop() < 1) {
      $("nav ul li ").removeClass("active");
    }
  });
  
      //menu mobile
    (function($) { 
    $(function() { 
        $('#nav-toggle').click(function() {
        $('nav ul').slideToggle(
        );
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
     
    $('.nav-list li a').on("click", function(){  
    $('.nav-list').hide();
    $("#nav-toggle").removeClass("active");
    });
    }); 
    })(jQuery); 
    
      //fixed scroll menu
    $("#nav").removeClass("navbar-fixed");
    $(window).scroll(function(){
        if($(this).scrollTop() > 30) {
    $("#nav").addClass("navbar-fixed").fadeIn('fast');
        } else {
    $("#nav").removeClass("navbar-fixed").fadeIn('fast');
        };
    });
    
    //slow movement
    $("#menu, .down").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 80;
        $('body,html').animate({scrollTop: top}, 1000);
    });
      $("#down").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 110;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    

    //button up
    $('body').append('<button class="btn_up" />');
    $('.btn_up').click(function(){
      $('body').animate({'scrollTop':0}, 1000);
      $('html').animate({'scrollTop':0}, 1000);
    });
    
    $(window).scroll(function(){
      if($(window).scrollTop() > 300 ) {
        $('.btn_up').addClass('active');
      } else {
        $('.btn_up').removeClass('active'); 
     }    
    });  
});

//tabs
function openMenu(evt, menuName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
};

//Form validation
;(function($){
  	jQuery.fn.sendFormLP = function(options){
  		options = $.extend({
            toEmail: 'sprokopyak96@mail.ru',
            fromEmail: 'info@ukodanky.cz',
            interval : 9000
        }, options);
	    var make = function(){
	    	$(this).submit(function(e){
	        	e.preventDefault();
	        	var $this = $(this);
	            var i = true;
	            var toEmail = options.toEmail;
	            var fromEmail = options.fromEmail;
	            var them = $this.data('them');
	            var $items = $this.find('[name]');
	            var $required = $this.find('[data-required]');
	            var objShow = $this.data('show')
	            $items.removeClass('error');
	            $required.each(function(){
	            	if($(this).val() == ''){
	            		i = false
	            		$(this).addClass('error');
	            	}
	            });
	            if(i == true){
		            var arr = [];
		            var m_action = $this.attr('action');

		            $items.each(function(){
		            	var nam = $(this).data('name');
		            	var val = $(this).val();
		            	arr.push(nam+val);
		            });
		            var m_data = '';
		            for(q=0; q <= arr.length-1; q++){
		            	m_data = m_data+arr[q]+'\n';
		            }     
		            $.ajax({
		                type: 'POST',
		                url: m_action,
		                data: {
		                	m_data:m_data,
		                	toEmail:toEmail,
		                	fromEmail:fromEmail,
		                	them:them
		                },
		                success: function(result){
		                    $items.val('');
		                    $(objShow).fadeIn();

		                    setInterval(function(){
		                    	$(objShow).fadeOut();
		                    }, options.interval);
		                }
		            });
	            }
	        });
	    };
	    return this.each(make); 
  	};
})(jQuery);

//Send email
$(function(){
	$('form').sendFormLP({
		toEmail: 'sprokopyak96@mail.ru',
        fromEmail: 'info@ukodanky.cz',
		interval: 9000
	});
});
