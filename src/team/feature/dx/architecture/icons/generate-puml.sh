#!/bin/bash

generate() {
  echo @startuml > $1.puml
  plantuml -encodesprite 16 $1.png >> $1.puml
  echo @enduml >> $1.puml
}

for icon in `find . -maxdepth 1 -type f -name \*.png | sed 's|^\./||' | sed 's|.png$||'`
do
  generate $icon
done
