import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import FilterBar from './components/FilterBar';
import TasksList from './components/TasksList';
import 'bulma/css/bulma.min.css';

export default function App() {
  return (
    <main className="hero is-fullheight">

      <header className="hero-head has-text-centered pt-6">
        <h1 className="title is-size-1">My ToDo</h1>
        <h2 className="subtitle">
          Your tasks in one place
        </h2>
      </header>

      <section className="hero-body is-justify-content-center is-align-items-start">
        <div>
          <FilterBar />
          <TasksList />
        </div>
      </section>

      <footer className="hero-foot has-text-centered pb-6">
        <p>
          Made by Renato Zanella
          <span className="icon-text mx-1">
            <a
              href="https://github.com/renatozr"
              className="icon has-text-dark"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} size="xl" />
            </a>
          </span>
          <span className="icon-text mr-1">
            <a
              href="https://www.linkedin.com/in/renatozr11"
              className="icon has-text-dark"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
          </span>
          with
          <span className="icon-text ml-1">
            <span className="icon">
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </span>
          </span>
        </p>
      </footer>

    </main>
  );
}
