"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("./events");
const users_1 = require("./users");
// Environment
const appEnvironment = "development";
exports.default = async () => {
    console.log("\n\n===================== migration =====================");
    console.log(`********** App Environments: "${appEnvironment}" **********`);
    console.log("===================== ========= =====================\n");
    switch (appEnvironment) {
        case "development":
            await events_1.migrateEvents();
            await users_1.migrateUsers();
            break;
    }
    console.log("\n===================== ========= =====================\n\n");
};
//# sourceMappingURL=index.js.map