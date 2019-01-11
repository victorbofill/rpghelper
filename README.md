# Overview

Oh hello! This is just an app to help me run the RPG game that I made, Quan. It doesn't have any sort of authorization as I just run it locally. It's also pretty sloppy because I just work on it as I have time. If you're a potential employer, don't refrain from looking; just keep in mind that this project is the roughest of drafts :)


Jan. 10
I just re-worked the entire BE. I created a better data model structure, and then created complete CRUD routes for all models, which I didn't have before; before, I just created what I needed at the time.

Right now I'm working (in the regions branch) on a SuperComponent. Most components will be incredibly similar, as the entire app is basically just a data tree. I'm going to make the SuperComponent so that I don't have the exact same code over and over in every component.

Jan. 9
Basic functionality is close to complete. I recently added the 'region' model to the database as the top tier, and I'm working on fixing up the tab tree, which is created using React routes. It breaks a branch or two down as of this writing.

Up next is actually utilizing React, particularly in the Action component.

I've only created the BE enough to get make working on the FE possible, which is to say that I'm fully aware of how ham-fisted the routes are. Right now the routes make edits to the database and then send a ton of data back. Redux then just shoves the entire thing back into the app. This would be awful if I was dealing with a large database... I go back and forth on whether I want to improve database behavior, because why make FE code more complex when I'm never going to run into scalability problems? On the other hand, my brain doesn't like ordering a wrench and getting a hardware store...

BE testing was written, though I haven't updated it for some time and it's not passing. I'll re-do that some time...

I have done next to no design; that will come last.
