import * as admin from "firebase-admin";
import * as bodyParser from "body-parser";
import * as functions from "firebase-functions";
import * as cors from "cors";
import migrate from "./migrations/function";   
import * as express from "express";
import router from "./routes";


const app = express();

admin.initializeApp()
app.use(cors({ credentials: true, origin: true }));
app.use("/v1", router);

export const db = admin.firestore()

app.use(bodyParser.json());

app.get("/", async (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

const runtimeOpts: functions.RuntimeOptions = {
  timeoutSeconds: 300,
  memory: "1GB",
};

migrate()

export const api = functions.runWith(runtimeOpts).region("asia-southeast2").https.onRequest(app);