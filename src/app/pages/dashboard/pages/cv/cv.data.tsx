import { ColumnsProps, Loader, Pagination } from '@ekidpro/table'
import { showNotify } from 'app/partials/pr-notify'
import { BasicCvInfo, BasicUserInfo, DateTime, IsPublic, Phone, Status, TableLink } from 'app/partials/table-columns'
import axios from 'axios'
import { SERVER_URL } from 'constants/index'
import Cookies from 'js-cookie'
import { get } from 'lodash'
import { CvInfo } from 'models/cv-info'
import { slugURL } from 'utils/helper'
import { Action } from './cv.action'

export interface TableColumn extends CvInfo {
  info?: string
  fullname?: string
  birthday?: string
  gender?: string
  action?: string
  phone?: string
  address?: string
}

export interface TableFilter {}

export const Columns: ColumnsProps[] = [
  { field: 'id', title: 'ID' },
  { field: 'info', title: 'Tên' },
  { field: 'creator', title: 'Người tạo' },
  { field: 'template', title: 'Template CV' },
  { field: 'formOfWork', title: 'Hình thức' },
  { field: 'career', title: 'Ngành nghề' },
  { field: 'birthday', title: 'Ngày sinh' },
  { field: 'phone', title: 'Điện thoại' },
  { field: 'address', title: 'Địa chỉ' },
  { field: 'isPublic', title: 'Công khai' },
  { field: 'status', title: 'Trạng thái' },
  { field: 'createdAt', title: 'Ngày tạo' },
  { field: 'updatedAt', title: 'Ngày cập nhật' },
  { field: 'action', title: 'Hành động' }
]

export const TableLoader: Loader<TableColumn, TableFilter> = {
  fetch: async (input) => {
    const accessToken = Cookies.get('token')
    const response = await axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      },
      url: `${SERVER_URL}/cvs`,
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

    const result: Pagination<CvInfo> = {
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

    const {
      status,
      _id,
      name,
      detail,
      creator,
      template,
      formOfWork,
      career,
      id,
      createdAt,
      updatedAt,
      creatorId,
      isPublic
    } = data

    const { fullname, avatar, birthday, gender, phone, address } = detail

    const renderTemplateCv = () => {
      if (template.value === 'DYNAMIC') {
        return 'Năng động'
      }
      if (template.value === 'CREATION') {
        return 'Sáng tạo'
      }
      return 'Cơ bản'
    }

    switch (field) {
      case 'id':
        return <TableLink to={`/cv-public/${slugURL(fullname)}.${_id}`} title={id} className="font-semibold" />

      case 'info':
        return <BasicCvInfo id={_id} avatar={avatar} fullname={fullname} cvName={name} gender={gender} />

      case 'creator':
        return <BasicUserInfo id={creatorId} name={creator?.fullname || creator?.username} avatar={creator?.avatar} />

      case 'template':
        return <span>{renderTemplateCv()}</span>

      case 'formOfWork':
        return <span>{formOfWork}</span>

      case 'career':
        return <span>{career ? career.label : 'N/A'}</span>

      case 'birthday':
        return birthday ? (
          <DateTime timestamp={birthday} isAge format="DD/MM/YYYY" />
        ) : (
          <span className="text-gray-300">N/A</span>
        )

      case 'phone':
        return phone ? <Phone phone={phone} /> : <span className="text-gray-300">N/A</span>

      case 'address':
        return <span className="whitespace-nowrap">{address?.label}</span>

      case 'status':
        return <Status status={status} />

      case 'createdAt':
        return <DateTime timestamp={createdAt} />

      case 'updatedAt':
        return <DateTime timestamp={updatedAt} />

      case 'isPublic':
        return <IsPublic isPublic={isPublic} />

      case 'action':
        return <Action id={_id} status={status} fullname={fullname} />

      default:
        return <span>{get(data, 'field')}</span>
    }
  }
}
