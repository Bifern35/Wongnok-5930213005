$(function () {

    var placeid = getUrlParameter('placeid');

    PlaceSearch.Detail(placeid).then(function(data){
        console.log(data);
        $('#gallery').empty();
        $('#placename').html(data.name);        
        $('#address').html(data.address);
        $('#opennow').empty();
        $('#rating').empty();
        $('#phone').html(data.phone);
        for(var i=0;i<data.photos.length;i++){
            if(i==0){
                var slide = 
                '<br><div class="carousel-item active"><img src=' + data.photos[i] + '></div>';
                $('#gallery').append(slide);
            }else{
                var slide =
              '<div class="carousel-item"><img src=' + data.photos[i] + '></div>';  
              $('#gallery').append(slide);
            }
            
        }
        for(var j=0; j<data.rating; j++){
            var rate = 
            '<span class="fa fa-star checked"></span>';
            $('#rating').append(rate);   
        }
        for(var i=0;i<data.photos.length;i++){
            if(i==0){
                var show = 
                '<li class="active" data-slide-to='+i+ 'data-target="#demo"></li>';
                $('#slide').append(show);
            }else{
                var show =
                '<lidata-slide-to='+i+ 'data-target="#demo"></li>';
              $('#slide').append(show);
            }
            
        }
        for(var i=0;i<data.open_now;i++){
            if(true){
                var open = 
                '<font color="#004d00"><b>Open Now</b></font>';
                $('#opennow').append(open);
            }else{
                var open =
              '<font color="#990000"><b>Close Now</b></font>';  
              $('#gopennow').append(open);
            }
            
        }
    });


    //Get URL parameter
    function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }

});