import { defineStore } from 'pinia';
import { versions } from '../variables/versions';
import { sanitiseString } from '@/common';

interface StaticPageData {
  route: string;
  fullArticleElement: HTMLDivElement | null;
  debug: boolean;
}

const route = window.location.pathname.split('/')!.at(-1)!.slice(0, -5); // NoSonar getting the current filename without the "html" ending


export const useStaticPageDataStore = defineStore('staticPageData', {
  state: (): StaticPageData => ({
    route,
    fullArticleElement: null,
    debug: false,
  }),
});

const localStorageData = () => JSON.parse(localStorage.getItem('defaultSettings') ?? '{}');

interface PageData {
  release: string;
  name: string;
  image: string;
  hubname: string;
  discovered: string;
  galaxy: string;
  discoveredlink: string;
  region: string;
  orgName: string;
  system: string;
  planet: string;
  moon: string;
  glyphs: string;
  type: string;
  biome: string;
  age: string;
  roots: string;
  nutrients: string;
  notes: string;
  elements: string[];
  polymorphic: string;
  discDate: string;
  docBy: string;
  researchteam: string;
  appearance: string;
  pageName: string;
  platform: string;
  wealth: string;
  formation: string;
  content: string;
}

export const usePageDataStore = defineStore('pageData', {
  state: (): PageData => ({
    release: versions[0],
    name: '',
    image: '',
    region: localStorageData().regionInput ?? '',
    galaxy: localStorageData().galaxyInput ?? '',
    hubname: localStorageData().hubnameInput ?? '',
    discovered: localStorageData()['discoveredInput builderInput'] ?? '',
    discoveredlink: localStorageData()['discoveredlinkInput builderlinkInput'] ?? '',
    orgName: '',
    system: localStorageData().systemInput ?? '',
    planet: localStorageData().planetInput ?? '',
    moon: localStorageData().moonInput ?? '',
    glyphs: localStorageData().portalglyphsInput ?? '',
    type: '',
    biome: 'Lush',
    age: '',
    roots: '',
    nutrients: '',
    notes: '',
    elements: [],
    polymorphic: '',
    discDate: '',
    docBy: localStorageData().docbyInput ?? '',
    researchteam: localStorageData().researchteamInput ?? '',
    appearance: '',
    pageName: '',
    platform: localStorageData().platformInput ?? '',
    wealth: localStorageData().wealthInput ?? '',
    formation: '',
    content: '',
  }),

  getters: {
    sanitisedStrings: (state) => ({
      name: sanitiseString(state.name),
      discovered: sanitiseString(state.discovered),
      discoveredlink: sanitiseString(state.discoveredlink),
      system: sanitiseString(state.system),
      planet: sanitiseString(state.planet),
      moon: sanitiseString(state.moon),
      orgName: sanitiseString(state.orgName),
      appearance: sanitiseString(state.appearance),
    }),
    docBySentence: (state) => {
      const isLink = state.docBy.startsWith('{{');
      const hasResearchteam = state.researchteam.trim().length > 0;
      const documenter = isLink ? state.docBy : `''${state.docBy}''`;
      const researchteamLink = state.researchteam.includes('Wiki')
        ? ''
        : `[[${state.researchteam}]] member`;
      return `${hasResearchteam ? researchteamLink : ''} ${documenter}`;
    },
  },
});
