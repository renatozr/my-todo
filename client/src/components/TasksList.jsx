import React from 'react';
import { useSelector } from 'react-redux';
import Loading from './Loading';
import Task from './Task';
import { useGetTasksQuery } from '../features/api/apiSlice';

export default function TasksList() {
  const { data: tasks, isLoading } = useGetTasksQuery();
  const filter = useSelector((state) => state.filter);

  if (isLoading) return <Loading />;

  const filteredTasks = tasks.filter(
    (task) => (
      task.name.toLowerCase().includes(filter.byName.toLowerCase())
      && (filter.byStatus === 'All' ? true : filter.byStatus === task.status.name)
    ),
  );

  return (
    <div>
      {filteredTasks.map((task) => <Task key={task.id} task={task} />)}
    </div>
  );
}
