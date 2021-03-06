export interface CandidateInfo {
  id?: string
  candidateId: string
  fullname: string
  gender: string
  birthday: number
  applyPosition: string
  address: string
  careerGoals?: string
  cvId: string
  education?: {
    name: string
    major?: string
  }[]
  workExperience?: {
    companyName: string
    position?: string
    time?: string
    description?: string
  }[]
  advancedSkill?: {
    name: string
    description?: string
  }[]
  activity?: {
    name: string
    time?: string
  }[]
  certificate?: {
    name: string
  }[]
  award?: {
    name: string
  }[]
  avatar: string
  career: string
  updatedAt: Date
}
