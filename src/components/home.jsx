import React, { useState } from "react";
import { Axios } from "../api/axiosInstance";
import { toast } from "react-toastify";
import { question2, question3, options2 } from "./Questions";
import CheckboxComponent from "./Checkbox";
import SubmitButton from "./SubmitButton";
import QuizHeader from "./QuizHeader";
import RadioButtonComponent from "./RadioButton";
import DropdownComponent from "./DropDown";
import EmailInput from "./Email";

const Home = () => {
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedradio2, setSelectedradio2] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDropdownChange2 = (e) => {
    setSelectedOption2(e.target.value);
  };

  const handleRadioChange2 = (e) => {
    setSelectedradio2(e.target.value);
  };

  const handleOptionChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      const updatedOptions = selectedOptions.filter(
        (option) => option !== value
      );
      setSelectedOptions(updatedOptions);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Please Enter Your Email");
      return;
    }
    if (
      selectedOption2 === "" ||
      selectedradio2 === "" ||
      selectedOptions.length === 0
    ) {
      toast.error("Please fill out all the fields before submitting.");
      return;
    }
    const formData = {
      selectedradio2,
      selectedOption2,
      selectedOptions,
      email,
    };

    try {
      const response = await Axios.post("/googleForm", formData);
      toast.success(response.data.message);
      setSelectedOption2("");
      setSelectedradio2("");
      setSelectedOptions([]);
      setEmail("");
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">Google Form</h1>

        <QuizHeader
          title="Dignizant"
          description="Dignizant Career Opportunities: Apply to Be a Part of Our Team"
        />
        <form onSubmit={handleSubmit}>
          <EmailInput value={email} onChange={handleEmailChange} />

          <RadioButtonComponent
            questionText={question2.questionText}
            options={question2.options}
            selectedValue={selectedradio2}
            onChange={handleRadioChange2}
          />
          <DropdownComponent
            questionText="Experience"
            options={options2}
            selectedValue={selectedOption2}
            onChange={handleDropdownChange2}
          />
          <CheckboxComponent
            questionText={question3.questionText}
            options={question3.options}
            selectedOptions={selectedOptions}
            handleOptionChange={handleOptionChange}
          />
          <SubmitButton onSubmit={handleSubmit} />
        </form>
      </div>
    </>
  );
};

export default Home;
