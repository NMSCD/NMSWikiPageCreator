"use strict";import{as as R,T as w,_ as Dt,C as r,D as f,G as $,at as kt,aq as x,Z as y,Y as S,au as Bt,av as K,ar as C,O as F,ao as k,a7 as Tt,aw as Q,X as P,$ as A,a1 as Mt,ax as g,ap as B,ay as I,az as H,aA as tt,aB as Rt,aC as h,a3 as L,aD as et,a0 as at,aE as q,a6 as wt,aF as Pt,a2 as T,a5 as nt,a8 as Ht,P as Lt}from"./links-DlE74E-n.js";import{c as it}from"./creatureData-BP-SWOsl.js";import"./startup-DDIz0MBV.js";import"./gallery-DNmbCE7y.js";function ot(){return{low:["Absent","Few","Infrequent","Intermittent","Irregular Patrols","Isolated","Limited","Low","Low Security","Minimal","Missing","None","None Present","Not Present","Remote","Sparse","Spread Thin"],high:["Attentive","Enforcing","Ever-present","Frequent","Observant","Regular Patrols","Require Obedience","Require Orthodoxy","Unwavering"],aggressive:["Aggressive","Frenzied","Hateful","High Security","Hostile Patrols","Inescapable","Malicious","Threatening","Zealous"],corrupted:["Corrupted","Forsaken","Rebellious","Answer To None","Sharded from the Atlas","Dissonant","De-Harmonised"]}}function lt(){return{Copper:"Cu",Cadmium:"Cd",Emeril:"Em",Indium:"In","Activated Copper":"Cu+","Activated Cadmium":"Cd+","Activated Emeril":"Em+","Activated Indium":"In+",Ammonia:"NH3",Dioxite:"CO2",Paraffinium:"Pf",Phosphorus:"P",Pyrite:"Py",Uranium:"U",Silver:"Ag",Gold:"Au","Magnetised Ferrite":"Fe++",Sodium:"Na",Cobalt:"Co",Salt:"NaCl","Star Bulb":"Sb","Cactus Flesh":"Cc","Gamma Root":"Gr","Fungal Mould":"Ml","Frost Crystal":"Fc",Solanium:"So",Mordite:"Mo",Faecium:"Fa","Ancient Bones":"Ab","Salvageable Scrap":"Sa","Rusted Metal":"Jn",Basalt:"B"}}function W(){return{Dead:{suffix:["Dead","Empty","Desolate","Lifeless","Forsaken","Life-Incompatible","Low Atmosphere","Airless","Abandoned"],none:["Terraforming Catastrophe"]},Lush:{suffix:["Rainy","Verdant","Tropical","Viridescent","Grassy","Temperate","Humid","Overgrown","Flourishing","Bountiful","Paradise"]},Exotic:{suffix:["Shattered","Fractured","Fragmented","Contoured","Cabled","Webbed","Rattling","Spined","Skeletal","Finned","Bladed","Shell-Strewn","Fungal","Sporal","Capped","Ossified","Petrified","Calcified","Fissured","Breached","Hexagonal","Plated","Scaly","Mechanical","Metallic","Metallurgic","Bubbling","Frothing","Foaming","Columned","Sharded","Pillared"],prefix:["of Light"]},Glitch:{suffix:["Crimson","Malfunctioning","Breached","Infected","[REDACTED]","Glassy","Thirsty","Doomed","Erased","Temporary","Corrupted"],none:["Planetary Anomaly"]},Scorched:{suffix:["Charred","Arid","Scorched","Hot","Fiery","Boiling","High Temperature","Torrid","Incandescent","Scalding"]},Frozen:{suffix:["Frozen","Icebound","Arctic","Glacial","Sub-zero","Icy","Frostbound","Freezing","Hiemal","Hyperborean"]},Irradiated:{suffix:["Irradiated","Radioactive","Contaminated","Nuclear","Isotopic","Decaying Nuclear","Gamma-Intensive","High Radio Source","Supercritical","High Energy"]},Toxic:{suffix:["Toxic","Poisonous","Noxious","Corrosive","Acidic","Caustic","Acrid","Blighted","Miasmatic","Rotting"]},Barren:{suffix:["Barren","Desert","Rocky","Bleak","Parched","Abandoned","Dusty","Desolate","Wind-swept"]},Marsh:{suffix:["Marshy","Swamp","Tropical","Foggy","Misty","Boggy","Quagmire","Hazy","Cloudy","Vapour","Reeking","Murky","Damp"],none:["Endless Morass"]},Volcanic:{suffix:["Lava","Magma","Erupting","Volcanic","Ash-Shrouded","Ashen","Tectonic","Unstable","Violent","Molten","Flame-Ruptured","Basalt"],none:["Imminent Core Detonation","Obsidian Bead"]},MegaExotic:{suffix:["Crimson","Lost Red","[REDACTED]","Chromatic Fog","Scarlet","Blood","Wine Dark","Lost Green","Doomed Jade","Haunted Emeril","Lost Blue","Azure","Cerulean","Ultramarine"],none:["Planetary Anomaly","Stellar Corruption Detected","Vermillion Globe","Vile Anomaly","Toxic Anomaly","Deathly Green Anomaly","Harsh Blue Globe","Frozen Anomaly"]},Water:{suffix:["Drowning","Oceanic","Tidal","Waterlocked","Aquatic","Marine"],none:["Waterworld","Endless Seas"]},Infested:{suffix:["Infested","Worm-ridden","Tainted","Mutated","Corrupted"],none:["Infested Paradise","Toxic Horror","Boiling Doom","Radioactive Abomination","Icy Abhorrence","Xeno-Colony","Caustic Nightmare","Fiery Dreadworld","Frozen Hell","Infected Dustbowl","The Nest","Terrorsphere"]}}}const N={weatherData:["Tropical Storms","Occasional Boiling Fog","Superheated Mists","Painful Mist","Infrequent Torrents","Oppressive","Soggy Danger","Sticky Heat","Clammy Menace","Hazardous Moisture","Gentle Mist","Humid","Tropical Winds","Warm Fog","Temperate Murk","Mild Damp","Warm Dewdrops","Tepid Damp","Sweaty Drizzle","Muggy Haze","Death Fog","Sultry Disaster","Cataclysmic Monsoons","Mists of Annihilation","All-Consuming Fog","Liquid Hell","Storms of Desolation","Melting Deluges","Boiling Catastrophe","Damp Misery","Heated Gas Pockets","Occasional Firestorms","Incendiary Winds","Unpredictable Conflagrations","Drifting Firestorms","Pillars of Flame","Magma Geysers","Plumes of Fire","Molten Rain","Tectonic Storms","Smothering Ash","Sulphurous Haze","Ash Wisps","Drifting Smog","Cinderfalls","Ash Plumes","Choking Ash","Burning Mists","Sulfur Fumes","Enveloping Ash","Ashen Winds","Frequent Firestorms","Walls of Flame","Clouds of Fire","Ashen Destruction","Magma Rain","Basalt Hail","Explosive Gas Eruptions","Lethal Ash Storms","Sulphurous Inferno","Colossal Firestorms","Obsidian Doom","Infrequent Heat Storms","Rare Firestorms","Superheated Gas Pockets","Wandering Hot Spots","Atmospheric Heat Instabilities","Direct Sunlight","Heated Atmosphere","Occasional Ash Storms","Dangerously Hot","Burning Air","Parched","Overly Warm","Sunny","Dehydrated","Unending Sunlight","Sweltering","Extreme Heat","Burning Gas Clouds","Intense Heat","Superheated Air","Scalding Heat","Inferno Winds","Firestorms","Combustible Dust","Incendiary Dust","Self-Igniting Storms","Howling Blizzards","Intense Cold","Icy Tempests","Supercooled Storms","Raging Snowstorms","Ice Storms","Deep Freeze","Roaring Ice Storms","Frequent Blizzards","Hazardous Whiteouts","Frozen Clouds","Occasional Snowfall","Infrequent Blizzards","Outbreaks of Frozen Rain","Harsh, Icy Winds","Drifting Snowstorms","Migratory Blizzards","Icy Blasts","Wandering Frosts","Powder Snow","Wintry","Snowy","Icy","Crisp","Frost","Freezing","Permafrost","Frequent Toxic Floods","Toxic Superstorms","Acidic Deluges","Corrosive Cyclones","Caustic Floods","Corrosive Storms","Torrential Acid","Noxious Gas Storms","Toxic Monsoons","Bone-Stripping Acid Storms","Corrosive Rainstorms","Pouring Toxic Rain","Occasional Acid Storms","Atmospheric Corruption","Poison Flurries","Toxic Outbreaks","Acidic Dust Pockets","Passing Toxic Fronts","Caustic Winds","Alkaline Cloudbursts","Dangerously Toxic Rain","Corrosive Sleet Storms","Lethal Atmosphere","Infrequent Toxic Drizzle","Acid Rain","Toxic Clouds","Poison Rain","Choking Clouds","Caustic Moisture","Poisonous Gas","Stinging Atmosphere","Toxic Damp","Corrosive Damp","Stinging Puddles","Extreme Radioactivity","Irradiated Thunderstorms","Planet-Wide Radiation Storms","Extreme Atmospheric Decay","Roaring Nuclear Wind","Gamma Cyclones","Contaminated Squalls","Extreme Thermonuclear Fog","Frequent Particle Eruptions","Enormous Nuclear Storms","Particulate Winds","Energetic Storms","Irradiated Downpours","Radioactive Dust Storms","Volatile Windstorms","Occasional Radiation Outbursts","Irradiated Storms","Unstable Fog","Reactive Rain","Radioactive Humidity","Radioactive Damp","Irradiated Winds","Contaminated Puddles","Volatile Winds","Unstable Atmosphere","Gamma Dust","Nuclidic Atmosphere","Boiling Superstorms","Intense Heatbursts","Superheated Rain","Boiling Monsoons","Broiling Humidity","Painfully Hot Rain","Torrential Heat","Blistering Floods","Scalding Rainstorms","Torrid Deluges","Boiling Puddles","Sweltering Damp","Superheated Drizzle","Dangerously Hot Fog","Choking Humidity","Mostly Calm","Occasional Scalding Cloudbursts","Usually Mild","Blistering Damp","Lethal Humidity Outbreaks","Temperate","Light Showers","Mild Rain","Refreshing Breeze","Pleasant","Balmy","Mellow","Beautiful","Blissful","Billowing Dust Storms","Choking Sandstorms","Hazardous Temperature Extremes","Lung-Burning Night Wind","Extreme Wind Blasting","Planetwide Desiccation","Sand Blizzards","Howling Gales","Dead Wastes","Occasional Sandstorms","Infrequent Dust Storms","Intermittent Wind Blasting","Parched Sands","Sporadic Grit Storms","Dust-Choked Winds","Highly Variable Temperatures","Blasted Atmosphere","Freezing Night Winds","Ceaseless Drought","Moistureless","Baked","Sterile","Unclouded Skies","Dry Gusts","Withered","Icy Nights","Perfectly Clear","Absent","No Atmosphere","Utterly Still","Peaceful","Eerily Calm","Airless","Silent","Inert","Clear","Invisible Mist","Internal Rain","Lost Clouds","Crimson Heat","Winds of Glass","Thirsty Clouds","Obsidian Heat","Memories of Frost","Haunted Frost","Indetectable Burning","[REDACTED]","Anomalous","Burning Crimson","Scarlet Rain","Fevered Clouds","Carmine Winds","Red Mist","Flaming Hail","Vermillion Storms","Rain of Atlas","Angered Clouds","Blood Rain","Bilious Storms","Deadly Pressure Variations","Harsh Toxic Wind","Corrupted Blood","Infinite Toxic Mist","Echoes of Acid","Poison Cyclones","Inescapable Toxins","Clouds of Haunted Green","Invisible Jade Winds","Frozen Mists","Electric Rain","Azure Storms","Extreme Low Pressure","All-Consuming Cold","Winds from Beyond","Unfathomable Storms","Unimaginable Blue","Ultramarine Wind","Inverted Superstorms","Coastal Storms"],rarity:["Abundant","High","Ample","Frequent","Full","Generous","Average","Regular","Common","Typical","Ordinary","Occasional","Low","Scarce","Infrequent","Rare","Limited","Sporadic","None","Deficient","Undetected","Lacking","Absent","Nonexistent","Unusual","Lost","Displaced","From Elsewhere","Uprooted","Misplaced","Forfeited","Between Worlds","Infected","Diseased","Twisted","Screaming","Viral","Invasive","Bountiful","Copious","Rich","Numerous","Moderate","Fair","Medium","Intermittent","Uncommon","Few","Sparse","Empty","Not Present","Devoid","Barren"]};N.sentinels=[];const st=ot();for(const t in st)N.sentinels.push(...st[t]);const dt=new Set,_=W();for(const t in _)for(const a in _[t])_[t][a].forEach(n=>dt.add(n));N.planetDescriptors=Array.from(dt),N.resources=Object.keys(lt());const qt=`<div
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
`,z=3,zt=5;function Gt(){const t=f.faunaNumber,a=t==="1"?`is ${t} creature`:`are ${t} creatures`;$(a,"faunaNumberSentence")}function Ot(t){const a=t.dataset.destNoauto,n=Bt(f.pageType),i=vt(t.value,n," "),l=r.output[a];Array.isArray(l)?l.forEach(e=>e.innerText=i):l.innerText=i}function Ut(){const{system:t,region:a,galaxy:n,hubname:i}=f,l=`It can be found in the [[${t}]] [[star system]] in the [[${a}]] [[region]] of [[${i}]], in the [[${n}]] [[galaxy]].`;r.output.location.innerText=l}function rt(t=r.input.resourceInputs.querySelector("button")){const a=t.parentElement,n=document.querySelectorAll("[data-resource]"),i=x(Array.from(n),"dataset.resource"),l="resource_input"+i,e="section"+i,o=`<div class="table-cell text removable" data-resource="section${i}">
		<button class="button is-outlined is-danger icon is-small" title="Remove resource" type="button" disabled data-evt-id="removeButton">&#10006</button>
		<label for="${l}">Resource name:</label>
	</div>
	<div class="table-cell data" data-resource="section${i}">
		<input type="text" list="resources" id="${l}" data-evt-id="resourceInput">
	</div>`,s=y(o,{},[{element:"resourceInput",handler:"input",func:()=>ct()},{element:"resourceInput",handler:"change",func:function(){K(this)}},{element:"removeButton",handler:"click",func:()=>{C(e,"resource"),ut()}}]);S(s,a,"beforebegin");const d=document.querySelectorAll("[data-resource] button"),p=d.length;for(;document.querySelectorAll("[data-resource] button").length<z;)rt(t);if(p+1>zt&&(t.disabled=!0),p>z)for(const c of Array.from(d))c.disabled=!1}function ut(){const t=r.input.resourceInputs.querySelector("button");t.disabled=!1;const a=document.querySelectorAll("[data-resource] button");if(a.length<=z)for(const n of Array.from(a))n.disabled=!0;ct()}function ct(){const t=lt(),a=document.querySelectorAll("[data-resource] input"),n=new Set;for(const o of Array.from(a))o.value&&n.add(o.value);const i={};for(const o of Array.from(n))i[o]=t[o];const l=Object.keys(i).map(o=>`* {{ilink|${o}}}`),e=Object.values(i).map(o=>`[[${o}]]`);r.output.resourceList.innerText=e.join(", "),r.output.resourceBullets.innerText=l.join(`
`)}function jt(){const t=f.sentinel,a=ot(),n=(()=>{for(const l in a)if(a[l].includes(t))return l;return""})(),i=`[[Sentinel]] activity on this ${f.pageType.toLowerCase()} is classified as: ''${t}''. The sentinels ${n==="aggressive"?"":"don't"} present an immediate threat.`;r.output.sentinelSentence.innerText=i}function Vt(t){const a=t.parentElement,n=r.output[t.dataset.destNoauto],i="fauna",l=document.querySelectorAll(`[data-${i}]`),e=x(Array.from(l),`dataset.${i}`).toString(),o=y(qt,{i:e},[{element:"removeButton",handler:"click",func:function(){C(`section${e}`,"fauna"),M(this)}},{element:"hideButton",handler:"click",func:function(){F(`fauna${e}`,this)}},{element:"fileInput",handler:"change",func:function(){k(this)}},{element:"ecosystemInput",handler:"change",func:function(){pt(this)}},{element:"genusInput",handler:"change",func:function(){O(this)}},{element:"creatureHeightInput",handler:"input",func:function(){Tt(this)}},{element:"creatureLink",handler:"change",func:function(){j(this)}}]),s=`<div data-fauna="section${e}">|-</div>
	<div data-fauna="section${e}">|[[File:<output id="faunaFile${e}"></output>|150px]] || <span style="display:none" name="faunaLink${e}">[[</span><output id="faunaName${e}" name="faunaName${e}"></output><span style="display:none" name="faunaLink${e}">]]</span> || <output id="faunaRarity${e}"></output> / <output id="faunaEcosystem${e}"></output> / <output id="faunaActivity${e}"> </output> <output id="faunaHemisphere${e}"></output> || <output id="faunaGenus${e}"></output> || <output id="faunaHeight${e}"></output>m || <output id="faunaWeight${e}"></output>kg || <output id="faunaDiscoverer${e}"></output></div>`;S(o,a,"beforebegin"),n.insertAdjacentHTML("beforeend",s),G(t,i,e),pt(r.input[`faunaEcosystemInput${e}`])}function Yt(t){const a=t.parentElement,n=r.output[t.dataset.destNoauto],i="flora",l=document.querySelectorAll(`[data-${i}]`),e=x(Array.from(l),`dataset.${i}`).toString(),o=y(Wt,{i:e},[{element:"removeButton",handler:"click",func:function(){C(`section${e}`,"flora"),M(this)}},{element:"hideButton",handler:"click",func:function(){F(`flora${e}`,this)}},{element:"fileInput",handler:"input",func:function(){k(this)}},{element:"floraElements",handler:"input",func:function(){U(this)}},{element:"floraLink",handler:"change",func:function(){j(this)}}]),s=`<div data-flora="section${e}">|-</div>
	<div data-flora="section${e}">|[[File:<output id="floraFile${e}"></output>|150px]] || <span style="display:none" name="floraLink${e}">[[</span><output id="floraName${e}" name="floraName${e}"></output><span style="display:none" name="floraLink${e}">]]</span> || <output id="floraAge${e}"></output> || <output id="floraRoot${e}"></output> || <output id="floraNut${e}"></output> || <output id="floraNote${e}"></output> || <output id="floraElements${e}"></output> || <output id="floraDiscoverer${e}"></output></div>`;S(o,a,"beforebegin"),n.insertAdjacentHTML("beforeend",s),G(t,i,e)}function Jt(t){const a=t.parentElement,n=r.output[t.dataset.destNoauto],i="mineral",l=document.querySelectorAll(`[data-${i}]`),e=x(Array.from(l),`dataset.${i}`).toString(),o=y(_t,{i:e},[{element:"removeButton",handler:"click",func:function(){C(`section${e}`,"mineral"),M(this)}},{element:"hideButton",handler:"click",func:function(){F(`mineral${e}`,this)}},{element:"fileInput",handler:"input",func:function(){k(this)}},{element:"metalInput",handler:"input",func:function(){Y(this)}},{element:"mineralResourceInput",handler:"input",func:function(){U(this)}},{element:"mineralLink",handler:"change",func:function(){j(this)}}]),s=`<div data-mineral="section${e}">|-</div>
	<div data-mineral="section${e}">|[[File:<output id="mineralFile${e}"></output>|150px]] || <span style="display:none" name="mineralLink${e}">[[</span><output id="mineralName${e}" name="mineralName${e}"></output><span style="display:none" name="mineralLink${e}">]]</span> || <output id="mineralMetal${e}"></output> || <output id="mineralFormation${e}"></output> || <output id="mineralNote${e}"></output> || <output id="mineralElements${e}"></output> || <output id="mineralDiscoverer${e}"></output></div>`;S(o,a,"beforebegin"),n.insertAdjacentHTML("beforeend",s),G(t,i,e)}function G(t,a,n){Q(),M(t);const i={input:{},output:{}},l=`[data-${a}="section${n}"]`;$t(l);const e=document.querySelectorAll(`${l} :is(input, select)`);for(const s of Array.from(e))i.input[s.id]=s.id;const o=document.querySelectorAll(`${l} output`);for(const s of Array.from(o))s.id&&(i.output[s.id]=s.id);P(i)}function M(t){var a;const n=t.parentElement,i=n.dataset.section,l=document.querySelectorAll(`.tableHeader[data-${i}]`);for(let o=0;o<l.length;o++){const s="is-"+H(o+1),d=l[o].dataset[i],p=document.querySelectorAll(`[data-${i}="${d}"]`);for(const c of Array.from(p))c.classList.remove("is-odd","is-even"),c.classList.add(s)}if(!n.dataset[i])return;i==="fauna"?(e(g.genera),O()):(e((a=g.planetPropResources)==null?void 0:a[i]),U());function e(o){if(!o)return;const s=n.dataset[i],d=A(s),p=Object.keys(o).find(c=>A(c)===d);delete o[p]}}function O(t=void 0){var a;const n=(a=g).genera??(a.genera={});if(t){const e=t.value,o=t.dataset.destNoauto;n[o]=B(e)}const i=new Set,l=I(structuredClone(n),!0);for(const e in l){const o=l[e];o&&!i.has(o)&&(l[e]=`[[${o}]]`,i.add(o))}for(const[e,o]of Object.entries(l))r.output[e].innerText=o}function U(t=void 0){var a,n;const i=(a=g).planetPropResources??(a.planetPropResources={});if(t){const o=t.value,s=t.dataset.destNoauto,d=t.id,p=t.parentElement.dataset.section.split(" ")[0],c=p.replace(A(p).toString(),"");i[c]??(i[c]={}),(n=i[c])[s]??(n[s]={}),i[c][s][d]=B(o)}const l=new Set,e=I(structuredClone(i));for(const o in I(e)){const s=e[o];for(const d in I(s)){const p=s[d];for(const[c,u]of Object.entries(p))u&&!l.has(u)&&(p[c]=`[[${u}]]`,l.add(u))}}for(const o in e)for(const s in e[o]){const d=Object.values(e[o][s]).filter(Boolean).join(", ");r.output[s].innerText=d}}function pt(t){const a=t.value,n=Object.keys(it.ecosystems[a]),i="faunaGenusInput"+A(t.id),l=[];for(const e of n)l.push(`${e} (${it.ecosystems[a][e].commonName})`);Mt(r.input[i],n,l),O(r.input[i])}function Zt(t){t&&(r.input.sandwormInput.checked=!0),ft()}function ft(){const t=r.input.sandwormInput,a=t.dataset.destNoauto,n=Array.from(document.querySelectorAll(`[data-section="${a}"]`)),i=r.output[a];n.push(i);for(const l of n)t.checked?l.style.display="":l.style.display="none"}function Xt(){const t=(()=>{const a=r.input.autoSpawn;for(const n of a){const i=n;if(i.checked)return i.value}return""})();r.output.wormAutoSpawn.innerText=t}function mt(){const t=kt();r.output.wormAlbumName.innerText=t}function Kt(){const t=document.querySelectorAll("[data-moon], [data-resource], [data-fauna], [data-flora], [data-mineral]");R(Array.from(t)),ut(),mt(),typeof w.enableMoonAdd=="function"&&w.enableMoonAdd(),Dt(r.input.resourceInputs.querySelector("button"),"click")}function j(t){const a=t.checked,n=t.dataset.destNoauto;if(n){const i=document.getElementsByName(n);for(const l of Array.from(i))l.style.display=a?"":"none"}}function V(){const{discovered:t,discoveredlink:a,docby:n}=f,i=f.platform==="NS"?"Switch":f.platform,l=u(f.discDate),e=u(f.docDate),o=tt(n),s=(()=>{const m=Rt();return m&&m!==""?m:""})(),d=a?`{{profile|${a}}}`:tt(t),p=!n||n===t||n===a?`Discovered and uploaded by ${s} ${d} on ${l}`:`* Discovered and uploaded by ${i?i+" explorer":""} ${d} on ${l}
			* Explored and documented by ${s} ${o} on ${e}`,c=r.output.docby;c.style.display=p?"":"none",c.innerText=p;function u(m){const b={year:"numeric",month:"long",day:"numeric"},v=m.replaceAll("-","/");return new Date(v).toLocaleString("en-UK",b)}}function Y(t=null,a=0){if(!t){const e=document.querySelectorAll("[data-percentage-input]");for(const o of Array.from(e))Y(o,a);return}const n=t.dataset.destNoauto,i=t.value,l=wt(t,i,a);$(l?l+"%":"",n)}function bt(t=r.input.descriptionInput){const a=W().Infested,n=[];for(const l in a)n.push(...a[l]);const i=n.includes(t.value.trim());if(f.pageType==="system")return i;r.output.infested.innerText=i?"([[Biome Subtype - Infested|Infested]]) ":"",f.infested=i,Ot(t),Zt(i)}function vt(t,a,n){const i=W();switch((()=>{var l,e;for(const o in i)for(const s in i[o])if((e=(l=i[o][s])==null?void 0:l.includes)!=null&&e.call(l,t.trim()))return s;return""})()){case"prefix":return a+n+t.trim();case"suffix":return t.trim()+n+a;default:return t.trim()}}function $t(t){const a=document.querySelectorAll(`${t} :is(input, select)`);for(const n of Array.from(a))n.dataset.dest&&(h({element:n,func:function(){$(this)}}),$(n)),n.dataset.destNoauto&&(h({element:n,func:function(){L(this)}}),L(n)),n.dataset.default&&(h({element:n,func:function(){et(this)}}),et(n)),n.dataset.destSimple&&(h({element:n,func:function(){at(this)}}),at(n)),n.dataset.destNumber&&(h({element:n,func:function(){q(this,parseInt(this.dataset.destNumber)||void 0)}}),q(n,parseInt(n.dataset.destNumber)||void 0)),n.list&&h({element:n,handler:"change",func:function(){K(this)}})}const Qt=`<div
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
`;function J(){const{region:t,hubname:a,galaxy:n}=f,i=`Located in the [[${t}]] [[region]] of [[${a}]] in the [[${n}]] galaxy.`;$(i,"loc")}function ae(){const t=r.input.waterInput.parentElement.previousElementSibling,a=r.output.planets,{planet:n,moon:i}=f,l=e(parseInt(n)+parseInt(i),2,6);if(isNaN(l))return;function e(u,m,b){return Math.max(m,Math.min(b,u))}function o(){const u=new Set,m=(()=>{const b=document.querySelectorAll("[data-planet]");for(const v of Array.from(b))u.add(v.dataset.planet);return u.size})();return l-m}const s=document.querySelectorAll("[data-planet]");let d=x(Array.from(s),"dataset.planet");for(;o()!==0;)o()>0?(c(d),d++):p();function p(){const u=document.querySelectorAll("[data-planet]"),m=new Set;for(const E of Array.from(u))m.add(E.dataset.planet);const b=Array.from(m).pop(),v=document.querySelectorAll(`[data-planet="${b}"]`);R(Array.from(v))}function c(u){const m={i:u.toString(),oddEvenClass:"is-"+H(u)},b=y(te,m,[{element:"hideButtonPlanet",handler:"click",func:function(){F(`planet${u}`,this)}},{element:"hideButtonResource",handler:"click",func:function(){F(`resource${u}`,this)}},{element:"addResourceButton",handler:"click",func:function(){ht(this,u)}},{element:"fileInput",handler:"change",func:function(){k(this)}},{element:"biomeInput",handler:"change",func:function(){It(this)}},{element:"moonCheckbox",handler:"change",func:function(){ie(this)}},{element:"descriptorInput",handler:"input",func:function(){xt(this)}}]),v=y(ee,m);Q(b),S(b,t,"beforebegin"),a.insertAdjacentHTML("beforeend",v),$t(`[data-planet="planet${u}"]`);const E={output:{}},Et=document.querySelectorAll(`#body${u} output`);for(const D of Array.from(Et)){const X=D.id;E.output[X]=X}P(E),It(document.getElementById(`biome_input${u}`));const Z=document.getElementById(`addResourceButton${u}`);if(Z)for(let D=0;D<3;D++)ht(Z,u)}}function ht(t,a){const n=t.parentElement,i=document.querySelectorAll("[data-resource]"),l=x(Array.from(i),"dataset.resource"),e="resource"+a,o="resource_input"+l,s="is-"+H(a),d=`<div class="table-cell text removable ${s}" data-section="resource${a} planet${a}" data-resource="section${l}" data-planet="planet${a}">
		<button class="button is-danger is-outlined icon is-small" title="Remove resource" type="button" disabled data-evt-id="removeButton">&#10006</button>
		<label for="${o}">Resource name:</label>
	</div>
	<div class="table-cell data ${s}" data-section="resource${a} planet${a}" data-resource="section${l}" data-planet="planet${a}">
		<input type="text" list="resources" id="${o}" data-dest-noauto="${e}" data-evt-id="addButton">
	</div>`,p=y(d,{},[{element:"removeButton",handler:"click",func:()=>{C(`section${l}`,"resource"),ne(o)}},{element:"addButton",handler:"input",func:function(){At(this)}}]);S(p,n,"beforebegin");const c={input:{}};c.input[o]=o,P(c);const u=yt(a),m=gt(u);if(m+1>6&&(t.disabled=!0),m>3)for(const b of Array.from(u)){const v=b.querySelector("button");v&&(v.disabled=!1)}}function yt(t){const a=document.querySelectorAll(`[data-resource][data-planet="planet${t}"]`);return Array.from(a)}function gt(t){const a=new Set;for(const n of t){const i=n.dataset.resource;a.add(i)}return a.size}function ne(t){const a=r.input[t],n=a.dataset.destNoauto,i=a.id,l=A(n);a.value&&(delete g.resources[n][i],At()),document.getElementById(`addResourceButton${l}`).disabled=!1;const e=yt(l);if(gt(e)<4)for(const o of e){const s=o.querySelector("button");s&&(s.disabled=!0)}}function ie(t){const a=document.getElementById(t.dataset.destNoauto);if(!a)return;const n=A(t.id),i=t.checked?"Moon":"Planet";document.getElementById("planetClass"+n).innerText=i,xt(a,i)}function xt(t,a=void 0){const n=A(t.id);a||(a=document.getElementById("moon_input"+n).checked?"Moon":"Planet");const i=t.value,l=t.dataset.destNoauto,e=vt(i,a,"<br>");r.output[l].innerText=e;const o=bt(t);typeof o=="boolean"&&re("infested"+n,o)}function St(t=""){const a=document.querySelectorAll("[data-dest-checkbox-group]");if(t){i(t);return}const n=new Set;for(const l of Array.from(a))(l.dataset.listener??"").split(" ").includes("change")||h({element:l,func:function(){St(this.dataset.destCheckboxGroup)}}),n.add(l.dataset.destCheckboxGroup);for(const l of n)i(l);return;function i(l){const e=document.querySelectorAll(`[data-dest-checkbox-group="${l}"]`),o=l.startsWith("SD")?"":l.substring(0,2),s=[];for(const c of Array.from(e)){const u=c;u.checked&&s.push(u.value)}const d=[];for(let c=1;c<=s.length;c++){const u=`| ${o}${c}=${s[c-1]}`;d.push(u)}$(d.join(`
`),l);const p=r.output[l].closest("#scrapDealer");p&&(d.length===0?p.style.display="none":p.style.display="")}}function oe(){const t=r.input.terminalInputs,a=r.output.tradeTerminal,n=document.querySelectorAll("[data-tradeable]"),i=x(Array.from(n),"dataset.tradeable").toString(),l={childIndex:i,price:"price"+i,text:"text"+i,text_input:"text_input"+i,price_input:"price_input"+i},e=y(Qt,l,[{element:"removeButton",handler:"click",func:()=>{C(`section${i}`,"tradeable"),le()}}]),o=`<div data-tradeable="section${i}">|-</div>
	<div data-tradeable="section${i}">| {{ilink|<output id="${l.text}"></output>}} || {{Units}} <output id="${l.price}"></output></div>`,s=e.querySelectorAll(`[data-tradeable="section${i}"] input[data-dest]`);for(const m of Array.from(s))h({element:m,func:function(){$(this)}});const d=e.querySelectorAll(`[data-tradeable="section${i}"] input[data-dest-number]`);for(const m of Array.from(d))h({element:m,func:function(){L(this),q(this,isNaN(parseInt(this.dataset.destNumber))?void 0:parseInt(this.dataset.destNumber))}});S(e,t,"beforebegin"),a.insertAdjacentHTML("beforeend",o);const p=document.querySelectorAll("[data-tradeable]"),c=(()=>{const m=new Set;for(const b of Array.from(p)){const v=b.dataset.tradeable;m.add(v)}return m.size})(),u=t.querySelector("button");c+1>5&&(u.disabled=!0)}function le(){const t=r.input.terminalInputs.querySelector("button");t.disabled=!1}function se(){const t=document.querySelectorAll("[data-tradeable], [data-planet]");R(Array.from(t));const a=document.querySelectorAll(".mark");for(const n of Array.from(a))n.classList.remove("mark")}function de(){const t=f.region,a=t.split(" ").length===1?t+" region":t,n=r.output.regionLong;n.innerText=a}function At(t=void 0){var a;const n=(a=g).resources??(a.resources={});if(t){const e=t.value,o=t.dataset.destNoauto,s=t.id;n[o]??(n[o]={}),n[o][s]=B(e)}const i=new Set,l=I(structuredClone(n),!0);for(const e in l){const o=l[e];for(const s in o){const d=o[s];d&&!i.has(d)&&(l[e][s]=`[[${d}]]`,i.add(d))}}for(const e in l){const o=Object.values(l[e]).filter(Boolean).join(", ");r.output[e].innerText=o}}function It(t){var a;const n=t.value,i=t.dataset.destNoauto,l=(a=g).biomes??(a.biomes={});l[i]=B(n);const e=new Set,o=I(structuredClone(l),!0);for(const s in o){const d=o[s];d&&!e.has(d)&&(o[s]=`{{Biome|${d}}}`,e.add(d))}Ct(o)}function re(t,a){var n;const i=(n=g).infestedBiomes??(n.infestedBiomes={});i[t]=a;let l=!1;const e=I(structuredClone(i),!0);for(const o in e){const s=e[o];s&&!l?(e[o]="([[Biome Subtype - Infested|Infested]])",l=!0):s?e[o]=" (Infested) ":(e[o]="",delete i[o])}Ct(e)}function Ct(t){for(const[a,n]of Object.entries(t))r.output[a].innerText=n}function ue(){const t=r.output.expectedPrefix,a=f.name,n=f.region,i=f.portalglyphs;if(!a||!n){t.innerHTML="";return}const l=Pt(n),e=(()=>{const s=i.substring(1,4);return parseInt(s,16).toString(16).toUpperCase().replace("69","68+1")})(),o=`EV${l}-${e}`;t.innerHTML="",!a.includes(o)&&(t.innerText=`The expected prefix for this system is ${o}.

`)}function Ft(){const t={uncharted:"This system is uncharted and has no [[Space Station]].",abandoned:`This space station is abandoned.

`},a={normal:["img","terminal","merchant","scrapDealer"],pirate:["img","scrapDealer"],abandoned:["img","note","terminal"],uncharted:["note"]},n=(()=>{const o=f.faction,s=f.wealth,d=f.conflict;return o==="Uncharted"?"uncharted":o.includes("Abandoned")?"abandoned":s.includes("Black Market")||d.includes("Pirate")?"pirate":"normal"})(),i=document.querySelectorAll("[data-station]");for(let o=0;o<i.length;o++){const s=i[o],d=s.dataset.station;if(a[n].includes(d)){(d==="merchant"||d==="scrapDealer")&&e(s)&&o++;const p=s.id==="scrapDealer"&&!f.SDMerchant;s.style.display=p?"none":""}else s.style.display="none"}if(!t[n])return;const l=document.querySelector('[data-station="note"]');l.innerText=t[n];function e(o){const s=o.querySelector("button:not(.tooltip)");if(!s)return;const d=s.dataset.buttonId;if(!d)return;const p="display"+d;return s.dataset[p]}}function ce(){const t=f.portalglyphs,a=r.input.colorInput;t.substring(2,4)==="79"?(T(a,"none"),a.value="Black Hole"):T(a,""),$(a)}function pe(t){const a=t.value,n=r.input.conflictInput,i=[r.input.wealthInput,n];for(const l of i){const e=l.querySelector('optgroup[label="Pirate"] option').value;(a.includes("Black Market")||a.includes("Pirate Controlled"))&&(l.value=e),$(l)}Ft()}function fe(){const t=f.faction,a=r.input.wealthInput,n=r.input.economyInput,i=r.input.conflictInput,l=[a,n,i];if(t.includes("Abandoned")||t==="Uncharted"){for(const e of l){const o=e.querySelector("optgroup:last-child option").value;e.value=o,$(e),T(e,"none")}return}for(const e of l)T(e,"")}function Nt(t=void 0){if(!t){const n=document.getElementsByName("systemExtras");for(const i of Array.from(n))Nt(i);return}const a=r.output[t.value];a.style.display=t.checked?"":"none"}function me(){const t=["","Analysis Visor","System Exploration Guide","System Page","Default Space Station Multi-Tool"];(f.faction==="Uncharted"||f.faction.includes("Abandoned"))&&t.pop(),f.galleryArray=t}function be(t){var a;const n=t.parentElement.getElementsByClassName("checkbox"),i={};for(const o of Array.from(n)){const{id:s}=o.querySelector("input"),d=o.innerText.toLowerCase();i[s]=d,o.classList.remove("mark")}const l=t.value.trim().toLowerCase();if(!l)return;const e=Object.entries(i).filter(([,o])=>o.includes(l)).map(([o])=>o);for(const o of e){const s=document.getElementById(o);(a=s?.closest(".checkbox"))==null||a.classList.add("mark")}}const ve=[{element:["docDateInput","discDateInput","platformInput"],func:()=>V()},{element:"oldNameInput",func:()=>nt()},{element:["portalglyphsInput"],func:()=>J()}];w.docByExternal=()=>V(),Ht(N),Lt(ve),nt(),J();export{me as A,St as B,ft as a,bt as b,rt as c,Vt as d,Yt as e,Gt as f,Jt as g,mt as h,J as i,ue as j,V as k,Ut as l,de as m,ce as n,Ft as o,ae as p,fe as q,Kt as r,jt as s,oe as t,Y as u,pe as v,Xt as w,Nt as x,be as y,se as z};
