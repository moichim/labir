# Typescript tools for thermal imaging

Documentation and examples at [https://labir.vercel.app](https://labir.vercel.app).

Set of JS/TS packages for work with recordings from thermal cameras:

- `@labir/core` - the core functionality in pure TS
- `@labir/embed` - webcomponents on top of `@labir/core`
- `@labir/react-bridge` - React hooks and base components

Planned packages:
- `@labir/tailwind` - an UI based on @nextui/react
- `@labir/emotion` - an UI based on @emotion/react

Experimental packages:
- `@labir/vue` - a Vue 3 integration

## Development

Use **PNPM** package manager - we rely on its workspaces functionality.

**The build and release process should be done from the workspace root**. Do not build and publish packages individually - it might mess up version numbering (see below).


### Installation

```bash
git clone https://github.com/moichim/labir
pnpm install
```

### Development

Every `/package/*` has its own tests, build commands and devservers.

### Release

The release needs to be done from **the package root**. Make sure you build & release all packages at once - not individually.

We use `lerna` to facilitate versioning and builds.

```bash
# 1. run lint in all packages
pnpm run lint

# 2. run tests in all packages
pnpm run test

# 3. build all packages
pnpm run build

# 4. commit the entire work
git add -A && git commit -m "..."

# 5. see the packages that has changed since the last release
pnpm run changed

# 6. use lerna to increment version of packages
pnpm run version

# 7. publish the packages
pnpm publish --recursive
```