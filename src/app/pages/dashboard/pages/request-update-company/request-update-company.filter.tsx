import { FilterDefault, FilterSearch } from 'app/partials/table'
import { DataOptionActive } from 'constants/data-filter'
import { DataFilter } from 'models/filter-type'

export const getDataFilter: (prefix: string) => DataFilter[] = (prefix) => [
  {
    FilterComponent: <FilterSearch label="Tìm kiếm" prefix={prefix} />
  },
  {
    FilterComponent: <FilterDefault param="status" label="Trạng thái" options={DataOptionActive} prefix={prefix} />
  }
]
