$(document).ready(function () {
    $(".hamburguer").click(function () {
        $(this).toggleClass("active");
        $(".nav-list-desktop").toggleClass("active");
      });
    }); 