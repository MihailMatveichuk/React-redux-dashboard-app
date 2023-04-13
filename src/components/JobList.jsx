import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisiblePOsitions } from 'store/positions/position-selectors';
import { addFilter } from 'store/filters/filter-actions';
import { selectFilters } from '../store/filters/filter-selector';

const JobList = () => {
	const currentFilters = useSelector(selectFilters);
	const positions = useSelector((state) =>
		selectVisiblePOsitions(state, currentFilters)
	);
	const dispatch = useDispatch();

	const handleAddFilter = (filter) => {
		dispatch(addFilter(filter));
	};

	return (
		<div className='job-list'>
			{positions.map((item) => (
				<JobPosition
					key={item.id}
					{...item}
					handleAddFilter={handleAddFilter}
				/>
			))}
		</div>
	);
};

export { JobList };
