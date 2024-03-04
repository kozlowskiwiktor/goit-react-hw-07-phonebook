import propTypes from 'prop-types';
import css from 'container.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    e.preventDefault();

    const filterValue = e.target.value;
    dispatch(setFilter(filterValue.toLowerCase()));
  };

  return (
    <form className={css.container}>
      <label>Find contact</label>
      <input
        type="text"
        autoComplete="off"
        placeholder="Search contact"
        onChange={changeFilter}
      ></input>
    </form>
  );
};

export default Filter;

Filter.propTypes = {
  changeFilter: propTypes.func,
};
