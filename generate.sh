#!/bin/sh
# Xres to JSON

XCOLORS_ROOT="/home/plump/.local/share/xcolors"

for FILE in $XCOLORS_ROOT/*; do
	awk \
		'BEGIN{print "{"}$1 == "#define" {print "\""$2"\":\""$3"\","} END{print "}"}' \
		"$FILE" >"/var/www/$(basename "$FILE")"
done
