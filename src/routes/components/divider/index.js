import { Divider } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'src/divider/README.md';
  dependencies = { Divider };
  async renderPage() {
    const md = await import('../../../../packages/core/src/divider/README.md');
    return md.default || md;
  }
}
