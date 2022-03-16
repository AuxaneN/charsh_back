import {Schema, model} from 'mongoose'

//Schema bits
import {infoSchema} from './infoSchema'
import {personnalitySchema} from './personnalitySchema'
import {faceSchema} from './faceSchema'
import {expressionSchema} from './expressionSchema'
// TODO: typescriptise this : Add an interface and assign this interface to the schema

const characterSchema = new Schema({
  //  Since we handle AUs, we want to put the general stuff in a "default"
    default:{
      body:{
        type:String,
        validate:{
            validator:(v:string)=>{
            return /\w+(.webp)/g.test(v)
          }
        },
        required:[true,"A body image must be uploaded "]
      },
      // Name, pronouns, age, height, Species
      infos:infoSchema,
      about:{
        type:String,
      },
      //Qualities, flaws
      personnality:personnalitySchema,
      //Eyes, nose, mouth, faceshape, ears
      face:faceSchema,
      // Happy, neutral, surprised, sad, scared, fucking horny man > 6 image urls
      expressions: expressionSchema,
    }

})

export const Character = model('Character', characterSchema)
