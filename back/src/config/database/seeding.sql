BEGIN ;

INSERT INTO celebrities (first_name, last_name, birth_date, description, user_ID, created_By, created_At)
VALUES ('John', 'Doe', '1980-01-01', 'A famous actor', null, 'seeding', now()),
       ('Jane', 'Doe', '1985-01-01', 'A famous actress', null, 'seeding', now());

INSERT INTO users (email, first_name, last_name, birth_date, created_By, created_At)
VALUES ('email@gmail.com', 'Jack', 'Doe', '1980-01-01', 'seeding', now()),
       ('email@gmail.com', 'Jill', 'Doe', '1985-01-01', 'seeding', now());

INSERT INTO organizations (name, description, created_By, created_At)
VALUES ('Organization 1', 'A great organization', 'seeding', now()),
       ('Organization 2', 'Another great organization', 'seeding', now());

INSERT INTO predictions (title, description, predicted_date, fulfilled_date, prediction_date, created_By, created_At)
VALUES ('Prediction 1', 'A great prediction', '2020-01-01', '2020-01-01', '2020-01-01', 'seeding', now()),
       ('Prediction 2', 'Another great prediction', '2020-01-01', '2020-01-01', '2020-01-01', 'seeding', now());

INSERT INTO events (title, description, location, date, expected_date, status, created_By, created_At)
VALUES ('Event 1', 'A great event', 'New York', '2020-01-01', '2020-01-01', 0, 'seeding', now()),
       ('Event 2', 'Another great event', 'Los Angeles', '2020-01-01', '2020-01-01', 1, 'seeding', now());

INSERT INTO indicators (title, description, value, unit, created_By, created_At)
VALUES ('Indicator 1', 'A great indicator', 1, 'unit', 'seeding', now()),
       ('Indicator 2', 'Another great indicator', 2, 'unit', 'seeding', now());

COMMIT ;