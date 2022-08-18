import React from 'react';
import { client } from 'client';
import { Header, Hero, Footer } from '../components';

export default function Page(): JSX.Element {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <main className="content content-page">
        <div className="wrap">
        </div>
      </main>
    </>
  );
}
