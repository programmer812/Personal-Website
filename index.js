// See More Button in Projects Section

var counter = 0;

$(".see-more-button").on("click", () => {
    if (counter % 2 === 0) {
        $(".see-more-button").html("<i class='fa-solid fa-caret-up'></i>");
        $(".see-more-text").html("See Less");
        $(".extra-cards").slideDown().removeClass("more-cards");
    } else {
        $(".see-more-button").html("<i class='fa-solid fa-caret-down'></i>");
        $(".see-more-text").html("See More");
        $(".extra-cards").slideUp().addClass("more-cards");
    }
    counter++;
})

$(document).ready(() => {
    var currentYear = new Date().getFullYear();
    $(".year").text(currentYear);
})
