// Blog post data
const blogPosts = [
    {
        title: "Getting Started with React and TypeScript",
        excerpt: "Learn how to set up a new React project with TypeScript...",
        date: "March 15, 2025",
        category: "Development"
    },
    {
        title: "Mastering Tailwind CSS",
        excerpt: "Discover the power of utility-first CSS and create responsive designs...",
        date: "March 14, 2025",
        category: "Design"
    },
    {
        title: "The Future of Web Development",
        excerpt: "Explore upcoming trends and technologies shaping the future...",
        date: "March 13, 2025",
        category: "Technology"
    }
];

// Popular posts
const popularPosts = ["Understanding React Hooks", "CSS Grid vs Flexbox", "JavaScript Best Practices", "Web Performance Tips"];

// Categories
const categories = ["Development", "Design", "Technology", "Tutorial", "Career"];

// blog posts
const blogContainer = document.getElementById("blog-posts");
blogPosts.forEach(post => {
    const article = document.createElement("article");
    article.className = "bg-white rounded-lg shadow-sm p-6";
    article.innerHTML = `
        <div class="text-sm text-gray-500 mb-2">${post.date} • ${post.category}</div>
        <h2 class="text-2xl font-bold text-gray-900 mb-3">${post.title}</h2>
        <p class="text-gray-600 mb-4">${post.excerpt}</p>
        <button class="text-blue-600 hover:text-blue-800 font-medium">Read More →</button>
    `;
    blogContainer.appendChild(article);
});

// categories
const categoryContainer = document.getElementById("categories");
categories.forEach(category => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#" class="text-gray-600 hover:text-blue-600">${category}</a>`;
    categoryContainer.appendChild(li);
});

// popular posts
const popularContainer = document.getElementById("popular-posts");
popularPosts.forEach(post => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#" class="text-gray-600 hover:text-blue-600">${post}</a>`;
    popularContainer.appendChild(li);
});
