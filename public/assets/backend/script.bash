#!/bin/bash

for file in icons8-*.png; do
  new_name=$(echo "$file" | cut -d'-' -f2 | sed 's/-48//')
  mv "$file" "$new_name.png"
done
