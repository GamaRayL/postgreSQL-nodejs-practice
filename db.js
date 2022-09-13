import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  password: "16Gama-12Ray",
  host: "localhost",
  port: 5432,
  database: "postgreSQL-practice",
});

export default pool;
