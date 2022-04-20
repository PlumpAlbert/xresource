#!/bin/sh
# Xres to JSON

XCOLORS_ROOT="$HOME/.local/share/xcolors"
ROOT="$(dirname $0)"
! [ -d "$ROOT/json" ] && mkdir -p "$ROOT/json"

for FILE in $XCOLORS_ROOT/*; do
	awk \
		'BEGIN{print "{"}$1 == "#define" {print "\""$2"\":\""$3"\""} END{print "}"}' \
		"$FILE" >"$ROOT/json/$(basename "$FILE")"
done
