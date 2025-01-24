const { spawn } = require("child_process");

const pocketbaseProcess = spawn("./pocketbase", ["serve"], {
  cwd: "./pocketbase",
  stdio: "inherit",
});

pocketbaseProcess.on("close", (code) => {
  console.log(`PocketBase exited with code ${code}`);
});

process.on("SIGINT", () => {
  pocketbaseProcess.kill("SIGINT");
  process.exit();
});

process.on("SIGTERM", () => {
  pocketbaseProcess.kill("SIGTERM");
  process.exit();
});
