/**
 * # New Post
 */

/**
 * ## Imports
 */
import { Link, Form, redirect } from 'react-router-dom';
import Modal from '../components/Modal';
import styles from './NewPost.module.scss';

/**
 * ## Component
 */
function NewPost({
    onAddPost,
}) {

    return (
        <Modal>
            <Form method="post" className={styles['form']}>
                <p>
                    <label htmlFor="body">Text</label>
                    {/* 🧠 Reminder: The `name` attribute serves the exported `action` function
                      * to extract the data from the `react-router-dom`'s `Form` component. */}
                    <textarea
                        id="body"
                        name="body"
                        rows="5"
                        required
                    />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input
                        id="name"
                        name="author"
                        required
                    />
                </p>
                <p className={styles['actions']}>
                    <Link to=".." type="button">Cancel</Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    )
};

/**
 * ## Export
 */
export default NewPost;

export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);

    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return redirect('/');
};
