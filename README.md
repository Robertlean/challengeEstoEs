# challengeEstoEs
##Enviroment Seup
1. Create database.
2. Copy .env.example to .env and fill with database credentials.

To install dependecies

```bash
npm install
```

3. Migrations:

```bash
npx sequelize-cli db:migrate
```

4. Seeders:

```bash
npx sequelize-cli db:seed:all
```

## Start Local server

```bash
npm start
```