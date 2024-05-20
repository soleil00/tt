import fetch from "node-fetch";
import * as fs from "fs";
import * as path from "path";

// Read the coverage summary
const coverageSummaryPath = path.join(
  __dirname,
  ".test_report",
  "coverage-summary.json"
);
if (!fs.existsSync(coverageSummaryPath)) {
  throw new Error("Coverage summary file not found.");
}

const coverageSummary = JSON.parse(
  fs.readFileSync(coverageSummaryPath, "utf-8")
);
const totalCoverage = coverageSummary.total.lines.pct;

// Generate badge URL
const badgeUrl = `https://img.shields.io/badge/coverage-${totalCoverage}%25-${
  totalCoverage >= 95 ? "green" : totalCoverage >= 80 ? "yellow" : "red"
}.svg`;

const badgePath = path.join(__dirname, "coverage-badge.svg");

// Fetch the badge from Shields.io and save it locally
fetch(badgeUrl)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch badge");
    }
    return res.buffer();
  })
  .then((buffer) => {
    fs.writeFileSync(badgePath, buffer);
    console.log("Coverage badge generated successfully.");
  })
  .catch((err) => {
    console.error("Error generating badge:", err);
  });
