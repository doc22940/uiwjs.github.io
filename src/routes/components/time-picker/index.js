import { TimePicker, formatter, Notify, Button, Form, Row, Col } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'src/time-picker/README.md';
  dependencies = { TimePicker, formatter, Notify, Button, Form, Row, Col };
  async renderPage() {
    const md = await import('../../../../packages/core/src/time-picker/README.md');
    return md.default || md;
  }
}
