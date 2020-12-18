import React from 'react';

import MealsAndIngredients from './MealsAndIngredients';

const MealsModal = () => (
  <>
    <button
      type="button"
      className="btn btn-success btn-sm meals-button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      View Meals
    </button>

    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Meals
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <MealsAndIngredients />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default MealsModal;
