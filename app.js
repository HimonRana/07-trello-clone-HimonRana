$(function() {
  


  /* Drag around list */
  $("ul.ul-list1").sortable({
    connectWith: "ul"
  });

  $("ul.ul-list2").sortable({
    connectWith: "ul",
  });

  $("ul.ul-list3").sortable({
    connectWith: "ul",
  });

  /* Open a new Popup-Dialog */
  $('.dialogBtn').click( function() {
    $('#dialog').dialog();
    $(this).addClass('is-loading');
  });


  /* Add new list */
  $('.btn1').on('click', function() {
    var addCard = $('.text1').val();
    var clearText = $(this).closest('form');
    clearText.find('input').val('');
    
    $('#sortable1').append('<li class="cardList"><article class="column"><div class="message-header"><p>Date: <input type="text" id="datepicker1"><button class="info infoBtn" aria-label="delete">edit</button></p><button class="delete" aria-label="delete"></button></div><div class="message-body">'+ addCard +'</div></article></li>');
    $('#datepicker1').datepicker( $.datepicker.regional[ "sv" ] );
    
    $('.infoBtn').click( function() {
      $('#infoDialog').dialog();
    });
  });
  
  
  $('.card').on('click', '.delete', function(){
      $(this).closest('li').remove();
  });

  /*--------------------------------*/

  $('.btn2').on('click', function() {
    var addCard = $('.text2').val();
    var clearText = $(this).closest('form');
    clearText.find('input').val('');

    $('#sortable2').append('<li class="cardList"><article class="column"><div class="message-header"><p>Date: <input type="text" id="datepicker2"></p><button class="info infoBtn" aria-label="delete">edit</button><button class="delete" aria-label="delete"></button></div><div class="message-body">'+ addCard +'</div></article></li>');
    $('#datepicker2').datepicker( $.datepicker.regional[ "sv" ] );
    
    $('.info').click( function() {
      $('#infoDialog').dialog();
    });
  });

  $('.card').on('click', '.delete', function(){
      $(this).closest('li').remove();
  });

  /*--------------------------------*/

  $('.btn3').on('click', function() {
    var addCard = $('.text3').val();
    var clearText = $(this).closest('form');
    clearText.find('input').val('');

    $('#sortable3').append('<li class="cardList"><article class="column"><div class="message-header"><p>Date: <input type="text" id="datepicker3"></p><button class="info infoBtn" aria-label="delete">edit</button><button class="delete" aria-label="delete"></button></div><div class="message-body">'+ addCard +'</div></article></li>');
    $('#datepicker3').datepicker( $.datepicker.regional[ "sv" ] );
    $('.info').click( function() {
      $('#infoDialog').dialog();
    });
  });

  $('.card').on('click', '.delete', function(){
      $(this).closest('li').remove();
  });

});
