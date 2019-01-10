# Overview

Oh hello! This is just an app to help me run the RPG game that I made, Quan. It doesn't have any sort of authorization as I just run it locally. It's also pretty sloppy because I just work on it as I have time. If you're a potential employer, don't refrain from looking; just keep in mind that this project is the roughest of drafts :)


== Jan. 9 ==
Basic functionality is pretty much complete. I recently added the 'region' model to the database as the top tier, and I'm working on fixing up the tab tree created using React routes. It breaks a branch or two down as of this writing.

The Action component doesn't make nearly the use of React that it could. Giving everything a React once-over is probably coming next.

I've only created the BE enough to get make working on the FE possible, which is to say that I'm fully aware of how ham-fisted the routes are. Right now the routes make edits to the database and then send a ton of data back. Redux then just shoves the entire thing back into the app. This would be awful if I was dealing with a large database... I go back and forth on whether I want to go with better database behavior, because why make FE code more complex when I'm never going to run into scalability problems?

BE testing was written, though I haven't updated it for some time and it's not passing. I'll re-do that some time...

I have done next to no design; that will come last.
