import { CategoryComponentProps } from '../cv-form.types'
import { CategoryControl } from './category-control'
import { Activity1 } from 'app/partials/metadata/template-1'
import ActivityBlackIcon from 'assets/icons/activity.svg'

export const Activities: React.FC<CategoryComponentProps> = (props) => {
  const { onDownCategory, onUpCategory, onRemoveCategory, categoryRef, onFocus, onBlur } = props
  return (
    <div className="div-one-category relative px-2 py-1 mb-3 duration-300 rounded group">
      <div className="flex items-center mb-2">
        <img src={ActivityBlackIcon} alt="icon" className="w-10 h-10 mr-3" />
        <span className="uppercase font-bold">Hoạt động</span>
      </div>
      <CategoryControl
        name="activity"
        categoryRef={categoryRef}
        onUpCategory={onUpCategory}
        onDownCategory={onDownCategory}
        onRemoveCategory={onRemoveCategory}
      />
      <Activity1 ref={categoryRef} onFocus={onFocus} onBlur={onBlur} />
    </div>
  )
}
