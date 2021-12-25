

function navigationButton(){
    $('.navigation-button').click(function(){
        $(".navigation-list-outer-wrapper").slideToggle(400);
    });
}

function hideMenu(){
    $(".about-link").click(function(){
        $(".navigation-list-outer-wrapper").hide();
    })
}

function styling(){

    let window_width = window.outerWidth;
    let window_height = window.outerHeight;

    if(window_height <= 568){
        let mask = document.getElementsByClassName("main-mask");
        let section = document.getElementsByClassName("landing-section");
        mask[0].style.minHeight= "85vh";
        section[0].style.minHeight ="85vh";
        //welcome_caption[0].style.fontSize = "14pt";
    }

    let subcaption = document.getElementsByClassName("content-sub-caption");
    let description = document.getElementsByClassName("content-description-caption")
    let contentSection = document.getElementsByClassName("landing-page-content-section");

    if(window_width>320 && window_width<=768 && window_height == 838){
        contentSection[0].style.marginTop = "8vh";
    }

    let landingPageSection = document.getElementsByClassName("landing-section");
    if(window_width>1860){
        contentSection[0].style.marginTop = "90px"
        //alert(landingPageSection[0].offsetHeight);
    }
   
}

navigationButton();
styling();
cardButtons();