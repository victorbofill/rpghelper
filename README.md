# Overview

Oh hello! This is just an app to help me run the RPG game that I made, Quan. It doesn't have any sort of authorization as I just run it locally. It's also pretty sloppy because I just work on it as I have time. If you're a potential employer, don't refrain from looking; just keep in mind that this project is the roughest of drafts :)


## Feb. 10
The project is vertically complete. I've run into the problem of "where should the complexity lie"? I refactored the Routes, Header, and Edit components to be entirely universal, but it's caused a web of data flow rather than a reduction of complexity. I can move that complexity to each individual component, but I'm not too keen on doing that. I've also written my way into a strucutre that essentially requires uniform data throughout, which serves for now, but I can't guarantee it will forever. But the app can do everything I need it to for now, so that may not be a problem.

For now I'll move on to design and front-end functionality, but I'll keep vertical flow in mind.

## Up next
Actually utilizing React is coming up, particularly in the Action component.

I've only created the BE enough to get make working on the FE possible, which is to say that I'm fully aware of how ham-fisted the routes are. Right now the routes make edits to the database and then send a ton of data back. Redux then just shoves the entire thing back into the app. This would be awful if I was dealing with a large database... I go back and forth on whether I want to improve database behavior, because why make FE code more complex when I'm never going to run into scalability problems? On the other hand, my brain doesn't like ordering a wrench and getting a hardware store...

BE testing was written, though I haven't updated it for some time and it's not passing. I'll re-do that some time...

I have done next to no design; that will come last.
