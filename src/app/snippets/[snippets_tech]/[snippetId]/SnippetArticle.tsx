"use client"
import styles from "./snippet_chosen.module.scss";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';



export default function SnippetArticle() {
    const code = "const x = 'Hello, world!'; console.log(x);";

	return (
		<>
            <section className={styles.snippet_article_content}>
            <br />
                <p className={styles.article_text}>
                    CSS trigonometry functions are here! Well, they are if you’re using the latest versions of Firefox and Safari, that is. Having this sort of mathematical power in CSS opens up a whole bunch of possibilities. In this tutorial, I thought we’d dip our toes in the water to get a feel for a couple of the newer functions: sin() and cos().
                </p>
                <br />
                <p className={styles.article_text}>
                    CSS trigonometry functions are here! Well, they are if you’re using the latest versions of Firefox and Safari, that is. Having this sort of mathematical power in CSS opens up a whole bunch of possibilities. In this tutorial, I thought we’d dip our toes in the water to get a feel for a couple of the newer functions: sin() and cos().
                </p>
                <SyntaxHighlighter language="javascript" style={atomDark}>
                    {code}
                </SyntaxHighlighter>
            </section>
         </>
    );
}
