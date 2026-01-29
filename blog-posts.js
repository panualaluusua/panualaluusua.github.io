// blog-posts.js
// Fetches and displays the latest blog posts from Dev.to

const devtoUsername = "panualaluusua";
const blogContainer = document.getElementById("blog-grid");

async function fetchBlogPosts() {
    if (!blogContainer) return;

    // Show loading state
    blogContainer.innerHTML = '<div class="loading-spinner">Loading articles...</div>';

    try {
        const response = await fetch(`https://dev.to/api/articles?username=${devtoUsername}`);
        if (!response.ok) throw new Error("Failed to fetch blog posts");

        const articles = await response.json();

        // Take latest 3 articles
        const latestArticles = articles.slice(0, 3);

        if (latestArticles.length === 0) {
            blogContainer.innerHTML = '<p class="no-articles">No articles found yet. Stay tuned!</p>';
            return;
        }

        blogContainer.innerHTML = latestArticles.map(article => createArticleCard(article)).join('');

    } catch (error) {
        console.error("Error fetching blog posts:", error);
        blogContainer.innerHTML = '<p class="error-message">Could not load articles. Please visit my <a href="https://dev.to/panualaluusua" target="_blank">Dev.to profile</a>.</p>';
    }
}

function createArticleCard(article) {
    // Format date
    const date = new Date(article.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    // Use cover image if available, otherwise a placeholder color or pattern could be used, 
    // but Dev.to usually provides a social_image or cover_image.
    // referencing styles we will create.
    const imageHtml = article.cover_image
        ? `<div class="blog-card-image" style="background-image: url('${article.cover_image}')"></div>`
        : `<div class="blog-card-image placeholder"></div>`;

    return `
        <article class="blog-card">
            <a href="${article.url}" target="_blank" class="blog-card-link">
                ${imageHtml}
                <div class="blog-card-content">
                    <div class="blog-meta">
                        <span class="blog-date"><i class="far fa-calendar-alt"></i> ${date}</span>
                        <span class="blog-reading-time"><i class="far fa-clock"></i> ${article.reading_time_minutes} min read</span>
                    </div>
                    <h3 class="blog-title">${article.title}</h3>
                    <p class="blog-description">${article.description}</p>
                    <div class="blog-tags">
                        ${article.tag_list.map(tag => `<span class="blog-tag">#${tag}</span>`).join('')}
                    </div>
                    <div class="blog-footer">
                        <span class="read-more">Read Article <i class="fas fa-arrow-right"></i></span>
                        <span class="blog-reactions"><i class="far fa-heart"></i> ${article.public_reactions_count}</span>
                    </div>
                </div>
            </a>
        </article>
    `;
}

document.addEventListener("DOMContentLoaded", fetchBlogPosts);
