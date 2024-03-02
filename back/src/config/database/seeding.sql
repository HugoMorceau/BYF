BEGIN ;
select * from celebrities;
INSERT INTO celebrities (first_name, last_name, birth_date, description, user_ID, created_By, created_At)
VALUES ('John', 'Doe', '1980-01-01', 'A famous actor', null, 'seeding', now()),
       ('Jane', 'Doe', '1985-01-01', 'A famous actress', null, 'seeding', now());
select * from celebrities;
COMMIT ;