

// function renderLicenseBadge(license) {
//   if (license === "MIT") {
//     return "https://img.shields.io/badge/license-MIT-green";
//   } else if (license === "GNU GPLv3") {
//     return "https://img.shields.io/badge/license-GPLv3-blue";
//   } else if (license === "GNU AGPLv3") {
//     return "https://img.shields.io/badge/license-AGPLv3-blue";
//   } else if (license === "GNU LGPLv3") {
//     return "https://img.shields.io/badge/license-LGPLv3-blue";
//   } else if (license === "Apache 2.0") {
//     return "https://img.shields.io/badge/license-Apache%202.0-blue";
//   } else if (license === "Boost Software 1.0") {
//     return "https://img.shields.io/badge/license-Boost%201.0-blue";
//   } else if (license === "Mozilla") {
//     return "https://img.shields.io/badge/license-MPL%202.0-blue";
//   } else {
//     return "";
//   }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license === "MIT") {
//     return "https://opensource.org/licenses/MIT";
//   } else if (license === "GNU GPLv3") {
//     return "https://www.gnu.org/licenses/gpl-3.0";
//   } else if (license === "GNU AGPLv3") {
//     return "https://www.gnu.org/licenses/agpl-3.0";
//   } else if (license === "GNU LGPLv3") {
//     return "https://www.gnu.org/licenses/lgpl-3.0";
//   } else if (license === "Apache 2.0") {
//     return "https://www.apache.org/licenses/LICENSE-2.0";
//   } else if (license === "Boost Software 1.0") {
//     return "https://www.boost.org/LICENSE_1_0.txt";
//   } else if (license === "Mozilla") {
//     return "https://www.mozilla.org/en-US/MPL/2.0/";
//   } else {
//     return "";
//   }
// }


// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (!license) {
//     return "";
//   }

//   const licenseLink = renderLicenseLink(license);
//   const licenseBadge = renderLicenseBadge(license);

//   return `

// This project is licensed under the ${renderLicenseLink(license)} license. See the [LICENSE.md](LICENSE.md) file for details.

// ${renderLicenseBadge(license)}
// `;
// }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// ${renderLicenseBadge(data.license)}

// ## Description

// ${data.description}

// ## Table of Contents

// - [Installation](#installation)
// - [Usage](#usage)
// - [License](#license)
// - [Contributing](#contributing)
// - [Tests](#tests)
// - [Questions](#questions)

// ## Installation

// ${data.installation}

// ## Usage

// ${data.usage}

// ${renderLicenseSection(data.module.exports = generateMarkdown)}

// TODO: Create a function that returns the license badge URL
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "https://img.shields.io/badge/license-MIT-green";
  } else if (license === "GNU GPLv3") {
    return "https://img.shields.io/badge/license-GPLv3-blue";
  } else if (license === "GNU AGPLv3") {
    return "https://img.shields.io/badge/license-AGPLv3-blue";
  } else if (license === "GNU LGPLv3") {
    return "https://img.shields.io/badge/license-LGPLv3-blue";
  } else if (license === "Apache 2.0") {
    return "https://img.shields.io/badge/license-Apache%202.0-blue";
  } else if (license === "Boost Software 1.0") {
    return "https://img.shields.io/badge/license-Boost%201.0-blue";
  } else if (license === "Mozilla") {
    return "https://img.shields.io/badge/license-MPL%202.0-blue";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "GNU GPLv3") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "GNU AGPLv3") {
    return "https://www.gnu.org/licenses/agpl-3.0";
  } else if (license === "GNU LGPLv3") {
    return "https://www.gnu.org/licenses/lgpl-3.0";
  } else if (license === "Apache 2.0") {
    return "https://www.apache.org/licenses/LICENSE-2.0";
  } else if (license === "Boost Software 1.0") {
    return "https://www.boost.org/LICENSE_1_0.txt";
  } else if (license === "Mozilla") {
    return "https://www.mozilla.org/en-US/MPL/2.0/";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  const licenseLink = renderLicenseLink(license);
  const licenseBadge = renderLicenseBadge(license);

  return `
## License

This project is licensed under the [${license}](${licenseLink}) license.

${licenseBadge}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.


