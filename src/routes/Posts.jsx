/**
 * # Posts
 */

/**
 * ## Imports
 */
import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";

/**
 * ## Component
 * @returns {JSX.Element}
 */
function Posts() {
    /* 🧠 Reminder: the data being loaded in `loader()` is exposed to this route
     * and any nested components that use it. This is done by `react-router-dom`!
     */
    return (
        <>
            <Outlet />
            <main>
                <PostList isPosting={false} onStopPosting={false} />
            </main>
        </>
    );
};

export default Posts;

export async function loader() {
    const response = await fetch('http://localhost:8080/posts');
    const resData = await response.json();
    return resData.posts;
};
