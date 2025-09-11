"use strict";import{as as R,T as w,_ as Dt,C as d,D as p,G as $,at as kt,aq as x,Z as y,Y as S,au as Bt,av as K,ar as C,O as F,ao as k,a7 as Tt,aw as Q,X as P,$ as A,a1 as Mt,ax as g,ap as B,ay as I,az as H,aA as tt,aB as Rt,aC as h,a3 as L,aD as et,a0 as at,aE as q,a6 as wt,aF as Pt,a2 as T,a5 as nt,a8 as Ht,P as Lt}from"./links-f23rfWqw.js";import{c as it}from"./creatureData-BP-SWOsl.js";import"./startup-MZTHOO7z.js";import"./gallery-Cey1XwYv.js";function ot(){return{low:["Absent","Few","Infrequent","Intermittent","Irregular Patrols","Isolated","Limited","Low","Low Security","Minimal","Missing","None","None Present","Not Present","Remote","Sparse","Spread Thin"],high:["Attentive","Enforcing","Ever-present","Frequent","Observant","Regular Patrols","Require Obedience","Require Orthodoxy","Unwavering"],aggressive:["Aggressive","Frenzied","Hateful","High Security","Hostile Patrols","Inescapable","Malicious","Threatening","Zealous"],corrupted:["Corrupted","Forsaken","Rebellious","Answer To None","Sharded from the Atlas","Dissonant","De-Harmonised"]}}function lt(){return{Copper:"Cu",Cadmium:"Cd",Emeril:"Em",Indium:"In","Activated Copper":"Cu+","Activated Cadmium":"Cd+","Activated Emeril":"Em+","Activated Indium":"In+",Ammonia:"NH3",Dioxite:"CO2",Paraffinium:"Pf",Phosphorus:"P",Pyrite:"Py",Uranium:"U",Silver:"Ag",Gold:"Au","Magnetised Ferrite":"Fe++",Sodium:"Na",Cobalt:"Co",Salt:"NaCl","Star Bulb":"Sb","Cactus Flesh":"Cc","Gamma Root":"Gr","Fungal Mould":"Ml","Frost Crystal":"Fc",Solanium:"So",Mordite:"Mo",Faecium:"Fa","Ancient Bones":"Ab","Salvageable Scrap":"Sa","Rusted Metal":"Jn",Basalt:"B"}}function W(){return{Dead:{suffix:["Dead","Empty","Desolate","Lifeless","Forsaken","Life-Incompatible","Low Atmosphere","Airless","Abandoned"],none:["Terraforming Catastrophe"]},Lush:{suffix:["Rainy","Verdant","Tropical","Viridescent","Grassy","Temperate","Humid","Overgrown","Flourishing","Bountiful","Paradise"]},Exotic:{suffix:["Shattered","Fractured","Fragmented","Contoured","Cabled","Webbed","Rattling","Spined","Skeletal","Finned","Bladed","Shell-Strewn","Fungal","Sporal","Capped","Ossified","Petrified","Calcified","Fissured","Breached","Hexagonal","Plated","Scaly","Mechanical","Metallic","Metallurgic","Bubbling","Frothing","Foaming","Columned","Sharded","Pillared"],prefix:["of Light"]},Glitch:{suffix:["Crimson","Malfunctioning","Breached","Infected","[REDACTED]","Glassy","Thirsty","Doomed","Erased","Temporary","Corrupted"],none:["Planetary Anomaly"]},Scorched:{suffix:["Charred","Arid","Scorched","Hot","Fiery","Boiling","High Temperature","Torrid","Incandescent","Scalding"]},Frozen:{suffix:["Frozen","Icebound","Arctic","Glacial","Sub-zero","Icy","Frostbound","Freezing","Hiemal","Hyperborean"]},Irradiated:{suffix:["Irradiated","Radioactive","Contaminated","Nuclear","Isotopic","Decaying Nuclear","Gamma-Intensive","High Radio Source","Supercritical","High Energy"]},Toxic:{suffix:["Toxic","Poisonous","Noxious","Corrosive","Acidic","Caustic","Acrid","Blighted","Miasmatic","Rotting"]},Barren:{suffix:["Barren","Desert","Rocky","Bleak","Parched","Abandoned","Dusty","Desolate","Wind-swept"]},Marsh:{suffix:["Marshy","Swamp","Tropical","Foggy","Misty","Boggy","Quagmire","Hazy","Cloudy","Vapour","Reeking","Murky","Damp"],none:["Endless Morass"]},Volcanic:{suffix:["Lava","Magma","Erupting","Volcanic","Ash-Shrouded","Ashen","Tectonic","Unstable","Violent","Molten","Flame-Ruptured","Basalt"],none:["Imminent Core Detonation","Obsidian Bead"]},MegaExotic:{suffix:["Crimson","Lost Red","[REDACTED]","Chromatic Fog","Scarlet","Blood","Wine Dark","Lost Green","Doomed Jade","Haunted Emeril","Lost Blue","Azure","Cerulean","Ultramarine"],none:["Planetary Anomaly","Stellar Corruption Detected","Vermillion Globe","Vile Anomaly","Toxic Anomaly","Deathly Green Anomaly","Harsh Blue Globe","Frozen Anomaly"]},Water:{suffix:["Drowning","Oceanic","Tidal","Waterlocked","Aquatic","Marine"],none:["Waterworld","Endless Seas"]},Infested:{suffix:["Infested","Worm-ridden","Tainted","Mutated","Corrupted"],none:["Infested Paradise","Toxic Horror","Boiling Doom","Radioactive Abomination","Icy Abhorrence","Xeno-Colony","Caustic Nightmare","Fiery Dreadworld","Frozen Hell","Infected Dustbowl","The Nest","Terrorsphere"]}}}const N={weatherData:["Tropical Storms","Occasional Boiling Fog","Superheated Mists","Painful Mist","Infrequent Torrents","Oppressive","Soggy Danger","Sticky Heat","Clammy Menace","Hazardous Moisture","Gentle Mist","Humid","Tropical Winds","Warm Fog","Temperate Murk","Mild Damp","Warm Dewdrops","Tepid Damp","Sweaty Drizzle","Muggy Haze","Death Fog","Sultry Disaster","Cataclysmic Monsoons","Mists of Annihilation","All-Consuming Fog","Liquid Hell","Storms of Desolation","Melting Deluges","Boiling Catastrophe","Damp Misery","Heated Gas Pockets","Occasional Firestorms","Incendiary Winds","Unpredictable Conflagrations","Drifting Firestorms","Pillars of Flame","Magma Geysers","Plumes of Fire","Molten Rain","Tectonic Storms","Smothering Ash","Sulphurous Haze","Ash Wisps","Drifting Smog","Cinderfalls","Ash Plumes","Choking Ash","Burning Mists","Sulfur Fumes","Enveloping Ash","Ashen Winds","Frequent Firestorms","Walls of Flame","Clouds of Fire","Ashen Destruction","Magma Rain","Basalt Hail","Explosive Gas Eruptions","Lethal Ash Storms","Sulphurous Inferno","Colossal Firestorms","Obsidian Doom","Infrequent Heat Storms","Rare Firestorms","Superheated Gas Pockets","Wandering Hot Spots","Atmospheric Heat Instabilities","Direct Sunlight","Heated Atmosphere","Occasional Ash Storms","Dangerously Hot","Burning Air","Parched","Overly Warm","Sunny","Dehydrated","Unending Sunlight","Sweltering","Extreme Heat","Burning Gas Clouds","Intense Heat","Superheated Air","Scalding Heat","Inferno Winds","Firestorms","Combustible Dust","Incendiary Dust","Self-Igniting Storms","Howling Blizzards","Intense Cold","Icy Tempests","Supercooled Storms","Raging Snowstorms","Ice Storms","Deep Freeze","Roaring Ice Storms","Frequent Blizzards","Hazardous Whiteouts","Frozen Clouds","Occasional Snowfall","Infrequent Blizzards","Outbreaks of Frozen Rain","Harsh, Icy Winds","Drifting Snowstorms","Migratory Blizzards","Icy Blasts","Wandering Frosts","Powder Snow","Wintry","Snowy","Icy","Crisp","Frost","Freezing","Permafrost","Frequent Toxic Floods","Toxic Superstorms","Acidic Deluges","Corrosive Cyclones","Caustic Floods","Corrosive Storms","Torrential Acid","Noxious Gas Storms","Toxic Monsoons","Bone-Stripping Acid Storms","Corrosive Rainstorms","Pouring Toxic Rain","Occasional Acid Storms","Atmospheric Corruption","Poison Flurries","Toxic Outbreaks","Acidic Dust Pockets","Passing Toxic Fronts","Caustic Winds","Alkaline Cloudbursts","Dangerously Toxic Rain","Corrosive Sleet Storms","Lethal Atmosphere","Infrequent Toxic Drizzle","Acid Rain","Toxic Clouds","Poison Rain","Choking Clouds","Caustic Moisture","Poisonous Gas","Stinging Atmosphere","Toxic Damp","Corrosive Damp","Stinging Puddles","Extreme Radioactivity","Irradiated Thunderstorms","Planet-Wide Radiation Storms","Extreme Atmospheric Decay","Roaring Nuclear Wind","Gamma Cyclones","Contaminated Squalls","Extreme Thermonuclear Fog","Frequent Particle Eruptions","Enormous Nuclear Storms","Particulate Winds","Energetic Storms","Irradiated Downpours","Radioactive Dust Storms","Volatile Windstorms","Occasional Radiation Outbursts","Irradiated Storms","Unstable Fog","Reactive Rain","Radioactive Humidity","Radioactive Damp","Irradiated Winds","Contaminated Puddles","Volatile Winds","Unstable Atmosphere","Gamma Dust","Nuclidic Atmosphere","Boiling Superstorms","Intense Heatbursts","Superheated Rain","Boiling Monsoons","Broiling Humidity","Painfully Hot Rain","Torrential Heat","Blistering Floods","Scalding Rainstorms","Torrid Deluges","Boiling Puddles","Sweltering Damp","Superheated Drizzle","Dangerously Hot Fog","Choking Humidity","Mostly Calm","Occasional Scalding Cloudbursts","Usually Mild","Blistering Damp","Lethal Humidity Outbreaks","Temperate","Light Showers","Mild Rain","Refreshing Breeze","Pleasant","Balmy","Mellow","Beautiful","Blissful","Billowing Dust Storms","Choking Sandstorms","Hazardous Temperature Extremes","Lung-Burning Night Wind","Extreme Wind Blasting","Planetwide Desiccation","Sand Blizzards","Howling Gales","Dead Wastes","Occasional Sandstorms","Infrequent Dust Storms","Intermittent Wind Blasting","Parched Sands","Sporadic Grit Storms","Dust-Choked Winds","Highly Variable Temperatures","Blasted Atmosphere","Freezing Night Winds","Ceaseless Drought","Moistureless","Baked","Sterile","Unclouded Skies","Dry Gusts","Withered","Icy Nights","Perfectly Clear","Absent","No Atmosphere","Utterly Still","Peaceful","Eerily Calm","Airless","Silent","Inert","Clear","Invisible Mist","Internal Rain","Lost Clouds","Crimson Heat","Winds of Glass","Thirsty Clouds","Obsidian Heat","Memories of Frost","Haunted Frost","Indetectable Burning","[REDACTED]","Anomalous","Burning Crimson","Scarlet Rain","Fevered Clouds","Carmine Winds","Red Mist","Flaming Hail","Vermillion Storms","Rain of Atlas","Angered Clouds","Blood Rain","Bilious Storms","Deadly Pressure Variations","Harsh Toxic Wind","Corrupted Blood","Infinite Toxic Mist","Echoes of Acid","Poison Cyclones","Inescapable Toxins","Clouds of Haunted Green","Invisible Jade Winds","Frozen Mists","Electric Rain","Azure Storms","Extreme Low Pressure","All-Consuming Cold","Winds from Beyond","Unfathomable Storms","Unimaginable Blue","Ultramarine Wind","Inverted Superstorms","Coastal Storms"],rarity:["Abundant","High","Ample","Frequent","Full","Generous","Average","Regular","Common","Typical","Ordinary","Occasional","Low","Scarce","Infrequent","Rare","Limited","Sporadic","None","Deficient","Undetected","Lacking","Absent","Nonexistent","Unusual","Lost","Displaced","From Elsewhere","Uprooted","Misplaced","Forfeited","Between Worlds","Infected","Diseased","Twisted","Screaming","Viral","Invasive","Bountiful","Copious","Rich","Numerous","Moderate","Fair","Medium","Intermittent","Uncommon","Few","Sparse","Empty","Not Present","Devoid","Barren"]};N.sentinels=[];const st=ot();for(const t in st)N.sentinels.push(...st[t]);const dt=new Set,_=W();for(const t in _)for(const n in _[t])_[t][n].forEach(a=>dt.add(a));N.planetDescriptors=Array.from(dt),N.resources=Object.keys(lt());const qt=`<div
  class="tableHeader text sectionToggle"
  data-fauna="section\${i}"
  data-section="fauna"
>
  <p style="margin-right: auto">
    Creature:
    <output
      class="has-text-weight-bold"
      name="faunaName\${i}"
    ></output>
  </p>
  <button
    class="button is-danger is-outlined"
    type="button"
    data-evt-id="removeButton"
  >
    Remove
  </button>
  <button
    class="button"
    data-evt-id="hideButton"
  >
    Hide
  </button>
</div>
<div
  class="table-cell text"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <label for="faunaNameInput\${i}">Creature name:</label>
  <button class="tooltip">
    <data>Enter exactly as seen in game. Watch out for 0 (zero) and O (o).</data>
    <data>Creature Name</data>
    <data>Enter exactly as seen in game. Watch out for 0 (zero) and O (o).</data>
    <data>creature/creatureName</data>
  </button>
</div>
<div
  class="table-cell data"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <input
    type="text"
    data-dest="faunaName\${i}"
    id="faunaNameInput\${i}"
  />
</div>
<div
  class="table-cell text"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <label for="faunaFile_input\${i}">Creature file name:</label>
</div>
<div
  class="table-cell data"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <input
    type="text"
    id="faunaFile_input\${i}"
    data-dest="faunaFile\${i}"
    data-default="NmsMisc_NotAvailable.png"
  />
  <input
    type="file"
    id="faunaFileUpl\${i}"
    accept="image/*"
    data-evt-id="fileInput"
  />
</div>
<div
  class="table-cell text"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <label>Hemisphere:</label>
  <button class="tooltip">
    <data>Found in the creature discovery menu.</data>
    <data>Hemisphere</data>
    <data>
      Found in the creature discovery menu.<br />
      If no hemisphere is given, leave the input empty.
    </data>
    <data>creature/creatureHemisphere</data>
  </button>
</div>
<div
  class="table-cell data"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <select
    data-dest="faunaHemisphere\${i}"
    id="faunaHemisphereInput\${i}"
  >
    <option value=""></option>
    <option value="/ Found in the North">North</option>
    <option value="/ Found in the South">South</option>
  </select>
</div>
<div
  class="table-cell text"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <label>Rarity:</label>
  <button class="tooltip">
    <data>Found in the creature discovery menu.</data>
    <data>Rarity</data>
    <data>Found in the creature discovery menu.</data>
    <data>creature/creatureRarity</data>
  </button>
</div>
<div
  class="table-cell data"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <select
    data-dest="faunaRarity\${i}"
    id="faunaRarityInput\${i}"
  >
    <option value="Common">Common</option>
    <option value="Uncommon">Uncommon</option>
    <option value="Rare">Rare</option>
  </select>
</div>
<div
  class="table-cell text"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <label>Ecosystem:</label>
  <button class="tooltip">
    <data>Found in the creature discovery menu.</data>
    <data>Ecosystem</data>
    <data>Found in the creature discovery menu.</data>
    <data>creature/creatureEcosystem</data>
  </button>
</div>
<div
  class="table-cell data"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <select
    data-dest="faunaEcosystem\${i}"
    id="faunaEcosystemInput\${i}"
    data-evt-id="ecosystemInput"
  >
    <option value="Ground">Ground</option>
    <option value="Flying">Flying</option>
    <option value="Underwater">Underwater</option>
    <option value="Underground">Underground</option>
  </select>
</div>
<div
  class="table-cell text"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <label>Activity:</label>
  <button class="tooltip">
    <data>Found in the creature discovery menu.</data>
    <data>Activity</data>
    <data>Found in the creature discovery menu.</data>
    <data>creature/creatureActivity</data>
  </button>
</div>
<div
  class="table-cell data"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <select
    data-dest="faunaActivity\${i}"
    id="faunaActivityInput\${i}"
  >
    <option value="Always Active">Always Active</option>
    <option value="Diurnal">Diurnal</option>
    <option value="Nocturnal">Nocturnal</option>
    <option value="Mostly Diurnal">Mostly Diurnal</option>
    <option value="Mostly Nocturnal">Mostly Nocturnal</option>
  </select>
</div>
<div
  class="table-cell text"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <label>Genus:</label>
  <button class="tooltip">
    <data>See the wiki for a list of genera.</data>
    <data>Genus</data>
    <data
      >The genus is defined by the general appearance of a creature.<br />
      See the wiki for a
      <a
        href="https://nomanssky.fandom.com/wiki/Genus#Genus_List"
        target="_blank"
        rel="noopener noreferrer"
        >list of genera</a
      >.</data
    >
  </button>
</div>
<div
  class="table-cell data"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <select
    data-dest-noauto="faunaGenus\${i}"
    id="faunaGenusInput\${i}"
    data-evt-id="genusInput"
  ></select>
</div>
<div
  class="table-cell text"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <label for="faunaWeightInput\${i}">Weight in kg:</label>
  <button class="tooltip">
    <data>Found on the creature scan. No "kg" necessary.</data>
    <data>Weight</data>
    <data>Found on the creature scan.<br />No "kg" necessary.</data>
    <data>creature/creatureWeight</data>
  </button>
</div>
<div
  class="table-cell data"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <input
    data-dest-noauto="faunaWeight\${i}"
    data-dest-number="1"
    type="text"
    id="faunaWeightInput\${i}"
    maxlength="5"
    placeholder="0.0"
  />
</div>
<div
  class="table-cell text"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <label for="faunaHeightInput\${i}">Height in m:</label>
  <button class="tooltip">
    <data>Found on the creature scan. No "m" necessary.</data>
    <data>Height</data>
    <data>Found on the creature scan.<br />No "m" necessary.</data>
    <data>creature/creatureHeight</data>
  </button>
</div>
<div
  class="table-cell data"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <input
    data-dest-noauto="faunaHeight\${i}"
    data-dest-number="1"
    type="text"
    id="faunaHeightInput\${i}"
    maxlength="3"
    placeholder="0.0"
    data-evt-id="creatureHeightInput"
  />
</div>
<div
  class="table-cell text"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <label for="faunaDiscovererInput\${i}">Discoverer:</label>
</div>
<div
  class="table-cell data"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <input
    data-dest="faunaDiscoverer\${i}"
    type="text"
    id="faunaDiscovererInput\${i}"
  />
</div>
<div
  class="table-cell text"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <label for="faunaLinkCheckbox\${i}">Link item:</label>
</div>
<div
  class="table-cell data"
  data-fauna="section\${i}"
  data-section="fauna fauna\${i}"
>
  <input
    data-dest-noauto="faunaLink\${i}"
    type="checkbox"
    id="faunaLinkCheckbox\${i}"
    data-evt-id="creatureLink"
  />
</div>
`,Wt=`<div
  class="tableHeader text sectionToggle"
  data-flora="section\${i}"
  data-section="flora"
>
  <p style="margin-right: auto">
    Plant:
    <output
      class="has-text-weight-bold"
      name="floraName\${i}"
    ></output>
  </p>
  <button
    class="button is-danger is-outlined"
    type="button"
    data-evt-id="removeButton"
  >
    Remove
  </button>
  <button
    class="button"
    data-evt-id="hideButton"
  >
    Hide
  </button>
</div>
<div
  class="table-cell text"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <label for="floraNameInput\${i}">Plant name:</label>
  <button class="tooltip">
    <data>Found in the analysis visor.</data>
    <data>Flora Name</data>
    <data>Found in the analysis visor.</data>
    <data>flora/floraName</data>
  </button>
</div>
<div
  class="table-cell data"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <input
    type="text"
    data-dest="floraName\${i}"
    id="floraNameInput\${i}"
  />
</div>
<div
  class="table-cell text"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <label for="floraFile_input\${i}">Plant file name:</label>
</div>
<div
  class="table-cell data"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <input
    type="text"
    id="floraFile_input\${i}"
    data-dest="floraFile\${i}"
    data-default="NmsMisc_NotAvailable.png"
  />
  <input
    type="file"
    id="floraFileUpl\${i}"
    accept="image/*"
    data-evt-id="fileInput"
  />
</div>
<div
  class="table-cell text"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <label for="floraAgeInput\${i}">Age:</label>
  <button class="tooltip">
    <data>Found in the analysis visor.</data>
    <data>Flora Age</data>
    <data>Found in the analysis visor.</data>
    <data>flora/age</data>
  </button>
</div>
<div
  class="table-cell data"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <input
    type="text"
    data-dest="floraAge\${i}"
    list="ageData"
    id="floraAgeInput\${i}"
  />
</div>
<div
  class="table-cell text"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <label for="floraRootInput\${i}">Root structure:</label>
  <button class="tooltip">
    <data>Found in the analysis visor.</data>
    <data>Flora Root Structure</data>
    <data>Found in the analysis visor.</data>
    <data>flora/roots</data>
  </button>
</div>
<div
  class="table-cell data"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <input
    type="text"
    data-dest="floraRoot\${i}"
    list="rootData"
    id="floraRootInput\${i}"
  />
</div>
<div
  class="table-cell text"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <label for="floraNutInput\${i}">Nutrient source:</label>
  <button class="tooltip">
    <data>Found in the analysis visor.</data>
    <data>Flora Nutrient Source</data>
    <data>Found in the analysis visor.</data>
    <data>flora/nutSource</data>
  </button>
</div>
<div
  class="table-cell data"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <input
    type="text"
    data-dest="floraNut\${i}"
    list="nutSourceData"
    id="floraNutInput\${i}"
  />
</div>
<div
  class="table-cell text"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <label for="floraNoteInput\${i}">Notes:</label>
  <button class="tooltip">
    <data>Found in the analysis visor.</data>
    <data>Flora Notes</data>
    <data>Found in the analysis visor.</data>
    <data>flora/notes</data>
  </button>
</div>
<div
  class="table-cell data"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <input
    type="text"
    data-dest="floraNote\${i}"
    list="floraNotesData"
    id="floraNoteInput\${i}"
  />
</div>
<div
  class="table-cell text"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <label for="floraResourcePrimInput\${i}">Primary element:</label>
  <button class="tooltip">
    <data>Found in the analysis visor.</data>
    <data>Flora Primary Element</data>
    <data>Found in the analysis visor.</data>
    <data>flora/primEl</data>
  </button>
</div>
<div
  class="table-cell data"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <input
    data-dest-noauto="floraElements\${i}"
    type="text"
    list="floraResources"
    id="floraResourcePrimInput\${i}"
    data-evt-id="floraElements"
  />
</div>
<div
  class="table-cell text"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <label for="floraResourceSecInput\${i}">Secondary element:</label>
  <button class="tooltip">
    <data>Found in the analysis visor.</data>
    <data>Flora Secondary Element</data>
    <data>Found in the analysis visor. Leave empty if there is no secondary element.</data>
    <data>flora/secEl</data>
  </button>
</div>
<div
  class="table-cell data"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <input
    data-dest-noauto="floraElements\${i}"
    type="text"
    list="floraResources"
    id="floraResourceSecInput\${i}"
    data-evt-id="floraElements"
  />
</div>
<div
  class="table-cell text"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <label for="floraDiscovererInput\${i}">Discoverer:</label>
</div>
<div
  class="table-cell data"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <input
    data-dest="floraDiscoverer\${i}"
    type="text"
    id="floraDiscovererInput\${i}"
  />
</div>
<div
  class="table-cell text"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <label for="floraLinkCheckbox\${i}">Link item:</label>
</div>
<div
  class="table-cell data"
  data-flora="section\${i}"
  data-section="flora flora\${i}"
>
  <input
    data-dest-noauto="floraLink\${i}"
    type="checkbox"
    id="floraLinkCheckbox\${i}"
    data-evt-id="floraLink"
  />
</div>
`,_t=`<div
  class="tableHeader text sectionToggle"
  data-mineral="section\${i}"
  data-section="mineral"
>
  <p style="margin-right: auto">
    Mineral:
    <output
      class="has-text-weight-bold"
      name="mineralName\${i}"
    ></output>
  </p>
  <button
    class="button is-danger is-outlined"
    type="button"
    data-evt-id="removeButton"
  >
    Remove
  </button>
  <button
    class="button"
    data-evt-id="hideButton"
  >
    Hide
  </button>
</div>
<div
  class="table-cell text"
  data-mineral="section\${i}"
  data-section="mineral mineral\${i}"
>
  <label for="mineralNameInput\${i}">Mineral name:</label>
  <button class="tooltip">
    <data>Found in the analysis visor.</data>
    <data>Mineral Name</data>
    <data>Found in the analysis visor.</data>
    <data>mineral/mineralName</data>
  </button>
</div>
<div
  class="table-cell data"
  data-mineral="section\${i}"
  data-section="mineral mineral\${i}"
>
  <input
    type="text"
    data-dest="mineralName\${i}"
    id="mineralNameInput\${i}"
  />
</div>
<div
  class="table-cell text"
  data-mineral="section\${i}"
  data-section="mineral mineral\${i}"
>
  <label for="mineralFile_input\${i}">Mineral file name:</label>
</div>
<div
  class="table-cell data"
  data-mineral="section\${i}"
  data-section="mineral mineral\${i}"
>
  <input
    type="text"
    id="mineralFile_input\${i}"
    data-dest="mineralFile\${i}"
    data-default="NmsMisc_NotAvailable.png"
  />
  <input
    type="file"
    id="mineralFileUpl\${i}"
    accept="image/*"
    data-evt-id="fileInput"
  />
</div>
<div
  class="table-cell text"
  data-mineral="section\${i}"
  data-section="mineral mineral\${i}"
>
  <label for="mineralMetalInput\${i}">Metal Content:</label>
  <button class="tooltip">
    <data>Found in the analysis visor.</data>
    <data>Mineral Metal Content</data>
    <data>Found in the analysis visor.</data>
    <data>mineral/content</data>
  </button>
</div>
<div
  class="table-cell data"
  data-mineral="section\${i}"
  data-section="mineral mineral\${i}"
>
  <input
    type="text"
    data-dest-noauto="mineralMetal\${i}"
    id="mineralMetalInput\${i}"
    maxlength="2"
    data-evt-id="metalInput"
  />
</div>
<div
  class="table-cell text"
  data-mineral="section\${i}"
  data-section="mineral mineral\${i}"
>
  <label for="mineralFormationInput\${i}">Formation Process:</label>
  <button class="tooltip">
    <data>Found in the analysis visor.</data>
    <data>Mineral Formation Process</data>
    <data>Found in the analysis visor.</data>
    <data>mineral/formation</data>
  </button>
</div>
<div
  class="table-cell data"
  data-mineral="section\${i}"
  data-section="mineral mineral\${i}"
>
  <input
    type="text"
    data-dest="mineralFormation\${i}"
    list="formationData"
    id="mineralFormationInput\${i}"
  />
</div>
<div
  class="table-cell text"
  data-mineral="section\${i}"
  data-section="mineral mineral\${i}"
>
  <label for="mineralNoteInput\${i}">Notes:</label>
  <button class="tooltip">
    <data>Found in the analysis visor.</data>
    <data>Mineral Notes</data>
    <data>Found in the analysis visor.</data>
    <data>mineral/notes</data>
  </button>
</div>
<div
  class="table-cell data"
  data-mineral="section\${i}"
  data-section="mineral mineral\${i}"
>
  <input
    type="text"
    data-dest="mineralNote\${i}"
    list="mineralNotesData"
    id="mineralNoteInput\${i}"
  />
</div>
<div
  class="table-cell text"
  data-mineral="section\${i}"
  data-section="mineral mineral\${i}"
>
  <label for="mineralResourcePrimInput\${i}">Primary element:</label>
  <button class="tooltip">
    <data>Found in the analysis visor.</data>
    <data>Mineral Primary Element</data>
    <data>Found in the analysis visor.</data>
    <data>mineral/primEl</data>
  </button>
</div>
<div
  class="table-cell data"
  data-mineral="section\${i}"
  data-section="mineral mineral\${i}"
>
  <input
    data-dest-noauto="mineralElements\${i}"
    type="text"
    list="mineralResources"
    id="mineralResourcePrimInput\${i}"
    data-evt-id="mineralResourceInput"
  />
</div>
<div
  class="table-cell text"
  data-mineral="section\${i}"
  data-section="mineral mineral\${i}"
>
  <label for="mineralResourceSecInput\${i}">Secondary element:</label>
  <button class="tooltip">
    <data>Found in the analysis visor.</data>
    <data>Mineral Secondary Element</data>
    <data>Found in the analysis visor. Leave empty if there is no secondary element.</data>
    <data>mineral/secEl</data>
  </button>
</div>
<div
  class="table-cell data"
  data-mineral="section\${i}"
  data-section="mineral mineral\${i}"
>
  <input
    data-dest-noauto="mineralElements\${i}"
    type="text"
    list="mineralResources"
    id="mineralResourceSecInput\${i}"
    data-evt-id="mineralResourceInput"
  />
</div>
<div
  class="table-cell text"
  data-mineral="section\${i}"
  data-section="mineral mineral\${i}"
>
  <label for="mineralDiscovererInput\${i}">Discoverer:</label>
</div>
<div
  class="table-cell data"
  data-mineral="section\${i}"
  data-section="mineral mineral\${i}"
>
  <input
    data-dest="mineralDiscoverer\${i}"
    type="text"
    id="mineralDiscovererInput\${i}"
  />
</div>
<div
  class="table-cell text"
  data-mineral="section\${i}"
  data-section="mineral mineral\${i}"
>
  <label for="mineralLinkCheckbox\${i}">Link item:</label>
</div>
<div
  class="table-cell data"
  data-mineral="section\${i}"
  data-section="mineral mineral\${i}"
>
  <input
    data-dest-noauto="mineralLink\${i}"
    type="checkbox"
    id="mineralLinkCheckbox\${i}"
    data-evt-id="mineralLink"
  />
</div>
`,z=3,zt=5;function Gt(){const t=p.faunaNumber,n=t==="1"?`is ${t} creature`:`are ${t} creatures`;$(n,"faunaNumberSentence")}function Ot(t){const n=t.dataset.destNoauto,a=Bt(p.pageType),i=vt(t.value,a," "),o=d.output[n];Array.isArray(o)?o.forEach(e=>e.innerText=i):o.innerText=i}function Ut(){const{system:t,region:n,galaxy:a,hubname:i}=p,o=`It can be found in the [[${t}]] [[star system]] in the [[${n}]] [[region]] of [[${i}]], in the [[${a}]] [[galaxy]].`;d.output.location.innerText=o}function rt(t=d.input.resourceInputs.querySelector("button")){const n=t.parentElement,a=document.querySelectorAll("[data-resource]"),i=x(Array.from(a),"dataset.resource"),o="resource_input"+i,e="section"+i,l=`<div class="table-cell text removable" data-resource="section${i}">
		<button class="button is-outlined is-danger icon is-small" title="Remove resource" type="button" disabled data-evt-id="removeButton">&#10006</button>
		<label for="${o}">Resource name:</label>
	</div>
	<div class="table-cell data" data-resource="section${i}">
		<input type="text" list="resources" id="${o}" data-evt-id="resourceInput">
	</div>`,s=y(l,{},[{element:"resourceInput",handler:"input",func:()=>ct()},{element:"resourceInput",handler:"change",func:function(){K(this)}},{element:"removeButton",handler:"click",func:()=>{C(e,"resource"),ut()}}]);S(s,n,"beforebegin");const r=document.querySelectorAll("[data-resource] button"),c=r.length;for(;document.querySelectorAll("[data-resource] button").length<z;)rt(t);if(c+1>zt&&(t.disabled=!0),c>z)for(const m of Array.from(r))m.disabled=!1}function ut(){const t=d.input.resourceInputs.querySelector("button");t.disabled=!1;const n=document.querySelectorAll("[data-resource] button");if(n.length<=z)for(const a of Array.from(n))a.disabled=!0;ct()}function ct(){const t=lt(),n=document.querySelectorAll("[data-resource] input"),a=new Set;for(const l of Array.from(n))l.value&&a.add(l.value);const i={};for(const l of Array.from(a))i[l]=t[l];const o=Object.keys(i).map(l=>`* {{ilink|${l}}}`),e=Object.values(i).map(l=>`[[${l}]]`);d.output.resourceList.innerText=e.join(", "),d.output.resourceBullets.innerText=o.join(`
`)}function jt(){const t=p.sentinel,n=ot(),a=(()=>{for(const o in n)if(n[o].includes(t))return o;return""})(),i=`[[Sentinel]] activity on this ${p.pageType.toLowerCase()} is classified as: ''${t}''. The sentinels ${a==="aggressive"?"":"don't"} present an immediate threat.`;d.output.sentinelSentence.innerText=i}function Vt(t){const n=t.parentElement,a=d.output[t.dataset.destNoauto],i="fauna",o=document.querySelectorAll(`[data-${i}]`),e=x(Array.from(o),`dataset.${i}`).toString(),l=y(qt,{i:e},[{element:"removeButton",handler:"click",func:function(){C(`section${e}`,"fauna"),M(this)}},{element:"hideButton",handler:"click",func:function(){F(`fauna${e}`,this)}},{element:"fileInput",handler:"change",func:function(){k(this)}},{element:"ecosystemInput",handler:"change",func:function(){pt(this)}},{element:"genusInput",handler:"change",func:function(){O(this)}},{element:"creatureHeightInput",handler:"input",func:function(){Tt(this)}},{element:"creatureLink",handler:"change",func:function(){j(this)}}]),s=`<div data-fauna="section${e}">|-</div>
	<div data-fauna="section${e}">|[[File:<output id="faunaFile${e}"></output>|150px]] || <span style="display:none" name="faunaLink${e}">[[</span><output id="faunaName${e}" name="faunaName${e}"></output><span style="display:none" name="faunaLink${e}">]]</span> || <output id="faunaRarity${e}"></output> / <output id="faunaEcosystem${e}"></output> / <output id="faunaActivity${e}"> </output> <output id="faunaHemisphere${e}"></output> || <output id="faunaGenus${e}"></output> || <output id="faunaHeight${e}"></output>m || <output id="faunaWeight${e}"></output>kg || <output id="faunaDiscoverer${e}"></output></div>`;S(l,n,"beforebegin"),a.insertAdjacentHTML("beforeend",s),G(t,i,e),pt(d.input[`faunaEcosystemInput${e}`])}function Yt(t){const n=t.parentElement,a=d.output[t.dataset.destNoauto],i="flora",o=document.querySelectorAll(`[data-${i}]`),e=x(Array.from(o),`dataset.${i}`).toString(),l=y(Wt,{i:e},[{element:"removeButton",handler:"click",func:function(){C(`section${e}`,"flora"),M(this)}},{element:"hideButton",handler:"click",func:function(){F(`flora${e}`,this)}},{element:"fileInput",handler:"input",func:function(){k(this)}},{element:"floraElements",handler:"input",func:function(){U(this)}},{element:"floraLink",handler:"change",func:function(){j(this)}}]),s=`<div data-flora="section${e}">|-</div>
	<div data-flora="section${e}">|[[File:<output id="floraFile${e}"></output>|150px]] || <span style="display:none" name="floraLink${e}">[[</span><output id="floraName${e}" name="floraName${e}"></output><span style="display:none" name="floraLink${e}">]]</span> || <output id="floraAge${e}"></output> || <output id="floraRoot${e}"></output> || <output id="floraNut${e}"></output> || <output id="floraNote${e}"></output> || <output id="floraElements${e}"></output> || <output id="floraDiscoverer${e}"></output></div>`;S(l,n,"beforebegin"),a.insertAdjacentHTML("beforeend",s),G(t,i,e)}function Jt(t){const n=t.parentElement,a=d.output[t.dataset.destNoauto],i="mineral",o=document.querySelectorAll(`[data-${i}]`),e=x(Array.from(o),`dataset.${i}`).toString(),l=y(_t,{i:e},[{element:"removeButton",handler:"click",func:function(){C(`section${e}`,"mineral"),M(this)}},{element:"hideButton",handler:"click",func:function(){F(`mineral${e}`,this)}},{element:"fileInput",handler:"input",func:function(){k(this)}},{element:"metalInput",handler:"input",func:function(){Y(this)}},{element:"mineralResourceInput",handler:"input",func:function(){U(this)}},{element:"mineralLink",handler:"change",func:function(){j(this)}}]),s=`<div data-mineral="section${e}">|-</div>
	<div data-mineral="section${e}">|[[File:<output id="mineralFile${e}"></output>|150px]] || <span style="display:none" name="mineralLink${e}">[[</span><output id="mineralName${e}" name="mineralName${e}"></output><span style="display:none" name="mineralLink${e}">]]</span> || <output id="mineralMetal${e}"></output> || <output id="mineralFormation${e}"></output> || <output id="mineralNote${e}"></output> || <output id="mineralElements${e}"></output> || <output id="mineralDiscoverer${e}"></output></div>`;S(l,n,"beforebegin"),a.insertAdjacentHTML("beforeend",s),G(t,i,e)}function G(t,n,a){Q(),M(t);const i={input:{},output:{}},o=`[data-${n}="section${a}"]`;$t(o);const e=document.querySelectorAll(`${o} :is(input, select)`);for(const s of Array.from(e))i.input[s.id]=s.id;const l=document.querySelectorAll(`${o} output`);for(const s of Array.from(l))s.id&&(i.output[s.id]=s.id);P(i)}function M(t){const n=t.parentElement,a=n.dataset.section,i=document.querySelectorAll(`.tableHeader[data-${a}]`);for(let e=0;e<i.length;e++){const l="is-"+H(e+1),s=i[e].dataset[a],r=document.querySelectorAll(`[data-${a}="${s}"]`);for(const c of Array.from(r))c.classList.remove("is-odd","is-even"),c.classList.add(l)}if(!n.dataset[a])return;a==="fauna"?(o(g.genera),O()):(o(g.planetPropResources?.[a]),U());function o(e){if(!e)return;const l=n.dataset[a],s=A(l),r=Object.keys(e).find(c=>A(c)===s);delete e[r]}}function O(t=void 0){const n=g.genera??={};if(t){const o=t.value,e=t.dataset.destNoauto;n[e]=B(o)}const a=new Set,i=I(structuredClone(n),!0);for(const o in i){const e=i[o];e&&!a.has(e)&&(i[o]=`[[${e}]]`,a.add(e))}for(const[o,e]of Object.entries(i))d.output[o].innerText=e}function U(t=void 0){const n=g.planetPropResources??={};if(t){const o=t.value,e=t.dataset.destNoauto,l=t.id,s=t.parentElement.dataset.section.split(" ")[0],r=s.replace(A(s).toString(),"");n[r]??={},n[r][e]??={},n[r][e][l]=B(o)}const a=new Set,i=I(structuredClone(n));for(const o in I(i)){const e=i[o];for(const l in I(e)){const s=e[l];for(const[r,c]of Object.entries(s))c&&!a.has(c)&&(s[r]=`[[${c}]]`,a.add(c))}}for(const o in i)for(const e in i[o]){const l=Object.values(i[o][e]).filter(Boolean).join(", ");d.output[e].innerText=l}}function pt(t){const n=t.value,a=Object.keys(it.ecosystems[n]),i="faunaGenusInput"+A(t.id),o=[];for(const e of a)o.push(`${e} (${it.ecosystems[n][e].commonName})`);Mt(d.input[i],a,o),O(d.input[i])}function Zt(t){t&&(d.input.sandwormInput.checked=!0),ft()}function ft(){const t=d.input.sandwormInput,n=t.dataset.destNoauto,a=Array.from(document.querySelectorAll(`[data-section="${n}"]`)),i=d.output[n];a.push(i);for(const o of a)t.checked?o.style.display="":o.style.display="none"}function Xt(){const t=(()=>{const n=d.input.autoSpawn;for(const a of n){const i=a;if(i.checked)return i.value}return""})();d.output.wormAutoSpawn.innerText=t}function mt(){const t=kt();d.output.wormAlbumName.innerText=t}function Kt(){const t=document.querySelectorAll("[data-moon], [data-resource], [data-fauna], [data-flora], [data-mineral]");R(Array.from(t)),ut(),mt(),typeof w.enableMoonAdd=="function"&&w.enableMoonAdd(),Dt(d.input.resourceInputs.querySelector("button"),"click")}function j(t){const n=t.checked,a=t.dataset.destNoauto;if(a){const i=document.getElementsByName(a);for(const o of Array.from(i))o.style.display=n?"":"none"}}function V(){const{discovered:t,discoveredlink:n,docby:a}=p,i=p.platform==="NS"?"Switch":p.platform,o=u(p.discDate),e=u(p.docDate),l=tt(a),s=(()=>{const f=Rt();return f&&f!==""?f:""})(),r=n?`{{profile|${n}}}`:tt(t),c=!a||a===t||a===n?`Discovered and uploaded by ${s} ${r} on ${o}`:`* Discovered and uploaded by ${i?i+" explorer":""} ${r} on ${o}
			* Explored and documented by ${s} ${l} on ${e}`,m=d.output.docby;m.style.display=c?"":"none",m.innerText=c;function u(f){const b={year:"numeric",month:"long",day:"numeric"},v=f.replaceAll("-","/");return new Date(v).toLocaleString("en-UK",b)}}function Y(t=null,n=0){if(!t){const e=document.querySelectorAll("[data-percentage-input]");for(const l of Array.from(e))Y(l,n);return}const a=t.dataset.destNoauto,i=t.value,o=wt(t,i,n);$(o?o+"%":"",a)}function bt(t=d.input.descriptionInput){const n=W().Infested,a=[];for(const o in n)a.push(...n[o]);const i=a.includes(t.value.trim());if(p.pageType==="system")return i;d.output.infested.innerText=i?"([[Biome Subtype - Infested|Infested]]) ":"",p.infested=i,Ot(t),Zt(i)}function vt(t,n,a){const i=W();switch((()=>{for(const o in i)for(const e in i[o])if(i[o][e]?.includes?.(t.trim()))return e;return""})()){case"prefix":return n+a+t.trim();case"suffix":return t.trim()+a+n;default:return t.trim()}}function $t(t){const n=document.querySelectorAll(`${t} :is(input, select)`);for(const a of Array.from(n))a.dataset.dest&&(h({element:a,func:function(){$(this)}}),$(a)),a.dataset.destNoauto&&(h({element:a,func:function(){L(this)}}),L(a)),a.dataset.default&&(h({element:a,func:function(){et(this)}}),et(a)),a.dataset.destSimple&&(h({element:a,func:function(){at(this)}}),at(a)),a.dataset.destNumber&&(h({element:a,func:function(){q(this,parseInt(this.dataset.destNumber)||void 0)}}),q(a,parseInt(a.dataset.destNumber)||void 0)),a.list&&h({element:a,handler:"change",func:function(){K(this)}})}const Qt=`<div
  class="tableHeader text sectionToggle"
  data-tradeable="section\${childIndex}"
  data-station="terminal"
>
  <span class="has-text-weight-bold">Tradeable</span>
  <button
    class="button is-danger is-outlined"
    type="button"
    data-evt-id="removeButton"
  >
    Remove
  </button>
</div>
<div
  class="table-cell text"
  data-tradeable="section\${childIndex}"
  data-station="terminal"
>
  <label for="\${text_input}">Tradeable name:</label>
</div>
<div
  class="table-cell data"
  data-tradeable="section\${childIndex}"
  data-station="terminal"
>
  <input
    type="text"
    list="terminal"
    id="\${text_input}"
    data-dest="\${text}"
  />
</div>
<div
  class="table-cell text"
  data-tradeable="section\${childIndex}"
  data-station="terminal"
>
  <label for="\${price_input}">Tradeable price:</label>
</div>
<div
  class="table-cell data"
  data-tradeable="section\${childIndex}"
  data-station="terminal"
>
  <input
    type="text"
    id="\${price_input}"
    data-dest-number="0"
    data-dest-noauto="\${price}"
  />
</div>
`,te=`<div class="tableHeader text \${oddEvenClass} sectionToggle" data-planet="planet\${i}">
	<p><output id=planetClass\${i}>Planet</output> \${i}: <output class="has-text-weight-bold"
			name="planetName\${i}"></output></p>
	<button class="button" data-evt-id="hideButtonPlanet">Hide</button>
</div>
<div class="table-cell text \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<label for="planetName_input\${i}">Planet name</label>
	<button class="tooltip">
		<data>Can be found in the discovery menu.</data>
		<data>Planet Name</data>
		<data>Can be found in the planet discovery menu.<br>Enter exactly as seen in game. Watch out for 0 (zero) and O
			(o).</data>
		<data>planet/planetName</data>
	</button>
</div>
<div class="table-cell data \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<input type="text" id="planetName_input\${i}" data-dest="planetName\${i}">
</div>
<div class="table-cell text \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<label for="planetFile_input\${i}">Planet file name</label>
	<button class="tooltip">
		<data>Should show the entire planet from space. Click for an example picture.</data>
		<data>Planet Name</data>
		<data>
			Should show the entire planet from space.<br>
			Make sure no asteroids/pulse lines/freighters are obstructing the picture.
			<br>Point the sun directly at the planet, no weird angles.
			<br>Also try to only get the planet into the shot, no other planets.
			Only exception to this are moons or rings, which should be included if they exist.
			<br>Disable the vignette.
		</data>
		<data>planet/planetPic</data>
	</button>
</div>
<div class="table-cell data \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<input type="text" id="planetFile_input\${i}" data-dest="planetFile\${i}" data-default="NmsMisc_NotAvailable.png">
	<input type="file" id="mainFileUpl\${i}" accept="image/*" data-evt-id="fileInput">
</div>
<!-- <div class="table-cell text \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<label for="landscapeFile_input\${i}">Landscape file name</label>
	<button class="tooltip">
		<data>Showcase the planet's landscape.</data>
	</button>
</div>
<div class="table-cell data \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<input type="text" id="landscapeFile_input\${i}" data-dest="landscapeFile\${i}"
		data-default="NmsMisc_NotAvailable.png">
	<input type="file" id="secFileUpl\${i}" accept="image/*" data-evt-id="fileInput">
</div> -->
<div class="table-cell text \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<label>Biome</label>
	<button class="tooltip">
		<data>Can be determined from the planetary features.</data>
		<data>Planet Biome</data>
		<data>
			Can be determined from the planetary features such as the weather, harvestable plants or available
			resources.<br>
			See the <a href=https://nomanssky.fandom.com/wiki/Biome rel=noreferrer target=_blank>Biome wiki page</a> for
			more information.
		</data>
	</button>
</div>
<div class="table-cell data \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<select id="biome_input\${i}" data-dest-noauto="biome\${i}" data-evt-id="biomeInput">
		<option value="Lush">Lush</option>
		<option value="Barren">Barren</option>
		<option value="Dead">Dead</option>
		<option value="Exotic">Exotic</option>
		<option value="Mega Exotic">Mega Exotic</option>
		<option value="Scorched">Scorched</option>
		<option value="Frozen">Frozen</option>
		<option value="Toxic">Toxic</option>
		<option value="Irradiated">Irradiated</option>
		<option value="Marsh">Marsh</option>
		<option value="Volcanic">Volcanic</option>
	</select>
</div>
<div class="table-cell text \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<label for="descriptor_input\${i}">Planet description</label>
	<button class="tooltip">
		<data>Can be found in the exploration guide.</data>
		<data>Planet Description</data>
		<data>Can be found in the exploration guide.</data>
		<data>planet/planetDesc</data>
	</button>
</div>
<div class="table-cell data \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<input type="text" id="descriptor_input\${i}" list="planetDescriptors" data-dest-noauto="descriptor\${i}"
		data-evt-id="descriptorInput">
</div>
<div class="table-cell text \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<label for="moon_input\${i}">Is moon</label>
</div>
<div class="table-cell data \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<input type="checkbox" id="moon_input\${i}" data-dest-noauto="descriptor_input\${i}" data-evt-id="moonCheckbox">
</div>
<div class="tableHeader text \${oddEvenClass} sectionToggle" data-planet="planet\${i}" data-section="planet\${i}">
	<div style="display:flex">
		<p style="margin-right:1.5rem">Resources</p>
		<button class="tooltip">
			<data>Found in the Discovery Menu or on the analysis visor.</data>
			<data>Planet Resources</data>
			<data>Found in the Discovery Menu or on the analysis visor.</data>
			<data>planet/resources</data>
		</button>
	</div>
	<button class="button" data-evt-id="hideButtonResource">Hide</button>
</div>
<div class="tableHeader text \${oddEvenClass}" data-section="resource\${i} planet\${i}" data-planet="planet\${i}">
	<button class="button is-primary" id="addResourceButton\${i}" type="button" data-evt-id="addResourceButton">+ Add
		Resource</button>
</div>
<div class="table-cell text \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<label for="weather_input\${i}">Extreme Weather?</label>
	<button class="tooltip">
		<data>Can be found in the discovery menu.</data>
		<data>Planet Weather</data>
		<data>Can be found in the discovery menu.</data>
		<data>planet/weather</data>
	</button>
</div>
<div class="table-cell data \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<select id="weather_input\${i}" data-dest-simple="weather\${i}" data-evt-id="weatherInput">
    <option id="Yes">Yes</option>
    <option id="No">No</option>
  </select>
</div>
<div class="table-cell text \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<label for="sentinel_input\${i}">Extreme Sentinels?</label>
	<button class="tooltip">
		<data>Can be found in the discovery menu.</data>
		<data>Planet Sentinel Level</data>
		<data>Can be found in the discovery menu.</data>
		<data>planet/sentinels</data>
	</button>
</div>
<div class="table-cell data \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<select id="sentinel_input\${i}" data-dest="sentinel\${i}">
  <option id="Yes">Yes</option>
  <option id="No">No</option>
</select>
</div>
<div class="table-cell text \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<label for="sentinel_input\${i}">Notes</label>
	<button class="tooltip">
		<data>Can be found in the discovery menu.</data>
		<data>Notes</data>
		<data>Can be found in the discovery menu.</data>
		<data>planet/notes</data>
	</button>
</div>
<div class="table-cell data \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<input type="text" id="note_input\${i}" data-dest="note\${i}">
</div>
<!-- <div class="table-cell text \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<label for="flora_input\${i}">Flora</label>
	<button class="tooltip">
		<data>Can be found in the discovery menu.</data>
		<data>Planet Flora Level</data>
		<data>Can be found in the discovery menu.</data>
		<data>planet/flora</data>
	</button>
</div>
<div class="table-cell data \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<input type="text" id="flora_input\${i}" list="rarity" data-dest="flora\${i}">
</div>
<div class="table-cell text \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<label for="fauna_input\${i}">Fauna</label>
	<button class="tooltip">
		<data>Can be found in the discovery menu.</data>
		<data>Planet Fauna Level</data>
		<data>Can be found in the discovery menu.</data>
		<data>planet/fauna</data>
	</button>
</div>
<div class="table-cell data \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<input type="text" id="fauna_input\${i}" list="rarity" data-dest="fauna\${i}">
</div>
<div class="table-cell text \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<label for="faunatotal_input\${i}">Number of Fauna</label>
	<button class="tooltip">
		<data>Can be found in the discovery menu.</data>
		<data>Planet Fauna Number</data>
		<data>Can be found in the discovery menu.</data>
		<data>planet/faunaNum</data>
	</button>
</div>
<div class="table-cell data \${oddEvenClass}" data-planet="planet\${i}" data-section="planet\${i}">
	<input type="text" id="faunatotal_input\${i}" maxlength="2" data-dest-number="0" data-dest-noauto="FaunaTotal\${i}"
		data-evt-id="faunaTotalInput">
</div> -->`,ee=`<div
  class="\${oddEvenClass}"
  data-planet="planet\${i}"
  id="body\${i}"
>
  <div>|-</div>
  <div>|[[File:<output id="planetFile\${i}"></output>|150px]]</div>
  <div>
    |[[<output
      id="planetName\${i}"
      name="planetName\${i}"
    ></output
    >]]
  </div>
  <div>
    |<output id="biome\${i}"></output><output id="infested\${i}"></output>&lt;hr&gt;<output id="descriptor\${i}"></output>
  </div>
  <div>|<output id="weather\${i}"></output></div>
  <div>|<output id="sentinel\${i}"></output></div>
  <!-- <div>|<output id="flora\${i}"></output></div>
	<div>|<output id="fauna\${i}"></output> (<output id="faunaTotal\${i}" name="FaunaTotal\${i}"></output>)</div> -->
  <div>|-</div>
  <div>|colspan=2 style="text-align:left"| '''Resources''': <output id="resource\${i}"></output></div>
  <div>|colspan=3 | '''Notes''': <output id="note\${i}"></output></div>
  <!-- <div>|colspan=8 style="text-align:left"|'''100% Zoology Bonus''': {{FaunaTotal|<output id="faunaTotalNotes\${i}"
			name="FaunaTotal\${i}"></output>}} {{nanites}}</div> -->
</div>
`;function J(){const{region:t,hubname:n,galaxy:a}=p,i=`Located in the [[${t}]] [[region]] of [[${n}]] in the [[${a}]] galaxy.`;$(i,"loc")}function ae(){const t=d.input.waterInput.parentElement.previousElementSibling,n=d.output.planets,{planet:a,moon:i}=p,o=e(parseInt(a)+parseInt(i),2,6);if(isNaN(o))return;function e(u,f,b){return Math.max(f,Math.min(b,u))}function l(){const u=new Set,f=(()=>{const b=document.querySelectorAll("[data-planet]");for(const v of Array.from(b))u.add(v.dataset.planet);return u.size})();return o-f}const s=document.querySelectorAll("[data-planet]");let r=x(Array.from(s),"dataset.planet");for(;l()!==0;)l()>0?(m(r),r++):c();function c(){const u=document.querySelectorAll("[data-planet]"),f=new Set;for(const E of Array.from(u))f.add(E.dataset.planet);const b=Array.from(f).pop(),v=document.querySelectorAll(`[data-planet="${b}"]`);R(Array.from(v))}function m(u){const f={i:u.toString(),oddEvenClass:"is-"+H(u)},b=y(te,f,[{element:"hideButtonPlanet",handler:"click",func:function(){F(`planet${u}`,this)}},{element:"hideButtonResource",handler:"click",func:function(){F(`resource${u}`,this)}},{element:"addResourceButton",handler:"click",func:function(){ht(this,u)}},{element:"fileInput",handler:"change",func:function(){k(this)}},{element:"biomeInput",handler:"change",func:function(){It(this)}},{element:"moonCheckbox",handler:"change",func:function(){ie(this)}},{element:"descriptorInput",handler:"input",func:function(){xt(this)}}]),v=y(ee,f);Q(b),S(b,t,"beforebegin"),n.insertAdjacentHTML("beforeend",v),$t(`[data-planet="planet${u}"]`);const E={output:{}},Et=document.querySelectorAll(`#body${u} output`);for(const D of Array.from(Et)){const X=D.id;E.output[X]=X}P(E),It(document.getElementById(`biome_input${u}`));const Z=document.getElementById(`addResourceButton${u}`);if(Z)for(let D=0;D<3;D++)ht(Z,u)}}function ht(t,n){const a=t.parentElement,i=document.querySelectorAll("[data-resource]"),o=x(Array.from(i),"dataset.resource"),e="resource"+n,l="resource_input"+o,s="is-"+H(n),r=`<div class="table-cell text removable ${s}" data-section="resource${n} planet${n}" data-resource="section${o}" data-planet="planet${n}">
		<button class="button is-danger is-outlined icon is-small" title="Remove resource" type="button" disabled data-evt-id="removeButton">&#10006</button>
		<label for="${l}">Resource name:</label>
	</div>
	<div class="table-cell data ${s}" data-section="resource${n} planet${n}" data-resource="section${o}" data-planet="planet${n}">
		<input type="text" list="resources" id="${l}" data-dest-noauto="${e}" data-evt-id="addButton">
	</div>`,c=y(r,{},[{element:"removeButton",handler:"click",func:()=>{C(`section${o}`,"resource"),ne(l)}},{element:"addButton",handler:"input",func:function(){At(this)}}]);S(c,a,"beforebegin");const m={input:{}};m.input[l]=l,P(m);const u=yt(n),f=gt(u);if(f+1>6&&(t.disabled=!0),f>3)for(const b of Array.from(u)){const v=b.querySelector("button");v&&(v.disabled=!1)}}function yt(t){const n=document.querySelectorAll(`[data-resource][data-planet="planet${t}"]`);return Array.from(n)}function gt(t){const n=new Set;for(const a of t){const i=a.dataset.resource;n.add(i)}return n.size}function ne(t){const n=d.input[t],a=n.dataset.destNoauto,i=n.id,o=A(a);n.value&&(delete g.resources[a][i],At()),document.getElementById(`addResourceButton${o}`).disabled=!1;const e=yt(o);if(gt(e)<4)for(const l of e){const s=l.querySelector("button");s&&(s.disabled=!0)}}function ie(t){const n=document.getElementById(t.dataset.destNoauto);if(!n)return;const a=A(t.id),i=t.checked?"Moon":"Planet";document.getElementById("planetClass"+a).innerText=i,xt(n,i)}function xt(t,n=void 0){const a=A(t.id);n||(n=document.getElementById("moon_input"+a).checked?"Moon":"Planet");const i=t.value,o=t.dataset.destNoauto,e=vt(i,n,"<br>");d.output[o].innerText=e;const l=bt(t);typeof l=="boolean"&&re("infested"+a,l)}function St(t=""){const n=document.querySelectorAll("[data-dest-checkbox-group]");if(t){i(t);return}const a=new Set;for(const o of Array.from(n))(o.dataset.listener??"").split(" ").includes("change")||h({element:o,func:function(){St(this.dataset.destCheckboxGroup)}}),a.add(o.dataset.destCheckboxGroup);for(const o of a)i(o);return;function i(o){const e=document.querySelectorAll(`[data-dest-checkbox-group="${o}"]`),l=o.startsWith("SD")?"":o.substring(0,2),s=[];for(const m of Array.from(e)){const u=m;u.checked&&s.push(u.value)}const r=[];for(let m=1;m<=s.length;m++){const u=`| ${l}${m}=${s[m-1]}`;r.push(u)}$(r.join(`
`),o);const c=d.output[o].closest("#scrapDealer");c&&(r.length===0?c.style.display="none":c.style.display="")}}function oe(){const t=d.input.terminalInputs,n=d.output.tradeTerminal,a=document.querySelectorAll("[data-tradeable]"),i=x(Array.from(a),"dataset.tradeable").toString(),o={childIndex:i,price:"price"+i,text:"text"+i,text_input:"text_input"+i,price_input:"price_input"+i},e=y(Qt,o,[{element:"removeButton",handler:"click",func:()=>{C(`section${i}`,"tradeable"),le()}}]),l=`<div data-tradeable="section${i}">|-</div>
	<div data-tradeable="section${i}">| {{ilink|<output id="${o.text}"></output>}} || {{Units}} <output id="${o.price}"></output></div>`,s=e.querySelectorAll(`[data-tradeable="section${i}"] input[data-dest]`);for(const f of Array.from(s))h({element:f,func:function(){$(this)}});const r=e.querySelectorAll(`[data-tradeable="section${i}"] input[data-dest-number]`);for(const f of Array.from(r))h({element:f,func:function(){L(this),q(this,isNaN(parseInt(this.dataset.destNumber))?void 0:parseInt(this.dataset.destNumber))}});S(e,t,"beforebegin"),n.insertAdjacentHTML("beforeend",l);const c=document.querySelectorAll("[data-tradeable]"),m=(()=>{const f=new Set;for(const b of Array.from(c)){const v=b.dataset.tradeable;f.add(v)}return f.size})(),u=t.querySelector("button");m+1>5&&(u.disabled=!0)}function le(){const t=d.input.terminalInputs.querySelector("button");t.disabled=!1}function se(){const t=document.querySelectorAll("[data-tradeable], [data-planet]");R(Array.from(t));const n=document.querySelectorAll(".mark");for(const a of Array.from(n))a.classList.remove("mark")}function de(){const t=p.region,n=t.split(" ").length===1?t+" region":t,a=d.output.regionLong;a.innerText=n}function At(t=void 0){const n=g.resources??={};if(t){const o=t.value,e=t.dataset.destNoauto,l=t.id;n[e]??={},n[e][l]=B(o)}const a=new Set,i=I(structuredClone(n),!0);for(const o in i){const e=i[o];for(const l in e){const s=e[l];s&&!a.has(s)&&(i[o][l]=`[[${s}]]`,a.add(s))}}for(const o in i){const e=Object.values(i[o]).filter(Boolean).join(", ");d.output[o].innerText=e}}function It(t){const n=t.value,a=t.dataset.destNoauto,i=g.biomes??={};i[a]=B(n);const o=new Set,e=I(structuredClone(i),!0);for(const l in e){const s=e[l];s&&!o.has(s)&&(e[l]=`{{Biome|${s}}}`,o.add(s))}Ct(e)}function re(t,n){const a=g.infestedBiomes??={};a[t]=n;let i=!1;const o=I(structuredClone(a),!0);for(const e in o){const l=o[e];l&&!i?(o[e]="([[Biome Subtype - Infested|Infested]])",i=!0):l?o[e]=" (Infested) ":(o[e]="",delete a[e])}Ct(o)}function Ct(t){for(const[n,a]of Object.entries(t))d.output[n].innerText=a}function ue(){const t=d.output.expectedPrefix,n=p.name,a=p.region,i=p.portalglyphs;if(!n||!a){t.innerHTML="";return}const o=Pt(a),e=(()=>{const s=i.substring(1,4);return parseInt(s,16).toString(16).toUpperCase().replace("69","68+1")})(),l=`EV${o}-${e}`;t.innerHTML="",!n.includes(l)&&(t.innerText=`The expected prefix for this system is ${l}.

`)}function Ft(){const t={uncharted:"This system is uncharted and has no [[Space Station]].",abandoned:`This space station is abandoned.

`},n={normal:["img","terminal","merchant","scrapDealer"],pirate:["img","scrapDealer"],abandoned:["img","note","terminal"],uncharted:["note"]},a=(()=>{const l=p.faction,s=p.wealth,r=p.conflict;return l==="Uncharted"?"uncharted":l.includes("Abandoned")?"abandoned":s.includes("Black Market")||r.includes("Pirate")?"pirate":"normal"})(),i=document.querySelectorAll("[data-station]");for(let l=0;l<i.length;l++){const s=i[l],r=s.dataset.station;if(n[a].includes(r)){(r==="merchant"||r==="scrapDealer")&&e(s)&&l++;const c=s.id==="scrapDealer"&&!p.SDMerchant;s.style.display=c?"none":""}else s.style.display="none"}if(!t[a])return;const o=document.querySelector('[data-station="note"]');o.innerText=t[a];function e(l){const s=l.querySelector("button:not(.tooltip)");if(!s)return;const r=s.dataset.buttonId;if(!r)return;const c="display"+r;return s.dataset[c]}}function ce(){const t=p.portalglyphs,n=d.input.colorInput;t.substring(2,4)==="79"?(T(n,"none"),n.value="Black Hole"):T(n,""),$(n)}function pe(t){const n=t.value,a=d.input.conflictInput,i=[d.input.wealthInput,a];for(const o of i){const e=o.querySelector('optgroup[label="Pirate"] option').value;(n.includes("Black Market")||n.includes("Pirate Controlled"))&&(o.value=e),$(o)}Ft()}function fe(){const t=p.faction,n=d.input.wealthInput,a=d.input.economyInput,i=d.input.conflictInput,o=[n,a,i];if(t.includes("Abandoned")||t==="Uncharted"){for(const e of o){const l=e.querySelector("optgroup:last-child option").value;e.value=l,$(e),T(e,"none")}return}for(const e of o)T(e,"")}function Nt(t=void 0){if(!t){const a=document.getElementsByName("systemExtras");for(const i of Array.from(a))Nt(i);return}const n=d.output[t.value];n.style.display=t.checked?"":"none"}function me(){const t=["","Analysis Visor","System Exploration Guide","System Page","Default Space Station Multi-Tool"];(p.faction==="Uncharted"||p.faction.includes("Abandoned"))&&t.pop(),p.galleryArray=t}function be(t){const n=t.parentElement.getElementsByClassName("checkbox"),a={};for(const e of Array.from(n)){const{id:l}=e.querySelector("input"),s=e.innerText.toLowerCase();a[l]=s,e.classList.remove("mark")}const i=t.value.trim().toLowerCase();if(!i)return;const o=Object.entries(a).filter(([,e])=>e.includes(i)).map(([e])=>e);for(const e of o)document.getElementById(e)?.closest(".checkbox")?.classList.add("mark")}const ve=[{element:["docDateInput","discDateInput","platformInput"],func:()=>V()},{element:"oldNameInput",func:()=>nt()},{element:["portalglyphsInput"],func:()=>J()}];w.docByExternal=()=>V(),Ht(N),Lt(ve),nt(),J();export{me as A,St as B,ft as a,bt as b,rt as c,Vt as d,Yt as e,Gt as f,Jt as g,mt as h,J as i,ue as j,V as k,Ut as l,de as m,ce as n,Ft as o,ae as p,fe as q,Kt as r,jt as s,oe as t,Y as u,pe as v,Xt as w,Nt as x,be as y,se as z};
