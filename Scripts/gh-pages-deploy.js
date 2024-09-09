/* eslint-disable no-console */
import { execa } from "execa";
import { existsSync } from "fs";
import { platform } from "os";
(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);

    if (platform() === "win32") {
        await execa("cmd", ["/c", "del", "/s", "/q", folderName]);
        await execa("cmd", ["/c", "rmdir", "/s", "/q", folderName]);
      } else {
        // Assuming Unix-based system
        await execa("rm", ["-rf", folderName]);
      }
  
    await execa("git", ["checkout", "-f", "main"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();