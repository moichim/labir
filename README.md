# Typescript tools for thermal imaging

Set of JS/TS packages for work with recordings from thermal cameras:

- `@labir/core` - the core functionality in pure TS
- `@labir/react-bridge` - integration of the core into React
- `@labir/emotion` - an embeddable UI with isolated CSS based on @emotion/react
- `@labir/embed` - render thermal images on any website using WebComponents

Planned packages:
- `@labir/tailwind` - an UI based on @nextui/react
- `@labir/standalone` - a SPA based on @labir/tailwind

## Development

This package requires usage of **PNPM** package manager since it relies on its workspace functionality.

Individual packages are in `packages/*`. Every one has its own build configuration. But **all the build and release process should be done from the workspace root**.

### Installing

Clone the repo and `pnpm install`.

### Making a release

- in individual packages:
    1 run test
- from the project root:
    1. `pnpm run lint` runs all lints
    2. `pnpm run build` builds all packages
    3. commit and push all changes
    4. `pnpm run version` uses lerna to raise version in every changed package
    5. `pnpm publish --recursive` publishes all changed packages

### Linking local packages

In `package.json` of individual packages, local dependencies shall be done using `workspace:*`.

In development, pnpm understands that the package is local - during install, the local dependency is installed as a symlink.

During the publish phase, pnpm converts `workspace:*` to the latest unchanged version of the package.

### Lerna integration

For some tasks, there is `lerna` in the root. But publishing is done through `pnpm`.