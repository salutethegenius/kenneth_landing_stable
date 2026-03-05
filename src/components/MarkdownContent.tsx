import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

/** Content that is mostly raw HTML (e.g. book pages with <style> + <div>) */
function isHtmlContent(content: string): boolean {
  const trimmed = content.trimStart();
  return trimmed.startsWith("<");
}

/** Remove embedded <style> blocks so we rely on our theme only */
function stripEmbeddedStyles(html: string): string {
  return html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
}

export function MarkdownContent({ content }: { content: string }) {
  if (isHtmlContent(content)) {
    const themedHtml = stripEmbeddedStyles(content);
    return (
      <div
        className="content-html content-theme"
        dangerouslySetInnerHTML={{ __html: themedHtml }}
      />
    );
  }
  return (
    <div className="content-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          a: ({ href, children }) => (
            <a
              href={href}
              className="content-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
