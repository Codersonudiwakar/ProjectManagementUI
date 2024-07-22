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
  { value: 'reject', label: 'REJECT' },
  
];

const Opreation = ({ onStatusSelect, defaultStatus, formData, id }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    const initialStatus = Stages.find(stage => stage.value === defaultStatus);
    setSelectedOption(initialStatus);

    let options = [];
    switch (defaultStatus) {
      case 'create':
        options = Stages;
        break;
      case 'inProgress':
        options = Stages.filter(stage => ['closed', 'inDev','inQa', 'readyForQA','failedInQA'].includes(stage.value));
        break;
        case 'readyForDemo':
        options = Stages.filter(stage => ['closed', 'reject'].includes(stage.value));
        break;
        case 'inDev':
        options = Stages.filter(stage => ['inProgress', 'readyForQA'].includes(stage.value));
        break;
        case 'inQa':
        options = Stages.filter(stage => ['inProgress', 'closed', 'failedInQA','readyForDemo'].includes(stage.value));
        break;
        case 'readyForQA':
        options = Stages.filter(stage => ['inProgress','closed','inQa'].includes(stage.value));
        break;
        case 'failedInQA':
        options = Stages.filter(stage => ['inProgress', 'reject', 'inDev'].includes(stage.value));
        break;
        case 'reOpen':
        options = Stages.filter(stage => ['inProgress', 'closed', 'reject'].includes(stage.value));
        break;
      case 'closed':
        options = Stages.filter(stage => stage.value === 'reOpen');
        break;
      default:
        options = Stages;
    }
    setFilteredOptions(options);
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
      options={filteredOptions}
      isSearchable={true}
      placeholder="Select a status..."
    />
  );
};

export default Opreation;
