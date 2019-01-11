# Overview

Oh hello! This is just an app to help me run the RPG game that I made, Quan. It doesn't have any sort of authorization as I just run it locally. It's also pretty sloppy because I just work on it as I have time. If you're a potential employer, don't refrain from looking; just keep in mind that this project is the roughest of drafts :)


* Jan. 11
For now I'm just working on getting the app up and running so that I can play the game with my friends. The routes tree from App down to the base of the tree is broken in a dozen places, but it's just a matter of plugging it all in correctly. That's what I'm working on in the `routestree` branch.

The `supercomponent` branch is an experimental thing I'm playing with. Most of the components are nearly identical, and I'm working on a way to have the code do the work for me of creating them all.

* Works In Progress
Up next is actually utilizing React, particularly in the Action component.

I've only created the BE enough to get make working on the FE possible, which is to say that I'm fully aware of how ham-fisted the routes are. Right now the routes make edits to the database and then send a ton of data back. Redux then just shoves the entire thing back into the app. This would be awful if I was dealing with a large database... I go back and forth on whether I want to improve database behavior, because why make FE code more complex when I'm never going to run into scalability problems? On the other hand, my brain doesn't like ordering a wrench and getting a hardware store...

BE testing was written, though I haven't updated it for some time and it's not passing. I'll re-do that some time...

I have done next to no design; that will come last.
