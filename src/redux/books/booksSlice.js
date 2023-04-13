import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/RR9IW2ULTnGLqu54ZYUT/books/';

function transformData(data) {
  return data.map(([id, [book]]) => {
    const { title, author, category } = book;
    return {
      id, title, author, category,
    };
  });
}
export const fetchBooksAsync = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(apiUrl);
  const { data } = response;
  return transformData(Object.entries(data));
});

export const addBookAsync = createAsyncThunk('books/addBook', async ({ id, title, author }) => {
  const response = await axios.post(apiUrl, {
    item_id: id,
    title,
    author,
    category: 'religion',
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
});

export const removeBookAsync = createAsyncThunk('books/removeBook', async (bookId) => {
  await axios.delete(`${apiUrl}${bookId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return bookId;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchBooksAsync.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        books: action.payload,
      }))
      .addCase(fetchBooksAsync.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(addBookAsync.fulfilled, (state, action) => ({
        ...state,
        books: [...state.books, action.payload],
      }))
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        const bookIndex = state.books.findIndex((book) => book.id === action.payload);
        if (bookIndex !== -1) {
          const newBooks = [...state.books];
          newBooks.splice(bookIndex, 1);
          return {
            ...state,
            books: newBooks,
          };
        }
        return state;
      });
  },
});

export default booksSlice.reducer;
