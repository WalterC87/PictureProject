#!/bin/sh

if [$(ps -e -o uid, cmd | grep $uid | grep node | grep -v grep | wc -l | tr -s "\n") -eq 0]
then
	export PAHT=/usr/local/bin:$PATH
	forever start --sourceDir ~/Printoo/server.js 60 >> /path/to/log.txt 2 >&1
fi
