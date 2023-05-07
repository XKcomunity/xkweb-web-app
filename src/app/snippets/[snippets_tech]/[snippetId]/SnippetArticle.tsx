"use client";
import styles from "./snippet_chosen.module.scss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type LibraryCode = {
    title: string;
    code: string;
  };

  type Props = {
    description: string;
    code: LibraryCode;
  };

  export default function SnippetArticle({ description }: Props) {
    const [text, code] = description.split('```');

    return (
      <section className={styles.snippet_article_content}>
        <p className={styles.article_text}>{text}</p>
        <div>
          <SyntaxHighlighter language="typescript" style={atomDark}>
            {code}
          </SyntaxHighlighter>
        </div>
      </section>
    );
  }

