import mongoose from "mongoose";

interface IValidUntil {
  year: number,
  month: number,
}

const ValidUntilSchema = new mongoose.Schema<IValidUntil>({
  year: {
    type: Number,
    minlength: 4,
    maxlength: 4,
    required: true,
    validate: {
      validator: (y: number) => {
        const rn: Date = new Date();
        const currentYear = rn.getFullYear();
        return y >= currentYear && y <= currentYear + 4
      },
      message: (props) => `${props.value} is an invalid Year`,
    }
  },
  month: {
    type: Number,
    minlength: 1,
    maxlength: 2,
    required: true,
    validate: {
      validator: (m: number) => m >= 1 && m <= 12
    },
    message: (props: { value: any; }) => `${props.value} is an invalid Month`,
  }
})

interface ICard {
  number: number,
  holder: string,
  csv: number,
  validUntil: IValidUntil,
}

const CardSchema = new mongoose.Schema<ICard>({
  holder: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30,
  },
  number: {
    type: Number,
    required: true,
    minlength: 16,
    maxlength: 16,
  },
  validUntil: {
    type: ValidUntilSchema,
    required: true,
  },
  csv: {
    type: Number,
    required: true,
    minlength: 3,
    maxlength: 3,
  },

});

const CardModel = mongoose.model<ICard>("Card", CardSchema);
export default CardModel;