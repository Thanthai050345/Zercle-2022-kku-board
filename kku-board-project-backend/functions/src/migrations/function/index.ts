import { migrateEvents } from "./events";
import { migrateUsers } from "./users";

// Environment
const appEnvironment = "development";

export default async () => {
  console.log("\n\n===================== migration =====================");
  console.log(`********** App Environments: "${appEnvironment}" **********`);
  console.log("===================== ========= =====================\n");

  switch (appEnvironment) {
    case "development":
      await migrateEvents();
      await migrateUsers();
      break;
  }

  console.log("\n===================== ========= =====================\n\n");
};