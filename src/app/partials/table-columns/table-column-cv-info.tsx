import React from 'react'
import { Link } from 'react-router-dom'
import { AvatarUser } from 'app/partials/image-ratio/user-avatar'

interface CvInfoProps {
  fullname: string
  id?: string | number | null
  gender?: string
  avatar?: string
  cvName?: string
}

export const BasicCvInfo: React.FC<CvInfoProps> = (props) => {
  const { id, fullname, gender, avatar, cvName } = props

  if (!id && id !== 0) {
    return null
  }

  const renderGender = (gender?: string) => {
    if (gender === 'MALE') {
      return <i className="fas fa-mars text-blue-500 ml-3" />
    }
    if (gender === 'FEMALE') {
      return <i className="fas fa-venus text-pink-500 ml-3" />
    }
    return null
  }

  return (
    <div className="flex whitespace-nowrap">
      <div className="w-12 h-12">
        <Link to={`/dashboard/users/${id}`}>
          <AvatarUser src={avatar} gender={gender} />
        </Link>
      </div>
      <div className="ml-3">
        <Link to={`/users/${id}`}>
          {fullname ? (
            <span className={`display-name flex-nowrap block hover:text-blue-800 font-bold'`}>
              {fullname}
              {renderGender(gender)}
            </span>
          ) : (
            <span className="text-gray-300 block">N/A</span>
          )}
        </Link>
        <span className="opacity-50 text-sm">{cvName}</span>
      </div>
    </div>
  )
}
