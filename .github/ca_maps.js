#! /usr/bin/env node

const core = require('@actions/core');
const github = require('@actions/github');
// output_dir is set by workflow file before this script executes
const output_dir = process.env.OBS_OUTPUT_DIR
console.log(`output_dir: ${output_dir}`)

const { load } = require("@alex.garcia/observable-prerender");
(async () => {
  const notebook = await load(
    "@datadesk/base-maps-for-all-58-california-counties",
    ["chart"]
  );
  try {
    const counties = await notebook.value("counties");
    for await (let county of counties) {
      await notebook.redefine("county", county.fips);
      await notebook.screenshot("chart", `${output_dir}/${county.name}.png`);
      // await notebook.svg("chart", `${county.name}.svg`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
  await notebook.browser.close();
})();