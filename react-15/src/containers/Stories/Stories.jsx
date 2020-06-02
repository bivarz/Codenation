import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  var showStory = 32

  return (
    < React.Fragment >
      <section className="stories">
        <div className="container" data-testid="users-container">
        </div>
      </section>

      {
        showStory && (
          <Story />
        )
      }
    </React.Fragment >
  );
};

export default Stories;
