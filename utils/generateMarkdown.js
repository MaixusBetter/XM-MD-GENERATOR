/**
 * Function to return a license badge based on the provided license.
 * If no license is provided, it returns an empty string.
 * 
 * @param {string} license - The license type (e.g., 'MIT', 'GPLv3', 'Apache 2.0')
 * @returns {string} - Markdown string for the license badge or an empty string if no license
 */
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  
  // Object containing license badges for supported licenses
  const badges = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'GPLv3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  };
  
  // Return the corresponding badge or an empty string if the license is not found
  return badges[license] || '';
}

/**
 * Function to return a license link based on the provided license.
 * If no license is provided, it returns an empty string.
 * 
 * @param {string} license - The license type (e.g., 'MIT', 'GPLv3', 'Apache 2.0')
 * @returns {string} - URL string for the license or an empty string if no license
 */
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  
  // Object containing links for supported licenses
  const links = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0'
  };
  
  // Return the corresponding link or an empty string if the license is not found
  return links[license] || '';
}

/**
 * Function to return the license section of README based on the provided license.
 * If no license is provided, it returns an empty string.
 * 
 * @param {string} license - The license type (e.g., 'MIT', 'GPLv3', 'Apache 2.0')
 * @returns {string} - Markdown string for the license section or an empty string if no license
 */
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  
  // Return the license section with a link to the license details
  return `## License

This project is licensed under the ${license} License. For more information, please visit [this link](${renderLicenseLink(license)}).`;
}

/**
 * Function to generate markdown for README based on the provided data.
 * 
 * @param {Object} data - The data object containing user inputs for README sections
 * @returns {string} - Markdown string for the README file
 */
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

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions about the repository, open an issue or contact [${data.github}](https://github.com/${data.github}) directly at ${data.email}.
`;
}

export default generateMarkdown;
