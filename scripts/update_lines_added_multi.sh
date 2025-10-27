#!/usr/bin/env bash
set -euo pipefail

# One-stop updater for staged additions in specific paths.
# - 01-advanced  -> .metrics/total_lines_added.txt
# - 00-fundamentals -> .metrics/fundamentals_lines_added.txt

REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

mkdir -p .metrics

# Keep these arrays in matching order (index 0 <-> 0, 1 <-> 1, etc.)
PATHS=("00-fundamentals" "01-advanced")
FILES=(".metrics/fundamentals_lines_added.txt" ".metrics/total_lines_added.txt")

read_total() {
  local f="$1"
  if [[ -s "$f" ]]; then
    local t
    t="$(<"$f")"
    [[ "$t" =~ ^[0-9]+$ ]] || t=0
    echo "$t"
  else
    echo 0
  fi
}

sum_added_for_path() {
  local path="$1"
  # --numstat: <added>\t<deleted>\t<path>
  # Binary files show '-' -> treat as 0
  git diff --cached --numstat -- "$path" \
    | awk -F'\t' '{ a = ($1 ~ /^[0-9]+$/ ? $1 : 0); sum += a } END{ print (sum+0) }'
}

updated=0

for i in "${!PATHS[@]}"; do
  p="${PATHS[$i]}"
  f="${FILES[$i]}"

  added="$(sum_added_for_path "$p")"
  # If nothing staged in this path, skip quietly
  if [[ "${added:-0}" -eq 0 ]]; then
    continue
  fi

  total="$(read_total "$f")"
  new_total=$(( total + added ))
  echo "$new_total" > "$f"
  git add "$f"
  echo "[$p] Added ${added} lines | New total → ${new_total} -> ${f}"
  updated=1
done

# Always succeed so other hooks can run
exit 0
