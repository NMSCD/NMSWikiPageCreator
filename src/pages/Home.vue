<script setup lang="ts">
import PageLink from '@/components/structure/PageLink.vue';
import BuiltBy from '@/components/structure/BuiltBy.vue';
import CivImage from '@/components/structure/CivImage.vue';
import type { BuiltByProps, CivImageProps, PageLinkProps } from '@/types/objects';

const links: PageLinkProps[] = [
  {
    text: 'Base',
    url: './base.html',
  },
  {
    text: 'Racetrack',
    url: './racetrack.html',
  },
  {
    text: 'Settlement',
    url: './settlement.html',
  },
  {
    text: 'Fauna',
    url: './fauna.html',
  },
  {
    text: 'Sandworm',
    url: './sandworm.html',
  },
  {
    text: 'Flora',
    url: './flora.html',
  },
  {
    text: 'Starship',
    url: './starship.html',
  },
  {
    text: 'Multi-Tool',
    url: './multitool.html',
  },
  {
    text: 'Mineral',
    url: './mineral.html',
  },
  {
    text: 'Derelict Freighter',
    url: './derelict.html',
  },
  {
    text: 'Organic Frigate',
    url: './biofrig.html',
  },
  // {
  //   text: 'Artifact',
  //   url: './artifact.html',
  // },
  {
    text: 'System',
    url: './system.html',
  },
  {
    text: 'Planet',
    url: './planet.html',
  },
  {
    text: 'Moon',
    url: './moon.html',
  },
];

const builtByCredits: BuiltByProps[] = [
  {
    text: 'NMS Community Developers & Designers ',
    link: 'https://nmscd.com',
  },
];

const images: CivImageProps[] = [
  {
    link: 'https://nmscd.com',
    imgAlt: 'NMSCD',
    img: 'assets/images/webp/shared/nmscd.webp',
  },
];
</script>

<template>
  <h1 class="title is-spaced">NMS Wiki Page Creator</h1>
  <div class="subtitle is-4">Choose what page you want to create:</div>
  <nav
    aria-label="Subpages"
    class="page-options"
  >
    <PageLink
      v-for="link in links"
      :url="link.url"
      :text="link.text"
      :disabled="link.inactive"
    />
  </nav>
  <div class="built-by">
    <div>Brought to you by:</div>
    <BuiltBy
      v-for="credit in builtByCredits"
      :link="credit.link"
      :text="credit.text"
      :img="credit.img"
      :img-alt="credit.imgAlt"
    />
  </div>
  <div class="images">
    <CivImage
      v-for="image in images"
      :img="image.img"
      :img-alt="image.imgAlt"
      :link="image.link"
    />
  </div>
</template>

<style scoped lang="scss">
.built-by {
  margin: 2em;
  font-size: 1.25rem;
}

.images {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem;
}

.page-options {
  max-width: 800px;
  margin: 1em auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5em;
}
</style>
