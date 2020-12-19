import { ChangeEvent, FunctionComponent } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

import styles from "../styles/JavaScriptEditor.module.css";

export type JavaScriptEditorProps = {
  onChange: (value: string, event: ChangeEvent) => void;
  value: string;
};

export const JavaScriptEditor: FunctionComponent<JavaScriptEditorProps> = ({
  onChange,
  value,
}: JavaScriptEditorProps) => {
  return (
    <div className={styles.editorContainer}>
      <AceEditor
        mode="javascript"
        theme="monokai"
        name="JS"
        onChange={onChange}
        value={value}
        fontSize={18}
        width={"100%"}
        height={"100%"}
        showPrintMargin={true}
        showGutter={true}
        tabSize={2}
        setOptions={{ useWorker: false }}
      />
    </div>
  );
};
