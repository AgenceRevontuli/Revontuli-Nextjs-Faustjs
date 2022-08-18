import { getNextStaticProps } from '@faustjs/next';
import { client } from 'client';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <Head>
        <title>Custom Page - {generalSettings.title}</title>
      </Head>

      <main className="content content-single">
        <div className="wrap">

        </div>
      </main>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
