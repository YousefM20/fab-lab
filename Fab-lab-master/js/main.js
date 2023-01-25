(function($){"use strict"
$(window).on('load',function(){$("#preloader").delay(600).fadeOut();});$('body').scrollspy({target:'#nav',offset:$(window).height()/2});$("#nav .main-nav a[href^='#']").on('click',function(e){e.preventDefault();var hash=this.hash;$('html, body').animate({scrollTop:$(this.hash).offset().top},600);});$('#back-to-top').on('click',function(){$('body,html').animate({scrollTop:0},600);});$('#nav .nav-collapse').on('click',function(){$('#nav').toggleClass('open');});$('.has-dropdown a').on('click',function(){$(this).parent().toggleClass('open-drop');});$(window).on('scroll',function(){var wScroll=$(this).scrollTop();wScroll>1?$('#nav').addClass('fixed-nav'):$('#nav').removeClass('fixed-nav');wScroll>700?$('#back-to-top').fadeIn():$('#back-to-top').fadeOut();});$('.work').magnificPopup({delegate:'.lightbox',type:'image'});$('#about-slider').owlCarousel({items:1,loop:true,margin:15,nav:true,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:true,autoplay:true,animateOut:'fadeOut'});$('#testimonial-slider').owlCarousel({loop:true,margin:15,dots:true,nav:false,autoplay:true,responsive:{0:{items:1},992:{items:2}}});})(jQuery);

    // set up text to print, each item in array is new line
    //home typed Text
    var aText = new Array(
        "Welcome to",
        "Fabrication",
        "Laboratory",
        ""
        );
        var iSpeed = 150; // time delay of print out
        var iIndex = 0; // start printing array at this posision
        var iArrLength = aText[0].length; // the length of the text array
        var iScrollAt = 20; // start scrolling up at this many lines
         
        var iTextPos = 0; // initialise text position
        var sContents = ''; // initialise contents variable
        var iRow; // initialise current row

        function typewriter()
        {
         sContents =  ' ';
         iRow = Math.max(0, iIndex-iScrollAt);
         var destination = document.getElementById("typedtext");
         
         while ( iRow < iIndex ) {
          sContents += aText[iRow++] + '<br>';
         }
         destination.innerHTML = sContents  + aText[iIndex].substring(0, iTextPos) + "_";
         if ( iTextPos++ == iArrLength ) {
          iTextPos = 0;
          iIndex++;
          if ( iIndex != aText.length ) {
           iArrLength = aText[iIndex].length;
           setTimeout("typewriter()",200);
          }
         } else {
          setTimeout("typewriter()", iSpeed);
         }
        };
        

        

        window.addEventListener("load", function(){
            typewriter();
        });
        //end type writer
        // 
        //DARK MODE
        //
        var choice = true;
        var darkButt = document.querySelector('.dark')
        var h2Clr = document.querySelectorAll('h2')
        var h3Clr = document.querySelectorAll('h3')
        var h4Clr = document.querySelectorAll('h4')
        var h6Clr = document.querySelectorAll('h6')
        var about = document.querySelectorAll('.about');
        var h4hov = document.querySelectorAll('.h4hov');
        var abouthov = document.querySelectorAll('.abouthov');
        var team = document.querySelectorAll('.team')
        var arrowTeam = document.querySelectorAll('.arrow')
        var teamspan = document.querySelectorAll('.teamspan')
        var counterTeam = document.querySelector('.counter')
        var footer = document.querySelector('footer')
