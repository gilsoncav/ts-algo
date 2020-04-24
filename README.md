# ts-algo

Implementing common algorithms using Typescript

## Motivation

I started this repo to implement common algorithms using Typescript but
ended up struggling to make Debugging work properly with VSCode + Node + Typescript + Jest

## Accomplishment

For now, the main accomploshiment was to get this working since all previous
articles that i found about it ended up with error like VSCode starting Node
but reaching timeout without connecting the debugger properly

check the files:

- package.json
- launch.json
- jest.config.js

I had to force the Node port both in port and in --inspect-brk flag besides other
settings to make it work properly.
