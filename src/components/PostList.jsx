/**
 * # Post List
 */

/**
 * ## Imports
 */
import { useLoaderData } from 'react-router-dom';
import Post from "./Post";
import styles from './PostList.module.scss'

/**
 * ## Component
 */
function PostList() {
    /**
     * 🧠 Reminder: the `useLoaderData()` hook gives us access to the data that
     * is returned by the `loader()` function that is assigned to the
     * `/create-post` route, which is the route that is active when the `PostList`
     * component is rendered.
     */
    const posts = useLoaderData();

    return (
        <>
            {(posts.length > 0) && (
                <ul className={styles['post-list']}>
                    {posts.map((post) => (
                        <Post key={post.id} id={post.id} author={post.author} body={post.body} />
                    ))}
                </ul>
            )}
            {(posts.length === 0) && (
                <strong className={styles['status']}>⚠️ No posts yet!</strong>
            )}
        </>
    )
}

export default PostList;