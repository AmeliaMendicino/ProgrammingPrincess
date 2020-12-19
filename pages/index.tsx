import { useState, useEffect, FunctionComponent } from "react";
import { JavaScriptEditorProps } from "../components/Editors";
import dynamic from "next/dynamic";

import styles from "../styles/index.module.css";

const DynamicJavaScriptEditor = dynamic<JavaScriptEditorProps>(
  () => import("../components/JavaScriptEditor").then((mod) => mod.JavaScriptEditor),
  { ssr: false }
);

const Index: FunctionComponent = () => {
  const [jsValue, setJsValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  useEffect(() => {
    const output = `<html>
                      <style>
                        /* css */
                      </style>
                      <body>
                        Hello, World!
                        <script type="text/javascript">
                          ${jsValue}
                        </script>
                      </body>
                  </html>`;
    setOutputValue(output);
  }, [jsValue]);

  return (
    <>
      <div className={styles.main}>
        <DynamicJavaScriptEditor value={jsValue} onChange={setJsValue} />
        <iframe
          sandbox="allow-scripts"
          srcDoc={outputValue}
          className={styles.previewIframe}
        />
      </div>
    </>
  );
};

export default Index;
