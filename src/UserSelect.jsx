import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { myAxios } from './service/service';

const UserSelect = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [username, setInputValue] = useState('');

  useEffect(() => {
    if (username) {
      myAxios.get(`/api/allUser/${username}`)
        .then(response => {
          const userOptions = response.data.map(user => ({
            value: user.id,
            label: user.name // Assuming each user object has an id and name
          }));
          setOptions(userOptions);
          console.log(userOptions);
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    }
  }, [username]);

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      onInputChange={handleInputChange}
      options={options}
      isSearchable={true}
      placeholder="Select a user..."
    />
  );
};

export default UserSelect;