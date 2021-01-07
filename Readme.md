

KGE is a full-featured, open-source game development software, allowing to create HTML5 and native games without any knowledge in a specific programming language. All the game logic is built up using an intuitive and powerful event-based system.

!

Getting started
---------------

Overview of the architecture
----------------------------

| Directory | ℹ️ Description |
| --- | --- |
| `Core` | GDevelop core library, containing common tools to implement the IDE and work with GDevelop games. |
| `GDCpp` | The C++ game engine, used to build native games (*not used in GDevelop 5*). |
| `GDJS` | The JavaScript game engine, using Pixi.js (WebGL), powering all GDevelop games. |
| `GDevelop.js` | Bindings of `Core`/`GDCpp`/`GDJS` and `Extensions` to JavaScript (with WebAssembly), used by the IDE. |
| `newIDE` | The game editor, written in JavaScript with React, Electron and Pixi.js. |
| `Extensions` | Extensions for the C++ or JavaScript game engines, providing objects, behaviors, events and new features. |

To learn more about GDevelop Architecture, read the [architecture overview here](Core/GDevelop-Architecture-Overview.md).

A pre-generated documentation of the Core library, C++ and JS game engines is [available here](https://docs.gdevelop-app.com).

Status of the tests and builds: [![Build status](https://circleci.com/gh/4ian/GDevelop.svg?style=shield)](https://app.circleci.com/pipelines/github/4ian/GDevelop) [![Quick tests status](https://semaphoreci.com/api/v1/4ian/gd/branches/master/shields_badge.svg)](https://semaphoreci.com/4ian/gd) [![All tests Status](https://travis-ci.org/4ian/GDevelop.svg?branch=master)](https://travis-ci.org/4ian/GDevelop) [![Windows Build status](https://ci.appveyor.com/api/projects/status/84uhtdox47xp422x/branch/master?svg=true)](https://ci.appveyor.com/project/4ian/gdevelop/branch/master) [![https://good-labs.github.io/greater-good-affirmation/assets/images/badge.svg](https://good-labs.github.io/greater-good-affirmation/assets/images/badge.svg)](https://good-labs.github.io/greater-good-affirmation)

Links
-----

### Community

* [GDevelop forums](https://forum.gdevelop-app.com) and [Discord chat](https://discord.gg/rjdYHvj).
* [GDevelop homepage](https://gdevelop-app.com)
* [GDevelop wiki (documentation)](http://wiki.compilgames.net/doku.php/gdevelop5/start)
* Help translate GDevelop in your language: [GDevelop project on Crowdin](https://crowdin.com/project/gdevelop).

### Development Roadmap

* [GDevelop Roadmap on Trello.com](https://trello.com/b/qf0lM7k8/gdevelop-roadmap), for a global view of the features that could be added. Please vote and comment here for new features/requests.
* [GitHub issue page](https://github.com/4ian/GDevelop/issues), for technical issues and bugs.

### Games made with GDevelop

* See the [Showcase of games](https://gdevelop-app.com/games-showcase) created with GDevelop. 
* Suggest your game to be [added to the showcase here](https://github.com/GDevelopApp/GDevelop-website-showcase/issues/new/choose).

![Lil Bub](http://compilgames.net/assets/bub/screenshots-background.jpg "GDevelop logo")

> [Lil BUB's HELLO EARTH](https://gdevelop-app.com/games/lil-bub-hello-earth) is one of the many games built with GDevelop.

License
-------

* The Core library, the native and HTML5 game engines, the IDE, and all extensions (respectively `Core`, `GDCpp`, `GDJS`, `newIDE` and `Extensions` folders) are under the **MIT license**.
* The name, GDevelop, and its logo are the exclusive property of Florian Rival.

Games exported with GDevelop are based on the native and/or HTML5 game engines (see `Core`, `GDCpp` and `GDJS` folders): these engines are distributed under the MIT license so that you can **distribute, sell or do anything** with the games you created with GDevelop. In particular, you are not forced to make your game open source.


[Node.js]:https://nodejs.org
[CMake]:http://www.cmake.org/
[Ninja]:http://martine.github.io/ninja/
