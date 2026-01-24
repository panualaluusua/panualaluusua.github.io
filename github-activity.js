// github-activity.js
// Fetches and displays the latest public commit for a GitHub user

const githubUsername = "panualaluusua";
const githubActivityContentDiv = document.getElementById("github-activity-content");

async function fetchLatestCommit() {
    if (!githubActivityContentDiv) return;
    githubActivityContentDiv.innerHTML = `<span class="github-activity-loading">Loading latest commit...</span>`;
    try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/events/public`);
        if (!response.ok) throw new Error("Failed to fetch GitHub activity");
        const events = await response.json();

        const pushEvent = events.find(e => e.type === "PushEvent");

        if (!pushEvent) {
            githubActivityContentDiv.innerHTML = "<span class='github-activity-message'>😅 Looks like Panu is taking a coffee break! No recent public commits found.</span>";
            return;
        }

        const repoName = pushEvent.repo.name;
        const payload = pushEvent.payload;
        let commitMessage = "New update";
        let commitUrl = `https://github.com/${repoName}`;
        let commitSha = payload.head;

        if (payload.commits && payload.commits.length > 0) {
            const commit = payload.commits[payload.commits.length - 1];
            commitMessage = commit.message;
            commitSha = commit.sha || payload.head;
            commitUrl = `https://github.com/${repoName}/commit/${commitSha}`;
        }

        const commitTime = new Date(pushEvent.created_at);

        const maxMessageLength = 60;
        let displayMessage = commitMessage.split('\n')[0];
        if (displayMessage.length > maxMessageLength) {
            displayMessage = displayMessage.substring(0, maxMessageLength) + "...";
        }

        githubActivityContentDiv.innerHTML = `
            <div class="github-activity-item">
                <span class="github-activity-repo-line">
                    <span class="github-activity-indicator"></span>
                    <a href="https://github.com/${repoName}" target="_blank" class="github-repo-link">${repoName}</a>
                </span>
                <span class="github-activity-message-line">
                    <a href="${commitUrl}" target="_blank" class="github-commit-link">${displayMessage}</a>
                </span>
                <span class="github-commit-time">${commitTime.toLocaleString()}</span>
            </div>
        `;
    } catch (error) {
        console.error("GitHub Activity Error:", error);
        githubActivityContentDiv.innerHTML = "<span class='github-activity-error'>Couldn't fetch the latest commit. Please check back later.</span>";
    }
}

document.addEventListener("DOMContentLoaded", fetchLatestCommit);
