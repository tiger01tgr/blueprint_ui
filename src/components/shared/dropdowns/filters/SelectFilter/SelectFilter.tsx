'use client'
import React, { useState, useEffect } from "react";
import { Select } from '@mantine/core';
import classes from './SelectFilter.module.css'

interface SelectFilterSettings {
  title: string;
  options: string[];
}

const SelectFilter = (props: SelectFilterSettings) => {
  const [filterValue, setFilterValue] = useState("")

  useEffect(() => {
    console.log(filterValue)
  }, [filterValue])

  const handleChange = (value: string) => {
    setFilterValue(value)
  }

  return (
    <Select
      classNames={{
        wrapper: classes.wrapper,
        dropdown: classes.dropdown,
        input: classes.input
      }}
      label="Industry"
      placeholder="Industry"
      data={props.options}
      onChange={handleChange}
      allowDeselect={true}
      variant="standard"
    />
  )
}



export default SelectFilter