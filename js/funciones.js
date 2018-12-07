(function() {if ($(window).width() < 767) {
    $('.grid-noticias_more .row').addClass('static-carousel owl-carousel');
}
})();

(function() {
    $('#consulta').val('');
    $('#caso').val('');
    $('#evento').val('');
    $('#acciones').val('');
    $('#mensaje').val('');
    $('#escrito').val('');
    $('#observaciones').val('');
})();

// (function() {
//     data = sessionStorage.getItem('indicaciones');
//     if(data == "on") {
//         $('#pills-noticias-tab, #pills-noticias').removeClass('active show')
//         $('#pills-indicaciones-tab, #pills-indicaciones').addClass('active show')
//     }
// })();

// Bar btns
$('.iconBar').click(function() {
    if($(this).hasClass('activeBar')){
        $('.iconBar').removeClass('activeBar');
        $('.menuBarBox').removeClass('openBox');
    } else {
        $('.iconBar').removeClass('activeBar');
        $('.menuBarBox').removeClass('openBox');
        $(this).addClass('activeBar');
        $(this).next().addClass('openBox');
    }
})
$('.closeBox').click(function() {
    $('.iconBar').removeClass('activeBar');
    $('.menuBarBox').removeClass('openBox');
})

//Nav
$('.menu').click(function() {
    $('.side').toggleClass('openSidebar');
})    
$('.closeMenuMobile').click(function() {
    $('.side').removeClass('openSidebar');
})  
$('.goToNoticiasPage').click(function () {
    window.location.href = "noticias-page.html"
})
$('.goToOportunidades').click(function () {
    window.location.href = "oportunidades-page.html"
})
$('.goToNewCaso').click(function () {
    window.location.href = "casos-nuevo.html"
})
$('.goToCasoPage').click(function () {
    window.location.href = "casos-page.html"
})
$('.goToRevista').click(function () {
    window.location.href = "revista.html"
})
$('.goToNoticias').click(function () {
    window.location.href = "informacion.html"
    sessionStorage.setItem('indicaciones', '');
})
$('.goToGalleryPage').click(function () {
    window.location.href = "galeria-page.html"
})
$('.goToGallery').click(function () {
    window.location.href = "galeria.html"
})
$('.goToJob').click(function () {
    window.location.href = "oportunidades-page.html"
})
// $('.goToIndications').click(function () {
//     window.location.href = "informacion.html"
//     sessionStorage.setItem('indicaciones', 'on');
// })


$('.tooltipBox').click(function() {
    $(this).find('.tooltipItem').toggleClass('hide');
})

$('.userInfo__container').click(function() {
    $('.optionsBox').toggleClass('showOptions')
})

$('.bigP').click(function() {
    $(this).toggleClass('popOpen')
})

$('.share').click(function() {
    $(this).find('.redes').toggleClass('hide')
})

$('.grid-oportunidades_item-descripcion').click(function() {
    $(this).toggleClass('openDescription')
})

$('.btnPostula').click(function() {
    $('.notification_success').addClass('showNotification')
    $(this).addClass('hide')
    $('.btn-form-blue_disabled').removeClass('hide')
})


// Textarea countdown & autoresize
$('.autoExpand').on('input', function () {
    let actualLenght = $(this).val().length
    $(this).siblings(".countdown").children().html(actualLenght)
})
$(document)
    .on('focus.autoExpand', 'textarea.autoExpand', function(){
        var savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
    })
    .on('input.autoExpand', 'textarea.autoExpand', function(){
        var minRows = this.getAttribute('data-min-rows')|0, rows;
        this.rows = minRows;
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
        this.rows = minRows + rows;
    });


// Dashboard btns
$('.toggleOpen').click(function() {
    $('.dashboard_oportunidades, .dashboard_honorarios').toggleClass('openContainer');
})


// Carrusel

$('.static-carousel').owlCarousel({
    items:1,
    nav:true,
    dots:true,
});
$('.owl-prev').addClass('active');
$('.autoCarousel').owlCarousel({
    items:1,
    loop:true,
    nav:true,
    autoplay:true,
    autoplayTimeout:7000,
    autoplayHoverPause:true
});

let owl = $('.static-carousel');
owl.on('changed.owl.carousel', function(event) {
    $('.owl-prev').toggleClass('active');
    $('.owl-next').toggleClass('active');
})

$('.dismissItemCarrusel').click(function() {
    var indexToRemove = 2;
    remove.owl.carousel(indexToRemove)
})

$('.filtrar').click(function() {
    $('.filterContainer').addClass('activeFilter')
})
$('.desactiveFilter').click(function() {
    $('.filterContainer').removeClass('activeFilter');
});

//Check all

$('.checkAll').click(function() {
    if(this.checked) {
        $(':checkbox').attr('checked', true); 
    } else {
        $(':checkbox').attr('checked', false); 
    }
});
$('.toggleCheck').click(function() {
    $('.toggleCheck h6').toggleClass('hide');
    $('.accCheck').click();
});

// Funcionamiento filtros

$('.filterBox label').click(function() {
    $('.filterBox label').removeClass('activeLabel');
    $(this).addClass('activeLabel');
})
$('.tab-innerBox li').click(function() {
    let mes = $(this).text()
    $(this).closest('.tab').find('label').text(mes)
})

// Funcionamiento input password
$('.changePass input').focusin(function() {
    $(this).attr('type', 'text');
})
$('.changePass input').focusout(function() {
    $(this).attr('type', 'password');
})

// Galeria lightbox
$('.grid .item').click(function() {
    let url = $(this).css('background-image');
    let src = url.slice(5, -2)
    $("#modal-galeria .galeriaModal_img").attr('src', src)
})

// Relleno fake input

$("#archivoModal").on("change", function () {
    let fakeFile = document.getElementById("archivoModal").files[0].name;
    $("#inputFake").text(fakeFile);
})
$("#adjuntarImg").on("change", function () {
    let fakeFile = document.getElementById("adjuntarImg").files[0].name;
    $("#fakeInputImg").text(fakeFile);
})
$("#adjuntarCV").on("change", function () {
    let fakeFile = document.getElementById("adjuntarCV").files[0].name;
    $("#fakeInputCV").text(fakeFile);
})

//Efecto buscador
$("#searchBox").on("keyup", function () {
    if ($(this).val().length >= 3) {
        $('.resultados_sin').addClass('hide')
        $('.notificacion').removeClass('hide')
    }
})

//Efecto subir documentos
$("#subirDoc").on("change", function () {
    $('#modal-upDocumento').modal({
        keyboard: false
    })
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    setTimeout(function(){ 
        $('#modal-upDocumento').modal('hide')
    }, 6000);
})

//Msj exito
$('.msjExitoRep').click(function() {
    $(this).closest('.box-form').find('.msjExitoReporte').removeClass('hide');
})
$('.closeReporte').click(function() {
    $(this).closest('.msjExitoReporte').addClass('hide');
})