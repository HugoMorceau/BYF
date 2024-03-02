BEGIN ;

INSERT INTO celebrities (first_name, last_name, birth_date, description, user_ID, created_By, created_At)
VALUES ('John', 'Doe', '1980-01-01', 'A famous actor', null, 'seeding', now()),
       ('Jane', 'Doe', '1985-01-01', 'A famous actress', null, 'seeding', now());


INSERT INTO events (title, description, location, date, expected_date, status, created_By, created_At)
VALUES ('Event 1', 'A great event', 'New York', '2020-01-01', '2020-01-01', 0, 'seeding', now()),
       ('Event 2', 'Another great event', 'Los Angeles', '2020-01-01', '2020-01-01', 1, 'seeding', now());

COMMIT ;