// Modern Periodic Table of Haiku JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the application
  initializePeriodicTable();
  
  // Add keyboard navigation
  addKeyboardNavigation();
  
  // Add touch support for mobile
  addTouchSupport();
});

function initializePeriodicTable() {
  // Add loading animation to elements
  const elements = document.querySelectorAll('.periodic-table > li');
  elements.forEach((element, index) => {
    element.style.animationDelay = `${index * 10}ms`;
    element.classList.add('element-fade-in');
  });
  
  // Populate the elements table
  populateElementsTable();
}

function addKeyboardNavigation() {
  const elements = document.querySelectorAll('.periodic-table > li');
  
  elements.forEach((element, index) => {
    element.setAttribute('tabindex', '0');
    element.setAttribute('role', 'button');
    element.setAttribute('aria-label', `Element ${index + 1}, click to view haiku`);
    
    element.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const elementNumber = index + 1;
        showPoem(elementNumber);
      }
    });
  });
}

function addTouchSupport() {
  // Add touch feedback for mobile devices
  const elements = document.querySelectorAll('.periodic-table > li');
  
  elements.forEach(element => {
    element.addEventListener('touchstart', function() {
      this.style.transform = 'scale(0.95)';
    });
    
    element.addEventListener('touchend', function() {
      this.style.transform = '';
    });
  });
}

