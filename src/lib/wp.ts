const domain = import.meta.env.WORDPRESS_API_URL;
const apiUrl = `${domain}/wp-json/wp/v2`;

export const getPostsInfo = async ({ perPage = 10 }: { perPage?: number }) => {
  const response = await fetch(`${apiUrl}/posts?per_page=${perPage}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  } else {
    const result = await response.json();
    //   console.log(posts);
    if (!result.length) {
        throw new Error('No posts found');
    }

    const posts = result.map(post => {
        const {
            title: { rendered: title }, 
            content: { rendered: content }, 
            excerpt: { rendered: excerpt }, 
            link, 
            id } = post;
        return { id, title, content, excerpt, link };
    })
    
    return posts;
  }
};
