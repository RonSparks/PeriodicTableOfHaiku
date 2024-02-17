$(document).ready(function() 
{
  $('.clickable-element').click(function() 
    {
      var bioText = $(this).data('bio');
      $('.bio-content p').text(bioText);
      $('#lightbox-overlay').fadeIn();
    }
  );

  $('#lightbox-overlay').click(function() 
    {
      $(this).fadeOut();
    }
  );

  $('.bio-content').click(function(event) 
    {
      event.stopPropagation();
    }
  );
});
