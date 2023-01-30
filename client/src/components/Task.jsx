import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDeleteTaskMutation, useUpdateTaskMutation } from '../features/api/apiSlice';
import TaskForm from './TaskForm';

dayjs.extend(relativeTime);

const statusTagColors = ['none', 'warning', 'danger', 'success'];

export default function Task({ task }) {
  const [isFormActive, setIsFormActive] = useState(false);
  const [deleteTask, { isLoading }] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  if (isFormActive) return <TaskForm isUpdate task={task} setIsFormActive={setIsFormActive} />;

  const isComplete = task.status.name === 'Complete';

  return (
    <div className="box is-flex is-justify-content-space-between is-align-items-center">

      <div>
        <label htmlFor={task.id} className="checkbox">
          <input
            id={task.id}
            type="checkbox"
            checked={isComplete}
            // 1 = In progress, 2 = Pending, 3 = Complete
            onChange={() => updateTask({ id: task.id, statusId: isComplete ? 2 : 3 })}
          />

          <span className="mx-2" style={{ letterSpacing: '0.7px' }}>{task.name}</span>
        </label>
      </div>

      <div className="is-flex is-align-items-center">
        <span className="is-size-7 has-text-weight-light">
          {`created ${dayjs(task.createdAt).fromNow()}`}
        </span>

        <div
          className={`tag is-medium is-${statusTagColors[task.status.id]} is-light mx-4`}
        >
          {task.status.name}
        </div>

        <button
          type="button"
          onClick={() => setIsFormActive(true)}
          className="button is-small is-warning mx-2"
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>

        <button
          type="button"
          onClick={() => deleteTask(task.id)}
          className={`button is-small is-danger ${isLoading ? 'is-loading' : ''}`}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>

    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    createdAt: PropTypes.string,
  }).isRequired,
};
