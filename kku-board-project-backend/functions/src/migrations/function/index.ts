import { migrateUsers } from "./users";

// Environment
const appEnvironment = "development";

export default async () => {
  console.log("\n\n===================== migration =====================");
  console.log(`********** App Environments: "${appEnvironment}" **********`);
  console.log("===================== ========= =====================\n");

  switch (appEnvironment) {
    case "development":
      await migrateUsers();
      break;
    default:
        console.log("No migration for this environment");
  }

  console.log("\n===================== ========= =====================\n\n");
};