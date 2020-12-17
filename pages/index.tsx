import { useState, useEffect, FunctionComponent } from "react";
import { JavascriptEditorProps } from "../components/Editors";
import dynamic from "next/dynamic";

import styles from "./index.module.css";

const DynamicJavascriptEditor = dynamic<JavascriptEditorProps>(
  () => import("../components/Editors").then((mod) => mod.JavascriptEditor),
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
        <DynamicJavascriptEditor value={jsValue} onChange={setJsValue} />
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
