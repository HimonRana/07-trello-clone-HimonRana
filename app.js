/*$(function() {
    
    $(this).find('article').draggable();
}); */

$(function() {
  $("#sortable").sortable({
    connectWith: "is-auto"
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
  $(".btn").on("click", function() {
    var addCard = $("textarea").val();

    $("ul").append('<li class="cardList"><article class="column"><div class="message-header"><button class="delete" aria-label="delete"></button></div><div class="message-body">'+ addCard +'</div></article></li>');
  });

  $('#sortable').on('click', '.delete', function(){
      $('ul').remove();
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