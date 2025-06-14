import { Suspense } from 'react';
import NewsClient from './NewsClient';

export default function NewsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4"></h1>

      <Suspense fallback={<p>Loading news...</p>}>
        <NewsClient />
      </Suspense>
    </main>
  );
}
