# Employee_Summary_Template_ECB

# Unit 11 Express Homework: Note Taker

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

## Table of Contents

1. [Instructions](#instructions)
2. [Description](#description)
3. [Use](#use)
4. [Installation](#installation)
5. [Contributing](#contributing)
6. [Questions](#questions)

## Instructions

- The application frontend has already been created, it's your job to build the backend and connect the two.

- The following HTML routes should be created:

  - GET `/notes` - Should return the `notes.html` file.

  - GET `*` - Should return the `index.html` file

- The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

- The following API routes should be created:

  - GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  - POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  - DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

### Description

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed. The application will be invoked with the following command:

```sh
node server.js
```

The user will be told what port the app is being served on and can go to localhost: in the web brow

### Use

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

### Installation

Please run npm install to handle dependencies.

### Contributing

Contributions to this project are welcome.

### Questions

If you have an questions about the repo, open an issue or contact Elly Burgess directly at Eleanor.C.Burgess@gmail.com.

### Images

![Note Taker](./public/assets/images/screenshot.png)
