// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![licenseBadge](https://img.shields.io/badge/license-${license}-red)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT link](https://opensource.org/licenses/MIT)`;
  } else if (license === "GNU") {
    return `[GNU link](https://www.gnu.org/licenses/gpl-3.0.html)`;
  } else if (license === "Apache") {
    return `[Apache link](https://www.apache.org/licenses/LICENSE-2.0.txt)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseLink = renderLicenseLink(license);

  return `## license
  ${licenseLink}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var licenseBadge = renderLicenseBadge(data.license);
  return `${licenseBadge}
  # ${data.title}
  ## Table of contents
  * [description](#description)
  * [installationInstructions](#installationInstructions)
  * [usage](#usage)
  * [contributing](#contributing)
  * [tests](#tests)
  * [license](#license)
  * [github](#github)
  * [email](#email)

  ## description
  ${data.description}
  ## installationInstructions
  ${data.installationInstructions}
  ## usage
  ${data.usage}
  ## contributing
  ${data.contributing}
  ## tests
  ${data.tests}

  ${renderLicenseSection(data.license)}
 
  ## Github
  [Github Link](https://github.com/${data.github})

  

  

`;
}

module.exports = generateMarkdown;
