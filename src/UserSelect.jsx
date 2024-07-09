import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { myAxios } from './service/service';

const UserSelect = ({ onUserSelect, defaultUser }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (username) {
      myAxios.get(`/api/allUser/${username}`)
        .then(response => {
          const userOptions = response.data.map(user => ({
            value: user.userName, // Assuming 'userId' is a unique identifier for the user
            label: user.userName // Assuming 'userName' is the user's name
          }));
          setOptions(userOptions);

          // If there's a default user and options have been fetched
          if (defaultUser) {
            const defaultUserOption = userOptions.find(option => option.value === defaultUser);
            if (defaultUserOption) {
              setSelectedOption(defaultUserOption);
              onUserSelect(defaultUserOption); // Notify the parent component of the default selection
            }
          }
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    }
  }, [username, defaultUser, onUserSelect]);

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
