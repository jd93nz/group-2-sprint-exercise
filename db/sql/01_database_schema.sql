BEGIN TRANSACTION;


CREATE TABLE location ( id SERIAL PRIMARY KEY,
                                          "waterDepth",
                                          name TEXT, lat float, lng float);


COMMIT;