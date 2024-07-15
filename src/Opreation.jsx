import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { myAxios } from './service/service';
import { toast } from 'react-toastify';

const Stages = [
  { value: 'create', label: 'CREATE' },
  { value: 'inProgress', label: 'IN PROGRESS' },
  { value: 'readyForDemo', label: 'READY FOR DEMO' },
  { value: 'inDev', label: 'IN DEVELOPMENT' },
  { value: 'inQa', label: 'IN QA' },
  { value: 'readyForQA', label: 'READY FOR QA' },
  { value: 'failedInQA', label: 'FAILED IN QA' },
  { value: 'closed', label: 'CLOSED' },
  { value: 'reOpen', label: 'RE-OPEN' },
];

const Opreation = ({ onStatusSelect, defaultStatus, formData, id }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const initialStatus = Stages.find(stage => stage.value === defaultStatus);
    setSelectedOption(initialStatus);
  }, [defaultStatus]);

  const handleChange = async (selected) => {
    setSelectedOption(selected);
    onStatusSelect(selected);

    const apiUrl = `/editTask/${id}`;
    const updatedFormData = { ...formData, currentStatus: selected.value };
    console.log("Updated form data:");
    console.log(updatedFormData);

    try {
      const response = await myAxios.patch(apiUrl, updatedFormData);
      console.log('Response:', response.data);
      toast.success(`${id} Status Changed successfully`, { autoClose: 5000 });
    } catch (error) {
      console.error('Error:', error);
      toast.error(`${id} Update failed`, { autoClose: 5000 });
    }
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={Stages}
      isSearchable={true}
      placeholder="Select a status..."
    />
  );
};

export default Opreation;
