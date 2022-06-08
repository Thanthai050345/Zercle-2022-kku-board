// import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as bodyParser from "body-parser";
import routes from "./routes";
import migrate from "./migrations/function";   
import * as express from "express";

const app = express();

admin.initializeApp()

export const db = admin.firestore()

app.use(bodyParser.json());

app.get("/", async (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.use(routes);

app.listen(3001, () => {
  console.log("listening on port 3001");
});

migrate()
export default app;
