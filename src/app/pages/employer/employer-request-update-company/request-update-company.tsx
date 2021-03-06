import { Table } from '@ekidpro/table'
import { WrapperTable } from 'app/partials/table/wrapper-table'
import React, { memo, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ModalAcceptRequest } from './modal-accept-request-update-company'
import { ModalRejectRequest } from './modal-reject-request-update-company.tsx'
import { Columns, TableLoader } from './request-update-company.data'

export const prefix = 'requestUpdateCompanyListEmployer'

export const RequestUpdateCompanyList: React.FC = () => {
  const loader = useRef<typeof TableLoader>(TableLoader)

  useEffect(() => {
    document.title = `CVFREE | Yêu cầu chỉnh sửa công ty`
  }, [])

  const Toolbar: React.FC = () => {
    return (
      <Link
        to="/employer/company-info"
        className="flex items-center rotate-parent bg-red-600 rounded-md px-4 py-3 sm:py-2 hover:bg-red-700 duration-300"
      >
        <i className="fas fa-reply sm:mr-3 mr-2 duration-500 text-white"></i>
        <span className="text-white font-semibold hidden sm:inline">Trở về</span>
        <span className="text-white font-semibold sm:hidden">Trở về</span>
      </Link>
    )
  }

  const MemoToolbar = memo(Toolbar)

  const Wrapper: React.FC = (props) => {
    return (
      <WrapperTable title="Danh sách yêu cầu" toolbar={<MemoToolbar />}>
        {/* <Filter ListFilterComponent={dataFilter} /> */}
        {props.children}
      </WrapperTable>
    )
  }

  return (
    <div className="pt-28 pb-10 w-2/3 mx-auto" style={{ minHeight: 'calc(100vh - 100px)' }}>
      <Table columns={Columns} loader={loader.current} prefix={prefix} Wrapper={memo(Wrapper)} />
      <ModalAcceptRequest />
      <ModalRejectRequest />
    </div>
  )
}
