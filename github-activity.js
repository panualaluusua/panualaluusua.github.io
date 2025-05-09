// github-activity.js
// Fetches and displays the latest public commit for a GitHub user

const githubUsername = "panualaluusua";
const githubActivityContentDiv = document.getElementById("github-activity-content");

async function fetchLatestCommit() {
    if (!githubActivityContentDiv) return;
    try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/events/public`);
        if (!response.ok) throw new Error("Failed to fetch GitHub activity");
        const events = await response.json();
        // Find the first PushEvent (commit)
        const pushEvent = events.find(e => e.type === "PushEvent");
        if (!pushEvent) {
            githubActivityContentDiv.innerHTML = "<span style='font-size:1.2em;'>😅 Looks like Panu is taking a coffee break! No recent commits found.</span>";
            return;
        }
        const repoName = pushEvent.repo.name;
        const commit = pushEvent.payload.commits[pushEvent.payload.commits.length - 1];
        const commitTime = new Date(pushEvent.created_at);
        // Try to get the commit SHA for the link
        const commitSha = commit.sha || (pushEvent.payload.commits.length === 1 ? pushEvent.payload.head : undefined);
        const commitUrl = commitSha ? `https://github.com/${repoName}/commit/${commitSha}` : `https://github.com/${repoName}`;
        githubActivityContentDiv.innerHTML = `
            <span style="display:inline-flex;align-items:center;gap:5px;vertical-align:middle;">
                <span style="display:inline-block;width:10px;height:10px;background:#34d058;border-radius:2px;margin-right:4px;vertical-align:middle;"></span>
                <a href="https://github.com/${repoName}" target="_blank" style="color:#23408e;font-weight:500;font-size:0.98em;text-decoration:none;vertical-align:middle;transition:color 0.2s;">${repoName}</a>
            </span>
            <span style='display:block;font-size:0.98em;color:#555;margin-top:2px;'>
                <a href="${commitUrl}" target="_blank" style="color:#059669;text-decoration:none;font-weight:400;transition:color 0.2s;">${commit.message}</a>
            </span>
            <span style='display:block;font-size:0.92em;color:#888;margin-top:1px;'>${commitTime.toLocaleString()}</span>
        `;
    } catch (error) {
        githubActivityContentDiv.innerHTML = "<span style='font-size:1.2em;'>Couldn't fetch the latest commit.</span>";
    }
}

document.addEventListener("DOMContentLoaded", fetchLatestCommit);
