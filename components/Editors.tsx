import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

import styles from "./Editors.module.css";

export const JavascriptEditor = () => {
  return <Editor mode="javascript" title={"JS"} />;
};

type EditorProps = {
  mode: string;
  title: string;
};

const Editor = ({ mode, title }: EditorProps) => {
  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorTitle}>{title}</div>
      <AceEditor
        mode={mode}
        theme="monokai"
        name={title}
        fontSize={18}
        width={"100%"}
        showPrintMargin={true}
        showGutter={true}
        tabSize={2}
        setOptions={{ useWorker: false }}
      />
    </div>
  );
};
