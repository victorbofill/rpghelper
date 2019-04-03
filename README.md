# Overview

Oh hello! This is just an app to help me run the RPG game that I made, Quan. It's little more than an interface for a database of locations, NPCs, quests, etc., as well as a minimal dice-roller and combat tracker. All the sort of thing that's typically done with pen-and-paper in a pen-and-paper RPG.

## Feb. 10
The project is vertically complete. I've run into the problem of "where should the complexity lie"? I refactored the Routes, Header, and Edit components to be entirely universal, but it's caused a web of data flow rather than a reduction of complexity. I can move that complexity to each individual component, but I'm not too keen on doing that. I've also written my way into a strucutre that essentially requires uniform data throughout, which serves for now, but I can't guarantee it will forever. But the app can do everything I need it to for now, so that may not be a problem.

For now I'll move on to design and front-end functionality, but I'll keep vertical flow in mind.

## Checking it out
To get this running on a local system you'll need to manually create an .env file using /backend/.env.example as an example. You'll need MongoDB running locally on your system, and will use MONGODB_URI to direct the BE to your database. You can then use the commands in both the FE and BE package.json files to get it all up and running. The FE is bare bones right now, so don't expect anything pretty, and there is no built-in data, so you'll have to generate data yourself.

Because the project isn't public I haven't put any effort into security or ensuring that user-entered data won't break anything; I just know how it's supposed to work and use it accordingly.
