import React from 'react';
import Link from 'next/link';
import type { Post } from 'client';
import styles from 'scss/components/Posts.module.scss';
import Heading, { HeadingProps } from './Heading';

interface Props {
  posts: Post[] | undefined;
  intro?: string;
  id?: string;
  heading?: string;
  headingLevel?: HeadingProps['level'];
  postTitleLevel?: HeadingProps['level'];
  readMoreText?: string;
}

function Posts({
  posts,
  intro,
  heading,
  id,
  headingLevel = 'h1',
  postTitleLevel = 'h2',
  readMoreText = 'Lire la suite',
}: Props): JSX.Element {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <section data-scroll-section className={styles['posts-block']} {...(id && { id })}>
      <div className="wrap">
        {heading && (
          <Heading level={headingLevel} className={styles.heading}>
            {heading}
          </Heading>
        )}
        {intro && <p className={styles.intro}>{intro}</p>}
        <div className="posts">
          {posts.map((post) => (
            <div
              className={styles.single}
              key={post.id ?? ''}
              id={`blog-${post.id}`}>
              <div>
                <img src={post?.featuredImage?.node?.sourceUrl()} alt="" />
                <Heading level={postTitleLevel} className={styles.title}>
                  <Link href={`/blog/${post.slug}`}>
                    <a>{post.title()}</a>
                  </Link>
                </Heading>
                <div
                  className={styles.excerpt}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: post.excerpt() ?? '' }}
                />
                <Link href={`/blog/${post.slug}`}>
                  <a aria-label={`Lire la suite ${post.title || 'the post'}`}>
                    {readMoreText}
                  </a>
                </Link>
              </div>
            </div>
          ))}
          {posts && posts?.length < 1 && <p>Aucun article trouvé.</p>}
        </div>
      </div>
    </section>
  );
}

export default Posts;
