  function showPoem(param) {
    // Get the lightbox overlay and content elements
    var lightboxOverlay = document.getElementById('lightbox-overlay');
    var lightboxContent = document.getElementById('lightbox-content');

    // Set the text based on the parameter
    lightboxContent.innerHTML = "<img src='./img/iscifistoryLogo.gif' width='95%' alt='original logo for iSciFiStory.com'><p/> " + getHaikuForElement(param) + "<p/>";

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
          haiku[1] = "<b>1 Hydrogen</b><br/><br/>two-thirds of water<br>a big part of all of us<br>and the bones of stars<br/><br/><br/>&nbsp;&nbsp;&nbsp;<a href='mailto:davidkm@gsa.state.al.us'>David C. Kopaska-Merkel</a>&nbsp;<p/>";
          haiku[2] = "<b>2 Helium</b><br/><br/>lighter than dream<br/>flight between worlds<br/><br/>Deja Thoris<br/>serial rescues in<br/>afternoon sun<br/><br/>&nbsp;&nbsp;&nbsp;<a href='mailto:MMSerpento@aol.com'>Mary Margaret Serpento</a>&nbsp;&copy;2001<p>";
          haiku[3] = "<b>3 Lithium</b><br/><br/>battery charge<br/>- and great to slice!<br/><br/>&nbsp;&nbsp;&nbsp;<a href='mailto:stavrogin@tiscalinet.it'>Stavrogin</a>&nbsp;<p>";
          haiku[4] = "<b>4 Beryllium</b><br/><br/>stable conductor<br/>detecting radiation<br/>reflecting neutrons<br/><br/>&nbsp;&nbsp;&nbsp;<a href='mailto:viki@pacbell.net'>viki</a>&nbsp;<p>";
          haiku[5] = "<b>5 Boron</b><br/><br/>Brown propellant gives<br/>roadside help, but abrasive<br/>rubs us the wrong way<br/><br/>&nbsp;&nbsp;&nbsp;<a href='mailto:karenr2@mediaone.net'>Karen A. Romanko</a>&nbsp;<p>";
          haiku[6] = "<b>6 Carbon</b><br/><br/>Dead stars reborn<br/>as diamonds, buckeyballs,<br/>and beings<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href='mailto:shal@loc.gov'>Stephanie Hall</a>";
          haiku[7] = "<b>7 Nitrogen</b><br/><br/>the sky's referee,<br/>without its calming effect,<br/>oxygen will burn<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href='mailto:scv@scvs.com'>s.c. virtes</a>";
          haiku[8] = "<b>8 Oxygen</b><br/><br/>Green plants' waste;<br/>Earth's invisible treasure:<br/>now breathe.<br/><br/><a href='mailto:shal@loc.gov'>Stephanie Hall</a>";
          haiku[9] = "<b>9 Fluorine</b><br/><br/>science is risky<br/>so hard to get it alone<br/>but find it and die<br/><br/>&nbsp;&nbsp;<a href='mailto:davidkm@gsa.state.al.us'>David C. Kopaska-Merkel</a>&nbsp;<p/>";
          haiku[10] = "<b>10 Neon</b><p/>buzzing florescence ...<br/>asteroid miners weave<br/>  out the cavern door<br/><br/>    gK &copy; 2001.01.27";
          haiku[11] = "<b>11 Sodium</b><p/>A spring snow<br/>Upon my edged tongue<br/>I smile<br/><br/><a href='mailto:eggsalad@mail.com'>Jonathan Lee</a>";
          haiku[12] = "<b>12 Magnesium</b><p/>Magnesium flares<br/>Silvery-white<br/>When called quicklime<p/><a href='mailto:sdr633@hotmail.com'>Stephen D. Rogers</a>";
          haiku[13] = "<b>13 Aluminum</b><p/>helps in the kitchen<br/>we don't find it everywhere<br/>makes us forget stuff<p/><a href='mailto:davidkm@gsa.state.al.us'>David C. Kopaska-Merkel</a>";
          haiku[14] = "<b>14 Silicon</b><p/>silicon enhanced . . .<br/>mind-meld with my computer<br/>our modems exchange<p/><a href='mailto:gradidge@mb.sympatico.ca'>ushi </a>";
          haiku[15] = "<b>15 Phosphorus</b><p/>steeped in water and<br/>mystery -- until exposed<br/>white phosphorus glare<p/><a href='mailto:scv@scvs.com'>s.c. virtes</a>";
          haiku[16] = "<b>16 Sulfur</b><p/>Pharmaceuticals'<br/>friend in antibiotics<br/>makes me allergic<p/><a href='mailto:karenr2@mediaone.net'>Karen A. Romanko</a>";
          haiku[17] = "<b>17 Chlorine</b><p/>sea-change<br/>from salt of the earth<p/>mustard<br/>frieze of global fire<p/>twofold<br/>fresh water colours<p/><a href='mailto:MMSerpento@aol.com'>Mary Margaret Serpento</a> &copy;2001";
          haiku[18] = "<b>18 Argon</b><p/>Trapped inside glass tubes<br/>glowing filaments slumber--<br/>idle argon waits.<p/><a href='mailto:Arion214@aol.com'>Pam Smith</a>";
          haiku[19] = "<b>19 Potassium</b><p/>The laughing chemist,<br/>tasting the salts of the earth:<br/>ashes, ashes.<p/><div style='width:350px;'><i>[Sir Humphry Davy is best remembered as the chemist who investigated the properties of nitrous oxide ('laughing gas') and its effects, by experimenting on himself. He entertained friends at parties by providing the gas to inhale. He also discovered several elements as an early experimenter with electrolysis, beginning with potassium and sodium in 1807. Since poets, including Coleridge, were among those in Davy's circle, I can't help but think he would have enjoyed the idea of celebrating the elements with poetry. The name for potassium is derived from 'potash' from which it was isolated.]</i><p/><a href='https://web.archive.org/web/20041227031445/mailto:shal@loc.gov'>Stephanie Hall</a></div>";
          haiku[20] = "<b>20 Calcium</b><div align='left'>Festering cows<br/>puss and antibiotics<br/>&nbsp;got milk, kids?<p/><a href='mailto:ron@ron.sparks+ptoe@gmail.com'>Ron Sparks</a> &copy; 02/04/01</div>";
          haiku[21] = "<b>21 Scandium</b><p/>snow white Norse powder<br/>getting there was half the fun-<br/>makes you stronger, Al<p/><i>[Makes Aluminum stronger- the Russians used it in their MiG fighters]</i><p/><a href='mailto:snakedoctor@earthlink.net'>loyd myatt</a>";
          haiku[22] = "<b>22 Titanium</b><p/>this skin<br/>glistening hardness-<br/>titanium<p/><a href='mailto:lucien2@juno.com'>lucien</a>";
          haiku[23] = "<b>23 Vanadium</b><p/>vanadium oxide peeps<br/>through surface from cool star's deep<br/>convective mixing.<p/><a href='mailto:dianeturnshek@home.com'>Starlady </a>";
          haiku[24] = "<b>24 Chromium</b><p/>nose ring shine<br/>the cyberpunk smiles-<br/>chromium<p/><a href='mailto:lucien2@juno.com'>lucien</a>";
          haiku[25] = "<b>25 Manganese</b><p/>strong bones<br/>in humans<br/>and steel<p/><div style='width:350px;'><i>Manganese is needed for healthy skin, bone, and cartilage formation, as well as glucose tolerance. It also helps activate superoxide dismutase (SOD)-an important antioxidant enzyme. (from <a href='http://www.mothernature.com/ency/Supp/Manganese.asp'>here</a>)<p/>Manganese is essential to iron and steel production by virtue of its sulfur-fixing, deoxidizing, and alloying properties. Steelmaking, including its ironmaking component, accounts for most domestic manganese demand, presently in the range of 85% to 90% of the total. (from <a href='http://minerals.usgs.gov/minerals/pubs/commodity/manganese/'>here</a>)</i></div><a href='https://web.archive.org/web/20041225043201/mailto:Mark.Dowdey@wcom.com'>Mark Dowdey</a>";
          haiku[26] = "<b>26 Iron</b><p/>prehistoric gift<br/>splashing history currents<br/>  leaving flakes of rust<p/><a href='mailto:dkolodji@aol.com'>Deborah P. Kolodji</a>";
          haiku[27] = "<b>27 Cobalt</b><p/>sky fallen goblin --<br/>fierce eyes flash cobalt blue<br/>on runic dagger<p/><div style='width:350px;'><i>[Cobalt comes from the German word 'Kobold' meaning 'goblin' or evilspirit. Brittle but hard cobalt is found in meteorites and has magnetic properties of iron.]</i></div><p/><a href='mailto:gradidge@mb.sympatico.ca'>ushi</a>";
          haiku[28] = "<b>28 Nickel</b><p/>under the granite<br/>of the Canadian Shield-<br/>deep nickel shines<p/><div style='width:350px;'><i>( Nickel-a hard silvery-white metal found in igneous rocks and meteorites. From Swedish nikel, which means devil )</i></div><p/><a href='mailto:lucien2@juno.com'>lucien</a>";
          haiku[29] = "<b>29 Copper</b><p/>on my backbone<br/>songs of civilization-<br/>copper<p/><a href='mailto:lucien2@juno.com'>lucien</a>";
          haiku[30] = "<b>30 Zinc</b><p/>galvanized iron,<br/>cosmetics, preservatives,<br/>a salt, and batteries.<p/><a href='mailto:ksmsg02@tamuk.edu'>Mike</a>";
          haiku[31] = "<b>31 Gallium</b><p/>generic metal<br/>until prodded, excited<br/>melting in your hand<p/><a href='mailto:scv@scvs.com'>s.c. virtes</a>";
          haiku[32] = "<b>32 Germanium</b><p/>organogermanium<br/>chemotherapy agent -<br/>the quiet bacteria<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001";
          haiku[33] = "<b>33 Arsenic</b><p/>still welling up, stiff-necked<br/>beside the old claim; morning glass<br/>of arsenic, straight laced<p/><a href='mailto:MMSerpento@aol.com'>Mary Margaret Serpento</a> &copy;2001";
          haiku[34] = "<b>34 Selenium</b><p/>in quiet moonlight<br/>a tiny breath is felt-<br/>selenium<p/><div style='width:350px;'><i>( Selenium- a nonmetallic element used in photoelectric cells. From Greek selene-which means moon. )</i></div><p/><a href='mailto:lucien2@juno.com'>lucien</a>";
          haiku[35] = "<b>35 Bromine</b><p/>This fuming, toxic liquid<br/>dark red, stinking, fetid:<br/>Satan's favorite brew.<p/><a href='mailto:Arion214@aol.com'>PamSmith</a>";
          haiku[36] = "<b>36 Krypton</b><p/>so vulnerable --<br/>this frail tube connecting<br/>points of steel<p/><div style='width:350px;'><i>[used with argon as a low-pressure filling gas for fluorescent lights]</i></div><p/><a href='https://web.archive.org/web/20050114004342/mailto:gradidge@mb.sympatico.ca'>ushi</a>";
          haiku[37] = "<b>37 Rubidium</b><p/>magnetohydrodynamic -<br/>rubidium ions<br/>brushing the magnets<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001";
          haiku[38] = "<b>38 Strontium</b><div align='left'>incognito<br/>in calcium’s demesne<br/>&nbsp;radiated bones<br/><br/><a href='mailto:ron@ron.sparks+ptoe@gmail.com'>Ron Sparks</a> &copy; 02/04/01</div>";
          haiku[39] = "";
          haiku[40] = "";
          haiku[41] = "";
          haiku[42] = "";
          haiku[43] = "";
          haiku[44] = "";
          haiku[45] = "";
          haiku[46] = "";
          haiku[47] = "";
          haiku[48] = "";
          haiku[49] = "";
          haiku[50] = "";
          haiku[51] = "";
          haiku[52] = "";
          haiku[53] = "";
          haiku[54] = "";
          haiku[55] = "";
          haiku[56] = "";
          haiku[57] = "";
          haiku[58] = "";
          haiku[59] = "";
          haiku[60] = "";
          haiku[61] = "";
          haiku[62] = "";
          haiku[63] = "";
          haiku[64] = "";
          haiku[65] = "";
          haiku[66] = "";
          haiku[67] = "";
          haiku[68] = "";
          haiku[69] = "";
          haiku[70] = "";
          haiku[71] = "";
          haiku[72] = "";
          haiku[73] = "";
          haiku[74] = "";
          haiku[75] = "";
          haiku[76] = "";
          haiku[77] = "";
          haiku[78] = "";
          haiku[79] = "";
          haiku[80] = "";
          haiku[81] = "";
          haiku[82] = "";
          haiku[83] = "";
          haiku[84] = "";
          haiku[85] = "";
          haiku[86] = "";
          haiku[87] = "";
          haiku[88] = "";
          haiku[89] = "";
          haiku[90] = "";
          haiku[91] = "";
          haiku[92] = "";
          haiku[93] = "";
          haiku[94] = "";
          haiku[95] = "";
          haiku[96] = "";
          haiku[97] = "";
          haiku[98] = "";
          haiku[99] = "";
          haiku[100] = "";
          haiku[101] = "";
          haiku[102] = "";
          haiku[103] = "";
          haiku[104] = "";
          haiku[105] = "";
          haiku[106] = "";
          haiku[107] = "";
          haiku[108] = "";
          haiku[109] = "";
          haiku[110] = "";
          haiku[111] = "";
          haiku[112] = "";
          haiku[113] = "";
          haiku[114] = "";
          haiku[115] = "";
          haiku[116] = "";
          haiku[117] = "";
          haiku[118] = "";

          return haiku[elementNum];
       }