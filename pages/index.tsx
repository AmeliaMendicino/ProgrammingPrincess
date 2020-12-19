import { useState, useEffect, FunctionComponent } from "react";
import dynamic from "next/dynamic";

import { JavaScriptEditorProps } from "../components/JavaScriptEditor";
import { useDebounce } from "../utils/useDebounce";

import styles from "../styles/index.module.css";

const DynamicJavaScriptEditor = dynamic<JavaScriptEditorProps>(
  () =>
    import("../components/JavaScriptEditor").then(
      (mod) => mod.JavaScriptEditor
    ),
  { ssr: false }
);

const Index: FunctionComponent = () => {
  const [jsValue, setJsValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const debouncedJs = useDebounce(jsValue, 1000);

  useEffect(() => {
    const output = `<html>
                      <style>
                        /* css */
                      </style>
                      <body>
                        Hello, World!
                        <script type="text/javascript">
                          ${debouncedJs}
                        </script>
                      </body>
                  </html>`;
    setOutputValue(output);
  }, [debouncedJs]);

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
