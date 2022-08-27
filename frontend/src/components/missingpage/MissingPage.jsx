import { React} from 'react';
import SearchBar from './searchbar/SearchBar';
import CardComponent from "./card/CardComponent";
import "./MissingPage.scss";

const MissingPage = () => {
  return (
    <div>
      <SearchBar />
      <CardComponent />
    </div >
  )
};

export default MissingPage;
