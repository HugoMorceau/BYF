# Naming conventions

## Database tables
- Table names are in plural form
- Table names should be single words, if possible, if not, use an underscore (_) to separate words
- If a table is a junction table, it should be named after the two tables it joins, separated by an underscore (_)

## Database columns

## TypeORM entities
- Entity files are in snake_case
- Entity names are in PascalCase
- Entity names are singular
- Entity names should be single words, if possible

# Database

## Database creation
- See ormconfig.json from TypeORM for database creation with synchronise set to true (this will create the database if it doesn't exist) (this is absolutely prohibited in production)

# Modules
- Nest g resource module/moduleName (yes CRUD, graphql, code first) will create a module with a controller, service, entity, and module file


 