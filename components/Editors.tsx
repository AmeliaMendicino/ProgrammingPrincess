import styles from "./Editors.module.css";

type EditorProps = {
  title: string,
}

export const Editor = ({ title }: EditorProps) => {
  return  (
    <div className={styles.editorContainer}>
      <div className={styles.editorTitle}>
        {title}
      </div>
    </div>
  );
};
