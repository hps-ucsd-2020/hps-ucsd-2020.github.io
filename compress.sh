#!/bin/bash

# Use format ./compress.sh folder size

# The program will only run on images in folders named original
# Compressed images will be moved to parent folder

# Example usage: Compress all images in slideshow images with width 1000
# ./compress.sh assets/img/slideshow-images/ 1000

# Example usage: Compress all dive images with width 1000 (and replace older compressed images)
# ./compress.sh assets/img/slideshow-images/dive-img 1000

# Step 1: Check if the folder where you want to put a file has an original folder
# Step 2: If it doesn't have such a folder, move all the files into a folder named original including any new images you want to add
# Step 3: If there is such a folder, put your new images in the original folder
# Step 4: Run the program on the folder containing the images
if [ $# == 2 ] && [ -d "$1" ]
then
  if [ "$2" -ge 100 ] && [ "$2" -le 2000 ]
  then
    folders=$(find "$1" -type d -name "original")
    for i in $folders
    do
      mogrify -path "$i/.." -filter Triangle -define filter:support=2 -thumbnail "$2" -unsharp 0.25x0.25+8+0.065 -dither None -posterize 136 -quality 82 -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB -strip "$i/*"
    done
  else
    echo "Enter a number as size between 100 and 2000"
  fi
else
  echo "Usage: ./compress.sh assets/img/slideshow-images/dive-img widthInPixels" >&2
fi
