$(document).ready(function () {
    // save the date
    $(".simpan").on("click", function () {
        console.log($('.tanggal').html());
        $('.tanggal').select();
        navigator.clipboard.writeText($('.tanggal').html())
        alert("Tanggal telah disalin")
    })




})

