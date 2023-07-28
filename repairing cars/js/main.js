/* Javascript */
$(function (rating) {
    $(".rating").rateYo({
        rating: 4.5,
        ratedFill: "#FF6433",
        halfStar: true,
        spacing: "3px"
    });
});
$(function (after_rating_text) {
    $(".rating").rateYo()
        .on("rateyo.set", function (e, data) {
            alert("Thank you for rating our work on " + data.rating + "!");
        });
});
$(function () {
    var mixer = mixitup('.blog__list');
})
$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
// =====================================
