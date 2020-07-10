function generateMarkdown(data) {
  return `
# ${data.title}
# ${data.avatar_url}
![Search](${data.avatar_url})
`;
}

module.exports = generateMarkdown;
