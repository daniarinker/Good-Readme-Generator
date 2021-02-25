// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  
  ## Table of Contents:
  *[Description] (#description)
  *[Installation] (#installation)
  *[Usage] (#usage)
  *[License] (#license)
  *[Contribution] (#contribution)
  *[Author] (#author)
  
  ## Description:
  ${response.description}
  
  ## Installation:
  ${response.installation}
  
  ## Usage:
  ${response.usage}
  
  ## License:
  ${response.license}

  ## Contribution:
  ${response.contribution}
  
  ## Author:
  ${response.author}
  
`;
}

module.exports = generateMarkdown;
