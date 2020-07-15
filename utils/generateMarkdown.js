function generateMarkdown(data) {
  return `
![demo](./Assets/goodReadmeworks.gif)
# ${data.title}
${data.license}
# ${data.description}
# Table Of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contribution)
*[Usage](#Usage)
* [Test](#Test)
* [Questions](#Questions)
* [Github Username](#Username)
# Installation
${data.installation}
# Contribution
${data.contribute}
# Usage
${data.usage}
# Test
${data.test}

# Username
${data.username}
#
${data.email}
#
${data.profilePicture}

`;

// ![IMAGE](${data.avatar_url})
}

module.exports = generateMarkdown;
