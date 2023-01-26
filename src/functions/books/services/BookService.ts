export class BookService {
  async list(_) {
    const books = [];
    return {
      statusCode: 200,
      message: "Response from Service",
      data: books,
    };
  }
}
