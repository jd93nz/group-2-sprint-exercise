BEGIN TRANSACTION;

CREATE TABLE location (
    id SERIAL PRIMARY KEY,
    name TEXT,
    lat float,
    lng float
);

COMMIT;