interface ActivityInfoProps {
  activity?: {
    name: string
    time?: string
  }[]
}

export const ActivityInfo: React.FC<ActivityInfoProps> = (props) => {
  const { activity } = props

  if (!activity || activity.length === 0) {
    return null
  }

  return (
    <div className="px-2 py-1">
      <div className="mb-2">
        <span className="uppercase font-bold py-1 bg-pink-100 text-base relative block px-4">Hoạt động</span>
      </div>
      {activity &&
        activity.length > 0 &&
        activity.map((item, index) => {
          return (
            <div className="flex w-full pb-2.5 pl-4 pr-2" key={`activity_${index}`}>
              <div className="w-full pb-1.5">
                <span className="block bg-transparent w-full text-gray-500 uppercase font-semibold">- {item.name}</span>
                <span className="pl-8 block bg-transparent w-full text-gray-500 font-medium mt-2">+ {item.time}</span>
              </div>
            </div>
          )
        })}
    </div>
  )
}
