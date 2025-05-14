import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";
import { callUploadImage } from "../../services/api";
import { useState } from "react";

export const EDITOR_JS_TOOLS = {
  paragraph: {
    inlineToolbar: true,
    config: {
      placeholder: "Nhập nội dung ở đây...",
    },
  },
  header: {
    class: Header,
    InlineToolbar: true,
    config: {
      placeholder: "Nhập tiêu đề ở đây...",
      levels: [2, 3, 4],
      defaultLevel: 2,
    },
  },
  list: {
    class: List,
    inlineToolbar: true,
    config: {
      placeholder: "Nhập danh sách ở đây...",
      defaultStyle: "unordered",
    },
  },
  image: {
    class: ImageTool,
    config: {
      uploader: {
        uploadByFile(file) {
          console.log("file", file);

          return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("temp", file);

            callUploadImage(formData)
              .then((response) => {
                const url = `${process.env.REACT_APP_BACKEND_PUBLIC_URL}/images/temp/${response.data.filename}`;
                resolve({
                  success: 1,
                  file: {
                    url: url,
                    filename: response.data.filename,
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
