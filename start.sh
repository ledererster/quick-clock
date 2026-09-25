#!/usr/bin/env bash
set -euo pipefail

# Clock in automatically on launch; pass --no to start clocked out.
if [[ "${1:-}" == "--no" ]]; then
  export QUICK_CLOCK_NO_CLOCK_IN=1
fi

project_dir="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
desktop_dir="${XDG_DATA_HOME:-"${HOME}/.local/share"}/applications"
desktop_file="${desktop_dir}/io.github.ledererster.quick-clock.desktop"

mkdir -p "$desktop_dir"
printf '%s\n' \
  '[Desktop Entry]' \
  'Type=Application' \
  'Name=Quick Clock' \
  "Exec=npm start" \
  "Path=${project_dir}" \
  "Icon=${project_dir}/assets/clock.png" \
  'Terminal=false' \
  'Categories=Utility;Office;' > "$desktop_file"

npm start > /dev/null 2>&1 &
