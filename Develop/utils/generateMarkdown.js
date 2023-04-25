// // TODO: Create a function that returns the license badge image URL
// // If there is no license, return an empty string
// function getLicenseBadge(license) {
//   if (!license) {
//     return '';
//   }

//   // const licenses = {
//   //   'MIT': 'mit',
//   //   'GPL': 'gpl-3.0',
//   //   'CC--0': 'cc0-1.0'
//   // };

//   const licenseKey = license.toUpperCase();

//   if (licenseKey in licenses) {
//     return `https://img.shields.io/badge/license-${licenses[licenseKey]}-green`;
//   }

//   return '';
// }

// function renderLicenseBadge(license) {
//   const licenseBadgeUrl = getLicenseBadge(license);
//   if (licenseBadgeUrl) {
//     return `![${license} License](${licenseBadgeUrl})`;
//   } else {
//     return '';
//   }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license === 'MIT') {
//     return `https://lbesson.mit-license.org/`;
//   }
//   if (license === 'GPL') {
//     return `http://perso.crans.org/besson/LICENSE.html`;
//   }
//   if (license === 'CC--0') {
//     return `https://creativecommons.org/licenses/by-nd/4.0`;
//   }

//   return '';
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (!license) {
//     return '';
//   }

//   const licenseLink = renderLicenseLink(license);
//   const licenseBadge = renderLicenseBadge(license);

//   return `## License

// This project is licensed under the [${license}](${licenseLink}) license. See the [LICENSE.md](LICENSE.md) file for details.

// ${licenseBadge}
// `;
// }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   data.getLicense = renderLicenseBadge(data.license);
//   return `# ${data.title}
//   ${data.getLicense}

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

// ${renderLicenseSection(data.license)}

// ## Contributing

// ${data.contributing}

// ## Tests

// ${data.tests}

// ## Questions

// If you have any questions about the repo, open an issue or contact [${data.userName}](https://github.com/${data.userName}) directly.`;
// }

// module.exports = generateMarkdown;
// module.exports = { renderLicenseBadge };

// TODO: Create a function that returns the license badge
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ' ';
  } else {
    const licenseBadgeUrl = getLicenseBadge(license);
    return `![${license} License](${licenseBadgeUrl})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'GPL') {
    return `http://perso.crans.org/besson/LICENSE.html`
  }
  if (license === 'CC--0') {
    return `https://creativecommons.org/licenses/by-nd/4.0` 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License

This project is licensed under the ${renderLicenseLink(license)} license. See the [LICENSE.md](LICENSE.md) file for details.

${renderLicenseBadge(license)}
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  data.getLicense = renderLicenseBadge(data.license);
  return `# ${data.title}
  ${data.getLicense}

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

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about the repo, open an issue or contact [${data.userName}](https://github.com/${data.userName}) directly.`;
}

module.exports = generateMarkdown;
module.exports = { renderLicenseBadge };


