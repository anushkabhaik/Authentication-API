/*app.put("/books/:bookId/", async(request, response)=>{
const{bookId} = request.params;
const bookDetails = request.body;
const {
    title,
    authorId,
    rating,
    ratingCount,
    reviewCount,
    description,
    pages,
    dateOfPublication,
    editionLanguage,
    price,
    onlineStores,
  } = bookDetails;
const addBookQuery = `
    INSERT INTO
      book (title,author_id,rating,rating_count,review_count,description,pages,date_of_publication,edition_language,price,online_stores)
    VALUES
      (
        '${title}',
         ${authorId},
         ${rating},
         ${ratingCount},
         ${reviewCount},
        '${description}',
         ${pages},
        '${dateOfPublication}',
        '${editionLanguage}',
         ${price},
        '${onlineStores}'
      );`;

    const dbResponse = await db.run(addBookQuery);
    Response.send("Book Added Successfully");
}); */



//Update
/*app.put("/books/:bookId/", async(request,response)=>{
    const{bookID}=request.params;
    const bookDetails = request.body;
  const {
    title,
    authorId,
    rating,
    ratingCount,
    reviewCount,
    description,
    pages,
    dateOfPublication,
    editionLanguage,
    price,
    onlineStores,
  } = bookDetails;

const updateBookQuery = `
    UPDATE
      book
    SET
      title='${title}',
      author_id=${authorId},
      rating=${rating},
      rating_count=${ratingCount},
      review_count=${reviewCount},
      description='${description}',
      pages=${pages},
      date_of_publication='${dateOfPublication}',
      edition_language='${editionLanguage}',
      price= ${price},
      online_stores='${onlineStores}'
    WHERE
      book_id = ${bookId};`; 
}); */

//Delete 
app.delete("/books/:bookId/",async(request,response)=> {
    const{bookId} = request.params;
    const deleteBookQuery = `
    DELETE FROM
        book
    WHERE
        book_id = ${bookId};`; 
    await db.run(deleteBookQuery);
    response.send("Book Deleted SUccessfully");
}); 
