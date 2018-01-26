/*$(function() {
    
    $(this).find('article').draggable();
}); */

$(function() {
  $("ul.ul-list1").sortable({
    connectWith: "ul"
  });

  $("ul.ul-list2").sortable({
    connectWith: "ul",
  });

  $("ul.ul-list3").sortable({
    connectWith: "ul",
  });

  /*var message = $(`
    <article class="column">
        <div class="message-header">
            <p>Hello World1</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
    </article>
    `);
*/
  $(".btn1").on("click", function() {
    var addCard = $(".text1").val();

    $("#sortable1").append('<li class="cardList"><article class="column"><div class="message-header"><button class="delete" aria-label="delete"></button></div><div class="message-body">'+ addCard +'</div></article></li>');
  });

  $('.card').on('click', '.delete', function(){
      $(this).closest('li').remove();
  });


  $(".btn2").on("click", function() {
    var addCard = $(".text2").val();

    $("#sortable2").append('<li class="cardList"><article class="column"><div class="message-header"><button class="delete" aria-label="delete"></button></div><div class="message-body">'+ addCard +'</div></article></li>');
  });

  $('.card').on('click', '.delete', function(){
      $(this).closest('li').remove();
  });


  $(".btn3").on("click", function() {
    var addCard = $(".text3").val();

    $("#sortable3").append('<li class="cardList"><article class="column"><div class="message-header"><button class="delete" aria-label="delete"></button></div><div class="message-body">'+ addCard +'</div></article></li>');
  });

  $('.card').on('click', '.delete', function(){
      $(this).closest('li').remove();
  });

});
/*
var carHeader = $(".message-header").val();
var cardMessage = $(".message-body").val();

$("ul").on("click", ".btn", function() {
  $("<article/>", {
    class: "column",
    html:
      '<div class="message-header">' +
      "<p>" +
      $(".message-header").val() +
      "</p>" +
      '<button class="delete" aria-label="delete"></button>' +
      "</div>" +
      '<div class="message-body">' +
      $(".message-body").val() +
      "</div>"
  }).appendTo(".articleColumn");
});
*/