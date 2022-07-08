---
title: Basic Twitch OAuth Flow
stack: Nodejs, Twitch API
slug: basic-twitch-oauth
date: 2021-04-28T00:00:00+00:00
thumbImg: ../images/thumbs/basic-twitch-oauth-thumb.png
featuredImg: 
---

Intended to reduce the expected prerequisite experience required for implementing Twitch OAuth to use the Twitch API(s)

**Motivation**
The statements below are still a bit beyond your experiences and you need/want to use a Twitch API… is my motivation.

Twitch API(s) now require that some endpoint request must have an authorization in the header. To acquire an access token for a Twitch API you must be familiar with an authentication flow. The flows supported by Twitch are Implicit code, authorization code, and client credentials.

Checkout it out here on [GitHub](https://github.com/callowcreation/basic-twitch-oauth).