#!/bin/bash

node backend/dist/index.js &

serve -s frontend/build &
