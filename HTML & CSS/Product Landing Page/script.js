window.onscroll = function() {
    scrollFunction()
};


function scrollFunction() {
    var mediaqueryList = window.matchMedia("(min-width: 900px)");
    if(mediaqueryList.matches) {
        if (document.documentElement.scrollTop < 200) {
            document.getElementById("nav-bar").style.backgroundColor = "rgba(34, 34, 34, 0.623)";
        } else {
            document.getElementById("nav-bar").style.backgroundColor = "rgb(24, 23, 23)";
        }
    }
    //console.log(document.documentElement.scrollTop)
}
$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<img class='fas fa-bars' src='img/menuBarras.png' width='80px' height='40px' style='transition: all 1s ease-in;'>");
            $(this).find("a").css("padding-left","0")
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<img class='fas fa-times' src='img/cruz.png' width='40px' height='30px' style='transition: all 1s ease-in;'>");
            $(this).find("a").css("padding-left","20px")
        }
    });
});