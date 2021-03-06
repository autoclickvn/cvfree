export interface CandidateManageInfo {
  jobId: string
  jobName: string
  _id: string
  userId: string
  applyType: string
  applyValue: string
  candidate: {
    fullname: string
    avatar: string
    gender: string
    email: string
    phone: string
    address?: {
      label: string
      value: {
        city: string
        district: string
      }
    }
  }
  isDone: boolean
  createdAt: Date
  status: string
}
