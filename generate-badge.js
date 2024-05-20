// generate-badge.js

const badge = require("badge-generator");
const fs = require("fs");
const path = require("path");

const coverageSummary = require("./coverage/coverage-summary.json");

const totalCoverage = coverageSummary.total.lines.pct;

const badgeData = {
  label: "coverage",
  message: `${totalCoverage}%`,
  color: totalCoverage > 80 ? "green" : totalCoverage > 50 ? "yellow" : "red",
};

badge(badgeData, path.join(__dirname, "coverage", "coverage-badge.svg"));
