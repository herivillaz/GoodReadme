function generateMarkdown(data) {
  return `
# ${data.title}
${data.license}
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
${data.email}
${data.profilePicture}

`;

// ![IMAGE](${data.avatar_url})
}

module.exports = generateMarkdown;
