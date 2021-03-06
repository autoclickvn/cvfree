import { CategoryComponentProps } from '../cv-form.types'
import { CategoryControl } from './category-control'
import { Education1 } from 'app/partials/metadata/template-1'
import EducationsIcon from 'assets/icons/education.svg'

export const Educations: React.FC<CategoryComponentProps> = (props) => {
  const { onDownCategory, onUpCategory, onRemoveCategory, categoryRef, onBlur, onFocus } = props
  return (
    <div className="div-one-category relative px-2 py-1 duration-300 mb-3 rounded group">
      <div className="flex items-center mb-2">
        <img src={EducationsIcon} alt="skill" className="w-10 h-10 mr-3" />
        <span className="uppercase font-bold">Học vấn</span>
      </div>
      <CategoryControl
        name="education"
        categoryRef={categoryRef}
        onUpCategory={onUpCategory}
        onDownCategory={onDownCategory}
        onRemoveCategory={onRemoveCategory}
      />
      <Education1 ref={categoryRef} onBlur={onBlur} onFocus={onFocus} />
    </div>
  )
}
