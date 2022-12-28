import React from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import { Label } from './Filter.styled';

export function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const findInputId = nanoid();
  return (
    <>
      <Label htmlFor={findInputId}>
        Find contacts by name
        <input
          onChange={e => dispatch(setFilter(e.target.value))}
          value={filter}
          name="filter"
          type="text"
          placeholder="Input name to find"
        />
      </Label>
    </>
  );
}
