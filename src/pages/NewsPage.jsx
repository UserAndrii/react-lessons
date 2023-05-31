import React, { useState } from 'react';
import Search from '../components/Search/Search';
import ContentInfo from '../components/ContentInfo/ContentInfo';

const NewsPage = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = searchText => setSearchText(searchText);

  return (
    <>
      <Search handleSearch={handleSearch} />
      <ContentInfo searchText={searchText} />
    </>
  );
};

export default NewsPage;
