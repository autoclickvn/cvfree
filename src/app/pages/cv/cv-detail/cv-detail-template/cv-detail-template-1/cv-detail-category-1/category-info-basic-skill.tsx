import { ActiveStarIcon, InactiveStarIcon } from 'assets/icons'
import BasicSkillIcon from 'assets/images/icon-basic-skill.png'

interface BasicSkillInfoProps {
  basicSkill?: {
    name: string
    star: number
  }[]
}

export const BasicSkillInfo: React.FC<BasicSkillInfoProps> = (props) => {
  const { basicSkill } = props

  if (!basicSkill || basicSkill.length === 0) {
    return null
  }

  return (
    <div className="px-2 mt-2 pt-3">
      <div className="flex items-center mb-3">
        <img src={BasicSkillIcon} alt="icon" className="w-8 h-8 mr-3" />
        <span className="uppercase font-bold">Kỹ năng cá nhân</span>
      </div>
      {basicSkill &&
        basicSkill.length > 0 &&
        basicSkill.map((item) => {
          return (
            <div className="flex w-full pb-5 pl-4 pr-2" key={`b_skill_${item.name}`}>
              <div className="w-full pb-1.5">
                <span className="block bg-transparent w-full text-gray-600 uppercase font-medium">{item.name}</span>
                <div className="-m-3 ml-5 mt-1 flex items-center">
                  {Array.from(Array(item.star).keys()).map((item) => (
                    <ActiveStarIcon key={`ac_star_${item}`} width={18} height={18} className="mr-2" />
                  ))}
                  {Array.from(Array(5 - item.star).keys()).map((item) => (
                    <InactiveStarIcon key={`inac_star_${item}`} width={18} height={18} className="mr-2" />
                  ))}
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}
