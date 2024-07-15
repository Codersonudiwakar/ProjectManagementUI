import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { myAxios } from './service/service';
import { toast } from 'react-toastify';

const EditUserSelect = ({ onUserSelect, defaultUser, id, formData }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (defaultUser) {
      myAxios.get(`/api/allUser/${defaultUser}`)
        .then(response => {
          const userOptions = response.data.map(user => ({
            value: user.userName,
            label: user.userName
          }));
          setOptions(userOptions);
          const defaultOption = userOptions.find(option => option.value === defaultUser);
          setSelectedOption(defaultOption);
          onUserSelect(defaultOption); // Notify parent about the default selection
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    }
  }, [defaultUser]);

  useEffect(() => {
    if (username && username !== defaultUser) {
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

  const handleChange = async (selected) => {
    setSelectedOption(selected);
    onUserSelect(selected);

    const apiUrl = `/editTask/${id}`;
    const updatedFormData = { ...formData, assigneeUser: selected.value };
   console.log(updatedFormData);
    try {
      const response = await myAxios.patch(apiUrl, updatedFormData);
      console.log('Response:', response.data);
      toast.success('Task '+id+' Assigned User Updated successfully', { autoClose: 5000 });
    } catch (error) {
      console.error('Error:', error);
      toast.error(id+' Updated failed', { autoClose: 5000 });
    }
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

export default EditUserSelect;
