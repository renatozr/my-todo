import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import Loading from './Loading';
import TaskForm from './TaskForm';
import { useGetStatusesQuery } from '../features/api/apiSlice';
import { filterByName, filterByStatus } from '../features/filter/filterSlice';

export default function FilterBar() {
  const [isFormActive, setIsFormActive] = useState(false);
  const { data: statuses, isLoading } = useGetStatusesQuery();
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  if (isLoading) return <Loading />;
  if (isFormActive) return <TaskForm isCreate setIsFormActive={setIsFormActive} />;

  return (
    <div className="box is-flex is-justify-content-space-between">

      <div className="is-flex">
        <div className="control has-icons-left mx-2">
          <input
            type="text"
            value={filter.byName}
            onChange={(e) => dispatch(filterByName(e.target.value))}
            placeholder="Filter"
            className="input"
          />
          <span className="icon is-left">
            <FontAwesomeIcon icon={faFilter} />
          </span>
        </div>

        <div className="control mx-2">
          <div className="select">
            <select
              value={filter.byStatus}
              onChange={(e) => dispatch(filterByStatus(e.target.value))}
            >
              <option value="All">All</option>
              {statuses.map((status) => (
                <option key={status.id} value={status.name}>{status.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsFormActive(true)}
        className="button is-success ml-6 mr-2"
      >
        <span className="icon">
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </button>

    </div>
  );
}
