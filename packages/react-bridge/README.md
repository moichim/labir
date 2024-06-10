# React binding to @labir/core

This package contains core bindings to the [@labir/core](https://github.com/moichim/labir-core) package.

This package does not contain any particular UI. The only component in this package is the `ThermalProvider` which should sit on top of everything.

## Global instance, context & hooks

### `ThermalProvider`

Creates the global `ThermalManager` object and makes it accessible globally through `useThermalContext` hook.

A registry is accessed & managed by `useThermalRegistry` hook.

Components and hooks may benefit of `useThermalObjectPurpose` which facilitates creation of unique ID's of listeners etc.

## Properties

For every drive, list and state from [@labir/core/properties](https://github.com/moichim/labir-core/tree/main/src/properties), there is a hook.

Hooks facilitate synchronisation of data from / to react, but also manual updates.
