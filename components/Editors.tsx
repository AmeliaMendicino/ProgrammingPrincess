import { ChangeEvent, FunctionComponent } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

import styles from "./Editors.module.css";

export type JavascriptEditorProps = {
  onChange: (value: string, event: ChangeEvent) => void;
  value: string;
};

export const JavascriptEditor: FunctionComponent<JavascriptEditorProps> = ({
  onChange,
  value,
}: JavascriptEditorProps) => {
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
