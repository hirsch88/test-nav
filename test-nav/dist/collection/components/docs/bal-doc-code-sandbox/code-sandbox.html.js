import { getParameters } from 'codesandbox/lib/api/define';
import { loadSourceFiles, parseMarkdown } from './code-sandbox.util';
export const buildHtmlParameters = async (project) => {
  const [index_html, index_ts, example_ts] = await loadSourceFiles([
    'html/index.html',
    'html/index.ts',
    'html/example.ts',
  ]);
  const parseTemplate = (content) => `<html>
  <body>
    <bal-app>
      <main ${!project.fullscreen ? 'class="container py-large"' : ''}>

${content}

      </main>
    </bal-app>
  </body>
</html>`;
  let example_component = example_ts;
  let example_template = index_html;
  if (project.component) {
    example_component = parseMarkdown(project.component);
  }
  if (project.template) {
    example_template = parseTemplate(parseMarkdown(project.template));
  }
  example_component = `${index_ts}

${example_component}`;
  return getParameters({
    files: {
      'package.json': {
        isBinary: false,
        content: {
          dependencies: {
            '@baloise/design-system-components': 'latest',
          },
        },
      },
      'index.js': {
        isBinary: false,
        content: example_component.trim(),
      },
      'index.html': {
        isBinary: false,
        content: example_template.trim(),
      },
    },
  });
};
