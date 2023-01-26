import { handlerPath } from "@libs/handler-resolver";

const getBooks = {
  handler: `${handlerPath(__dirname)}/controllers/BookController.getBooks`,
  events: [
    {
      http: {
        method: "get",
        path: "books",
      },
    },
  ],
};

export { getBooks };
