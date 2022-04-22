#!/bin/sh
# Xres to JSON

XCOLORS_ROOT="/home/plump/.local/share/xcolors"
ROOT="$(dirname "$0")"

for FILE in $XCOLORS_ROOT/*; do
	awk \
		'BEGIN{print "{"}$1 == "#define" {print "\""$2"\":\""$3"\","} END{print "}"}' \
		"$FILE" >"$ROOT/colorschemes/$(basename "$FILE")"
done
