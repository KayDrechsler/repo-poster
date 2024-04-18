//const names = ['Max', 'Manuel'];
import { Link } from 'react-router-dom';
import styles from './Post.module.scss'

function Post({ id, author, body }) {
    //const chosenName = Math.random() > 0.5 ? names[0] : names[1];

    return (
        <Link to={id} className={styles['post-link']}>
            <div className={styles.post}>

                <p className={styles.author}>{author}</p>
                <p className={styles.text}>{body}</p>
            </div>
        </Link>
    )
};

export default Post;