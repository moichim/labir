# React binding to @labir/core

Documentation and examples at [https://labir.vercel.app](https://labir.vercel.app).

This package provides fundamental integration of `@labir/core` in React:

- context and hooks for `@labir/core` classes
- hooks for creation of buttons, dropdowns & modals that will controll the `@labir/core` internal state
- three specific UI components for thermal imaging: `Histogram`, `ThermalRange` `ThermalInastance`

See `@labir/core` documentation to understand its concept.

## Foundation of a final UI

This package creates the main logic and bindings to the `@labir/core`. But the final UI needs to be implemented in a particular SCSS framework. We have the following implamentations:

- `@labir/tailwind` - TailwindCSS & NextUI
- `@labir/emotion` - @emotion/react

Components in those packages use hooks from `@labir/react-bridge` to handle the logic, but the styling is done individually.

Only three specific components are provided by this package (see below). Their styling is inline and absolutely isolated from any other CSS that might appear on the page.

## Context

All componenst need to be nested by `<ThermalProvider />` which creates the global instance of `ThermalManager`. All hooks and components work internally with this `ThermalManager` object.

## Hooks

### Core structure

- `useThermalManager` - get the global instance of `ThermalManager`
- `useThermalRegistry( registryId, options )` - create or get an instance of `ThermalRegistry`

### Properties that might be manipulated from React

- `useThermalManagerPaletteDrive` - color palette
- `useThermalRegistryOpacityDrive` - IR / VISIBLE ratio
- `useThermalRegistryRangeDrive` - adjustable temperature range
- `useThermalGroupCursorPositionDrive` - cursor synchronisation

### States of which React needs to know

- `useThermalRegistryHistogramState` exposes the current histogram
- `useThermalRegistryLoadingState` exposes current loading state
- `useThermalRegistryMinmaxState` exposes the min & max temperature of a registry
- `useThermalGroupMinmaxState` exposes the min & max temperature of a group

### Listing

- `useThermalRegistryGroupsState` groups in a registry
- `useThermalGroupInstancesState` file instances in a group

## Components

Thermal imaging does not mean just 'displaying thermal images'. This functionality is handled by `@labir/core`. A fully equipped app needs other functionality - which needs to be implemented in components.

### Thermal imaging components

Components specific to thermal imaging are provided by this package:

- `ThermalFile` - displays a thermal file
- `Histogram` - displays a histogram
- `ThermalRange` - displays adjustable temperature scale

Styling of these component is framework agnostic, using inline CSS.


### Hooks for buttons, dropdowns and modals

Standard UI components such as buttons, modals & dropdowns need to be implemented in a particular (S)CSS framework. For this purpose, here are hooks that handles the underlying functionality:

- Inputs controlling IR / VISIBLE ratio: `useOpacityInput`
- Dropdowns or button lists controlling the palette: `useThermalManagerPaletteDrive` 
- Inputs controlling histogram resolution: `useHistogramResolutionInput`
- Button for automatic temperature range: `useRangeButtonAuto`
- Button for reseting temperature range: `useRangeButtonFull`
- Drop in components: `useThermalDropin`

This package contains core bindings to the [@labir/core](https://github.com/moichim/labir-core) package.

### Complex scenarios

There are hooks simplifying the most common use cases:

`useSingleFileRegistry`

- Intended for display of one single image
- Handles its loading
- Creates an isolated registry for this particular file

### Utility hooks

`useThermalObjectPurpose` - creates unique ID for individual components