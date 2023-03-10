import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  useCreateTaskMutation,
  useGetStatusesQuery,
  useUpdateTaskMutation,
} from '../features/api/apiSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

export default function TaskForm({
  isCreate,
  isUpdate,
  task,
  setIsFormActive,
}) {
  let useTaskMutation;
  if (isCreate) useTaskMutation = useCreateTaskMutation;
  if (isUpdate) useTaskMutation = useUpdateTaskMutation;

  const [name, setName] = useState(task.name);
  const [statusId, setStatusId] = useState(task.status.id);
  const { data: statuses } = useGetStatusesQuery();
  const [mutateTask, { isLoading }] = useTaskMutation();

  async function handleSubmit(e) {
    e.preventDefault();

    await mutateTask({
      id: isUpdate ? task.id : undefined,
      name,
      statusId,
    });
    setIsFormActive(false);
  }

  return (
    <div className="box is-rounded pl-3">

      <form
        onSubmit={handleSubmit}
        className="is-flex is-justify-content-space-between"
      >

        <div className="is-flex">

          <button
            type="button"
            onClick={() => setIsFormActive(false)}
            className="button is-white"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faRotateLeft} />
            </span>
          </button>

          <div className="control mx-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Task name"
              className="input"
            />
          </div>

          <div className="control mx-2">
            <div className="select">
              <select value={statusId} onChange={(e) => setStatusId(e.target.value)}>
                {statuses.map((status) => (
                  <option key={status.id} value={status.id}>{status.name}</option>
                ))}
              </select>
            </div>
          </div>

        </div>

        <button
          type="submit"
          className={`button is-link is-outlined ${isLoading ? 'is-loading' : ''} ml-6`}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faAnglesRight} />
          </span>
        </button>

      </form>

    </div>
  );
}

TaskForm.propTypes = {
  isCreate: PropTypes.bool,
  isUpdate: PropTypes.bool,
  task: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.shape({ id: PropTypes.number }),
  }),
  setIsFormActive: PropTypes.func.isRequired,
};

TaskForm.defaultProps = {
  task: { name: '', status: { id: 1 } },
  isCreate: undefined,
  isUpdate: undefined,
};
