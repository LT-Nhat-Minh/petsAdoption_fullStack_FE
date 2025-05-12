import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";
import { callUploadImage } from "../../services/api";

export const EDITOR_JS_TOOLS = {
  header: Header,
  list: {
    class: List,
    inlineToolbar: true,
  },
  image: {
    class: ImageTool,
    config: {
      uploader: {
        uploadByFile(file) {
          return new Promise(async (resolve, reject) => {
            console.log("file", file);
            const formData = new FormData();
            formData.append("temp", file);

            return await callUploadImage(formData)
              .then((response) => {
                console.log("response", response);
                const url = `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/temp/${response.data.filename}`;
                console.log("url", url);
                resolve({
                  success: 1,
                  file: {
                    url: `${url}`,
                  },
                });
              })
              .catch((err) => {
                console.error("Upload failed", err.message);
                reject("Upload failed");
              });
          });
        },
      },
    },
  },
};
