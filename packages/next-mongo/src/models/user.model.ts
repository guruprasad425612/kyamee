import mongoose from 'mongoose'
import { PackageDocument } from './package.model'

export interface UserDocument extends mongoose.Document {
  fullName: {
    firstName: string
    lastName: string
  }
  email: string
  password: string
  isConfirmed: boolean
  package: PackageDocument['_id']
  resetLink: string
  avatar: string
  cloudinary_id: string
  role: {
    isCandidate: boolean
    isEmployer: boolean
    isAdmin: boolean
  }
  
    state: string // Add state field
  location: string // Add location field

  phoneNumber: string // Change from String to string
  
  createdAt: Date
  updatedAt: Date

  comparePassword(candidatePassword: string): Promise<boolean>
}

export const userSchema = new mongoose.Schema(
  {
    fullName: {
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isConfirmed: {
      type: Boolean,
    },
    package: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Package',
    },
    resetLink: {
      data: String,
      default: '',
    },
    avatar: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
    role: {
      isCandidate: {
        type: Boolean,
      },
      isEmployer: {
        type: Boolean,
      },
      isAdmin: {
        type: Boolean,
      },
    },
    state: {
      type: String,
    },
    location: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const UserModel = mongoose.model<UserDocument>('User', userSchema)

export default UserModel
