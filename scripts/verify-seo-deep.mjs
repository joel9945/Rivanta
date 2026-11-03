import http from "http";

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve({ statusCode: res.statusCode, headers: res.headers, body: data }));
    }).on("error", reject);
  });
}

async function runAudit() {
  console.log("=== RIVANTA GREEN SEO & ENTITY VERIFICATION ===\n");
  const baseUrl = "http://localhost:3000";

  // 1. Audit Homepage
  const home = await fetchPage(`${baseUrl}/`);
  console.log("1. Homepage Status:", home.statusCode);

  // Check Title
  const titleMatch = home.body.match(/<title>([^<]+)<\/title>/);
  console.log("   Title:", titleMatch ? titleMatch[1] : "NOT FOUND");
  const expectedTitle = "Rivanta Green | Sustainable Industrial Innovation";
  console.log("   Title Match:", titleMatch && titleMatch[1] === expectedTitle ? "PASS" : "FAIL");

  // Check Meta Description
  const descMatch = home.body.match(/<meta name="description" content="([^"]+)"/);
  console.log("   Description:", descMatch ? descMatch[1] : "NOT FOUND");
  const expectedDesc = "Rivanta Green is developing integrated industrial initiatives across bio-silica, compressed biogas, sustainable aviation fuel and biomass valorisation in India.";
  console.log("   Desc Match:", descMatch && descMatch[1] === expectedDesc ? "PASS" : "FAIL");

  // Check Canonical
  const canonicalMatch = home.body.match(/<link rel="canonical" href="([^"]+)"/);
  console.log("   Canonical:", canonicalMatch ? canonicalMatch[1] : "NOT FOUND");

  // Check OpenGraph site_name
  const ogSiteName = home.body.match(/<meta property="og:site_name" content="([^"]+)"/);
  console.log("   OG site_name:", ogSiteName ? ogSiteName[1] : "NOT FOUND");

  // Check Favicons
  const faviconIco = home.body.includes('rel="icon" href="/favicon.ico"');
  const faviconSvg = home.body.includes('href="/favicon.svg"');
  const favicon48 = home.body.includes('href="/favicon-48x48.png"');
  console.log("   Favicon links present in HTML:", { faviconIco, faviconSvg, favicon48 });

  // Check JSON-LD
  const jsonLdMatches = [...home.body.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  console.log(`   Found ${jsonLdMatches.length} JSON-LD script blocks`);
  for (let i = 0; i < jsonLdMatches.length; i++) {
    try {
      const parsed = JSON.parse(jsonLdMatches[i][1]);
      console.log(`   Block ${i + 1} valid JSON.`);
      if (parsed["@graph"]) {
        parsed["@graph"].forEach((item) => {
          console.log(`     - Type: ${JSON.stringify(item["@type"])}, Name: "${item.name}"`);
          if (item["@type"]?.includes("Organization") || item["@type"] === "Corporation") {
            console.log(`       LegalName: "${item.legalName}"`);
            console.log(`       PostalCode: "${item.address?.postalCode}"`);
          }
        });
      }
    } catch (e) {
      console.error(`   Block ${i + 1} JSON Parse Error:`, e.message);
    }
  }

  // 2. Audit All 10 Indexable Routes
  const routes = [
    "/about",
    "/bio-silica",
    "/cbg",
    "/saf",
    "/feedstock",
    "/sustainability",
    "/projects",
    "/vision",
    "/contact"
  ];

  console.log("\n2. Subpage Audit:");
  for (const r of routes) {
    const page = await fetchPage(`${baseUrl}${r}`);
    const pageTitleMatch = page.body.match(/<title>([^<]+)<\/title>/);
    const pageCanonicalMatch = page.body.match(/<link rel="canonical" href="([^"]+)"/);
    console.log(`   ${r.padEnd(16)} Status: ${page.statusCode} | Title: "${pageTitleMatch ? pageTitleMatch[1] : 'NONE'}" | Canonical: ${pageCanonicalMatch ? pageCanonicalMatch[1] : 'NONE'}`);
  }

  console.log("\n=== AUDIT COMPLETE ===");
}

runAudit().catch(console.error);
