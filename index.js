const core = require('@actions/core');
const github = require('@actions/github');

try {
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const labels = core.getInput('labels');
  core.setOutput("newlabels", labels);
} catch (error) {
  core.setFailed(error.message);
}