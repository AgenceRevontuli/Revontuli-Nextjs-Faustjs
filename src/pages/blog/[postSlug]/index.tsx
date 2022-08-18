import { getNextStaticProps, is404 } from "@faustjs/next";
import { client, Post } from "client";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import styles from "./Posts.module.scss";
import { DateTime } from "luxon";
import Prism from "prismjs";
import { useEffect } from "react";

export interface PostProps {
  post: Post | Post["preview"]["node"] | null | undefined;
}

export function PostComponent({ post }: PostProps) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  console.log(post?.date);
  const articleDate = post?.date;
  const isoString = articleDate;
  useEffect(() => {
    Prism.highlightAll();
  }, [])

  return (
    <>
      <Head>
        <title>
          {post?.title()} - {generalSettings.title}
        </title>
      </Head>

      <main className="content content-single">
        <section className={styles.article__content} data-scroll-section>
          <div className={styles.content__header}>
            <h1>{post?.title()}</h1>
            <p>
              <span>
                {DateTime.fromISO(isoString).toLocaleString(DateTime.DATE_MED)}
              </span>
            </p>
            <img src={post?.featuredImage?.node?.sourceUrl()} alt="" />
          </div>
          <div className={styles.content__text}>
            <div dangerouslySetInnerHTML={{ __html: post?.content() ?? "" }} />
          </div>
        </section>
      </main>
    </>
  );
}

export default function Page() {
  const { usePost } = client;
  const post = usePost();

  return <PostComponent post={post} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404(context, { client }),
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
