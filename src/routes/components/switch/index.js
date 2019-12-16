import { Switch, Divider, Button } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'src/switch/README.md';
  dependencies = { Switch, Divider, Button };
  async renderPage() {
    const md = await import('../../../../packages/core/src/switch/README.md');
    return md.default || md;
  }
}
