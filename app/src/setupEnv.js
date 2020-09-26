// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

fs.writeFileSync("./.env", `FIREBASE_CONFIG=${process.env.firebaseConfig}\n`);
