import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { myAxios } from './service/service';

const UserSelect = ({ onUserSelect }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (username) {
      myAxios.get(`/api/allUser/${username}`)
        .then(response => {
          const userOptions = response.data.map(user => ({
            value: user.userName,
            label: user.userName
          }));
          setOptions(userOptions);
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    }
  }, [username]);

  const handleInputChange = (newValue) => {
    setUsername(newValue);
  };

  const handleChange = (selected) => {
    setSelectedOption(selected);
    onUserSelect(selected);
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