const toggle = document.getElementById('toggleDark');

        for (let i = 0; i < abouthov.length; i++){
            abouthov[i].addEventListener("mouseenter", function(){
                    h4hov[i].style.color = "#fff";
            });
            abouthov[i].addEventListener("mouseleave", function(){
                h4hov[i].style.color = "#10161a";
                
            });
        }

        toggle.addEventListener("click" , function(){
            this.classList.toggle('bi-moon');
            if(choice == true)
            {
                document.querySelector('body').style.background = '#1c1d21';
                document.querySelector('body').style.color = '#868f9b';
                document.querySelector('header').style.background = '#121212'; 
                counterTeam.style.color = '#fff'
                for (let i = 0; i < h2Clr.length; i++){
                    h2Clr[i].style.color = '#fff';

                }
                for (let i = 0; i < h3Clr.length; i++){
                    h3Clr[i].style.color = '#fff';

                }
                for (let i = 0; i < h4Clr.length; i++){
                    h4Clr[i].style.color = '#fff';

                }
                for (let i = 0; i < h6Clr.length; i++){
                    h6Clr[i].style.color = '#fff';

                }
                for (let i = 0; i < about.length; i++){
                    about[i].classList.add('about2');
                    about[i].classList.remove('about3');
                    }
                    for (let i = 0; i < abouthov.length; i++){
                        abouthov[i].addEventListener("mouseenter", function(){
                                h4hov[i].style.color = "#10161a";
                        });
                        abouthov[i].addEventListener("mouseleave", function(){
                            h4hov[i].style.color = "#fff";
                            
                        });
                    }
                for (let i = 0; i < team.length; i++){
                    team[i].style.background = '#10161a';
                    team[i].style.color = '#fff';
                    team[i].addEventListener("mouseenter", function(){
                        teamspan[i].style.color = '#fff';
                    });
                    team[i].addEventListener("mouseleave", function(){
                        teamspan[i].style.color = '#fff';
                    });         
                }
                for (let i = 0; i < arrowTeam.length; i++){
                    arrowTeam[i].style.color = '#fff';

                }
                footer.style.background = '#2d2d2d'
                footer.style.color = '#fff'

                document.querySelector('body').style.transition = '.8s ease-in-out';
                document.querySelector('header').style.transition = '.8s ease-in-out';
                toggle.style.color = '#fff';
                
                choice = false;
            }
            else
            {
                choice = true;
                document.querySelector('body').style.background = '#fff'; 
                document.querySelector('body').style.color = '#555a61'; 
                document.querySelector('header').style.background = '#fff';
                counterTeam.style.color = '#10161a'

                for (let i = 0; i < h2Clr.length; i++){
                    h2Clr[i].style.color = '#10161a';

                }
                for (let i = 0; i < h3Clr.length; i++){
                    h3Clr[i].style.color = '#10161a';

                }
                for (let i = 0; i < h4Clr.length; i++){
                    h4Clr[i].style.color = '#10161a';

                }
                for (let i = 0; i < h6Clr.length; i++){
                    h6Clr[i].style.color = '#10161a';
                }
                for (let i = 0; i < about.length; i++){
                    about[i].classList.remove('about2');
                    about[i].classList.add('about3');
                }
                for (let i = 0; i < abouthov.length; i++){
                    abouthov[i].addEventListener("mouseenter", function(){
                            h4hov[i].style.color = "#fff";
                    });
                    abouthov[i].addEventListener("mouseleave", function(){
                        h4hov[i].style.color = "#10161a";
                        
                    });
                }
                for (let i = 0; i < team.length; i++){
                    team[i].style.background = '#f4f4f4';
                    team[i].style.color = '#10161a';
                    team[i].addEventListener("mouseenter", function(){
                        teamspan[i].style.color = '#fff';
                    });
                    team[i].addEventListener("mouseleave", function(){
                        teamspan[i].style.color = '#10161a';
                    });                    
                }
                for (let i = 0; i < arrowTeam.length; i++){
                    arrowTeam[i].style.color = '#10161a';

                }
                footer.style.background = '#1c1d21'
                footer.style.color = '#555a61'
                document.querySelector('body').style.transition = '.8s ease-in-out';
                toggle.style.color = '#000';
            }            
        });
        //
        //END DARK MODE
        //
        // 
        // Header
        // 
        header = document.querySelector('header');
var lastScrollTop = 0;

window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        header.style.top = "-90px";
    } else {
        header.style.top = "0px";
    }
    lastScrollTop = scrollTop;
});
// const lil = document.querySelectorAll(".links");
// const secc = document.querySelectorAll("section");
// function activeMenu(){
//     let len=secc.length;
//     while(--len && window.scrollY + 97 < secc[len].offsetTop){}
//     lil.forEach(ltx => ltx.classList.remove("active"));
//     lil[len].classList.add("active");

// }
// activeMenu();
// window.addEventListener("scroll".activeMenu);
// let sect = document.querySelectorAll('section');
// let navlnks= document.querySelectorAll('header .nav-butt ul li a');
// window.onscroll = () =>{
//     sect.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
//         if(top >= offset && top < offset + height){
//             navlnks.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelectorAll('header .nav-butt ul li a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };
        // 
        // END Header
        //