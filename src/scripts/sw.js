import 'regenerator-runtime';
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { skipWaiting, clientsClaim, setCacheNameDetails } from 'workbox-core';
import CONFIG from './globals/config';

cleanupOutdatedCaches();
skipWaiting();
clientsClaim();

setCacheNameDetails({
  prefix: CONFIG.APP_NAME,
  precache: CONFIG.CACHE_NAME,
});

precacheAndRoute(self.__WB_MANIFEST, {
  ignoreURLParametersMatching: [/.*/],
});
