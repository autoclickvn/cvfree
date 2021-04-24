import { ColumnsProps, Loader, Pagination } from '@ekidpro/table'
import { showNotify } from 'app/partials/pr-notify'
import { BasicCvPublicInfo, DateTime, Status } from 'app/partials/table-columns'
import axios from 'axios'
import Cookies from 'js-cookie'
import { get } from 'lodash'
import { JobPostingInfo } from 'models/job-posting-info'
import { slugURL } from 'utils/helper'
import { Action } from './employer-manage-job.action'
import { getDefaultLabelDropdown } from '../../../../utils/helper'
import { DataGender } from '../../../../constants/data-common'
import { DataFormOfWork, DataRecruitmentPosition } from '../../../../constants/data-employer'
import { useSetRecoilState } from 'recoil'
import { showApplyCandidateState } from '../../../states/show-modal/apply-candidate-state'

export interface TableColumn extends JobPostingInfo {
  action?: string
}

export interface TableFilter {}

export const Columns: ColumnsProps[] = [
  { enable: true, field: '_id', title: 'Mã việc làm' },
  { enable: true, field: 'name', title: 'Tên việc làm' },
  { enable: true, field: 'candidateApplied', title: 'Danh sách ứng tuyển' },
  { enable: true, field: 'recruitmentPosition', title: 'Vị trí tuyển' },
  { enable: true, field: 'numberRecruited', title: 'Số lượng tuyển' },
  { enable: true, field: 'timeToApply', title: 'Thời hạn ứng tuyển' },
  { enable: true, field: 'formOfWork', title: 'Hình thức' },
  { enable: true, field: 'genderRequirement', title: 'Yêu cầu giới tính' },
  { enable: true, field: 'createdAt', title: 'Ngày tạo' },
  { enable: true, field: 'updatedAt', title: 'Ngày cập nhật' },
  { enable: true, field: 'action', title: 'Hành động' }
]

export const TableLoader: Loader<TableColumn, TableFilter> = {
  url: '',
  fetch: async (input) => {
    const accessToken = Cookies.get('token')
    const response = await axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      },
      url: input.url,
      params: {
        page: input.page,
        size: input.size
      }
    })

    const { success, data, error } = response.data
    const { items, pagination } = data
    const { page, size, totalItems, totalPages } = pagination

    if (!success) {
      showNotify.error(error.message)
      throw Error(error.message)
    }

    const result: Pagination<JobPostingInfo> = {
      data: items,
      pagination: {
        currentPage: page,
        perPage: size,
        totalItems,
        totalPages
      }
    }

    return result
  },
  render: (data, field) => {
    if (!data) {
      return <></>
    }

    const setShowModalCandidate = useSetRecoilState(showApplyCandidateState)

    const {
      name,
      _id,
      createdAt,
      updatedAt,
      candidateApplied,
      career,
      formOfWork,
      genderRequirement,
      numberRecruited,
      recruitmentPosition,
      timeToApply
    } = data

    const onShowListCandidate = (id?: string) => {
      id &&
        setShowModalCandidate({
          jobId: id,
          showModal: true,
          candidateApplied: candidateApplied || []
        })
    }

    switch (field) {
      case '_id':
        return (
          <a href={`/jobs/${slugURL(name)}.${_id}`} target="_blank" className="font-medium" rel="noopener noreferrer">
            {_id ? _id.slice(_id.length - 5, _id.length) : ''}
          </a>
        )

      case 'name':
        return (
          <a
            href={`/jobs/${slugURL(name)}.${_id}`}
            target="_blank"
            className="font-medium whitespace-nowrap"
            rel="noopener noreferrer"
          >
            {name}
          </a>
        )

      case 'candidateApplied':
        return (
          <span>
            {candidateApplied && candidateApplied?.length < 1 ? (
              'Chưa có ứng viên'
            ) : (
              <span
                onClick={() => onShowListCandidate(_id)}
                className="bg-blue-500 px-4 py-2 rounded cursor-pointer font-medium text-white whitespace-nowrap"
              >
                Xem danh sách
              </span>
            )}
          </span>
        )

      case 'career':
        return <span>{getDefaultLabelDropdown(DataGender, career)}</span>

      case 'numberRecruited':
        return <span>{numberRecruited}</span>

      case 'recruitmentPosition':
        return (
          <span className="whitespace-nowrap">
            {getDefaultLabelDropdown(DataRecruitmentPosition, recruitmentPosition)}
          </span>
        )

      case 'timeToApply':
        return <DateTime timestamp={timeToApply} />

      case 'formOfWork':
        return <span>{getDefaultLabelDropdown(DataFormOfWork, formOfWork)}</span>

      case 'genderRequirement':
        return <span>{getDefaultLabelDropdown(DataGender, genderRequirement)}</span>

      case 'createdAt':
        return <DateTime timestamp={createdAt} />

      case 'updatedAt':
        return <DateTime timestamp={updatedAt} />

      case 'action':
        return <Action id={_id} name={name} />

      default:
        return <span>{get(data, 'field')}</span>
    }
  }
}
