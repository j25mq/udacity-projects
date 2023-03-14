/* global variables */
const wrapper = document.getElementById('wrapper');


/* create blog boxes */
const createBlogBoxes = () => {
    let boxCount = 6;
    for (let i = 0 ; i < boxCount ; ++i) {
        const blogBox = document.createElement('div');
        blogBox.setAttribute('class', 'blogBox');

        const h1 = document.createElement('h1');
        h1.setAttribute('class', 'blogTitle');
        h1.innerHTML = `Blog Title`;

        const h4 = document.createElement('h4');
        h4.setAttribute('class', 'dateCatContainer');
        h4.innerHTML = `Date, Category`;

        const blogContentP = document.createElement('p');
        blogContentP.innerHTML = `<em>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor urna eu urna scelerisque luctus. Donec ultrices feugiat eros sit amet viverra. Mauris sed odio quis est consectetur aliquam. Praesent ornare mollis laoreet.</em>`;

        const imgBlog = document.createElement('img');
        imgBlog.setAttribute('class', 'imageBlog');
        imgBlog.src = "img/img1.jpg";

        const linkBlogPost = document.createElement('a');
        linkBlogPost.href = "blogpost.html";
        linkBlogPost.target = "_self";
        linkBlogPost.innerHTML = `<svg class="dotsIcon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
        </svg>`;


        blogBox.appendChild(h1);
        blogBox.appendChild(h4);
        blogBox.appendChild(blogContentP);
        blogBox.appendChild(imgBlog);
        blogBox.appendChild(linkBlogPost);
        
        wrapper.appendChild(blogBox);
    };
};

createBlogBoxes();