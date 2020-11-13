#!/bin/bash

if [ $# == 2 ] && [ -d "$1" ]
then
  if [ "$2" -ge 100 ] && [ "$2" -le 2000 ]
  then
    find "$1" -type d -name "original" -exec mogrify -path "{}/.." -filter Triangle -define filter:support=2 -thumbnail 1000 -unsharp 0.25x0.25+8+0.065 -dither None -posterize 136 -quality 82 -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB -strip "{}/*" \;
  else
    echo "Enter a number as size between 100 and 2000"
  fi
else
  echo "Enter valid directory name and size as argument"
fi
