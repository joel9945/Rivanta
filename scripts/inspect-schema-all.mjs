import http from "http";

const routes = ["", "/about", "/bio-silica", "/cbg", "/saf", "/feedstock", "/sustainability", "/projects", "/vision", "/contact"];

for (const r of routes) {
  await new Promise((resolve) => {
    http.get("http://localhost:3000" + r, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => {
        const matches = [...data.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
        console.log(`Route: ${r || "/"} (${matches.length} blocks)`);
        matches.forEach((m, idx) => {
          try {
            const parsed = JSON.parse(m[1]);
            const types = parsed["@graph"] ? parsed["@graph"].map((g) => g["@type"]) : parsed["@type"];
            console.log(`   Block ${idx + 1}:`, JSON.stringify(types));
          } catch {
            console.log(`   Block ${idx + 1} parse error`);
          }
        });
        resolve();
      });
    }).on("error", resolve);
  });
}

