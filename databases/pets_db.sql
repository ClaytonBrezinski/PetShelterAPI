DROP DATABASE IF EXISTS pets_db; 
CREATE DATABASE pets_db; 
 
\c pets_db; 
 
CREATE TABLE pets( 
    ID SERIAL PRIMARY KEY,  
    name VARCHAR(256) NOT NULL,  
    type VARCHAR(256) NOT NULL, 
    breed VARCHAR(256) NOT NULL, 
    location VARCHAR(256) NOT NULL,  
    lat REAL NOT NULL CHECK (lat > -90 AND lat < 90) , 
    long REAL NOT NULL CHECK (long > -180 AND long < 180) , 
    UNIQUE(name, breed) 
); 
-- CHECK within lat and long to ensure that they are of valid formats 
-- UNIQUE to ensure that name & breed are unique together 
 
-- -- Code to test adding to the database 
-- INSERT INTO pets (name, type, breed, location, lat, long)  
--     VALUES ('myDoggy', 'dog', 'doge', 'regina, sk', 50.4452, 104.6189); 
-- -- unique test 
-- INSERT INTO pets (name, type, breed, location, lat, long)  
--     VALUES ('uniqueTestDoggy', 'dog', 'doge', 'regina, sk', 50.4452, 104.6189); 
-- -- duplicated test 
-- INSERT INTO pets (name, type, breed, location, lat, long)  
--     VALUES ('myDoggy', 'dog', 'doge', 'regina, sk', 50.4452, 104.6189); 
-- -- bad lat test 
-- INSERT INTO pets (name, type, breed, location, lat, long)  
--     VALUES ('badDoggy', 'dog', 'doge', 'regina, sk', 90.4452, 104.6189); 
-- -- bad long test 
-- INSERT INTO pets (name, type, breed, location, lat, long)  
--     VALUES ('badDoggy', 'dog', 'doge', 'regina, sk', 50.4452, -180.6189);