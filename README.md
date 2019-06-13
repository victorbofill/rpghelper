# Overview

Oh hello! This is just an app to help me run the RPG game that I made, Quan. It's little more than an interface for a database of locations, NPCs, quests, etc., as well as a minimal dice-roller and combat tracker. All the sort of thing that's typically done with pen-and-paper in a pen-and-paper RPG.

## June 12
I've been super busy, and the app is doing what it needs to (minimally) so I haven't done much work on this app for quite a while. The problem I've run into now is that if I were to make this from scratch today, I'd do it differently. So do I re-write code from the ground up, or do I make little improvements/changes here and there? It's probably going to be the latter by default, but I'm considering the former.

## Front End Highlights
I'm pretty proud of the React Router that I built (`src/components/app/codex/routes`). It's a deeply nested switch/router structure that takes a large chunk of information from the database and procedurally generates the entire router, and it does so early enough in the app lifecycle that a URL with no associated back end route can be used and it will still work. For example, I can enter `pnw/oregon/portland/myhouse` into the address bar of my browser and the router will retrieve the data, build the router, and load all necessary components to display information about my house, each with their own information as well.

## Back End Highlights
The back end is incredibly simple and straightforward. All of the routes are just basic CRUD. `Participant` is the most complex model schema.

## Seeing it in action
If you want to get this running on a local system you'll need to manually create an .env file using /backend.env.example as an example. You'll need MongoDB running locally on your system, and will use MONGODB_URI to direct the BE to your database. You can then use the commands in both the FE and BE package.json files to get it all up and running. The FE is bare bones right now, so don't expect anything pretty and there is no built-in data, so you'll have to generate data yourself.

Because the project isn't public I haven't put any effort into security or ensuring that user-entered data won't break anything; I just know how it's supposed to work and use it accordingly.
