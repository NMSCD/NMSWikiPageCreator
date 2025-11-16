"use strict";import{$ as x,A as Dt,At as h,B as R,C as Z,E as S,F as k,I as kt,K as w,L as y,Mt as p,N as B,Ot as r,P as Q,R as Bt,S as A,T as tt,V as P,X as T,Z as Tt,at as et,d as Mt,et as H,ft as Rt,gt as at,h as wt,it as v,kt as L,l as nt,m as Pt,nt as Ht,o as I,q as C,tt as F,vt as Lt,wt as q,yt as $}from"./portalglyphs-GMhkLqu8.js";import{t as it}from"./creatureData-D85I0m2j.js";function ot(){return{low:["Absent","Few","Infrequent","Intermittent","Irregular Patrols","Isolated","Limited","Low","Low Security","Minimal","Missing","None","None Present","Not Present","Remote","Sparse","Spread Thin"],high:["Attentive","Enforcing","Ever-present","Frequent","Observant","Regular Patrols","Require Obedience","Require Orthodoxy","Unwavering"],aggressive:["Aggressive","Frenzied","Hateful","High Security","Hostile Patrols","Inescapable","Malicious","Threatening","Zealous"],corrupted:["Corrupted","Forsaken","Rebellious","Answer To None","Sharded from the Atlas","Dissonant","De-Harmonised"]}}function lt(){return{Copper:"Cu",Cadmium:"Cd",Emeril:"Em",Indium:"In","Activated Copper":"Cu+","Activated Cadmium":"Cd+","Activated Emeril":"Em+","Activated Indium":"In+",Ammonia:"NH3",Dioxite:"CO2",Paraffinium:"Pf",Phosphorus:"P",Pyrite:"Py",Uranium:"U",Silver:"Ag",Gold:"Au","Magnetised Ferrite":"Fe++",Sodium:"Na",Cobalt:"Co",Salt:"NaCl","Star Bulb":"Sb","Cactus Flesh":"Cc","Gamma Root":"Gr","Fungal Mould":"Ml","Frost Crystal":"Fc",Solanium:"So",Mordite:"Mo",Faecium:"Fa","Ancient Bones":"Ab","Salvageable Scrap":"Sa","Rusted Metal":"Jn",Basalt:"B"}}function W(){return{Dead:{suffix:["Dead","Empty","Desolate","Lifeless","Forsaken","Life-Incompatible","Low Atmosphere","Airless","Abandoned"],none:["Terraforming Catastrophe"]},Lush:{suffix:["Rainy","Verdant","Tropical","Viridescent","Grassy","Temperate","Humid","Overgrown","Flourishing","Bountiful","Paradise"]},Exotic:{suffix:"Shattered.Fractured.Fragmented.Contoured.Cabled.Webbed.Rattling.Spined.Skeletal.Finned.Bladed.Shell-Strewn.Fungal.Sporal.Capped.Ossified.Petrified.Calcified.Fissured.Breached.Hexagonal.Plated.Scaly.Mechanical.Metallic.Metallurgic.Bubbling.Frothing.Foaming.Columned.Sharded.Pillared".split("."),prefix:["of Light"]},Glitch:{suffix:["Crimson","Malfunctioning","Breached","Infected","[REDACTED]","Glassy","Thirsty","Doomed","Erased","Temporary","Corrupted"],none:["Planetary Anomaly"]},Scorched:{suffix:["Charred","Arid","Scorched","Hot","Fiery","Boiling","High Temperature","Torrid","Incandescent","Scalding"]},Frozen:{suffix:["Frozen","Icebound","Arctic","Glacial","Sub-zero","Icy","Frostbound","Freezing","Hiemal","Hyperborean"]},Irradiated:{suffix:["Irradiated","Radioactive","Contaminated","Nuclear","Isotopic","Decaying Nuclear","Gamma-Intensive","High Radio Source","Supercritical","High Energy"]},Toxic:{suffix:["Toxic","Poisonous","Noxious","Corrosive","Acidic","Caustic","Acrid","Blighted","Miasmatic","Rotting"]},Barren:{suffix:["Barren","Desert","Rocky","Bleak","Parched","Abandoned","Dusty","Desolate","Wind-swept"]},Marsh:{suffix:["Marshy","Swamp","Tropical","Foggy","Misty","Boggy","Quagmire","Hazy","Cloudy","Vapour","Reeking","Murky","Damp"],none:["Endless Morass"]},Volcanic:{suffix:["Lava","Magma","Erupting","Volcanic","Ash-Shrouded","Ashen","Tectonic","Unstable","Violent","Molten","Flame-Ruptured","Basalt"],none:["Imminent Core Detonation","Obsidian Bead"]},MegaExotic:{suffix:["Crimson","Lost Red","[REDACTED]","Chromatic Fog","Scarlet","Blood","Wine Dark","Lost Green","Doomed Jade","Haunted Emeril","Lost Blue","Azure","Cerulean","Ultramarine"],none:["Planetary Anomaly","Stellar Corruption Detected","Vermillion Globe","Vile Anomaly","Toxic Anomaly","Deathly Green Anomaly","Harsh Blue Globe","Frozen Anomaly"]},Water:{suffix:["Drowning","Oceanic","Tidal","Waterlocked","Aquatic","Marine"],none:["Waterworld","Endless Seas"]},Infested:{suffix:["Infested","Worm-ridden","Tainted","Mutated","Corrupted"],none:["Infested Paradise","Toxic Horror","Boiling Doom","Radioactive Abomination","Icy Abhorrence","Xeno-Colony","Caustic Nightmare","Fiery Dreadworld","Frozen Hell","Infected Dustbowl","The Nest","Terrorsphere"]}}}var N={weatherData:"Tropical Storms.Occasional Boiling Fog.Superheated Mists.Painful Mist.Infrequent Torrents.Oppressive.Soggy Danger.Sticky Heat.Clammy Menace.Hazardous Moisture.Gentle Mist.Humid.Tropical Winds.Warm Fog.Temperate Murk.Mild Damp.Warm Dewdrops.Tepid Damp.Sweaty Drizzle.Muggy Haze.Death Fog.Sultry Disaster.Cataclysmic Monsoons.Mists of Annihilation.All-Consuming Fog.Liquid Hell.Storms of Desolation.Melting Deluges.Boiling Catastrophe.Damp Misery.Heated Gas Pockets.Occasional Firestorms.Incendiary Winds.Unpredictable Conflagrations.Drifting Firestorms.Pillars of Flame.Magma Geysers.Plumes of Fire.Molten Rain.Tectonic Storms.Smothering Ash.Sulphurous Haze.Ash Wisps.Drifting Smog.Cinderfalls.Ash Plumes.Choking Ash.Burning Mists.Sulfur Fumes.Enveloping Ash.Ashen Winds.Frequent Firestorms.Walls of Flame.Clouds of Fire.Ashen Destruction.Magma Rain.Basalt Hail.Explosive Gas Eruptions.Lethal Ash Storms.Sulphurous Inferno.Colossal Firestorms.Obsidian Doom.Infrequent Heat Storms.Rare Firestorms.Superheated Gas Pockets.Wandering Hot Spots.Atmospheric Heat Instabilities.Direct Sunlight.Heated Atmosphere.Occasional Ash Storms.Dangerously Hot.Burning Air.Parched.Overly Warm.Sunny.Dehydrated.Unending Sunlight.Sweltering.Extreme Heat.Burning Gas Clouds.Intense Heat.Superheated Air.Scalding Heat.Inferno Winds.Firestorms.Combustible Dust.Incendiary Dust.Self-Igniting Storms.Howling Blizzards.Intense Cold.Icy Tempests.Supercooled Storms.Raging Snowstorms.Ice Storms.Deep Freeze.Roaring Ice Storms.Frequent Blizzards.Hazardous Whiteouts.Frozen Clouds.Occasional Snowfall.Infrequent Blizzards.Outbreaks of Frozen Rain.Harsh, Icy Winds.Drifting Snowstorms.Migratory Blizzards.Icy Blasts.Wandering Frosts.Powder Snow.Wintry.Snowy.Icy.Crisp.Frost.Freezing.Permafrost.Frequent Toxic Floods.Toxic Superstorms.Acidic Deluges.Corrosive Cyclones.Caustic Floods.Corrosive Storms.Torrential Acid.Noxious Gas Storms.Toxic Monsoons.Bone-Stripping Acid Storms.Corrosive Rainstorms.Pouring Toxic Rain.Occasional Acid Storms.Atmospheric Corruption.Poison Flurries.Toxic Outbreaks.Acidic Dust Pockets.Passing Toxic Fronts.Caustic Winds.Alkaline Cloudbursts.Dangerously Toxic Rain.Corrosive Sleet Storms.Lethal Atmosphere.Infrequent Toxic Drizzle.Acid Rain.Toxic Clouds.Poison Rain.Choking Clouds.Caustic Moisture.Poisonous Gas.Stinging Atmosphere.Toxic Damp.Corrosive Damp.Stinging Puddles.Extreme Radioactivity.Irradiated Thunderstorms.Planet-Wide Radiation Storms.Extreme Atmospheric Decay.Roaring Nuclear Wind.Gamma Cyclones.Contaminated Squalls.Extreme Thermonuclear Fog.Frequent Particle Eruptions.Enormous Nuclear Storms.Particulate Winds.Energetic Storms.Irradiated Downpours.Radioactive Dust Storms.Volatile Windstorms.Occasional Radiation Outbursts.Irradiated Storms.Unstable Fog.Reactive Rain.Radioactive Humidity.Radioactive Damp.Irradiated Winds.Contaminated Puddles.Volatile Winds.Unstable Atmosphere.Gamma Dust.Nuclidic Atmosphere.Boiling Superstorms.Intense Heatbursts.Superheated Rain.Boiling Monsoons.Broiling Humidity.Painfully Hot Rain.Torrential Heat.Blistering Floods.Scalding Rainstorms.Torrid Deluges.Boiling Puddles.Sweltering Damp.Superheated Drizzle.Dangerously Hot Fog.Choking Humidity.Mostly Calm.Occasional Scalding Cloudbursts.Usually Mild.Blistering Damp.Lethal Humidity Outbreaks.Temperate.Light Showers.Mild Rain.Refreshing Breeze.Pleasant.Balmy.Mellow.Beautiful.Blissful.Billowing Dust Storms.Choking Sandstorms.Hazardous Temperature Extremes.Lung-Burning Night Wind.Extreme Wind Blasting.Planetwide Desiccation.Sand Blizzards.Howling Gales.Dead Wastes.Occasional Sandstorms.Infrequent Dust Storms.Intermittent Wind Blasting.Parched Sands.Sporadic Grit Storms.Dust-Choked Winds.Highly Variable Temperatures.Blasted Atmosphere.Freezing Night Winds.Ceaseless Drought.Moistureless.Baked.Sterile.Unclouded Skies.Dry Gusts.Withered.Icy Nights.Perfectly Clear.Absent.No Atmosphere.Utterly Still.Peaceful.Eerily Calm.Airless.Silent.Inert.Clear.Invisible Mist.Internal Rain.Lost Clouds.Crimson Heat.Winds of Glass.Thirsty Clouds.Obsidian Heat.Memories of Frost.Haunted Frost.Indetectable Burning.[REDACTED].Anomalous.Burning Crimson.Scarlet Rain.Fevered Clouds.Carmine Winds.Red Mist.Flaming Hail.Vermillion Storms.Rain of Atlas.Angered Clouds.Blood Rain.Bilious Storms.Deadly Pressure Variations.Harsh Toxic Wind.Corrupted Blood.Infinite Toxic Mist.Echoes of Acid.Poison Cyclones.Inescapable Toxins.Clouds of Haunted Green.Invisible Jade Winds.Frozen Mists.Electric Rain.Azure Storms.Extreme Low Pressure.All-Consuming Cold.Winds from Beyond.Unfathomable Storms.Unimaginable Blue.Ultramarine Wind.Inverted Superstorms.Coastal Storms".split("."),rarity:"Abundant.High.Ample.Frequent.Full.Generous.Average.Regular.Common.Typical.Ordinary.Occasional.Low.Scarce.Infrequent.Rare.Limited.Sporadic.None.Deficient.Undetected.Lacking.Absent.Nonexistent.Unusual.Lost.Displaced.From Elsewhere.Uprooted.Misplaced.Forfeited.Between Worlds.Infected.Diseased.Twisted.Screaming.Viral.Invasive.Bountiful.Copious.Rich.Numerous.Moderate.Fair.Medium.Intermittent.Uncommon.Few.Sparse.Empty.Not Present.Devoid.Barren".split(".")};N.sentinels=[];var dt=ot();for(let t in dt)N.sentinels.push(...dt[t]);var rt=new Set,_=W();for(let t in _)for(let n in _[t])_[t][n].forEach(a=>rt.add(a));N.planetDescriptors=Array.from(rt),N.resources=Object.keys(lt());var qt=N,Wt=`<div
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
`,_t=`<div
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
`,zt=`<div
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
`,z=3,Ot=5;function Gt(){let t=p.faunaNumber;v(t==="1"?`is ${t} creature`:`are ${t} creatures`,"faunaNumberSentence")}function Ut(t){let n=t.dataset.destNoauto,a=Mt(p.pageType),i=vt(t.value,a," "),o=r.output[n];Array.isArray(o)?o.forEach(e=>e.innerText=i):o.innerText=i}function jt(){let{system:t,region:n,galaxy:a,hubname:i}=p,o=`It can be found in the [[${t}]] [[star system]] in the [[${n}]] [[region]] of [[${i}]], in the [[${a}]] [[galaxy]].`;r.output.location.innerText=o}function st(t=r.input.resourceInputs.querySelector("button")){let n=t.parentElement,a=document.querySelectorAll("[data-resource]"),i=S(Array.from(a),"dataset.resource"),o="resource_input"+i,e="section"+i;I(y(`<div class="table-cell text removable" data-resource="section${i}">
		<button class="button is-outlined is-danger icon is-small" title="Remove resource" type="button" disabled data-evt-id="removeButton">&#10006</button>
		<label for="${o}">Resource name:</label>
	</div>
	<div class="table-cell data" data-resource="section${i}">
		<input type="text" list="resources" id="${o}" data-evt-id="resourceInput">
	</div>`,{},[{element:"resourceInput",handler:"input",func:()=>ct()},{element:"resourceInput",handler:"change",func:function(){Z(this)}},{element:"removeButton",handler:"click",func:()=>{C(e,"resource"),ut()}}]),n,"beforebegin");let l=document.querySelectorAll("[data-resource] button"),d=l.length;for(;document.querySelectorAll("[data-resource] button").length<z;)st(t);if(d+1>Ot&&(t.disabled=!0),d>z)for(let s of Array.from(l))s.disabled=!1}function ut(){let t=r.input.resourceInputs.querySelector("button");t.disabled=!1;let n=document.querySelectorAll("[data-resource] button");if(n.length<=z)for(let a of Array.from(n))a.disabled=!0;ct()}function ct(){let t=lt(),n=document.querySelectorAll("[data-resource] input"),a=new Set;for(let l of Array.from(n))l.value&&a.add(l.value);let i={};for(let l of Array.from(a))i[l]=t[l];let o=Object.keys(i).map(l=>`* {{ilink|${l}}}`),e=Object.values(i).map(l=>`[[${l}]]`);r.output.resourceList.innerText=e.join(", "),r.output.resourceBullets.innerText=o.join(`
`)}function Vt(){let t=p.sentinel,n=ot(),a=(()=>{for(let o in n)if(n[o].includes(t))return o;return""})(),i=`[[Sentinel]] activity on this ${p.pageType.toLowerCase()} is classified as: ''${t}''. The sentinels ${a==="aggressive"?"":"don't"} present an immediate threat.`;r.output.sentinelSentence.innerText=i}function Yt(t){let n=t.parentElement,a=r.output[t.dataset.destNoauto],i="fauna",o=document.querySelectorAll(`[data-${i}]`),e=S(Array.from(o),`dataset.${i}`).toString(),l=y(Wt,{i:e},[{element:"removeButton",handler:"click",func:function(){C(`section${e}`,"fauna"),M(this)}},{element:"hideButton",handler:"click",func:function(){F(`fauna${e}`,this)}},{element:"fileInput",handler:"change",func:function(){k(this)}},{element:"ecosystemInput",handler:"change",func:function(){pt(this)}},{element:"genusInput",handler:"change",func:function(){G(this)}},{element:"creatureHeightInput",handler:"input",func:function(){kt(this)}},{element:"creatureLink",handler:"change",func:function(){j(this)}}]),d=`<div data-fauna="section${e}">|-</div>
	<div data-fauna="section${e}">|[[File:<output id="faunaFile${e}"></output>|150px]] || <span style="display:none" name="faunaLink${e}">[[</span><output id="faunaName${e}" name="faunaName${e}"></output><span style="display:none" name="faunaLink${e}">]]</span> || <output id="faunaRarity${e}"></output> / <output id="faunaEcosystem${e}"></output> / <output id="faunaActivity${e}"> </output> <output id="faunaHemisphere${e}"></output> || <output id="faunaGenus${e}"></output> || <output id="faunaHeight${e}"></output>m || <output id="faunaWeight${e}"></output>kg || <output id="faunaDiscoverer${e}"></output></div>`;I(l,n,"beforebegin"),a.insertAdjacentHTML("beforeend",d),O(t,i,e),pt(r.input[`faunaEcosystemInput${e}`])}function Jt(t){let n=t.parentElement,a=r.output[t.dataset.destNoauto],i="flora",o=document.querySelectorAll(`[data-${i}]`),e=S(Array.from(o),`dataset.${i}`).toString(),l=y(_t,{i:e},[{element:"removeButton",handler:"click",func:function(){C(`section${e}`,"flora"),M(this)}},{element:"hideButton",handler:"click",func:function(){F(`flora${e}`,this)}},{element:"fileInput",handler:"input",func:function(){k(this)}},{element:"floraElements",handler:"input",func:function(){U(this)}},{element:"floraLink",handler:"change",func:function(){j(this)}}]),d=`<div data-flora="section${e}">|-</div>
	<div data-flora="section${e}">|[[File:<output id="floraFile${e}"></output>|150px]] || <span style="display:none" name="floraLink${e}">[[</span><output id="floraName${e}" name="floraName${e}"></output><span style="display:none" name="floraLink${e}">]]</span> || <output id="floraAge${e}"></output> || <output id="floraRoot${e}"></output> || <output id="floraNut${e}"></output> || <output id="floraNote${e}"></output> || <output id="floraElements${e}"></output> || <output id="floraDiscoverer${e}"></output></div>`;I(l,n,"beforebegin"),a.insertAdjacentHTML("beforeend",d),O(t,i,e)}function Kt(t){let n=t.parentElement,a=r.output[t.dataset.destNoauto],i="mineral",o=document.querySelectorAll(`[data-${i}]`),e=S(Array.from(o),`dataset.${i}`).toString(),l=y(zt,{i:e},[{element:"removeButton",handler:"click",func:function(){C(`section${e}`,"mineral"),M(this)}},{element:"hideButton",handler:"click",func:function(){F(`mineral${e}`,this)}},{element:"fileInput",handler:"input",func:function(){k(this)}},{element:"metalInput",handler:"input",func:function(){Y(this)}},{element:"mineralResourceInput",handler:"input",func:function(){U(this)}},{element:"mineralLink",handler:"change",func:function(){j(this)}}]),d=`<div data-mineral="section${e}">|-</div>
	<div data-mineral="section${e}">|[[File:<output id="mineralFile${e}"></output>|150px]] || <span style="display:none" name="mineralLink${e}">[[</span><output id="mineralName${e}" name="mineralName${e}"></output><span style="display:none" name="mineralLink${e}">]]</span> || <output id="mineralMetal${e}"></output> || <output id="mineralFormation${e}"></output> || <output id="mineralNote${e}"></output> || <output id="mineralElements${e}"></output> || <output id="mineralDiscoverer${e}"></output></div>`;I(l,n,"beforebegin"),a.insertAdjacentHTML("beforeend",d),O(t,i,e)}function O(t,n,a){at(),M(t);let i={input:{},output:{}},o=`[data-${n}="section${a}"]`;$t(o);let e=document.querySelectorAll(`${o} :is(input, select)`);for(let d of Array.from(e))i.input[d.id]=d.id;let l=document.querySelectorAll(`${o} output`);for(let d of Array.from(l))d.id&&(i.output[d.id]=d.id);q(i)}function M(t){let n=t.parentElement,a=n.dataset.section,i=document.querySelectorAll(`.tableHeader[data-${a}]`);for(let e=0;e<i.length;e++){let l="is-"+P(e+1),d=i[e].dataset[a],s=document.querySelectorAll(`[data-${a}="${d}"]`);for(let c of Array.from(s))c.classList.remove("is-odd","is-even"),c.classList.add(l)}if(!n.dataset[a])return;a==="fauna"?(o(h.genera),G()):(o(h.planetPropResources?.[a]),U());function o(e){if(!e)return;let l=n.dataset[a],d=A(l),s=Object.keys(e).find(c=>A(c)===d);delete e[s]}}function G(t=void 0){let n=h.genera??={};if(t){let o=t.value,e=t.dataset.destNoauto;n[e]=T(o)}let a=new Set,i=x(structuredClone(n),!0);for(let o in i){let e=i[o];e&&!a.has(e)&&(i[o]=`[[${e}]]`,a.add(e))}for(let[o,e]of Object.entries(i))r.output[o].innerText=e}function U(t=void 0){let n=h.planetPropResources??={};if(t){let o=t.value,e=t.dataset.destNoauto,l=t.id,d=t.parentElement.dataset.section.split(" ")[0],s=d.replace(A(d).toString(),"");n[s]??={},n[s][e]??={},n[s][e][l]=T(o)}let a=new Set,i=x(structuredClone(n));for(let o in x(i)){let e=i[o];for(let l in x(e)){let d=e[l];for(let[s,c]of Object.entries(d))c&&!a.has(c)&&(d[s]=`[[${c}]]`,a.add(c))}}for(let o in i)for(let e in i[o]){let l=Object.values(i[o][e]).filter(Boolean).join(", ");r.output[e].innerText=l}}function pt(t){let n=t.value,a=Object.keys(it.ecosystems[n]),i="faunaGenusInput"+A(t.id),o=[];for(let e of a)o.push(`${e} (${it.ecosystems[n][e].commonName})`);Tt(r.input[i],a,o),G(r.input[i])}function Xt(t){t&&(r.input.sandwormInput.checked=!0),ft()}function ft(){let t=r.input.sandwormInput,n=t.dataset.destNoauto,a=Array.from(document.querySelectorAll(`[data-section="${n}"]`)),i=r.output[n];a.push(i);for(let o of a)t.checked?o.style.display="":o.style.display="none"}function Zt(){let t=(()=>{let n=r.input.autoSpawn;for(let a of n){let i=a;if(i.checked)return i.value}return""})();r.output.wormAutoSpawn.innerText=t}function mt(){let t=Dt();r.output.wormAlbumName.innerText=t}function Qt(){let t=document.querySelectorAll("[data-moon], [data-resource], [data-fauna], [data-flora], [data-mineral]");w(Array.from(t)),ut(),mt(),typeof L.enableMoonAdd=="function"&&L.enableMoonAdd(),Ht(r.input.resourceInputs.querySelector("button"),"click")}function j(t){let n=t.checked,a=t.dataset.destNoauto;if(a){let i=document.getElementsByName(a);for(let o of Array.from(i))o.style.display=n?"":"none"}}function V(){let{discovered:t,discoveredlink:n,docby:a}=p,i=p.platform==="NS"?"Switch":p.platform,o=u(p.discDate),e=u(p.docDate),l=tt(a),d=(()=>{let f=wt();return f&&f!==""?f:""})(),s=n?`{{profile|${n}}}`:tt(t),c=!a||a===t||a===n?`Discovered and uploaded by ${d} ${s} on ${o}`:`* Discovered and uploaded by ${i?i+" explorer":""} ${s} on ${o}
			* Explored and documented by ${d} ${l} on ${e}`,m=r.output.docby;m.style.display=c?"":"none",m.innerText=c;function u(f){let b={year:"numeric",month:"long",day:"numeric"},g=f.replaceAll("-","/");return new Date(g).toLocaleString("en-UK",b)}}function Y(t=null,n=0){if(!t){let e=document.querySelectorAll("[data-percentage-input]");for(let l of Array.from(e))Y(l,n);return}let a=t.dataset.destNoauto,i=t.value,o=Bt(t,i,n);v(o?o+"%":"",a)}function bt(t=r.input.descriptionInput){let n=W().Infested,a=[];for(let o in n)a.push(...n[o]);let i=a.includes(t.value.trim());if(p.pageType==="system")return i;r.output.infested.innerText=i?"([[Biome Subtype - Infested|Infested]]) ":"",p.infested=i,Ut(t),Xt(i)}function vt(t,n,a){let i=W();switch((()=>{for(let o in i)for(let e in i[o])if(i[o][e]?.includes?.(t.trim()))return e;return""})()){case"prefix":return n+a+t.trim();case"suffix":return t.trim()+a+n;default:return t.trim()}}function $t(t){let n=document.querySelectorAll(`${t} :is(input, select)`);for(let a of Array.from(n))a.dataset.dest&&($({element:a,func:function(){v(this)}}),v(a)),a.dataset.destNoauto&&($({element:a,func:function(){H(this)}}),H(a)),a.dataset.default&&($({element:a,func:function(){nt(this)}}),nt(a)),a.dataset.destSimple&&($({element:a,func:function(){et(this)}}),et(a)),a.dataset.destNumber&&($({element:a,func:function(){R(this,parseInt(this.dataset.destNumber)||void 0)}}),R(a,parseInt(a.dataset.destNumber)||void 0)),a.list&&$({element:a,handler:"change",func:function(){Z(this)}})}var te=`<div
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
`,ee=`<div class="tableHeader text \${oddEvenClass} sectionToggle" data-planet="planet\${i}">
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
</div> -->`,ae=`<div
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
`;function J(){let{region:t,hubname:n,galaxy:a}=p;v(`Located in the [[${t}]] [[region]] of [[${n}]] in the [[${a}]] galaxy.`,"loc")}function ne(){let t=r.input.waterInput.parentElement.previousElementSibling,n=r.output.planets,{planet:a,moon:i}=p,o=e(parseInt(a)+parseInt(i),2,6);if(isNaN(o))return;function e(u,f,b){return Math.max(f,Math.min(b,u))}function l(){let u=new Set;return o-(()=>{let f=document.querySelectorAll("[data-planet]");for(let b of Array.from(f))u.add(b.dataset.planet);return u.size})()}let d=document.querySelectorAll("[data-planet]"),s=S(Array.from(d),"dataset.planet");for(;l()!==0;)l()>0?(m(s),s++):c();function c(){let u=document.querySelectorAll("[data-planet]"),f=new Set;for(let E of Array.from(u))f.add(E.dataset.planet);let b=Array.from(f).pop(),g=document.querySelectorAll(`[data-planet="${b}"]`);w(Array.from(g))}function m(u){let f={i:u.toString(),oddEvenClass:"is-"+P(u)},b=y(ee,f,[{element:"hideButtonPlanet",handler:"click",func:function(){F(`planet${u}`,this)}},{element:"hideButtonResource",handler:"click",func:function(){F(`resource${u}`,this)}},{element:"addResourceButton",handler:"click",func:function(){ht(this,u)}},{element:"fileInput",handler:"change",func:function(){k(this)}},{element:"biomeInput",handler:"change",func:function(){It(this)}},{element:"moonCheckbox",handler:"change",func:function(){oe(this)}},{element:"descriptorInput",handler:"input",func:function(){xt(this)}}]),g=y(ae,f);at(b),I(b,t,"beforebegin"),n.insertAdjacentHTML("beforeend",g),$t(`[data-planet="planet${u}"]`);let E={output:{}},Et=document.querySelectorAll(`#body${u} output`);for(let D of Array.from(Et)){let X=D.id;E.output[X]=X}q(E),It(document.getElementById(`biome_input${u}`));let K=document.getElementById(`addResourceButton${u}`);if(K)for(let D=0;D<3;D++)ht(K,u)}}function ht(t,n){let a=t.parentElement,i=document.querySelectorAll("[data-resource]"),o=S(Array.from(i),"dataset.resource"),e="resource"+n,l="resource_input"+o,d="is-"+P(n);I(y(`<div class="table-cell text removable ${d}" data-section="resource${n} planet${n}" data-resource="section${o}" data-planet="planet${n}">
		<button class="button is-danger is-outlined icon is-small" title="Remove resource" type="button" disabled data-evt-id="removeButton">&#10006</button>
		<label for="${l}">Resource name:</label>
	</div>
	<div class="table-cell data ${d}" data-section="resource${n} planet${n}" data-resource="section${o}" data-planet="planet${n}">
		<input type="text" list="resources" id="${l}" data-dest-noauto="${e}" data-evt-id="addButton">
	</div>`,{},[{element:"removeButton",handler:"click",func:()=>{C(`section${o}`,"resource"),ie(l)}},{element:"addButton",handler:"input",func:function(){At(this)}}]),a,"beforebegin");let s={input:{}};s.input[l]=l,q(s);let c=yt(n),m=gt(c);if(m+1>6&&(t.disabled=!0),m>3)for(let u of Array.from(c)){let f=u.querySelector("button");f&&(f.disabled=!1)}}function yt(t){let n=document.querySelectorAll(`[data-resource][data-planet="planet${t}"]`);return Array.from(n)}function gt(t){let n=new Set;for(let a of t){let i=a.dataset.resource;n.add(i)}return n.size}function ie(t){let n=r.input[t],a=n.dataset.destNoauto,i=n.id,o=A(a);n.value&&(delete h.resources[a][i],At()),document.getElementById(`addResourceButton${o}`).disabled=!1;let e=yt(o);if(gt(e)<4)for(let l of e){let d=l.querySelector("button");d&&(d.disabled=!0)}}function oe(t){let n=document.getElementById(t.dataset.destNoauto);if(!n)return;let a=A(t.id),i=t.checked?"Moon":"Planet";document.getElementById("planetClass"+a).innerText=i,xt(n,i)}function xt(t,n=void 0){let a=A(t.id);n||=document.getElementById("moon_input"+a).checked?"Moon":"Planet";let i=t.value,o=t.dataset.destNoauto,e=vt(i,n,"<br>");r.output[o].innerText=e;let l=bt(t);typeof l=="boolean"&&ue("infested"+a,l)}function St(t=""){let n=document.querySelectorAll("[data-dest-checkbox-group]");if(t){i(t);return}let a=new Set;for(let o of Array.from(n))(o.dataset.listener??"").split(" ").includes("change")||$({element:o,func:function(){St(this.dataset.destCheckboxGroup)}}),a.add(o.dataset.destCheckboxGroup);for(let o of a)i(o);return;function i(o){let e=document.querySelectorAll(`[data-dest-checkbox-group="${o}"]`),l=o.startsWith("SD")?"":o.substring(0,2),d=[];for(let m of Array.from(e)){let u=m;u.checked&&d.push(u.value)}let s=[];for(let m=1;m<=d.length;m++){let u=`| ${l}${m}=${d[m-1]}`;s.push(u)}v(s.join(`
`),o);let c=r.output[o].closest("#scrapDealer");c&&(s.length===0?c.style.display="none":c.style.display="")}}function le(){let t=r.input.terminalInputs,n=r.output.tradeTerminal,a=document.querySelectorAll("[data-tradeable]"),i=S(Array.from(a),"dataset.tradeable").toString(),o={childIndex:i,price:"price"+i,text:"text"+i,text_input:"text_input"+i,price_input:"price_input"+i},e=y(te,o,[{element:"removeButton",handler:"click",func:()=>{C(`section${i}`,"tradeable"),de()}}]),l=`<div data-tradeable="section${i}">|-</div>
	<div data-tradeable="section${i}">| {{ilink|<output id="${o.text}"></output>}} || {{Units}} <output id="${o.price}"></output></div>`,d=e.querySelectorAll(`[data-tradeable="section${i}"] input[data-dest]`);for(let f of Array.from(d))$({element:f,func:function(){v(this)}});let s=e.querySelectorAll(`[data-tradeable="section${i}"] input[data-dest-number]`);for(let f of Array.from(s))$({element:f,func:function(){H(this),R(this,isNaN(parseInt(this.dataset.destNumber))?void 0:parseInt(this.dataset.destNumber))}});I(e,t,"beforebegin"),n.insertAdjacentHTML("beforeend",l);let c=document.querySelectorAll("[data-tradeable]"),m=(()=>{let f=new Set;for(let b of Array.from(c)){let g=b.dataset.tradeable;f.add(g)}return f.size})(),u=t.querySelector("button");m+1>5&&(u.disabled=!0)}function de(){let t=r.input.terminalInputs.querySelector("button");t.disabled=!1}function re(){let t=document.querySelectorAll("[data-tradeable], [data-planet]");w(Array.from(t));let n=document.querySelectorAll(".mark");for(let a of Array.from(n))a.classList.remove("mark")}function se(){let t=p.region,n=t.split(" ").length===1?t+" region":t,a=r.output.regionLong;a.innerText=n}function At(t=void 0){let n=h.resources??={};if(t){let o=t.value,e=t.dataset.destNoauto,l=t.id;n[e]??={},n[e][l]=T(o)}let a=new Set,i=x(structuredClone(n),!0);for(let o in i){let e=i[o];for(let l in e){let d=e[l];d&&!a.has(d)&&(i[o][l]=`[[${d}]]`,a.add(d))}}for(let o in i){let e=Object.values(i[o]).filter(Boolean).join(", ");r.output[o].innerText=e}}function It(t){let n=t.value,a=t.dataset.destNoauto,i=h.biomes??={};i[a]=T(n);let o=new Set,e=x(structuredClone(i),!0);for(let l in e){let d=e[l];d&&!o.has(d)&&(e[l]=`{{Biome|${d}}}`,o.add(d))}Ct(e)}function ue(t,n){let a=h.infestedBiomes??={};a[t]=n;let i=!1,o=x(structuredClone(a),!0);for(let e in o){let l=o[e];l&&!i?(o[e]="([[Biome Subtype - Infested|Infested]])",i=!0):l?o[e]=" (Infested) ":(o[e]="",delete a[e])}Ct(o)}function Ct(t){for(let[n,a]of Object.entries(t))r.output[n].innerText=a}function ce(){let t=r.output.expectedPrefix,n=p.name,a=p.region,i=p.portalglyphs;if(!n||!a){t.innerHTML="";return}let o=`EV${Rt(a)}-${(()=>{let e=i.substring(1,4);return parseInt(e,16).toString(16).toUpperCase().replace("69","68+1")})()}`;t.innerHTML="",!n.includes(o)&&(t.innerText=`The expected prefix for this system is ${o}.

`)}function Ft(){let t={uncharted:"This system is uncharted and has no [[Space Station]].",abandoned:`This space station is abandoned.

`},n={normal:["img","terminal","merchant","scrapDealer"],pirate:["img","scrapDealer"],abandoned:["img","note","terminal"],uncharted:["note"]},a=(()=>{let l=p.faction,d=p.wealth,s=p.conflict;return l==="Uncharted"?"uncharted":l.includes("Abandoned")?"abandoned":d.includes("Black Market")||s.includes("Pirate")?"pirate":"normal"})(),i=document.querySelectorAll("[data-station]");for(let l=0;l<i.length;l++){let d=i[l],s=d.dataset.station;if(n[a].includes(s)){(s==="merchant"||s==="scrapDealer")&&e(d)&&l++;let c=d.id==="scrapDealer"&&!p.SDMerchant;d.style.display=c?"none":""}else d.style.display="none"}if(!t[a])return;let o=document.querySelector('[data-station="note"]');o.innerText=t[a];function e(l){let d=l.querySelector("button:not(.tooltip)");if(!d)return;let s=d.dataset.buttonId;if(!s)return;let c="display"+s;return d.dataset[c]}}function pe(){let t=p.portalglyphs,n=r.input.colorInput;t.substring(2,4)==="79"?(B(n,"none"),n.value="Black Hole"):B(n,""),v(n)}function fe(t){let n=t.value,a=r.input.conflictInput,i=[r.input.wealthInput,a];for(let o of i){let e=o.querySelector('optgroup[label="Pirate"] option').value;(n.includes("Black Market")||n.includes("Pirate Controlled"))&&(o.value=e),v(o)}Ft()}function me(){let t=p.faction,n=[r.input.wealthInput,r.input.economyInput,r.input.conflictInput];if(t.includes("Abandoned")||t==="Uncharted"){for(let a of n)a.value=a.querySelector("optgroup:last-child option").value,v(a),B(a,"none");return}for(let a of n)B(a,"")}function Nt(t=void 0){if(!t){let a=document.getElementsByName("systemExtras");for(let i of Array.from(a))Nt(i);return}let n=r.output[t.value];n.style.display=t.checked?"":"none"}function be(){let t=["","Analysis Visor","System Exploration Guide","System Page","Default Space Station Multi-Tool"];(p.faction==="Uncharted"||p.faction.includes("Abandoned"))&&t.pop(),p.galleryArray=t}function ve(t){let n=t.parentElement.getElementsByClassName("checkbox"),a={};for(let e of Array.from(n)){let{id:l}=e.querySelector("input");a[l]=e.innerText.toLowerCase(),e.classList.remove("mark")}let i=t.value.trim().toLowerCase();if(!i)return;let o=Object.entries(a).filter(([,e])=>e.includes(i)).map(([e])=>e);for(let e of o)document.getElementById(e)?.closest(".checkbox")?.classList.add("mark")}L.docByExternal=()=>V(),Pt(qt),Lt([{element:["docDateInput","discDateInput","platformInput"],func:()=>V()},{element:"oldNameInput",func:()=>Q()},{element:["portalglyphsInput"],func:()=>J()}]),Q(),J();export{Gt as C,mt as D,Vt as E,Zt as O,ft as S,Qt as T,Y as _,ce as a,Kt as b,St as c,re as d,ve as f,V as g,bt as h,me as i,ne as l,le as m,pe as n,be as o,Ft as p,fe as r,J as s,Nt as t,se as u,Yt as v,jt as w,st as x,Jt as y};
