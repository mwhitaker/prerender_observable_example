# run observable prerender

How to run [observable-prerender](https://github.com/asg017/observable-prerender) with Github Actions.

You can use both [node.js](.github/ca_maps.js) and [bash scripts](.github/air-quality.sh) as inputs to your [workflow](.github/workflows/) files.

The benefit of this setup is that you can trigger these workflows programmatically or on a schedule. Furthermore, you can add a workflow step to commit the screenshot output back to the repo. The nice thing is that if the  screenshot output has not changed in between workflow runs, no commits will be generated. A side benefit is that you get version-control for free on your outputs.