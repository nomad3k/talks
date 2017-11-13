#!/bin/bash

for function in functions/*/
do
  echo "${function}"
  func=${function:10:(${#function}-11)}
  ./deploy.sh $func
done
