//create a blog post object with these properties. title, body, author, views, which represents the number of times this post has been viewed. Comments, now each comment should have a couple properties. Author and body. And finally, another property, that each post should have is isLive. Now that can be either true or false. So once again you should use the object literal syntax to create and initialize a blog post.

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        { author: 'a', body: 'b' },
        { author: 'c', body: 'd' },
    ],
    isLive: true
};

console.log(post);