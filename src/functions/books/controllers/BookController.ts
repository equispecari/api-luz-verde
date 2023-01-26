import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { BookService } from "../services/BookService";

const bookService = new BookService();

export class BookController {
  static async getBooks(event) {
    const books = await bookService.list(event);
    return formatJSONResponse(books);
  }
}

export const getBooks = middyfy(BookController.getBooks);
