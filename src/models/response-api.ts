import { UserInfo } from './user-info'
import { CvInfo } from './cv-info'
import { CandidateInfo } from './candidate-info'
import { EmployerInfo } from './employer-info'
import { JobPostingInfo } from './job-posting-info'
import { CompanyInfo } from './company-info'
import { CandidateManageInfo } from './candidate-manage-info'
import { RequestUpdateCompanyInfo } from './request-update-company-info'
import { DashboardInfo } from './dashboard-info'

export interface ResponseUserDetail {
  success: boolean
  data: {
    userDetail: UserInfo
  }
  code: number
  error?: { message: string }
  message?: string
}

export interface ResponseListCV {
  success: boolean
  data: {
    items: CvInfo[]
  }
  code: number
  error?: { message: string }
  message?: string
}

export interface ResponseListJob {
  success: boolean
  data: {
    items: JobPostingInfo[]
    pagination: {
      page: number
      size: number
      totalItems: number
      totalPages: number
    }
  }
  code: number
  error?: { message: string }
  message?: string
}

export interface ResponseCVDetail {
  success: boolean
  data: {
    cvDetail: CvInfo
  }
  code: number
  error?: { message: string }
  message?: string
}

export interface ResponseUpload {
  success: boolean
  data: {
    url: string
  }
  code: number
  error?: { message: string }
  message?: string
}

export interface ResponseDelete {
  success: boolean
  data: {
    userInfo: UserInfo
  }
  code: number
  error?: { message: string }
  message?: string
}

export interface ResponseListCandidate {
  success: boolean
  data: {
    items: CandidateInfo[]
    pagination: {
      page: number
      size: number
      totalItems: number
      totalPages: number
    }
  }
  code: number
  error?: { message: string }
  message?: string
}

export interface ResponseListCandidateManage {
  success: boolean
  data: {
    items: CandidateManageInfo[]
    page: number
    size: number
    totalItems: number
    totalPages: number
  }
  code: number
  error?: { message: string }
  message?: string
}

export interface ResponseCandidateDetail {
  success: boolean
  data: {
    candidateDetail: CandidateInfo
  }
  code: number
  error?: { message: string }
  message?: string
}

export interface ResponseDataDashboard {
  success: boolean
  data: {
    dataDashboard: DashboardInfo
  }
  code: number
  error?: { message: string }
  message?: string
}

export interface ResponseEmployerDetail {
  success: boolean
  data: {
    employerDetail: EmployerInfo
  }
  code: number
  error?: { message: string }
  message?: string
}

export interface ResponseJobDetail {
  success: boolean
  data: {
    jobDetail: JobPostingInfo
  }
  code: number
  error?: { message: string }
  message?: string
}

export interface ResponseCompanyDetail {
  success: boolean
  data: {
    companyDetail: CompanyInfo | null
  }
  code: number
  error?: { message: string }
  message?: string
}

export interface ResponseRequestUpdateCompanyDetail {
  success: boolean
  data: {
    requestDetail: RequestUpdateCompanyInfo | null
  }
  code: number
  error?: { message: string }
  message?: string
}

export interface ResponseDefault {
  success: boolean
  data: null | undefined
  code: number
  error?: { message: string }
  message?: string
}
