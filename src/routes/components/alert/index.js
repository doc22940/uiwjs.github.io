import { Alert, Button, ButtonGroup } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'src/alert/README.md';
  dependencies = { Alert, Button, ButtonGroup };
  async renderPage() {
    const md = await import('../../../../packages/core/src/alert/README.md');
    return md.default || md;
  }
}
