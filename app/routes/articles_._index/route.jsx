import { baseMeta } from '~/utils/meta';

function Articles() {
  return (
    <section style={{ padding: '100px 20px', textAlign: 'center' }}>
      <h1>Articles</h1>
      <p>Content is loading or remains static in SPA mode.</p>
    </section>
  );
}

export function meta() {
  return baseMeta({
    title: 'Articles',
    description: 'A collection of technical design and development articles.',
  });
}

export default Articles;