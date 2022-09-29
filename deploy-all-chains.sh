#!/bin/bash 

chains=("arbitrum" "aurora" "avalanche" "bsc" "bttc" "ethereum" "cronos" "fantom" "oasis" "polygon" "velas")

for i in "${chains[@]}"
do
  # prepare
  mustache configs/$i.json subgraph.template.yaml > subgraph.yaml && mustache configs/$i
  # codegen
  graph codegen --output-dir src/types/
  # build
  graph build
  # create subgraph 
  # graph create ${SUBGRAPH_NAME}-$i --node ${NODE}
  echo ${SUBGRAPH_NAME}-$i
  echo ${NODE}
done


