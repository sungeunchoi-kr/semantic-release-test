module.exports = {
    "branches": ["master"],
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [ "@semantic-release/npm",
            {
                "npmPublish": false,
                //"tarballDir": "."
            }
        ],
        "@semantic-release/github"
    ]
}
