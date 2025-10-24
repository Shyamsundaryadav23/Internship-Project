import React,{useState} from "react";
import {DatePicker, Input, Space} from 'antd';
import "react-datepicker/dist/react-datepicker.css";
import "../../css/Home.css";

const Search = () => {
    const { RangePicker } = DatePicker;
    const [keyword, setKeyword] = useState({
        city: "",
        guests: "",
        dateIn: "",
        dateOut: ""
    });
    const [value,setValue] = useState([])
    function searchHandeler(e) {
        e.preventDefault();
        setKeyword({city: "", guests: "", dateIn: "", dateOut: ""})
        setValue([])
    }
    function returnDate(date,dataString){
        setValue([data[0],data[1]]);
        updatekeyword("dateIn",dataString[0]);
        updatekeyword("dateOut",dataString[1]);
    }   
    const  updatekeyword = (field, value) =>{
        setKeyword(prevKeyword => ({
            ...prevKeyword,
            [field]: value
        }));
    }
    return (
        <>
        <div className="searchbar">
            <input
            className="search"
            id = "search_destination"
            placeholder="Search destination"
            type="text"
            value={keyword.city}
            onChange={(e) => updatekeyword("city", e.target.value)}
            />
            <Space direction="vertical" size={12} className="search">
                <RangePicker
                value={value}
                format ="DD-MM-YYYY"
                picker ="date"
                className = "date_picker"
                dsabledDate={(current) => {
                    return current && current.isBefore(Date.now(),'day');
                }}
                onChange={returnDate}
                />
            </Space>
            <Input
            className="search"
            id = "addguest"
            placeholder="Add Guests"
            type="number"
            value={keyword.guests}
            onChange={(e) => updatekeyword("guests", e.target.value)}
            />
            <span className="material-symbols-outlined searchicon" onClick={searchHandeler}>search</span>
        </div>
        </>

    )
}

export default Search;