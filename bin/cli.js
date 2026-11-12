#!/usr/bin/env node
console.log("ChinaMedVisit CLI v1.0.0 — China Tier-3A IMC Hospital Cost Estimator");
console.log("Endpoint: https://chinamedvisit.com/api/mcp");
console.log("Website: https://chinamedvisit.com");
if (process.argv.includes("--help") || process.argv.includes("-h")) {
  console.log("\nUsage: chinamedvisit [options]");
  console.log("  --costs        Compare 50+ self-pay procedure rates (PET-CT, 3T MRI)");
  console.log("  --hospitals    Directory of Top Tier-3A International Medical Centers");
  console.log("  --visa         144-Hour transit & S2 medical visa checklist");
}
