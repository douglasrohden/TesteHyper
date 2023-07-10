import { builder } from "../builder";

export const postFile = builder
  .createRequest<{ response: string }, { file: File }>()({
    endpoint: "/api/files",
    method: "POST",
    queued: true,
    retry: 0
  })
  .setDataMapper((data) => {
    try {
      const formData = new FormData();
      formData.append("file", data.file);
      return formData;
    } catch (err) {
      return data;
    }
  });
