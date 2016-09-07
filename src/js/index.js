(function () {

  console.log('WOLOX');


  $('#form').submit(function() {
    $.post(
      'http://alimentar-mailing.herokuapp.com/mailing',
      $(this).serialize()
    ).done(function() {
      $.growl.notice({ title: 'Gracias por enviarnos tu contacto!', message: '#LaComidaSeComparte' });
      $('#form').trigger('reset');
    });
    return false;
  });
})();

