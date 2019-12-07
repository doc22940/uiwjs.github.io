import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'src/routes/guide/import/README.md';
  async renderPage() {
    const md = await import('./README.md');
    return md.default || md;
  }
}
