"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = exports.db = void 0;
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const functions = require("firebase-functions");
const cors = require("cors");
const function_1 = require("./migrations/function");
const express = require("express");
const routes_1 = require("./routes");
const app = express();
admin.initializeApp();
app.use(cors({ credentials: true, origin: true }));
app.use("/v1", routes_1.default);
exports.db = admin.firestore();
app.use(bodyParser.json());
app.get("/", async (req, res) => {
    res.send("Hello World!");
});
const runtimeOpts = {
    timeoutSeconds: 300,
    memory: "1GB",
};
function_1.default();
exports.api = functions
    .runWith(runtimeOpts)
    .region("asia-southeast2")
    .https.onRequest(app);
//# sourceMappingURL=index.js.map