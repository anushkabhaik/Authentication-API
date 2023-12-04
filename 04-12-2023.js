const express = require("express");
const (open) = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const bcrypt = require('bcrypt");
const jwt = require('jsonwebtoken");

const app express();
app.use(express.json());

const dbPath = path.join(_dirname, "goodreads.db");

let db = null;

const initializeServerAndDb = async (req, res)=>{
try {
db = await open {
filename: dbPath,
driver: sqlite3.Database
});

app.post("/register/", async(request,response)=>{
    const{username, name, password, gender, location} = request.body;
    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    const selectUserQuery = `SELECT*FROM user WHERE username = '${username}'`;
    const dbUser = await db.get(selectUserQuery);
    if (dbUser === undefined) {
        const createUserQuery = `
            INSERT INTO 
                user(username,name,password,gender,location)
            VALUES
              (
                '${username}',
                '${name}',
                '${hashedPassword}',
                '${gender}',
                '${location}'
              )`;
            await db.run(createUserQuery);
            response.send('New User Created Successfully');
    }
    else{
        response.status = 400;
        response.send("User already exists");
    }
});
