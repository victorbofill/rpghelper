# Overview

Oh hello! This is just an app to help me run the RPG game that I made, Quan. It doesn't have any sort of authorization as I just run it locally. It's also pretty sloppy because I just work on it as I have time. If you're a potential employer, don't refrain from looking; just keep in mind that this project is the roughest of drafts :)


* Jan. 16
The basic, basic functionality is done. It's all vertically plugged in. Right now, though, every component displays all data, without regard for the actual database structure. I'm considering just removing Redux, actually, because I'm not convinced that I need persistent data across all components anyway.

The `supercomponent` branch started as an experiment wherein I was creating one giant component that I could just give a 'type' and it would use that to generate itself as whatever type that was. But that's what just... creating a component is... So I'm breaking it down into pieces. Right now I've got the ContainerHeader and Routes components, which can be used with containers to generate their headers and routes. Next I'll create one for their children.

The `edits` branch is another experimental thing to create a dynamic Edit component that I can use for any component. I'll play with that some more as well, after I've finished hard-coding everything.

* Works In Progress
Up next is actually utilizing React, particularly in the Action component.

I've only created the BE enough to get make working on the FE possible, which is to say that I'm fully aware of how ham-fisted the routes are. Right now the routes make edits to the database and then send a ton of data back. Redux then just shoves the entire thing back into the app. This would be awful if I was dealing with a large database... I go back and forth on whether I want to improve database behavior, because why make FE code more complex when I'm never going to run into scalability problems? On the other hand, my brain doesn't like ordering a wrench and getting a hardware store...

BE testing was written, though I haven't updated it for some time and it's not passing. I'll re-do that some time...

I have done next to no design; that will come last.
