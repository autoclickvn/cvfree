import { useRefresh } from '@ekidpro/table'
import { PopupConfirm, PopupConfirmRef } from 'app/partials/popup-confirm'
import { showNotify } from 'app/partials/pr-notify'
import { showDeactiveRequestUpdateCompanyState } from 'app/states/show-popup/deactive-request-update-company-state'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { SERVER_URL } from 'constants/index'
import Cookies from 'js-cookie'
import { get } from 'lodash'
import { ResponseDelete } from 'models/response-api'
import React, { useCallback, useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { prefix } from './request-update-company'

export const PopupDeactive: React.FC = () => {
  const refreshTable = useRefresh(prefix)
  const popupConfirmRef = useRef<PopupConfirmRef>(null)
  const [recoilState, setRecoilState] = useRecoilState(showDeactiveRequestUpdateCompanyState)
  const { id, showPopup } = recoilState

  const onHidePopup = useCallback(() => {
    setRecoilState({ id: undefined, showPopup: false })
  }, [setRecoilState])

  const onDeactiveRequest = () => {
    const accessToken = Cookies.get('token')
    const url = `${SERVER_URL}/request-update-company/${id}`
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      headers,
      url,
      data: undefined,
      timeout: 20000
    }

    axios(config)
      .then((response: AxiosResponse<ResponseDelete>) => {
        const { success, message, error, data } = response.data

        if (!success) {
          throw Error(error?.message)
        }
        setRecoilState({ id: undefined, showPopup: false })
        showNotify.success(message)
        refreshTable()
      })
      .catch((e) => {
        setRecoilState({ id: undefined, showPopup: false })
        showNotify.error(e ? get(e, 'response.data.error.message') : 'Lỗi hệ thống!')
      })
  }

  useEffect(() => {
    showPopup ? popupConfirmRef.current?.show() : popupConfirmRef.current?.hide()
  }, [showPopup])

  return (
    <PopupConfirm
      ref={popupConfirmRef}
      title="XÁC NHẬN"
      size="nm"
      type="danger"
      onHide={onHidePopup}
      onChange={onDeactiveRequest}
      okTitle="Xác nhận"
      cancelTitle="Hủy"
    >
      <div className="flex items-center justify-center">
        <span className="py-4 text-xl font-medium">Ngừng kích hoạt yêu cầu này ?</span>
      </div>
    </PopupConfirm>
  )
}
