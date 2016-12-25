# graphql-tools Mongoose Server

The server that is updated from the examples on dev.apollodata.com.
In this server we aren't using dev.apollodata.com client anymore, because
this server only for example when using mongoose as connector.

This server are using graphql-tools (https://github.com/apollostack/graphql-tools) to serve a simple schema.



## Installation

Clone the repository and run `npm install`

```
git clone https://github.com/radiegtya/graphql-server-mongoose
cd graphql-server-mongoose
npm install

start your own Mongodb server
change connection on server.js to

const MONGO_URL = "mongodb://your-mongodb-server:port/db";
```

## Starting the server

```
npm start
```

The server will run on port 8080. You can change this by editing `server.js`.
To test graphiql, you can use http://localhost:8080/graphiql.

## Quick Start

This server created to be as similar as possible with METEOR API.

1. Query

Examples:

get all book without parameter
```
  query {
    books{
      title
    }
  }
```

get all books with parameter
```
  #query

  query ($query: QueryInput){
    books (query: $query){
      title
      author {
        name
      }
    }
  }

  #variables
  {
    "query": {
      "selector": {
          "title": {"$regex": "the", "$options": "i"}
      },
      "options": {
        "sort": {"title": -1},
        "limit": 2,
        "skip": 0
      }  
    }
  }

```
you can fill selector and options using standard mongoDB criteria or refer to this page http://docs.meteor.com/api/collections.html#selectors


create book
```
  #query

  mutation ($doc: BookDocInput!){
    createBook (doc: $doc){
      title
    }
  }

  #variables

  {
    "doc": {
      "title": "The Legend of Om telolet Om"
    }
  }
```

update book
```
  #query

  mutation ($query: QueryInput!, $doc: BookDocInput!){
    updateBook(query: $query, doc: $doc){
      title
    }
  }

  #variables

  {
    "query": {
      "selector": {
        "_id": "585fe5883529cc2df224c1c5"
      }
    },
    "doc": {
      "title": "The Legend of Om Telolet Om Chapter 2"
    }
  }
```
