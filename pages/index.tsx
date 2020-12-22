import { useState, useEffect, FunctionComponent } from "react";
import dynamic from "next/dynamic";

import { JavaScriptEditorProps } from "../components/JavaScriptEditor";
import { useDebounce } from "../utils/useDebounce";
import { getVariables, Variable } from "../utils/getVariables";

import { VariableGem } from "../components/VariableGem";

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
  const [variables, setVariables] = useState<Variable[]>([]);
  const [iframeRef, setiframeRef] = useState(null);
  const [error, setError] = useState("");

  const debouncedJs = useDebounce(jsValue, 1000);

  useEffect(() => {
    let vars = [];
    let varValues = "";
    try {
      vars = getVariables(debouncedJs);
      varValues = vars
        .map(
          (v) => `${JSON.stringify(v)}`.slice(0, -1) + `, "value": ${v.name}, "type": typeof ${v.name}}`
        )
        .join(", ");

      setError("");
    } catch (error) {
      setError("Parsing error: " + error.toString());
    }

    const output = `<html>
                      <style>
                        /* css */
                      </style>
                      <body>
                        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
                        <script type="text/babel">
                          window.onerror = function(error, url, line) {
                              window.parent.postMessage({ error: error });
                          };

                          ${debouncedJs}
                          window.parent.postMessage({ ready: true, vars: [${varValues}] }, "*");
                        </script>
                      </body>
                  </html>`;
    setOutputValue(output);
  }, [debouncedJs]);

  useEffect(() => {
    window.addEventListener("message", ({ data: { ready, vars, error } }) => {
      if (ready) {
        setVariables(vars);
      } else if(error) {
        setError(error);
      }
    });
  }, [iframeRef]);

  return (
    <>
      <iframe
        ref={setiframeRef}
        sandbox="allow-scripts allow-same-origin"
        srcDoc={outputValue}
        className={styles.iframe}
      />
      <div className={styles.main}>
        <DynamicJavaScriptEditor value={jsValue} onChange={setJsValue} />
        <div className={styles.displayWindow}>
          {error || variables.map(({ name, value, kind, type }) => (
            <VariableGem key={name} name={name} value={value} kind={kind} type={type} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
