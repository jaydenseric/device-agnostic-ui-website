![Device Agnostic UI logo](https://cdn.jsdelivr.net/gh/jaydenseric/device-agnostic-ui/device-agnostic-ui-logo.svg)

# Device Agnostic UI website

The [Device Agnostic UI](https://github.com/jaydenseric/device-agnostic-ui)
website.

## Requirements

- [Deno CLI](https://deno.land/#installation) v2+.

## Installation

For a local development installation, create a project `scripts/.env.sh` file
containing the following environment variables, with values customized for your
local environment:

```sh
# Development or production mode; "true" or "false".
export RUCK_DEV="true"

# The localhost port to serve the Ruck app on.
export RUCK_PORT="3000"
```

## Scripts

### Dev

To load the environment variables from `scripts/.env.sh`, and serve the
[Ruck](https://ruck.tech) app:

```sh
./scripts/dev.sh
```

### Serve

> [!IMPORTANT]
>
> Requires environment variables.

To serve the [Ruck](https://ruck.tech) app for either development or production:

```sh
./scripts/serve.sh
```

### Screenshots

> [!IMPORTANT]
>
> Extra [requirements](#requirements):
>
> - CLI [`oxipng`](https://github.com/shssoichiro/oxipng)
> - CLI [`cwebp`](https://github.com/webmproject/libwebp)

> [!IMPORTANT]
>
> The [Ruck](https://ruck.tech) app must be serving.

To load the environment variables from `scripts/.env.sh` and generate the Device
Agnostic UI component screenshot images in `public/screenshots`:

```sh
./scripts/screenshots.sh
```

### Format

To format the project:

```sh
deno fmt
```

### Lint

To lint the project:

```sh
deno lint
```

### Type check

To type check every JavaScript module in the project:

```sh
./scripts/type-check.sh
```
