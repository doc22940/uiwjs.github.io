import { Menu, Row, Col, Switch, Popover, Button } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'src/menu/README.md';
  dependencies = { Menu, Row, Col, Switch, Popover, Button };
  async renderPage() {
    const md = await import('../../../../packages/core/src/menu/README.md');
    return md.default || md;
  }
}
