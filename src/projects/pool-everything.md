---
title: Pool Everything
stack: Unity, C# & Visual Studio
slug: pool-everything
date: 2019-02-24T00:00:00+00:00
thumbImg: ../images/thumbs/box-ninja-thumb.png
featuredImg: ../images/featured/box-ninja-banner.png
---

**Pool Everything™** is a no scripting required object pooling system. Pool Everything™ uses Unity’s component-based system that instantiates all objects identified by the Pool Manager(s) in the scene.
Pooling GameObject(s) provide a few basic benefits including the limiting of runtime garbage collection. Creating all objects to be used in this manner provides immediate access to available objects during game play without the need for instantiating another GameObject. When an object is no longer needed, by traditional means, the GameObject would be destroyed and the potential for the garbage-collection process to start is risked. At this point, when an object has outlived its use, Pool Everything’s recyclers will place it on standby awaiting the next request.

### Additions

**Now includes both of the samples, Snake Head and Candy Hunt**, which are designed for a tinker-based experience. Add different types of Recycler and Spawner components and use the provided prefabs to experiment with all sorts of possibilities.

**Features:**
- ready to use components and prefabs
- no scripting for required for new projects
- easy integration into existing projects
- optimized indexer based pooling request
- premade and extensible components
- dynamic popup InputManager axes picker for input spawning
- component that inter-communicate
- free [Pool Everything - Try It](https://assetstore.unity.com/packages/slug/70947) asset package