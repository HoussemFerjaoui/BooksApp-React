import actions from './actionType'



export const addbooktofav = (book) =>  {
   return  {
       type: actions.bookAdded,
        payload: {
            bookTitle: book,
    }}
  }


  export const removebookfromfav = (book) =>  {
    return  {
        type: actions.bookRemoved,
         payload: {
             bookTitle: book,
     }}
   }


   export const logIn = () => {
     return {
       type: actions.log,
     }
   }