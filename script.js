const fs = require("fs");

let markdownList = "";

for (let i = 77; i >= 1; i--) {
	markdownList += `- ${i}: hello-github/HelloGitHub${i}.md\n`;
}

fs.writeFile("list.md", markdownList, (err) => {
	if (err) throw err;
	console.log("The file has been saved!");
});
