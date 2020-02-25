$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse')

    /*Click event on toggle menu*/
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    /* OWl Carousel for Blog*/
    //$('owl-carousel').owlCarousel();
})