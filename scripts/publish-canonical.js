const { execSync } = require("child_process");

const publishCanonicals = tag => {
  // Publish canonical packages
  ["markdown-autolink"].forEach(pkg => {
    execSync(`sed -i -e "s/name.*/name\\": \\"${pkg}\\",/" lib/package.json`);
    execSync(`cd lib && npm publish --provenance --access public --tag ${tag ?? "latest"}`);
  });
};

module.exports = { publishCanonicals };
