import { lazy, LazyExoticComponent } from 'react'

const SignIn = lazy(() => import('app/pages/sign-in'))
const SignUp = lazy(() => import('app/pages/sign-up'))
const ForgotPassword = lazy(() => import('app/pages/forgot-password'))

const ErrorComponent = lazy(() => import('app/pages/error'))
const Home = lazy(() => import('app/pages/home'))

const SampleCv = lazy(() => import('app/pages/sample-cv'))
const JobsNew = lazy(() => import('app/pages/job-new'))
const Employer = lazy(() => import('app/pages/employer'))
const EmployerSignUp = lazy(() => import('app/pages/employer-sign-up'))

const CvForm = lazy(() => import('app/pages/cv-form'))
const CvDetail = lazy(() => import('app/pages/cv-detail'))
const CvManage = lazy(() => import('app/pages/cv-manage'))

interface RouteType {
  path: string
  component: LazyExoticComponent<React.FC>
  exact: boolean
}

export const MAIN_ROUTES: RouteType[] = [
  // Home
  {
    path: '/',
    component: Home,
    exact: true
  },

  // error
  {
    path: '/error',
    component: ErrorComponent,
    exact: true
  },

  // auth
  {
    path: '/sign-in',
    component: SignIn,
    exact: true
  },
  {
    path: '/sign-up',
    component: SignUp,
    exact: true
  },
  {
    path: '/forgot-password',
    component: ForgotPassword,
    exact: true
  },

  // CV

  {
    path: '/create-cv',
    component: CvForm,
    exact: true
  },
  {
    path: '/sample-cv',
    component: SampleCv,
    exact: true
  },
  {
    path: '/cv-public/:name.:id',
    component: CvDetail,
    exact: true
  },
  {
    path: '/manage-cv',
    component: CvManage,
    exact: true
  },

  // Employer
  {
    path: '/employer/sign-up',
    component: EmployerSignUp,
    exact: true
  },
  {
    path: '/employer',
    component: Employer,
    exact: true
  },

  // Menu
  {
    path: '/jobs-new',
    component: JobsNew,
    exact: true
  }
]

export const DASHBOARD_ROUTES: RouteType[] = []