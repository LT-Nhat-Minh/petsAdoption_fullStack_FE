import React, { memo, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./tool.jsx";

const Editor = (props) => {
  const { data, setData, editorBlock, setOutPutData, isSubmitting } = props;
  const ref = useRef();

  useEffect(() => {
    const editor = new EditorJS({
      holder: `editor`,
      data: data,
      tools: EDITOR_JS_TOOLS,
      onReady: () => {
        console.log("Editor.js is ready to work!");
      },
      onChange: (api, event) => {
        console.log("Now I know that Editor's content changed!", event);
        onSave();
      },
    });

    const onSave = () => {
      editor
        .save()
        .then((outputData) => {
          console.log("Data saved: ", outputData);
          ///typeof outputData;
          setOutPutData(outputData);
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    };

    ref.current = editor;
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
        ref.current = null;
      }
    };
  }, [data, isSubmitting]);

  return <div id="editor" />;
};

export default memo(Editor);
