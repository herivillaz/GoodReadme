function generateMarkdown(data) {
  return `
# ${data.title}
# ${data.avatar_url}
![IMAGE](${data.avatar_url})
`;
}

module.exports = generateMarkdown;
