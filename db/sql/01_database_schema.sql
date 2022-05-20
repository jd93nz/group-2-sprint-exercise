BEGIN TRANSACTION;

CREATE TABLE location (
    id SERIAL PRIMARY KEY,
    title TEXT,
    lat float,
    lng float
);

COMMIT;