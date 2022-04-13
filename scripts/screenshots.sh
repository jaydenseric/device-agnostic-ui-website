#!/bin/sh
# Loads the environment variables and screenshots the Device Agnostic UI
# components.

# Asserts an environment variable is set.
# Argument 1: Name.
# Argument 2: Value.
assertEnvVar() {
  if [ -z "$2" ]
  then
    echo "Missing environment variable \`$1\`." >&2
    exit 1
  fi
}

# Load the environment variables.
. scripts/.env.sh &&

# Assert environment variables are set.
assertEnvVar RUCK_PORT $RUCK_PORT

# Create the screenshot PNG images.
deno run \
  --allow-env \
  --allow-net \
  --allow-read \
  --allow-write \
  --allow-run \
  --unstable \
  --import-map=importMap.server.dev.json \
  scripts/screenshots.mjs &&

for file in public/screenshots/*.png
do
  # Convert the screenshot PNG image to WebP.
  echo "Creating WebP from $file"
  cwebp -quiet -lossless "$file" -o "${file%.png}.webp"

  # Optimize the screenshot PNG image.
  echo "Optimizing $file"
  oxipng -qs -o 3 -i 0 $file
done