function populateElementsTable() {
  const tableBody = document.getElementById('elements-table-body');
  
  elementsData.forEach(element => {
    // Extract author name from the poem
    const authorMatch = element.poem.match(/<a href='[^']*'>([^<]+)<\/a>/);
    const authorName = authorMatch ? authorMatch[1] : 'Unknown Author';
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="element-number">${element.atomicNumber}</td>
      <td class="element-name">${element.name}</td>
      <td class="author-name">${authorName}</td>
    `;
    
    // Add click handler to show poem
    row.addEventListener('click', () => {
      showPoem(element.atomicNumber);
    });
    
    // Add keyboard support
    row.setAttribute('tabindex', '0');
    row.setAttribute('role', 'button');
    row.setAttribute('aria-label', `Element ${element.atomicNumber} - ${element.name} by ${authorName}, click to view haiku`);
    
    row.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showPoem(element.atomicNumber);
      }
    });
    
    tableBody.appendChild(row);
  });
}

// New JSON array for elements (complete)
const elementsData = [
  {
    atomicNumber: 1,
    abbreviation: "H",
    name: "Hydrogen",
    poem: `two-thirds of water<br>a big part of all of us<br>and the bones of stars<br/><br/>&nbsp;&nbsp;&nbsp;<a href='mailto:davidkm@gsa.state.al.us'>David C. Kopaska-Merkel</a>`,
    history: `Hydrogen is the most abundant element in the universe, making up about 75% of its elemental mass. It is found in stars and gas giant planets. On Earth, hydrogen is found in water and in almost all living things. It was first recognized as a distinct element by Henry Cavendish in 1766, who described it as "inflammable air". The name hydrogen comes from the Greek words hydro (water) and genes (creator).`
  },
  {
    atomicNumber: 2,
    abbreviation: "He",
    name: "Helium",
    poem: `lighter than dream<br>flight between worlds<br/><br/>Deja Thoris<br>serial rescues in<br>afternoon sun<br/><br/>&nbsp;&nbsp;&nbsp;<a href='mailto:MMSerpento@aol.com'>Mary Margaret Serpento</a>&nbsp;&copy;2001`,
    history: `Helium was first discovered in the Sun's spectrum during a solar eclipse in 1868 by French astronomer Pierre Janssen and English astronomer Norman Lockyer. It is the second most abundant element in the universe and is used in balloons, deep-sea diving tanks, and as a cooling medium for nuclear reactors and MRI machines. Helium is inert and does not easily form compounds.`
  },
  {
    atomicNumber: 3,
    abbreviation: "Li",
    name: "Lithium",
    poem: `battery charge<br>- and great to slice!<br/><br/>&nbsp;&nbsp;&nbsp;<a href='mailto:stavrogin@tiscalinet.it'>Stavrogin</a>`,
    history: `Lithium was discovered in 1817 by Johan August Arfvedson while analyzing petalite ore. It is the lightest metal and is used in rechargeable batteries for mobile phones, laptops, digital cameras, and electric vehicles. Lithium compounds are also used in mood-stabilizing drugs and in heat-resistant glass and ceramics.`
  },
  {
    atomicNumber: 4,
    abbreviation: "Be",
    name: "Beryllium",
    poem: `stable conductor<br>detecting radiation<br>reflecting neutrons<br/><br/>&nbsp;&nbsp;&nbsp;<a href='mailto:viki@pacbell.net'>viki</a>`,
    history: `Beryllium was discovered in 1798 by Louis-Nicolas Vauquelin. It is a relatively rare element that is toxic to humans. Beryllium is used in nuclear reactors as a neutron reflector and moderator, in aerospace applications for its light weight and high strength, and in X-ray windows due to its transparency to X-rays.`
  },
  {
    atomicNumber: 5,
    abbreviation: "B",
    name: "Boron",
    poem: `Brown propellant gives<br>roadside help, but abrasive<br>rubs us the wrong way<br/><br/>&nbsp;&nbsp;&nbsp;<a href='mailto:karenr2@mediaone.net'>Karen A. Romanko</a>`,
    history: `Boron was discovered in 1808 by Sir Humphry Davy, Joseph Louis Gay-Lussac, and Louis Jacques Thénard. It is a metalloid that is essential for plant growth and is used in detergents, ceramics, and semiconductors. Boron compounds are used in rocket propellants and as flame retardants.`
  },
  {
    atomicNumber: 6,
    abbreviation: "C",
    name: "Carbon",
    poem: `Dead stars reborn<br>as diamonds, buckeyballs,<br>and beings<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href='mailto:shal@loc.gov'>Stephanie Hall</a>`,
    history: `Carbon is the fourth most abundant element in the universe and the basis for all known life. It forms the backbone of organic chemistry and is found in diamonds, graphite, and fullerenes. Carbon dating is used to determine the age of archaeological finds, and carbon nanotubes have applications in nanotechnology.`
  },
  {
    atomicNumber: 7,
    abbreviation: "N",
    name: "Nitrogen",
    poem: `the sky's referee,<br>without its calming effect,<br>oxygen will burn<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href='mailto:scv@scvs.com'>s.c. virtes</a>`,
    history: `Nitrogen was discovered in 1772 by Daniel Rutherford. It makes up about 78% of Earth's atmosphere and is essential for life, being a component of proteins and DNA. Nitrogen is used in fertilizers, explosives, and as a coolant in cryogenic applications. Liquid nitrogen is used for food preservation and medical procedures.`
  },
  {
    atomicNumber: 8,
    abbreviation: "O",
    name: "Oxygen",
    poem: `Green plants' waste;<br>Earth's invisible treasure:<br>now breathe.<br/><br/><a href='mailto:shal@loc.gov'>Stephanie Hall</a>`,
    history: `Oxygen was discovered independently by Carl Wilhelm Scheele in 1774 and Joseph Priestley in 1774. It is the third most abundant element in the universe and is essential for respiration in most living organisms. Oxygen is used in medical applications, welding, and as an oxidizer in rocket fuel.`
  },
  {
    atomicNumber: 9,
    abbreviation: "F",
    name: "Fluorine",
    poem: `science is risky<br>so hard to get it alone<br>but find it and die<br/><br/>&nbsp;&nbsp;<a href='mailto:davidkm@gsa.state.al.us'>David C. Kopaska-Merkel</a>`,
    history: `Fluorine was discovered in 1886 by Henri Moissan. It is the most reactive and electronegative element, making it extremely dangerous to handle. Fluorine is used in toothpaste to prevent cavities, in refrigerants, and in the production of uranium hexafluoride for nuclear fuel processing.`
  },
  {
    atomicNumber: 10,
    abbreviation: "Ne",
    name: "Neon",
    poem: `buzzing florescence ...<br>asteroid miners weave<br>  out the cavern door<br/><br/>    gK &copy; 2001.01.27`,
    history: `Neon was discovered in 1898 by Sir William Ramsay and Morris Travers. It is a noble gas that is used in neon signs and lasers. Neon is the fifth most abundant element in the universe and is obtained by fractional distillation of liquid air. It is inert and does not form compounds.`
  },
  {
    atomicNumber: 11,
    abbreviation: "Na",
    name: "Sodium",
    poem: `A spring snow<br>Upon my edged tongue<br>I smile<br/><br/><a href='mailto:eggsalad@mail.com'>Jonathan Lee</a>`,
    history: `Sodium was discovered in 1807 by Sir Humphry Davy. It is a highly reactive alkali metal that must be stored in oil to prevent reaction with air. Sodium is essential for nerve function and is used in street lights, as a coolant in nuclear reactors, and in the production of titanium and other metals.`
  },
  {
    atomicNumber: 12,
    abbreviation: "Mg",
    name: "Magnesium",
    poem: `Magnesium flares<br>Silvery-white<br>When called quicklime<p/><a href='mailto:sdr633@hotmail.com'>Stephen D. Rogers</a>`,
    history: `Magnesium was discovered in 1755 by Joseph Black. It is the eighth most abundant element in the Earth's crust and is essential for many biological processes. Magnesium is used in lightweight alloys for aircraft and automobiles, in flares and fireworks, and as a supplement for human health.`
  },
  {
    atomicNumber: 13,
    abbreviation: "Al",
    name: "Aluminum",
    poem: `helps in the kitchen<br>we don't find it everywhere<br>makes us forget stuff<p/><a href='mailto:davidkm@gsa.state.al.us'>David C. Kopaska-Merkel</a>`,
    history: `Aluminum was discovered in 1825 by Hans Christian Ørsted. It is the most abundant metal in the Earth's crust and is highly recyclable. Aluminum is used in aircraft, automobiles, beverage cans, and construction materials due to its light weight, strength, and resistance to corrosion.`
  },
  {
    atomicNumber: 14,
    abbreviation: "Si",
    name: "Silicon",
    poem: `silicon enhanced . . .<br>mind-meld with my computer<br>our modems exchange<p/><a href='mailto:gradidge@mb.sympatico.ca'>ushi </a>`,
    history: `Silicon was discovered in 1824 by Jöns Jacob Berzelius. It is the second most abundant element in the Earth's crust and is essential for the electronics industry. Silicon is used in semiconductors, solar cells, and computer chips. It is also used in glass, ceramics, and as a component of concrete.`
  },
  {
    atomicNumber: 15,
    abbreviation: "P",
    name: "Phosphorus",
    poem: `steeped in water and<br>mystery -- until exposed<br>white phosphorus glare<p/><a href='mailto:scv@scvs.com'>s.c. virtes</a>`,
    history: `Phosphorus was discovered in 1669 by Hennig Brand. It is essential for life, being a component of DNA, RNA, and ATP. Phosphorus is used in fertilizers, detergents, and matches. It exists in several allotropic forms, with white phosphorus being highly reactive and toxic.`
  },
  {
    atomicNumber: 16,
    abbreviation: "S",
    name: "Sulfur",
    poem: `Pharmaceuticals'<br>friend in antibiotics<br>makes me allergic<p/><a href='mailto:karenr2@mediaone.net'>Karen A. Romanko</a>`,
    history: `Sulfur has been known since ancient times and was mentioned in the Bible. It is essential for life and is used in the production of sulfuric acid, one of the most important industrial chemicals. Sulfur is used in gunpowder, rubber vulcanization, and as a fungicide in agriculture.`
  },
  {
    atomicNumber: 17,
    abbreviation: "Cl",
    name: "Chlorine",
    poem: `sea-change<br>from salt of the earth<p>mustard<br>frieze of global fire<p>twofold<br>fresh water colours<p/><a href='mailto:MMSerpento@aol.com'>Mary Margaret Serpento</a> &copy;2001`,
    history: `Chlorine was discovered in 1774 by Carl Wilhelm Scheele. It is a powerful oxidizing agent and is used in water treatment to kill bacteria. Chlorine is used in the production of paper, textiles, and plastics. It is also used in household bleach and swimming pool disinfection.`
  },
  {
    atomicNumber: 18,
    abbreviation: "Ar",
    name: "Argon",
    poem: `Trapped inside glass tubes<br>glowing filaments slumber--<br>idle argon waits.<p/><a href='mailto:Arion214@aol.com'>Pam Smith</a>`,
    history: `Argon was discovered in 1894 by Lord Rayleigh and Sir William Ramsay. It is the third most abundant gas in Earth's atmosphere and is used in incandescent light bulbs to prevent the filament from oxidizing. Argon is also used in welding and as a protective atmosphere for growing silicon crystals.`
  },
  {
    atomicNumber: 19,
    abbreviation: "K",
    name: "Potassium",
    poem: `The laughing chemist,<br>tasting the salts of the earth:<br>ashes, ashes.<p/><div style='font-size:0.8em'><i>[Sir Humphry Davy is best remembered as the chemist who investigated the properties of nitrous oxide ('laughing gas') and its effects, by experimenting on himself. He entertained friends at parties by providing the gas to inhale. He also discovered several elements as an early experimenter with electrolysis, beginning with potassium and sodium in 1807. Since poets, including Coleridge, were among those in Davy's circle, I can't help but think he would have enjoyed the idea of celebrating the elements with poetry. The name for potassium is derived from 'potash' from which it was isolated.]</i><p/><a href='https://web.archive.org/web/20041227031445/mailto:shal@loc.gov'>Stephanie Hall</a></div>`,
    history: `Potassium was discovered in 1807 by Sir Humphry Davy. It is essential for nerve function and muscle contraction in living organisms. Potassium is used in fertilizers, soaps, and as a coolant in nuclear reactors. It is highly reactive and must be stored in oil to prevent reaction with air.`
  },
  {
    atomicNumber: 20,
    abbreviation: "Ca",
    name: "Calcium",
    poem: `Festering cows<br>puss and antibiotics<br>&nbsp;got milk, kids?<p/><a href='mailto:ron@ron.sparks+ptoe@gmail.com'>Ron Sparks</a> &copy; 02/04/01`,
    history: `Calcium was discovered in 1808 by Sir Humphry Davy. It is essential for bone and teeth formation in living organisms. Calcium is used in the production of cement, lime, and plaster. It is also used as a reducing agent in the production of other metals and in the treatment of osteoporosis.`
  },
  {
    atomicNumber: 21,
    abbreviation: "Sc",
    name: "Scandium",
    poem: `snow white Norse powder<br>getting there was half the fun-<br>makes you stronger, Al<p/><i>[Makes Aluminum stronger- the Russians used it in their MiG fighters]</i><p/><a href='mailto:snakedoctor@earthlink.net'>loyd myatt</a>`,
    history: `Scandium was discovered in 1879 by Lars Fredrik Nilson. It is a rare earth element that is used in aluminum-scandium alloys for aerospace applications. Scandium is also used in high-intensity lamps and as a tracer in oil refineries. It is found in some minerals but is not mined commercially.`
  },
  {
    atomicNumber: 22,
    abbreviation: "Ti",
    name: "Titanium",
    poem: `this skin<br>glistening hardness-<br>titanium<p/><a href='mailto:lucien2@juno.com'>lucien</a>`,
    history: `Titanium was discovered in 1791 by William Gregor. It is a strong, lightweight metal that is resistant to corrosion. Titanium is used in aircraft, spacecraft, medical implants, and sporting equipment. It is also used in paint pigments and as a catalyst in chemical reactions.`
  },
  {
    atomicNumber: 23,
    abbreviation: "V",
    name: "Vanadium",
    poem: `vanadium oxide peeps<br>through surface from cool star's deep<br>convective mixing.<p/><a href='mailto:dianeturnshek@home.com'>Starlady </a>`,
    history: `Vanadium was discovered in 1801 by Andrés Manuel del Río and rediscovered in 1830 by Nils Gabriel Sefström. It is used as an alloying element in steel to increase strength and resistance to corrosion. Vanadium is also used in batteries and as a catalyst in chemical reactions.`
  },
  {
    atomicNumber: 24,
    abbreviation: "Cr",
    name: "Chromium",
    poem: `nose ring shine<br>the cyberpunk smiles-<br>chromium<p/><a href='mailto:lucien2@juno.com'>lucien</a>`,
    history: `Chromium was discovered in 1797 by Louis Nicolas Vauquelin. It is used to make stainless steel and is valued for its resistance to corrosion. Chromium is also used in chrome plating, pigments, and as a catalyst. It is essential for human health in small amounts.`
  },
  {
    atomicNumber: 25,
    abbreviation: "Mn",
    name: "Manganese",
    poem: `strong bones<br>in humans<br>and steel<p/><div style='font-size:0.8em'><i>Manganese is needed for healthy skin, bone, and cartilage formation, as well as glucose tolerance. It also helps activate superoxide dismutase (SOD)-an important antioxidant enzyme. (from <a href='http://www.mothernature.com/ency/Supp/Manganese.asp'>here</a>)<p/>Manganese is essential to iron and steel production by virtue of its sulfur-fixing, deoxidizing, and alloying properties. Steelmaking, including its ironmaking component, accounts for most domestic manganese demand, presently in the range of 85% to 90% of the total. (from <a href='http://minerals.usgs.gov/minerals/pubs/commodity/manganese/'>here</a>)</i></div><a href='https://web.archive.org/web/20041225043201/mailto:Mark.Dowdey@wcom.com'>Mark Dowdey</a>`,
    history: `Manganese was discovered in 1774 by Johan Gottlieb Gahn. It is essential for steel production and is used as an alloying element. Manganese is also used in batteries, pigments, and as a dietary supplement. It is found in many minerals and is essential for human health.`
  },
  {
    atomicNumber: 26,
    abbreviation: "Fe",
    name: "Iron",
    poem: `prehistoric gift<br>splashing history currents<br>  leaving flakes of rust<p/><a href='mailto:dkolodji@aol.com'>Deborah P. Kolodji</a>`,
    history: `Iron has been known since ancient times and was used by early civilizations. It is the most abundant element on Earth and is essential for life, being a component of hemoglobin. Iron is used in construction, transportation, and manufacturing. It is also used in magnets and as a catalyst.`
  },
  {
    atomicNumber: 27,
    abbreviation: "Co",
    name: "Cobalt",
    poem: `sky fallen goblin --<br>fierce eyes flash cobalt blue<br>on runic dagger<p/><div style='font-size:0.8em'><i>[Cobalt comes from the German word 'Kobold' meaning 'goblin' or evilspirit. Brittle but hard cobalt is found in meteorites and has magnetic properties of iron.]</i></div><p/><a href='mailto:gradidge@mb.sympatico.ca'>ushi</a>`,
    history: `Cobalt was discovered in 1735 by Georg Brandt. It is used in high-strength alloys and is essential for the production of vitamin B12. Cobalt is used in magnets, batteries, and as a catalyst. It is also used in pigments and as a radioactive tracer in medicine.`
  },
  {
    atomicNumber: 28,
    abbreviation: "Ni",
    name: "Nickel",
    poem: `under the granite<br>of the Canadian Shield-<br>deep nickel shines<p/><div style='font-size:0.8em'><i>( Nickel-a hard silvery-white metal found in igneous rocks and meteorites. From Swedish nikel, which means devil )</i></div><p/><a href='mailto:lucien2@juno.com'>lucien</a>`,
    history: `Nickel was discovered in 1751 by Axel Fredrik Cronstedt. It is used in stainless steel and other corrosion-resistant alloys. Nickel is also used in batteries, coins, and as a catalyst. It is found in meteorites and is essential for some microorganisms.`
  },
  {
    atomicNumber: 29,
    abbreviation: "Cu",
    name: "Copper",
    poem: `on my backbone<br>songs of civilization-<br>copper<p/><a href='mailto:lucien2@juno.com'>lucien</a>`,
    history: `Copper has been known since ancient times and was one of the first metals used by humans. It is an excellent conductor of electricity and is used in electrical wiring, plumbing, and electronics. Copper is also used in alloys such as bronze and brass.`
  },
  {
    atomicNumber: 30,
    abbreviation: "Zn",
    name: "Zinc",
    poem: `galvanized iron,<br>cosmetics, preservatives,<br>a salt, and batteries.<p/><a href='mailto:ksmsg02@tamuk.edu'>Mike</a>`,
    history: `Zinc was discovered in 1746 by Andreas Sigismund Marggraf. It is used to galvanize steel to prevent corrosion and is essential for human health. Zinc is also used in batteries, alloys, and as a dietary supplement. It is found in many minerals and ores.`
  },
  {
    atomicNumber: 31,
    abbreviation: "Ga",
    name: "Gallium",
    poem: `generic metal<br>until prodded, excited<br>melting in your hand<p/><a href='mailto:scv@scvs.com'>s.c. virtes</a>`,
    history: `Gallium was discovered in 1875 by Paul-Émile Lecoq de Boisbaudran. It has a low melting point and is used in semiconductors and LEDs. Gallium is also used in thermometers and as a substitute for mercury. It is found in small amounts in zinc ores.`
  },
  {
    atomicNumber: 32,
    abbreviation: "Ge",
    name: "Germanium",
    poem: `organogermanium<br>chemotherapy agent -<br>the quiet bacteria<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Germanium was discovered in 1886 by Clemens Winkler. It is a semiconductor used in transistors and infrared optics. Germanium is also used in fiber optics and as a catalyst. It is found in small amounts in some minerals and coal.`
  },
  {
    atomicNumber: 33,
    abbreviation: "As",
    name: "Arsenic",
    poem: `still welling up, stiff-necked<br>beside the old claim; morning glass<br>of arsenic, straight laced<p/><a href='mailto:MMSerpento@aol.com'>Mary Margaret Serpento</a> &copy;2001`,
    history: `Arsenic has been known since ancient times and was used as a poison. It is a metalloid that is toxic to humans and animals. Arsenic is used in semiconductors, pesticides, and wood preservatives. It is found in many minerals and is a common contaminant in groundwater.`
  },
  {
    atomicNumber: 34,
    abbreviation: "Se",
    name: "Selenium",
    poem: `in quiet moonlight<br>a tiny breath is felt-<br>selenium<p/><div style='font-size:0.8em'><i>( Selenium- a nonmetallic element used in photoelectric cells. From Greek selene-which means moon. )</i></div><p/><a href='mailto:lucien2@juno.com'>lucien</a>`,
    history: `Selenium was discovered in 1817 by Jöns Jacob Berzelius. It is essential for human health in small amounts and is used in photocopiers and solar cells. Selenium is also used in glass manufacturing and as a dietary supplement. It is found in some minerals and soils.`
  },
  {
    atomicNumber: 35,
    abbreviation: "Br",
    name: "Bromine",
    poem: `This fuming, toxic liquid<br>dark red, stinking, fetid:<br>Satan's favorite brew.<p/><a href='mailto:Arion214@aol.com'>PamSmith</a>`,
    history: `Bromine was discovered in 1826 by Antoine-Jérôme Balard. It is a halogen that is liquid at room temperature and is toxic to humans. Bromine is used in flame retardants, pesticides, and pharmaceuticals. It is also used in photography and as a disinfectant.`
  },
  {
    atomicNumber: 36,
    abbreviation: "Kr",
    name: "Krypton",
    poem: `so vulnerable --<br>this frail tube connecting<br>points of steel<p/><div style='font-size:0.8em'><i>[used with argon as a low-pressure filling gas for fluorescent lights]</i></div><p/><a href='https://web.archive.org/web/20050114004342/mailto:gradidge@mb.sympatico.ca'>ushi</a>`,
    history: `Krypton was discovered in 1898 by Sir William Ramsay and Morris Travers. It is a noble gas that is used in lighting and lasers. Krypton is also used in some types of photographic flashes and as a filling gas in some types of light bulbs. It is found in trace amounts in the atmosphere.`
  },
  {
    atomicNumber: 37,
    abbreviation: "Rb",
    name: "Rubidium",
    poem: `magnetohydrodynamic -<br>rubidium ions<br>brushing the magnets<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Rubidium was discovered in 1861 by Robert Bunsen and Gustav Kirchhoff. It is an alkali metal that is highly reactive and must be stored in oil. Rubidium is used in atomic clocks, as a catalyst, and in some types of glass. It is found in small amounts in some minerals.`
  },
  {
    atomicNumber: 38,
    abbreviation: "Sr",
    name: "Strontium",
    poem: `incognito<br>in calcium's demesne<br>&nbsp;radiated bones<br/><br/><a href='mailto:ron@ron.sparks+ptoe@gmail.com'>Ron Sparks</a> &copy; 02/04/01`,
    history: `Strontium was discovered in 1790 by Adair Crawford. It is an alkaline earth metal that is used in fireworks and flares to produce red colors. Strontium is also used in some types of glass and as a radioactive tracer in medicine. It is found in some minerals and is essential for some marine organisms.`
  },
  {
    atomicNumber: 39,
    abbreviation: "Y",
    name: "Yttrium",
    poem: `small amulet<br>buried in niche of time:<br>laser garnet<p/><a href='mailto:MMSerpento@aol.com'>Mary Margaret Serpento</a> &copy; 02/04/01`,
    history: `Yttrium was discovered in 1794 by Johan Gadolin. It is a transition metal that is used in phosphors for color televisions and LEDs. Yttrium is also used in superconductors, lasers, and as a catalyst. It is found in some rare earth minerals.`
  },
  {
    atomicNumber: 40,
    abbreviation: "Zr",
    name: "Zirconium",
    poem: `has the distinction<br>of making crystals so tough<br>they're older than rocks<p/><a href='mailto:davidkm@gsa.state.al.us'>David C. Kopaska-Merkel</a>`,
    history: `Zirconium was discovered in 1789 by Martin Heinrich Klaproth. It is a transition metal that is resistant to corrosion and is used in nuclear reactors. Zirconium is also used in alloys, ceramics, and as a gemstone. It is found in the mineral zircon and is used in some types of glass.`
  },
  {
    atomicNumber: 41,
    abbreviation: "Nb",
    name: "Niobium",
    poem: `superconducting<br>niobium-titanium coils<br>levitate the train<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Niobium was discovered in 1801 by Charles Hatchett. It is a transition metal that is used in steel alloys to improve strength and corrosion resistance. Niobium is also used in superconductors, capacitors, and as a catalyst. It is found in the mineral columbite and is named after Niobe, daughter of Tantalus.`
  },
  {
    atomicNumber: 42,
    abbreviation: "Mo",
    name: "Molybdenum",
    poem: `molybdenum steel<br>strengthens the sword<br>of the samurai<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Molybdenum was discovered in 1778 by Carl Wilhelm Scheele. It is essential for many enzymes in living organisms and is used in steel alloys to improve strength and heat resistance. Molybdenum is also used in catalysts, lubricants, and pigments. It is found in the mineral molybdenite.`
  },
  {
    atomicNumber: 43,
    abbreviation: "Tc",
    name: "Technetium",
    poem: `artificial element<br>first made by man<br>in the laboratory<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Technetium was discovered in 1937 by Carlo Perrier and Emilio Segrè. It is the first element to be artificially produced and is radioactive. Technetium is used in nuclear medicine for diagnostic imaging and is produced in nuclear reactors. It has no stable isotopes.`
  },
  {
    atomicNumber: 44,
    abbreviation: "Ru",
    name: "Ruthenium",
    poem: `platinum group metal<br>hard and brittle<br>catalyst for ammonia<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Ruthenium was discovered in 1844 by Karl Ernst Claus. It is a platinum group metal that is used in electronics, as a catalyst, and in some types of jewelry. Ruthenium is also used in solar cells and as a hardener for platinum and palladium. It is found in platinum ores.`
  },
  {
    atomicNumber: 45,
    abbreviation: "Rh",
    name: "Rhodium",
    poem: `precious metal<br>more valuable than gold<br>catalyst for cars<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Rhodium was discovered in 1803 by William Hyde Wollaston. It is a platinum group metal that is used in catalytic converters for automobiles. Rhodium is also used in jewelry, electronics, and as a catalyst in chemical reactions. It is one of the rarest and most valuable precious metals.`
  },
  {
    atomicNumber: 46,
    abbreviation: "Pd",
    name: "Palladium",
    poem: `hydrogen sponge<br>absorbs hydrogen gas<br>releases it slowly<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Palladium was discovered in 1803 by William Hyde Wollaston. It is a platinum group metal that is used in catalytic converters, jewelry, and electronics. Palladium can absorb large amounts of hydrogen and is used in hydrogen storage and purification. It is also used in dental alloys.`
  },
  {
    atomicNumber: 47,
    abbreviation: "Ag",
    name: "Silver",
    poem: `silver moon<br>reflecting light<br>in the dark<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Silver has been known since ancient times and was used for currency and jewelry. It is the best conductor of electricity and is used in electronics, photography, and mirrors. Silver has antimicrobial properties and is used in medical applications. It is also used in solar panels and batteries.`
  },
  {
    atomicNumber: 48,
    abbreviation: "Cd",
    name: "Cadmium",
    poem: `toxic metal<br>yellow pigment<br>nickel-cadmium batteries<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Cadmium was discovered in 1817 by Friedrich Stromeyer. It is a toxic metal that is used in batteries, pigments, and as a stabilizer in plastics. Cadmium is also used in nuclear reactors and as a coating for steel. It is found in zinc ores and is a byproduct of zinc production.`
  },
  {
    atomicNumber: 49,
    abbreviation: "In",
    name: "Indium",
    poem: `soft metal<br>melts in your hand<br>like gallium<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Indium was discovered in 1863 by Ferdinand Reich and Hieronymus Theodor Richter. It is a soft metal that is used in semiconductors, LCD displays, and solar cells. Indium is also used in alloys and as a solder. It is found in small amounts in zinc ores and is a byproduct of zinc production.`
  },
  {
    atomicNumber: 50,
    abbreviation: "Sn",
    name: "Tin",
    poem: `tin cans<br>preserving food<br>for centuries<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Tin has been known since ancient times and was used in bronze alloys. It is used to coat steel to prevent corrosion (tinplate) and is used in solder, pewter, and organ pipes. Tin is also used in some types of glass and as a catalyst. It is found in the mineral cassiterite.`
  },
  {
    atomicNumber: 51,
    abbreviation: "Sb",
    name: "Antimony",
    poem: `brittle metal<br>used in type metal<br>and bullets<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Antimony has been known since ancient times and was used in cosmetics and medicines. It is a metalloid that is used in alloys, semiconductors, and as a flame retardant. Antimony is also used in lead-acid batteries and as a catalyst. It is found in the mineral stibnite.`
  },
  {
    atomicNumber: 52,
    abbreviation: "Te",
    name: "Tellurium",
    poem: `rare element<br>used in solar cells<br>and alloys<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Tellurium was discovered in 1782 by Franz-Joseph Müller von Reichenstein. It is a metalloid that is used in solar cells, alloys, and as a catalyst. Tellurium is also used in some types of glass and as a coloring agent. It is found in small amounts in some minerals and is a byproduct of copper refining.`
  },
  {
    atomicNumber: 53,
    abbreviation: "I",
    name: "Iodine",
    poem: `purple vapor<br>essential for life<br>thyroid hormone<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Iodine was discovered in 1811 by Bernard Courtois. It is essential for human health and is used in thyroid hormones. Iodine is also used in disinfectants, photography, and as a catalyst. It is found in seawater and some minerals, and is extracted from seaweed or brine.`
  },
  {
    atomicNumber: 54,
    abbreviation: "Xe",
    name: "Xenon",
    poem: `noble gas<br>used in lamps<br>and anesthesia<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Xenon was discovered in 1898 by Sir William Ramsay and Morris Travers. It is a noble gas that is used in lighting, anesthesia, and as a propellant in ion thrusters. Xenon is also used in some types of lamps and as a tracer in medical imaging. It is found in trace amounts in the atmosphere.`
  },
  {
    atomicNumber: 55,
    abbreviation: "Cs",
    name: "Cesium",
    poem: `atomic clock<br>most accurate time<br>in the universe<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Cesium was discovered in 1860 by Robert Bunsen and Gustav Kirchhoff. It is used in atomic clocks and is the most accurate time standard. Cesium is also used in drilling fluids, as a catalyst, and in some types of glass. It is highly reactive and must be stored in oil.`
  },
  {
    atomicNumber: 56,
    abbreviation: "Ba",
    name: "Barium",
    poem: `heavy metal<br>used in X-rays<br>and fireworks<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Barium was discovered in 1808 by Sir Humphry Davy. It is an alkaline earth metal that is used in X-ray imaging, fireworks, and as a getter in vacuum tubes. Barium is also used in some types of glass and as a catalyst. It is found in the mineral barite.`
  },
  {
    atomicNumber: 57,
    abbreviation: "La",
    name: "Lanthanum",
    poem: `first lanthanide<br>used in camera lenses<br>and batteries<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Lanthanum was discovered in 1839 by Carl Gustav Mosander. It is the first lanthanide and is used in camera lenses, batteries, and as a catalyst. Lanthanum is also used in some types of glass and as a tracer in medical imaging. It is found in some rare earth minerals.`
  },
  {
    atomicNumber: 58,
    abbreviation: "Ce",
    name: "Cerium",
    poem: `most abundant<br>rare earth element<br>used in alloys<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Cerium was discovered in 1803 by Jöns Jacob Berzelius and Wilhelm Hisinger. It is the most abundant rare earth element and is used in alloys, catalysts, and as a polishing agent. Cerium is also used in some types of glass and as a tracer in medical imaging. It is found in some rare earth minerals.`
  },
  {
    atomicNumber: 59,
    abbreviation: "Pr",
    name: "Praseodymium",
    poem: `green element<br>used in magnets<br>and alloys<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Praseodymium was discovered in 1885 by Carl Auer von Welsbach. It is a rare earth element that is used in magnets, alloys, and as a catalyst. Praseodymium is also used in some types of glass and as a tracer in medical imaging. It is found in some rare earth minerals.`
  },
  {
    atomicNumber: 60,
    abbreviation: "Nd",
    name: "Neodymium",
    poem: `strong magnets<br>used in motors<br>and headphones<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Neodymium was discovered in 1885 by Carl Auer von Welsbach. It is a rare earth element that is used in strong magnets, lasers, and as a catalyst. Neodymium is also used in some types of glass and as a tracer in medical imaging. It is found in some rare earth minerals.`
  },
  {
    atomicNumber: 61,
    abbreviation: "Pm",
    name: "Promethium",
    poem: `radioactive element<br>named after the titan<br>who stole fire<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Promethium was discovered in 1945 by Jacob A. Marinsky, Lawrence E. Glendenin, and Charles D. Coryell. It is a radioactive rare earth element that is used in nuclear batteries and as a tracer. Promethium has no stable isotopes and is produced in nuclear reactors.`
  },
  {
    atomicNumber: 62,
    abbreviation: "Sm",
    name: "Samarium",
    poem: `rare earth element<br>used in magnets<br>and nuclear reactors<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Samarium was discovered in 1879 by Paul-Émile Lecoq de Boisbaudran. It is a rare earth element that is used in magnets, nuclear reactors, and as a catalyst. Samarium is also used in some types of glass and as a tracer in medical imaging. It is found in some rare earth minerals.`
  },
  {
    atomicNumber: 63,
    abbreviation: "Eu",
    name: "Europium",
    poem: `phosphor element<br>used in television screens<br>and fluorescent lamps<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Europium was discovered in 1901 by Eugène-Anatole Demarçay. It is a rare earth element that is used in phosphors for television screens and fluorescent lamps. Europium is also used in some types of glass and as a tracer in medical imaging. It is found in some rare earth minerals.`
  },
  {
    atomicNumber: 64,
    abbreviation: "Gd",
    name: "Gadolinium",
    poem: `magnetic element<br>used in MRI contrast<br>and nuclear reactors<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Gadolinium was discovered in 1880 by Jean Charles Galissard de Marignac. It is a rare earth element that is used in MRI contrast agents and nuclear reactors. Gadolinium is also used in some types of glass and as a tracer in medical imaging. It is found in some rare earth minerals.`
  },
  {
    atomicNumber: 65,
    abbreviation: "Tb",
    name: "Terbium",
    poem: `green phosphor<br>used in fluorescent lamps<br>and television screens<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Terbium was discovered in 1843 by Carl Gustav Mosander. It is a rare earth element that is used in phosphors for fluorescent lamps and television screens. Terbium is also used in some types of glass and as a tracer in medical imaging. It is found in some rare earth minerals.`
  },
  {
    atomicNumber: 66,
    abbreviation: "Dy",
    name: "Dysprosium",
    poem: `rare earth element<br>used in magnets<br>and nuclear reactors<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Dysprosium was discovered in 1886 by Paul-Émile Lecoq de Boisbaudran. It is a rare earth element that is used in magnets, nuclear reactors, and as a catalyst. Dysprosium is also used in some types of glass and as a tracer in medical imaging. It is found in some rare earth minerals.`
  },
  {
    atomicNumber: 67,
    abbreviation: "Ho",
    name: "Holmium",
    poem: `magnetic element<br>used in magnets<br>and nuclear reactors<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Holmium was discovered in 1878 by Marc Delafontaine and Jacques-Louis Soret. It is a rare earth element that is used in magnets, nuclear reactors, and as a catalyst. Holmium is also used in some types of glass and as a tracer in medical imaging. It is found in some rare earth minerals.`
  },
  {
    atomicNumber: 68,
    abbreviation: "Er",
    name: "Erbium",
    poem: `pink element<br>used in fiber optics<br>and nuclear reactors<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Erbium was discovered in 1843 by Carl Gustav Mosander. It is a rare earth element that is used in fiber optics, nuclear reactors, and as a catalyst. Erbium is also used in some types of glass and as a tracer in medical imaging. It is found in some rare earth minerals.`
  },
  {
    atomicNumber: 69,
    abbreviation: "Tm",
    name: "Thulium",
    poem: `rare earth element<br>used in portable X-ray<br>and nuclear reactors<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Thulium was discovered in 1879 by Per Teodor Cleve. It is a rare earth element that is used in portable X-ray devices and nuclear reactors. Thulium is also used in some types of glass and as a tracer in medical imaging. It is found in some rare earth minerals.`
  },
  {
    atomicNumber: 70,
    abbreviation: "Yb",
    name: "Ytterbium",
    poem: `rare earth element<br>used in atomic clocks<br>and nuclear reactors<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Ytterbium was discovered in 1878 by Jean Charles Galissard de Marignac. It is a rare earth element that is used in atomic clocks, nuclear reactors, and as a catalyst. Ytterbium is also used in some types of glass and as a tracer in medical imaging. It is found in some rare earth minerals.`
  },
  {
    atomicNumber: 71,
    abbreviation: "Lu",
    name: "Lutetium",
    poem: `last lanthanide<br>used in nuclear reactors<br>and as a catalyst<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Lutetium was discovered in 1907 by Georges Urbain and Carl Auer von Welsbach. It is the last lanthanide and is used in nuclear reactors, as a catalyst, and in some types of glass. Lutetium is also used as a tracer in medical imaging. It is found in some rare earth minerals.`
  },
  {
    atomicNumber: 72,
    abbreviation: "Hf",
    name: "Hafnium",
    poem: `control rod element<br>used in nuclear reactors<br>to control fission<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Hafnium was discovered in 1923 by Dirk Coster and George de Hevesy. It is a transition metal that is used in nuclear reactor control rods and as a catalyst. Hafnium is also used in some types of glass and as a tracer in medical imaging. It is found in zirconium ores.`
  },
  {
    atomicNumber: 73,
    abbreviation: "Ta",
    name: "Tantalum",
    poem: `corrosion resistant<br>used in capacitors<br>and surgical implants<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Tantalum was discovered in 1802 by Anders Gustav Ekeberg. It is a transition metal that is resistant to corrosion and is used in capacitors, surgical implants, and as a catalyst. Tantalum is also used in some types of glass and as a tracer in medical imaging. It is found in the mineral tantalite.`
  },
  {
    atomicNumber: 74,
    abbreviation: "W",
    name: "Tungsten",
    poem: `highest melting point<br>used in light bulb filaments<br>and cutting tools<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Tungsten was discovered in 1781 by Carl Wilhelm Scheele. It is a transition metal with the highest melting point of all elements and is used in light bulb filaments, cutting tools, and as a catalyst. Tungsten is also used in some types of glass and as a tracer in medical imaging. It is found in the mineral wolframite.`
  },
  {
    atomicNumber: 75,
    abbreviation: "Re",
    name: "Rhenium",
    poem: `rare element<br>used in high temperature<br>alloys and catalysts<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Rhenium was discovered in 1925 by Walter Noddack, Ida Tacke, and Otto Berg. It is a transition metal that is used in high-temperature alloys, catalysts, and as a tracer in medical imaging. Rhenium is also used in some types of glass and is found in some minerals.`
  },
  {
    atomicNumber: 76,
    abbreviation: "Os",
    name: "Osmium",
    poem: `densest element<br>used in fountain pens<br>and electrical contacts<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Osmium was discovered in 1803 by Smithson Tennant. It is a platinum group metal that is the densest naturally occurring element and is used in fountain pens, electrical contacts, and as a catalyst. Osmium is also used in some types of glass and as a tracer in medical imaging. It is found in platinum ores.`
  },
  {
    atomicNumber: 77,
    abbreviation: "Ir",
    name: "Iridium",
    poem: `corrosion resistant<br>used in spark plugs<br>and electrical contacts<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Iridium was discovered in 1803 by Smithson Tennant. It is a platinum group metal that is highly corrosion-resistant and is used in spark plugs, electrical contacts, and as a catalyst. Iridium is also used in some types of glass and as a tracer in medical imaging. It is found in platinum ores.`
  },
  {
    atomicNumber: 78,
    abbreviation: "Pt",
    name: "Platinum",
    poem: `precious metal<br>used in jewelry<br>and catalytic converters<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Platinum was discovered in 1735 by Antonio de Ulloa. It is a platinum group metal that is used in jewelry, catalytic converters, and as a catalyst. Platinum is also used in some types of glass and as a tracer in medical imaging. It is found in platinum ores and is one of the rarest precious metals.`
  },
  {
    atomicNumber: 79,
    abbreviation: "Au",
    name: "Gold",
    poem: `precious metal<br>used in jewelry<br>and electronics<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Gold has been known since ancient times and was used for currency and jewelry. It is a precious metal that is used in jewelry, electronics, and as a catalyst. Gold is also used in some types of glass and as a tracer in medical imaging. It is found in some minerals and is one of the most valuable precious metals.`
  },
  {
    atomicNumber: 80,
    abbreviation: "Hg",
    name: "Mercury",
    poem: `liquid metal<br>used in thermometers<br>and dental amalgams<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Mercury has been known since ancient times and was used in thermometers and dental amalgams. It is a liquid metal that is toxic to humans and is used in some types of lamps and as a catalyst. Mercury is also used in some types of glass and as a tracer in medical imaging. It is found in some minerals.`
  },
  {
    atomicNumber: 81,
    abbreviation: "Tl",
    name: "Thallium",
    poem: `toxic element<br>used in rat poison<br>and infrared detectors<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Thallium was discovered in 1861 by Sir William Crookes. It is a toxic metal that is used in rat poison, infrared detectors, and as a catalyst. Thallium is also used in some types of glass and as a tracer in medical imaging. It is found in some minerals and is highly toxic to humans.`
  },
  {
    atomicNumber: 82,
    abbreviation: "Pb",
    name: "Lead",
    poem: `heavy metal<br>used in batteries<br>and radiation shielding<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Lead has been known since ancient times and was used in pipes, paint, and batteries. It is a heavy metal that is toxic to humans and is used in radiation shielding, batteries, and as a catalyst. Lead is also used in some types of glass and as a tracer in medical imaging. It is found in some minerals.`
  },
  {
    atomicNumber: 83,
    abbreviation: "Bi",
    name: "Bismuth",
    poem: `pink element<br>used in cosmetics<br>and pharmaceuticals<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Bismuth has been known since ancient times and was used in cosmetics and medicines. It is a heavy metal that is used in cosmetics, pharmaceuticals, and as a catalyst. Bismuth is also used in some types of glass and as a tracer in medical imaging. It is found in some minerals and is relatively non-toxic.`
  },
  {
    atomicNumber: 84,
    abbreviation: "Po",
    name: "Polonium",
    poem: `radioactive element<br>used in nuclear batteries<br>and static eliminators<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Polonium was discovered in 1898 by Marie and Pierre Curie. It is a radioactive element that is used in nuclear batteries, static eliminators, and as a tracer. Polonium is also used in some types of glass and is highly toxic to humans. It is found in some minerals and is produced in nuclear reactors.`
  },
  {
    atomicNumber: 85,
    abbreviation: "At",
    name: "Astatine",
    poem: `radioactive element<br>rarest naturally occurring<br>element on Earth<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Astatine was discovered in 1940 by Dale R. Corson, Kenneth Ross MacKenzie, and Emilio Segrè. It is a radioactive halogen that is the rarest naturally occurring element on Earth. Astatine is used in nuclear medicine and as a tracer. It has no stable isotopes and is produced in nuclear reactors.`
  },
  {
    atomicNumber: 86,
    abbreviation: "Rn",
    name: "Radon",
    poem: `radioactive gas<br>used in cancer treatment<br>and as a tracer<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Radon was discovered in 1900 by Friedrich Ernst Dorn. It is a radioactive noble gas that is used in cancer treatment and as a tracer. Radon is also used in some types of lamps and is found in some minerals. It is highly toxic to humans and is a common indoor air pollutant.`
  },
  {
    atomicNumber: 87,
    abbreviation: "Fr",
    name: "Francium",
    poem: `radioactive element<br>most reactive alkali metal<br>shortest half-life<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Francium was discovered in 1939 by Marguerite Perey. It is a radioactive alkali metal that is the most reactive alkali metal and has the shortest half-life of any element. Francium is used in nuclear medicine and as a tracer. It has no stable isotopes and is produced in nuclear reactors.`
  },
  {
    atomicNumber: 88,
    abbreviation: "Ra",
    name: "Radium",
    poem: `radioactive element<br>used in cancer treatment<br>and luminous paint<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Radium was discovered in 1898 by Marie and Pierre Curie. It is a radioactive alkaline earth metal that is used in cancer treatment and luminous paint. Radium is also used in some types of glass and as a tracer in medical imaging. It is found in some minerals and is highly toxic to humans.`
  },
  {
    atomicNumber: 89,
    abbreviation: "Ac",
    name: "Actinium",
    poem: `radioactive element<br>first actinide<br>used in nuclear medicine<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Actinium was discovered in 1899 by André-Louis Debierne. It is a radioactive actinide that is the first actinide and is used in nuclear medicine. Actinium is also used in some types of glass and as a tracer in medical imaging. It is found in some minerals and is highly toxic to humans.`
  },
  {
    atomicNumber: 90,
    abbreviation: "Th",
    name: "Thorium",
    poem: `radioactive element<br>used in nuclear reactors<br>and as a catalyst<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Thorium was discovered in 1828 by Jöns Jacob Berzelius. It is a radioactive actinide that is used in nuclear reactors and as a catalyst. Thorium is also used in some types of glass and as a tracer in medical imaging. It is found in some minerals and is relatively abundant in Earth's crust.`
  },
  {
    atomicNumber: 91,
    abbreviation: "Pa",
    name: "Protactinium",
    poem: `radioactive element<br>used in nuclear reactors<br>and as a tracer<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Protactinium was discovered in 1913 by Kasimir Fajans and Oswald Helmuth Göhring. It is a radioactive actinide that is used in nuclear reactors and as a tracer. Protactinium is also used in some types of glass and is found in some minerals. It is highly toxic to humans.`
  },
  {
    atomicNumber: 92,
    abbreviation: "U",
    name: "Uranium",
    poem: `radioactive element<br>used in nuclear reactors<br>and atomic bombs<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Uranium was discovered in 1789 by Martin Heinrich Klaproth. It is a radioactive actinide that is used in nuclear reactors and atomic bombs. Uranium is also used in some types of glass and as a tracer in medical imaging. It is found in some minerals and is relatively abundant in Earth's crust.`
  },
  {
    atomicNumber: 93,
    abbreviation: "Np",
    name: "Neptunium",
    poem: `transuranic element<br>first element beyond uranium<br>used in nuclear reactors<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Neptunium was discovered in 1940 by Edwin McMillan and Philip H. Abelson. It is a radioactive actinide that is the first transuranic element and is used in nuclear reactors. Neptunium is also used in some types of glass and as a tracer in medical imaging. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 94,
    abbreviation: "Pu",
    name: "Plutonium",
    poem: `transuranic element<br>used in nuclear reactors<br>and atomic bombs<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Plutonium was discovered in 1940 by Glenn T. Seaborg, Ida Tacke, and Albert Ghiorso. It is a radioactive actinide that is used in nuclear reactors and atomic bombs. Plutonium is also used in some types of glass and as a tracer in medical imaging. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 95,
    abbreviation: "Am",
    name: "Americium",
    poem: `transuranic element<br>used in smoke detectors<br>and nuclear reactors<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Americium was discovered in 1944 by Glenn T. Seaborg, Ralph A. James, Leon O. Morgan, and Albert Ghiorso. It is a radioactive actinide that is used in smoke detectors and nuclear reactors. Americium is also used in some types of glass and as a tracer in medical imaging. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 96,
    abbreviation: "Cm",
    name: "Curium",
    poem: `transuranic element<br>named after Marie and Pierre<br>Curie<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Curium was discovered in 1944 by Glenn T. Seaborg, Ralph A. James, and Albert Ghiorso. It is a radioactive actinide that is named after Marie and Pierre Curie. Curium is used in nuclear reactors and as a tracer. It is also used in some types of glass and is produced in nuclear reactors.`
  },
  {
    atomicNumber: 97,
    abbreviation: "Bk",
    name: "Berkelium",
    poem: `transuranic element<br>named after Berkeley<br>California<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Berkelium was discovered in 1949 by Glenn T. Seaborg, Stanley G. Thompson, and Albert Ghiorso. It is a radioactive actinide that is named after Berkeley, California. Berkelium is used in nuclear reactors and as a tracer. It is also used in some types of glass and is produced in nuclear reactors.`
  },
  {
    atomicNumber: 98,
    abbreviation: "Cf",
    name: "Californium",
    poem: `transuranic element<br>named after California<br>used in nuclear reactors<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Californium was discovered in 1950 by Glenn T. Seaborg, Stanley G. Thompson, Kenneth Street, Jr., and Albert Ghiorso. It is a radioactive actinide that is named after California. Californium is used in nuclear reactors and as a tracer. It is also used in some types of glass and is produced in nuclear reactors.`
  },
  {
    atomicNumber: 99,
    abbreviation: "Es",
    name: "Einsteinium",
    poem: `transuranic element<br>named after Albert<br>Einstein<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Einsteinium was discovered in 1952 by Albert Ghiorso and his team. It is a radioactive actinide that is named after Albert Einstein. Einsteinium is used in nuclear reactors and as a tracer. It is also used in some types of glass and is produced in nuclear reactors.`
  },
  {
    atomicNumber: 100,
    abbreviation: "Fm",
    name: "Fermium",
    poem: `transuranic element<br>named after Enrico<br>Fermi<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Fermium was discovered in 1952 by Albert Ghiorso and his team. It is a radioactive actinide that is named after Enrico Fermi. Fermium is used in nuclear reactors and as a tracer. It is also used in some types of glass and is produced in nuclear reactors.`
  },
  {
    atomicNumber: 101,
    abbreviation: "Md",
    name: "Mendelevium",
    poem: `transuranic element<br>named after Dmitri<br>Mendeleev<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Mendelevium was discovered in 1955 by Albert Ghiorso, Bernard G. Harvey, Gregory R. Choppin, Stanley G. Thompson, and Glenn T. Seaborg. It is a radioactive actinide that is named after Dmitri Mendeleev. Mendelevium is used in nuclear reactors and as a tracer. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 102,
    abbreviation: "No",
    name: "Nobelium",
    poem: `transuranic element<br>named after Alfred<br>Nobel<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Nobelium was discovered in 1966 by Albert Ghiorso, Torbjørn Sikkeland, John R. Walton, and Glenn T. Seaborg. It is a radioactive actinide that is named after Alfred Nobel. Nobelium is used in nuclear reactors and as a tracer. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 103,
    abbreviation: "Lr",
    name: "Lawrencium",
    poem: `transuranic element<br>named after Ernest<br>Lawrence<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Lawrencium was discovered in 1961 by Albert Ghiorso, Torbjørn Sikkeland, Almon E. Larsh, and Robert M. Latimer. It is a radioactive actinide that is named after Ernest Lawrence. Lawrencium is used in nuclear reactors and as a tracer. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 104,
    abbreviation: "Rf",
    name: "Rutherfordium",
    poem: `transactinide element<br>named after Ernest<br>Rutherford<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Rutherfordium was discovered in 1969 by Albert Ghiorso and his team. It is a radioactive transactinide element that is named after Ernest Rutherford. Rutherfordium is used in nuclear reactors and as a tracer. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 105,
    abbreviation: "Db",
    name: "Dubnium",
    poem: `transactinide element<br>named after Dubna<br>Russia<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Dubnium was discovered in 1970 by Albert Ghiorso and his team. It is a radioactive transactinide element that is named after Dubna, Russia. Dubnium is used in nuclear reactors and as a tracer. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 106,
    abbreviation: "Sg",
    name: "Seaborgium",
    poem: `transactinide element<br>named after Glenn<br>Seaborg<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Seaborgium was discovered in 1974 by Albert Ghiorso and his team. It is a radioactive transactinide element that is named after Glenn Seaborg. Seaborgium is used in nuclear reactors and as a tracer. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 107,
    abbreviation: "Bh",
    name: "Bohrium",
    poem: `transactinide element<br>named after Niels<br>Bohr<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Bohrium was discovered in 1981 by Peter Armbruster and Gottfried Münzenberg. It is a radioactive transactinide element that is named after Niels Bohr. Bohrium is used in nuclear reactors and as a tracer. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 108,
    abbreviation: "Hs",
    name: "Hassium",
    poem: `transactinide element<br>named after Hesse<br>Germany<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Hassium was discovered in 1984 by Peter Armbruster and Gottfried Münzenberg. It is a radioactive transactinide element that is named after Hesse, Germany. Hassium is used in nuclear reactors and as a tracer. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 109,
    abbreviation: "Mt",
    name: "Meitnerium",
    poem: `transactinide element<br>named after Lise<br>Meitner<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Meitnerium was discovered in 1982 by Peter Armbruster and Gottfried Münzenberg. It is a radioactive transactinide element that is named after Lise Meitner. Meitnerium is used in nuclear reactors and as a tracer. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 110,
    abbreviation: "Ds",
    name: "Darmstadtium",
    poem: `transactinide element<br>named after Darmstadt<br>Germany<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Darmstadtium was discovered in 1994 by Sigurd Hofmann and his team. It is a radioactive transactinide element that is named after Darmstadt, Germany. Darmstadtium is used in nuclear reactors and as a tracer. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 111,
    abbreviation: "Rg",
    name: "Roentgenium",
    poem: `transactinide element<br>named after Wilhelm<br>Röntgen<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Roentgenium was discovered in 1994 by Sigurd Hofmann and his team. It is a radioactive transactinide element that is named after Wilhelm Röntgen. Roentgenium is used in nuclear reactors and as a tracer. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 112,
    abbreviation: "Cn",
    name: "Copernicium",
    poem: `transactinide element<br>named after Nicolaus<br>Copernicus<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Copernicium was discovered in 1996 by Sigurd Hofmann and his team. It is a radioactive transactinide element that is named after Nicolaus Copernicus. Copernicium is used in nuclear reactors and as a tracer. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 113,
    abbreviation: "Nh",
    name: "Nihonium",
    poem: `transactinide element<br>named after Japan<br>Nihon<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Nihonium was discovered in 2004 by Kosuke Morita and his team. It is a radioactive transactinide element that is named after Japan (Nihon). Nihonium is used in nuclear reactors and as a tracer. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 114,
    abbreviation: "Fl",
    name: "Flerovium",
    poem: `transactinide element<br>named after Georgy<br>Flerov<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Flerovium was discovered in 1999 by Yuri Oganessian and his team. It is a radioactive transactinide element that is named after Georgy Flerov. Flerovium is used in nuclear reactors and as a tracer. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 115,
    abbreviation: "Mc",
    name: "Moscovium",
    poem: `transactinide element<br>named after Moscow<br>Russia<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Moscovium was discovered in 2003 by Yuri Oganessian and his team. It is a radioactive transactinide element that is named after Moscow, Russia. Moscovium is used in nuclear reactors and as a tracer. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 116,
    abbreviation: "Lv",
    name: "Livermorium",
    poem: `transactinide element<br>named after Livermore<br>California<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Livermorium was discovered in 2000 by Yuri Oganessian and his team. It is a radioactive transactinide element that is named after Livermore, California. Livermorium is used in nuclear reactors and as a tracer. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 117,
    abbreviation: "Ts",
    name: "Tennessine",
    poem: `transactinide element<br>named after Tennessee<br>United States<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Tennessine was discovered in 2010 by Yuri Oganessian and his team. It is a radioactive transactinide element that is named after Tennessee, United States. Tennessine is used in nuclear reactors and as a tracer. It is produced in nuclear reactors.`
  },
  {
    atomicNumber: 118,
    abbreviation: "Og",
    name: "Oganesson",
    poem: `transactinide element<br>named after Yuri<br>Oganessian<p/><a href='mailto:toddtwo@prodigy.net'>robert leechford</a> &copy;2001`,
    history: `Oganesson was discovered in 2002 by Yuri Oganessian and his team. It is a radioactive transactinide element that is named after Yuri Oganessian. Oganesson is used in nuclear reactors and as a tracer. It is produced in nuclear reactors and is the heaviest known element.`
  }
];

function getElementDataByAtomicNumber(atomicNumber) {
  return elementsData.find(e => e.atomicNumber === atomicNumber);
}

function showPoem(param) {
  const lightboxOverlay = document.getElementById('lightbox-overlay');
  const lightboxContent = document.getElementById('lightbox-content');

  const element = getElementDataByAtomicNumber(param);

  if (!element) {
    lightboxContent.innerHTML = `
      <div class="error-message">
        <h3>Element ${param}</h3>
        <p>No data found for this element.</p>
        <button onclick="closePoem()" class="close-btn">Close</button>
      </div>
    `;
  } else {
    lightboxContent.innerHTML = formatHaikuContent(element);
  }

  lightboxOverlay.style.display = 'flex';
  lightboxOverlay.style.opacity = '0';
  setTimeout(() => {
    lightboxOverlay.style.opacity = '1';
  }, 10);
  const closeButton = lightboxContent.querySelector('.close-btn');
  if (closeButton) closeButton.focus();
  document.body.style.overflow = 'hidden';
}

function closePoem() {
  const lightboxOverlay = document.getElementById('lightbox-overlay');
  
  // Animate out
  lightboxOverlay.style.opacity = '0';
  
  setTimeout(() => {
    lightboxOverlay.style.display = 'none';
    // Restore body scroll
    document.body.style.overflow = '';
  }, 200);
}

function formatHaikuContent(element) {
  return `
    <div class="haiku-container">
      <div class="haiku-header">
        <h2 class="element-title">${element.atomicNumber} ${element.abbreviation} - ${element.name}</h2>
        <button onclick="closePoem()" class="close-btn" aria-label="Close haiku">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="haiku-content">
        <div class="haiku-poem">${element.poem}</div>
        <hr style="margin:1.5em 0; border:0; border-top:1px solid #444;"/>
        <div class="haiku-history">
          <strong>History:</strong> ${element.history}
          <div class="citation-link">
            <a href="https://www.fishersci.com/us/en/periodic-table.html" target="_blank" rel="noopener noreferrer" style="font-size: 0.75rem; color: #666; text-decoration: none; margin-top: 0.5rem; display: inline-block;">
              Source: Fisher Scientific Periodic Table
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Close lightbox when clicking outside content
document.addEventListener('click', function(e) {
  const lightboxOverlay = document.getElementById('lightbox-overlay');
  const lightboxContent = document.getElementById('lightbox-content');
  
  if (e.target === lightboxOverlay && !lightboxContent.contains(e.target)) {
    closePoem();
  }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    if (lightboxOverlay.style.display === 'flex') {
      closePoem();
    }
  }
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
  .element-fade-in {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
  }
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .haiku-container {
    width: 100%;
  }
  
  .haiku-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--gray-200);
  }
  
  .element-title {
    margin: 0;
    color: var(--gray-900);
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .close-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.375rem;
    color: var(--gray-500);
    transition: all 0.2s ease;
  }
  
  .close-btn:hover {
    background: var(--gray-100);
    color: var(--gray-700);
  }
  
  .haiku-content {
    line-height: 1.6;
  }
  
  .error-message {
    text-align: center;
    padding: 2rem;
  }
  
  .error-message h3 {
    color: var(--danger-color);
    margin-bottom: 1rem;
  }
  
  #lightbox-overlay {
    transition: opacity 0.2s ease;
  }
`;

document.head.appendChild(style);