import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { setSearchTerm } from '../redux/searchSlice';

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <input
        className="search_bar"
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          dispatch(setSearchTerm(event.target.value));
        }}></input>
    </div>
  );
};

export default SearchBar;
