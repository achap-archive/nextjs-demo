import Head from 'next/head';
import Image from 'next/image';
import Bio from '../components/Bio';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import styles from '../styles/Home.module.scss';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <Bio
                    headshot='https://pbs.twimg.com/profile_images/1425580604104585216/ntDPRTIV_400x400.jpg'
                    name='Ashlyn Chapman'
                    tagline='Construct Curiosity'
                    role='Computer Science Undergrad @ NCSU'
                />

                <ul className={styles.posts}>
                    <li>
                        <Post
                            content='Hey, I am a new host!'
                            date='08/11/2021'
                        />
                    </li>
                    <li>
                        <Post
                            content='Today I learned that you can multiselect by hitting Shift + Control + L'
                            date='03/21/2021'
                        />
                    </li>
                    <li>
                        <Post content='dummy' date='03/21/2021' />
                    </li>
                </ul>

                <PostForm />
            </main>
        </div>
    );
}
