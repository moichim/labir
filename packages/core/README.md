# Thermal imaging in TS

Clinet side classes for work with thermal images.

## Core functionality

- reading files using web-workers
- displaying files in a canvas element
- control of user interaction with the canvas element
- setting of thermal display parameters
- handling analyses and playback

## Framework agnostic

This package is intentionally written independently on any frontend framework. It might be implemented in any one. So far, we have been working on those integrations:

- React: `@labir/react-bridge` (work in progress)
- Vue 3: `@labir/vue` (experimental)
- Web components: `@labir/embed`
- Wordpress plugin built on top of `@labir/embed`