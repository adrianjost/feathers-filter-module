# Changelog

## 0.7.0

### Added

- new "attributes" option for inputs. The `attributes` attribute at input config level will get `v-bind`ed to the according input component and you can use it to pass custom props to your input components.

### Internal

- update dependencies

## 0.6.1

### Fixes

- when reopening an already applied filter, the settings where not loaded correctly. This bug was introduced in v0.5.0.

## 0.6.0

### Breaking Changes

- renamed `cancle` to `cancel` everywhere in the project

## Changed

- update docs logo and accent color

### Internal

- update dependencies

## 0.5.0

### Added

- default inputs can now have an optional label

### Breaking Changes

- new `default` Parser that passes through the internal state

### Internal

- removed some dead code