---
title: Mobile Tooltip Systems
stack: Unity, C# & Visual Studio
slug: mobile-tooltip-systems
date: 2019-02-24T00:00:00+00:00
---

**Mobile Tooltip Systems** uses Unity’s Event System to track touches/clicks long press and long click to show a popup tool-tip style message overlaying the screen. The system offers additional functionality for Standalone builds with a Hover to show the tool-tip.

Providing a consistent Unity Editor experience with custom property drawers to maintain familiar interface which allows the entire development team to use it. The accompanying API is designed to be extensible and flexible so your specific needs can be implemented.

The asset contains prefabs for all required items so your experience will be consistent with Unity’s workflow. Using these prefabs to get a working tool-tip system requires NO coding. There are, nonetheless, scripts provided as usable examples to roll your own tool-tip system.

The tool-tip system uses an animator with two animations, one for showing/hiding and another for destroying the tool-tip. These animations are standard Unity animations and animator controller and can be changed to fit your different projects.

Creating your own components can be done by inheriting from TooltipSystems.Core namespace.

### Additions

**Now includes both of the samples, Snake Head and Candy Hunt**, which are designed for a tinker-based experience. Add different types of Recycler and Spawner components and use the provided prefabs to experiment with all sorts of possibilities.

**Features:**
- ready to use components and prefabs
- auto positioning to keep popup on screen from touch/click point
- word wrap for long messages
- animated show and hide
- dedicated editor window groups all scene tooltips for efficient modification
- individual show timer per tool-tip
- dynamic ShowTooltip functions to use with Unity UI components EventSystem
- multiple tool-tips can be on screen
- free [Mobile Tooltip Systems - Try It](https://assetstore.unity.com/packages/slug/73882) asset package
**Show Conditions:**
- Long Press: Long press on a touchscreen device and long click for a standalone PC build to show tool-tip.
- Click: Touch/Press on a touchscreen device and click for a standalone PC build to show tool-tip.
- Hover: Standalone PC build hover mouse to show tool-tip for touchscreens it works like Click.