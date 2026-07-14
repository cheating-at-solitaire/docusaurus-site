import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Help Site"
      description="Everything you need to know">
      <main
        style={{
          padding: '6rem 2rem',
          textAlign: 'center',
        }}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
          Welcome to the Help Site
        </h1>
        <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
          Find guides, tutorials, and answers to common questions.
        </p>
        <Link
          className="button button--primary button--lg"
          to="/intro">
          Browse the Docs
        </Link>
      </main>
    </Layout>
  );
}
