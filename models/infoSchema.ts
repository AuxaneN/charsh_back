import {Schema} from 'mongoose'

export const infoSchema = new Schema({
      name:{
          type:String,
          required:[true, 'Your character needs a name']
      },
      height:{
          type:Number,
          required:[true, 'You can change this later, I just need this to initialize things in the background']
      },
      age:{
          type:Number,
          min: [0, "Can't go lower than that"]
      },
      pronouns:{
          type:String,
          validate:{
              validator: function(string:string) {
                  return /[a-zA-Z]+(\/|| )[a-zA-Z]+/g.test(string)
              },
              message: (_props:unknown) => 'Please use only letters.'
          }
      }

})
