BEGIN TRANSACTION;


CREATE TABLE location (id SERIAL PRIMARY KEY,
                                         waterDepth float, name TEXT, lat float, lng float);


COMMIT;