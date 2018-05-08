window.onload=function () {

    const countries = [

        { name: "Canada", continent: "North America", cities: ["Calgary","Montreal","Toronto"], photos: ["canada1.jpg","canada2.jpg","canada3.jpg"] },

        { name: "United States", continent: "North America", cities: ["Boston","Chicago","New York","Seattle","Washington"], photos: ["us1.jpg","us2.jpg"] },

        { name: "Italy", continent: "Europe", cities: ["Florence","Milan","Naples","Rome"], photos: ["italy1.jpg","italy2.jpg","italy3.jpg","italy4.jpg","italy5.jpg","italy6.jpg"] },

        { name: "Spain", continent: "Europe", cities: ["Almeria","Barcelona","Madrid"], photos: ["spain1.jpg","spain2.jpg"] }

    ];
    var container = document.getElementsByClassName("flex-container");
    container[0].innerHTML ='<div class="item"> </div>'+'<div class="item"></div>'+'<div class="item"> </div>'+'<div class="item"></div>';
    var items =document.getElementsByClassName("item");
    for( x=0 ;x<4;x++){
        a = '';
        a += '<h2>'+ countries[x].name + '</h2>';
        a += '<p>'+countries[x].continent +'</p >';
        b ='';
        b +='<h3>Cities</h3>';
        for( y=0;y<countries[x].cities.length;y++){
            b += '<p>'+countries[x].cities[y]+'</p >';
        }
        a += '<div class="inner-box">'+b+'</div>';
        c ='';
        c +='<h3>Popular Photos</h3>';
        for( y =0;y<countries[x].photos.length;y++){
            src = "images/"+countries[x].photos[y];
            c +='< img class="photo" src='+src+'>';
        }
        a +='<div class="inner-box">'+c+'</div>';
        a +='<button>Visit</button>';
        items[x].innerHTML=a;
    }
};