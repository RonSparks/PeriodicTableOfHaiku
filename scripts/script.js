  function showPoem(param) {
    // Get the lightbox overlay and content elements
    var lightboxOverlay = document.getElementById('lightbox-overlay');
    var lightboxContent = document.getElementById('lightbox-content');

    // Set the text based on the parameter
    lightboxContent.innerHTML = "<img src='./img/iscifistoryLogo.gif' alt='original logo for iSciFiStory.com'><br/><p> " + getHaikuForElement(param) + "</p>";

    // Display the lightbox
    lightboxOverlay.style.display = 'flex';
  }

  function closePoem() {
    // Hide the lightbox
    document.getElementById('lightbox-overlay').style.display = 'none';
  }

  function getHaikuForElement(elementNum) 
        {
          const haiku = [];
          haiku[0] = "";
          haiku[1] = "<br/><br/><b>Hydrogen</b><br/><br/>two-thirds of water<br>a big part of all of us<br>and the bones of stars<br/><br/><br/>&nbsp;&nbsp;&nbsp;<a href='mailto:davidkm@gsa.state.al.us'>David C. Kopaska-Merkel</a>&nbsp;<p/>";
          haiku[2] = "<br/><br/><b>2 Helium</b><br/><br/>lighter than dream<br/>flight between worlds<br/><br/>Deja Thoris<br/>serial rescues in<br/>afternoon sun<br/><br/>&nbsp;&nbsp;&nbsp;<a href='mailto:MMSerpento@aol.com'>Mary Margaret Serpento</a>&nbsp;&copy;2001<p>";
          haiku[3] = "<br/><br/><b>3 Lithium</b><br/><br/>battery charge<br/>- and great to slice!<br/><br/>&nbsp;&nbsp;&nbsp;<a href='mailto:stavrogin@tiscalinet.it'>Stavrogin</a>&nbsp;<p>";
          haiku[4] = "<br/><br/><b>4 Beryllium</b><br/><br/>stable conductor<br/>detecting radiation<br/>reflecting neutrons<br/><br/>&nbsp;&nbsp;&nbsp;<a href='mailto:viki@pacbell.net'>viki</a>&nbsp;<p>";
          haiku[5] = "<br/><br/><b>5 Boron</b><br/><br/>Brown propellant gives<br/>roadside help, but abrasive<br/>rubs us the wrong way<br/><br/>&nbsp;&nbsp;&nbsp;<a href='mailto:karenr2@mediaone.net'>Karen A. Romanko</a>&nbsp;<p>";
          haiku[6] = "<br/><br/><b>6 Carbon</b><br/><br/>Dead stars reborn<br/>as diamonds, buckeyballs,<br/>and beings<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href='mailto:shal@loc.gov'>Stephanie Hall</a>";
          haiku[7] = "<br/><br/><b>7 Nitrogen</b><br/><br/>the sky's referee,<br/>without its calming effect,<br/>oxygen will burn<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href='mailto:scv@scvs.com'>s.c. virtes</a>";
          haiku[8] = "<br/><br/><b>8 Oxygen</b><br/><br/>Green plants' waste;<br/>Earth's invisible treasure:<br/>now breathe.<br/><br/><a href='mailto:shal@loc.gov'>Stephanie Hall</a>";
          haiku[9] = "<br/><br/><b>9 Fluorine</b><br/><br/>science is risky<br/>so hard to get it alone<br/>but find it and die<br/><br/>&nbsp;&nbsp;<a href='mailto:davidkm@gsa.state.al.us'>David C. Kopaska-Merkel</a>&nbsp;<p/>";
        
          return haiku[elementNum];
       }