﻿$(".cot1").click(function () {
    $("#d2").css('display', 'block')
    $("#d3").css('display', 'none')
    $("#d4").css('display', 'none')
    $("#d5").css('display', 'none')
    $(".cot1").css('background-image', 'linear-gradient(135deg,#b7e4c7, #ffff3f)')
    $(".cot2").css('background-image', 'linear-gradient(135deg,#ccdbfd, #ffccd5)')
    $(".cot3").css('background-image', 'linear-gradient(135deg,#ccdbfd, #ffccd5)')
    $(".cot4").css('background-image', 'linear-gradient(135deg,#ccdbfd, #ffccd5)')
})
$(".cot2").click(function () {
    $("#d2").css('display', 'none')
    $("#d3").css('display', 'block')
    $("#d4").css('display', 'none')
    $("#d5").css('display', 'none')
    $(".cot1").css('background-image', 'linear-gradient(135deg,#ccdbfd, #ffccd5)')
    $(".cot2").css('background-image', 'linear-gradient(135deg,#b7e4c7, #ffff3f)')
    $(".cot3").css('background-image', 'linear-gradient(135deg,#ccdbfd, #ffccd5)')
    $(".cot4").css('background-image', 'linear-gradient(135deg,#ccdbfd, #ffccd5)')
})
$(".cot3").click(function () {
    $("#d2").css('display', 'none')
    $("#d3").css('display', 'none')
    $("#d4").css('display', 'block')
    $("#d5").css('display', 'none')
    $(".cot1").css('background-image', 'linear-gradient(135deg,#ccdbfd, #ffccd5)')
    $(".cot2").css('background-image', 'linear-gradient(135deg,#ccdbfd, #ffccd5)')
    $(".cot3").css('background-image', 'linear-gradient(135deg,#b7e4c7, #ffff3f)')
    $(".cot4").css('background-image', 'linear-gradient(135deg,#ccdbfd, #ffccd5)')
})
$(".cot4").click(function () {
    $("#d2").css('display', 'none')
    $("#d3").css('display', 'none')
    $("#d4").css('display', 'none')
    $("#d5").css('display', 'block')
    $(".cot1").css('background-image', 'linear-gradient(135deg,#ccdbfd, #ffccd5)')
    $(".cot2").css('background-image', 'linear-gradient(135deg,#ccdbfd, #ffccd5)')
    $(".cot3").css('background-image', 'linear-gradient(135deg,#ccdbfd, #ffccd5)')
    $(".cot4").css('background-image', 'linear-gradient(135deg,#b7e4c7, #ffff3f)')
})
$(".file").click(function () {
    $("#popup").css('display', 'flex')
})
$("#cl").click(function () {
    $("#popup").css('display', 'none')
})