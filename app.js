$(function() {
  $('div.column1, div.column2, div.column3').sortable({
    connectWith: '.column',
    opacity: 0.80,
    revert: true,
    containment: 'document',
    cursor: 'option',
    tolerance: 'pointer',
    placeholder: 'div-columns',
    
  });


  /* Drag around list */
  $('ul.ul-list1, ul.ul-list2, ul.ul-list3').sortable({
    connectWith: 'ul',
    opacity: 0.80,
    revert: true,
    cursor: 'option',
    containment: 'document',
    tolerance: 'pointer',
    placeholder: 'card-List',
  });

  /* EDIT */
  var messageEdit ="";



 /* Title effect, tabs on dialog */
  $('body').effect('bounce');
  $('.info-edit').hide().tabs();
  

  /* Add new list */
  $('.btn1').on('click', function() {
    var addCard = $('.text1').val();
    var clearText = $(this).closest('form');
    clearText.find('input').val('');
    
    $('#sortable1').append('<li class="cardList"><article class="column"><div class="message-header"><p>Date: <input type="text" id="datepicker1"></p><button class="info infoBtn" aria-label="delete">edit</button><button class="delete" aria-label="delete"></button></div><div class="message-body" id="message-edit">'+ addCard +'</div></article></li>');
    $('#datepicker1').datepicker( $.datepicker.regional[ "sv" ] );
    
    $('.info').click( function() {
      $('#infoDialog').dialog();
    });
  });
  

  /*--------------------------------*/

  $('.btn2').on('click', function() {
    var addCard = $('.text2').val();
    var clearText = $(this).closest('form');
    clearText.find('input').val('');
  
    $('#sortable2').append('<li class="cardList"><article class="column"><div class="message-header"><p>Date: <input type="text" id="datepicker2"></p><button class="info infoBtn" aria-label="delete">edit</button><button class="delete" aria-label="delete"></button></div><div class="message-body" id="message-edit">'+ addCard +'</div></article></li>');
    $('#datepicker2').datepicker( $.datepicker.regional[ "sv" ] );
    
    $('.info').click(function() {
      $('#infoDialog').dialog();
    });
  });

  /*--------------------------------*/

  $('.btn3').on('click', function() {
    var addCard = $('.text3').val();
    var clearText = $(this).closest('form');
    clearText.find('input').val('');

    $('#sortable3').append('<li class="cardList"><article class="column"><div class="message-header"><p>Date: <input type="text" id="datepicker3"></p><button class="info infoBtn" aria-label="delete">edit</button><button class="delete" aria-label="delete"></button></div><div class="message-body" id="message-edit">'+ addCard +'</div></article></li>');
    $('#datepicker3').datepicker( $.datepicker.regional[ "sv" ] );

    $('.info').click( function() {
      $('#infoDialog').dialog();
    });
  });

  /* DELETE LISTS */
  $('.card').on('click', '.delete', function(){
    $(this).closest('li').effect('explode').remove();
  });

  /* WIDGET */

  $.widget('custom.progressbar', {

    _create: function () {
      this._refresh();
    },
    _refresh: function () {
      $('html').css('background-color', this.options.color)
    },
    change: function (value) {
      this.options.color = this.options.color === 'rgb(73, 88, 79)' ? 'rgb(190, 190, 190)' : 'rgb(73, 88, 79)' ;
      this._refresh();
    }
  });
  
  $('html').progressbar();
  
  
  $('html').on('click', '.colorBtn', function() {
    $('html').progressbar('change');
  })
});