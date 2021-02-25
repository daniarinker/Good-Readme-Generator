// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  
  ## Table of Contents:
  *[Description] (#Description)
  *[Installation] (#Installation)
  *[Usage] (#Usage)
  *[License] (#License)
  *[Contribution] (#Contribution)
  *[Author] (#Author)
  
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
