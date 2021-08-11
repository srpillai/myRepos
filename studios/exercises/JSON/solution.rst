Exercises: JSON
===============

#. Which of the following three code snippets is correct JSON syntax? Why are the other two options incorrect?

   a. (a) is not correct JSON syntax because keys in JSON need to be strings.
      .. sourcecode:: js

         {
            type: "dog",
            name: "Bernie",
            age: 3
         }

   b. This is the only correct option (b)

      .. sourcecode:: js

         {
            "type": "dog",
            "name": "Bernie",
            "age": 3
         }

   
   c. (c) is not correct JSON syntax because, unlike JavaScript, JSON only uses double quotation marks ("").

      .. sourcecode:: js

         {
            "type": 'dog',
            "name": 'Bernie',
            "age": 3
         }

2. Which of the following three code snippets is correct JSON? Why are the other two options incorrect?

   a. This is the only correct option (a)

      .. sourcecode:: js

         {
            "animals": [
               {
                     "type": "dog",
                     "name": "Bernie",
                     "age": 3
               },
               {
                     "type": "cat",
                     "name": "Draco",
                     "age": 2
               }
            ]
         }

   b. (b) is not correct JSON syntax because this array of objects does not have an attached key.

      .. sourcecode:: js

         {
            [
               {
                     "type": "dog",
                     "name": "Bernie",
                     "age": 3
               },
               {
                     "type": "cat",
                     "name": "Draco",
                     "age": 2
               } 
            ]
         }

   c. (c) is not correct JSON syntax because the code is not encased in curly braces (``{}``)

      .. sourcecode:: js

         [
            {
                  "type": "dog",
                  "name": "Bernie",
                  "age": 3
            },
            {
                  "type": "cat",
                  "name": "Draco",
                  "age": 2
            } 
         ]